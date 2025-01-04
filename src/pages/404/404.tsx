import { Header } from '@/components/header/header';

export default function PageNotFound() {
  return (
    <div className='page page--gray'>
      <Header />
      <main className='page__main'>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </main>
    </div>
  );
}
