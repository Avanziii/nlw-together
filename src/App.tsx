import { BrowserRouter, Route } from 'react-router-dom'
import { createContext } from 'react'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import './styles/global.scss'

export const TestContext = createContext('');

function App() {
  return (
    <BrowserRouter>
      <TestContext.Provider value={'Teste'}>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/new' exact component={NewRoom} />
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
