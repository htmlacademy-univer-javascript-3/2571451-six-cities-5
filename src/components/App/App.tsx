import MainPage from '@/pages/Main/MainPage';
import { FC } from 'react';

type AppProps = {
  places: number;
};

const App: FC<AppProps> = ({ places }) => <MainPage places={places} />;

export default App;
