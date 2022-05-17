import {useState, useEffect} from 'react'

function About() {

  const [data, setData] = useState({})
  const [allData, setAllData] = useState([])

  function fetchNext1(){
    fetch('https://swapi.dev/api/people/1')
    .then(r=>r.json())
    .then(setData)
  }

  function fetchNext2(){
    fetch('https://swapi.dev/api/people/2')
    .then(r=>r.json())
    .then(setData)
  }

  function fetchNext3(){
    fetch('https://swapi.dev/api/people/3')
    .then(r=>r.json())
    .then(setData)
  }

  useEffect(()=>{
    fetch('https://swapi.dev/api/people')
    .then(r=>r.json())
    .then(setAllData)
  }, [])

  console.log('data', data)
  console.log('alldata', allData.results)

  return (
    <div>
      
      <h1>
        NAVIGATOR INITIALIZER
      </h1>

      <button onClick={fetchNext1}>Hero1</button>
      <button onClick={fetchNext2}>Hero2</button>
      <button onClick={fetchNext3}>Hero3</button>

      <h1>{data.name}</h1>

      </div>
  )
}

export default About