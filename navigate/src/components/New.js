import {NavLink} from 'react-router-dom'

function New() {
  return (
    <div>

            <h1>WELCOME!</h1>
            <div>
            <NavLink to = '/next'>
                HOME
            </NavLink>
            </div>
            <div>
            <NavLink to = '/counter'>
                COUNTER
            </NavLink>
            </div>
            
    </div>
  )
}

export default New