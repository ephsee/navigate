import {useNavigate, Link} from 'react-router-dom'

function Back() {

    let navigate = useNavigate()
    function goBack(){
        navigate("/")
    }

  return (
    <div onClick={goBack}>

        BACK

    </div>
  )
}

export default Back
