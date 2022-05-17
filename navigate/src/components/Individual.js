function Individual({count, setCount, setTotal}) {

  function upCount(){
      setCount(count + 1)
  }

  function downCount(){
      setCount(count - 1)
  }

  return (
    <div>
        <p>Individual Counter: {count}</p>
        <button onClick={upCount}>Add</button>
        <button onClick={downCount}>Subtract</button>
        <button onClick={() => setTotal(count)}>Add to Total</button>  
    </div>
  )
}

export default Individual