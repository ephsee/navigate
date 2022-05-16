import './App.css'
import {Route, Routes} from 'react-router-dom'

import Name from './components/Name'
import New from './components/New'
import Counter from './components/Counter'

function App() {
  return (
    <div>

        <Routes>
          <Route path='/' element={<New />}/>
          <Route path='/next' element={<Name />}/>
          <Route path='/counter' element={<Counter />}/>
        </Routes>
      
    </div>
  )
}

export default App
