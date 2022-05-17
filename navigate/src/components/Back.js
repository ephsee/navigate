import {useNavigate, Link} from 'react-router-dom'

function Back() {

    let navigate = useNavigate()
    function goBack(){
        navigate("/")
    }

  return (
    <div>
      <div>
        <span onClick={goBack}>BACK</span>
      </div>
      <div>
        <Link to="/">LINK BACK</Link>
      </div>
    </div>
  )
}

export default Back
