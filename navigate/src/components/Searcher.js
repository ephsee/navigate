// import {View, Text, TextInput} from 'react-native';
import {useState, useEffect} from 'react'
import Back from './Back'

const Searcher = () => {

    const [apiData, setApiData] = useState("")

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
        // get the data from the api
        const data = await fetch('https://mavely.top/')
        // .then(r=>r.json())
        // .then(setApiData)
        // convert data to json
        const json = await data.json();
        return json;
        }
    },[]);

    console.log(apiData)

  return (
    <div>
        <Back/>

        <h1>SEARCHER</h1>
        



        {/* <View>
            Hello from Native
        </View> */}
    </div>
  )
}

export default Searcher