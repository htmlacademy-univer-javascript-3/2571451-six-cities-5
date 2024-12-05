import { AppRoute } from '@/const';
import { login } from '@/store/api-actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { AuthData } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { z } from 'zod';

export default function Login(): JSX.Element {
  const validationSchema = z.object({
    email: z.string().min(1).email(),
    password: z.string().min(1),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthData>({ resolver: zodResolver(validationSchema) });

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const redirectTo = useAppSelector((state) => state.loginRedirectsTo);

  const loginError = useAppSelector((state) => state.loginError);

  if (user) {
    return <Navigate to={redirectTo ?? AppRoute.Main}></Navigate>;
  }

  function submit(data: AuthData) {
    dispatch(login(data));
  }

  return (
    <div className='page page--gray page--login'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Link className='header__logo-link' to={AppRoute.Main}>
                <img
                  className='header__logo'
                  src='img/logo.svg'
                  alt='6 cities logo'
                  width='81'
                  height='41'
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form
              className='login__form form'
              onSubmit={(event) => void handleSubmit(submit)(event)}
            >
              {loginError && (
                <div>
                  <span>Login error: check your email and password</span>
                </div>
              )}
              <div className='login__input-wrapper form__input-wrapper'>
                <div>
                  <label className='visually-hidden'>E-mail</label>
                  {errors?.email && <span>{errors.email.message}</span>}
                </div>
                <input
                  className='login__input form__input'
                  type='email'
                  placeholder='Email'
                  {...register('email')}
                  required
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <div>
                  <label className='visually-hidden'>Password</label>
                  {errors?.password && <span>{errors.password.message}</span>}
                </div>
                <input
                  className='login__input form__input'
                  type='password'
                  placeholder='Password'
                  {...register('password')}
                  required
                />
              </div>
              <button
                className='login__submit form__submit button'
                type='submit'
              >
                Sign in
              </button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <a className='locations__item-link' href='#'>
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
