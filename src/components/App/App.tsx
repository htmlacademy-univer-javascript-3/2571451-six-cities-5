import MainPage from '@/pages/Main/MainPage';

type AppProps = {
  placesCount: number;
};

export default function App(props: AppProps) {
  return <MainPage placesCount={props.placesCount} />;
}
