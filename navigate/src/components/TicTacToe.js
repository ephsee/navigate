import {useState} from 'react'

const TicTacToe = () => {

    // const [start, setStart] = useState('')

    const [activePlayer, setActivePlayer] = useState('')

    const [player1, setPlayer1] = useState('X')
    const [player2, setPlayer2] = useState('O')

    const [block1, setBlock1] = useState('')
    const [block2, setBlock2] = useState('')
    const [block3, setBlock3] = useState('')
    const [block4, setBlock4] = useState('')
    const [block5, setBlock5] = useState('')
    const [block6, setBlock6] = useState('')
    const [block7, setBlock7] = useState('')
    const [block8, setBlock8] = useState('')
    const [block9, setBlock9] = useState('')

    function gameOn(){
        setActivePlayer(player1)
    }

    console.log(activePlayer)

    // function selectBlock() {
    //     console.log("this is where the x and o go")
    // }

  return (
    <div> <div className="STbutton"> TicTacToe </div>
        <button className="STbutton" onClick={gameOn}>Click to Start</button>
        

        <div className="TTT STbutton">
            <div className="T" onClick={setBlock1(activePlayer)}></div>
            <div className="T" onClick={setBlock2}></div>
            <div className="T" onClick={setBlock3}></div>
            <div className="T" onClick={setBlock4}></div>
            <div className="T" onClick={setBlock5}></div>
            <div className="T" onClick={setBlock6}></div>
            <div className="T" onClick={setBlock7}></div>
            <div className="T" onClick={setBlock8}></div>
            <div className="T" onClick={setBlock9}></div>

        </div>
        
        
        
    </div>
  )
}

export default TicTacToe