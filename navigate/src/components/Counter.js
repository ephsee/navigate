import {useState} from 'react'

import Individual from "./Individual"
import Total from "./Total"
import Back from "./Back"

function Counter() {

    const [total, setTotal] = useState(0)
    const [count, setCount] = useState(0)

    const totalCount = (count) => {
        setTotal(count + total)
        setCount(0)
    }

  return (

    <div>

        <Back/>

        <h1>
        COUNTER!
        </h1>

        <Total total={total} />

        <Individual setTotal={totalCount} count={count} setCount={setCount}/>

    </div>
  
    )
}

export default Counter