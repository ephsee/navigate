import './App.css'
import {Route, Routes} from 'react-router-dom'

import Name from './components/Name'
import New from './components/New'
import Counter from './components/Counter'
import TicTacToe from './components/TicTacToe'
import Searcher from './components/Searcher'

function App() {
  return (
    <div>

        <Routes>
          <Route path='/' element={<New />}/>
          <Route path='/next' element={<Name />}/>
          <Route path='/counter' element={<Counter />}/>
          <Route path='/tictactoe' element={<TicTacToe />}/>
          <Route path='/searcher' element={<Searcher />}/>
        </Routes>
      
    </div>
  )
}

export default App
