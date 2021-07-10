import { MovieContextProvider } from './contexts/MovieContext';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  return (
    <MovieContextProvider>
      <div id="master">
        <SideBar />
        <Content />
      </div>
    </MovieContextProvider>
  )
}