import {useState} from 'react'

import Individual from "./Individual"
import Total from "./Total"


function Counter() {

    const [total, setTotal] = useState(0)

    const [count, setCount] = useState(0)

    function upCount(){
        setCount(count + 1)
    }

    function downCount(){
        setCount(count - 1)
    }

    const totalCount = (count) => {
        setTotal(count + total)
        setCount(0)
    }

  return (


    <div>

        <h1>
        COUNTER!
        </h1>

        <Total total={total} />

        <Individual count={count} setTotal={totalCount} upCount={upCount} downCount={downCount} />


    </div>
  
  
    )
}

export default Counter