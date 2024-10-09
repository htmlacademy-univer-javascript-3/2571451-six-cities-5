import MainPage from '@/pages/Main/MainPage';
import { FC } from 'react';

type AppProps = {
  nPlaces: number;
};

const App: FC<AppProps> = ({ nPlaces: places }) => (
  <MainPage nPlaces={places} />
);

export default App;
