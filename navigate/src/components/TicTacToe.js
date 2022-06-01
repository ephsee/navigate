import {useState} from 'react'
import Back from "./Back"

const TicTacToe = () => {

    // const [start, setStart] = useState('')
    const [player1, setPlayer1] = useState('X')
    const [player2, setPlayer2] = useState('O')

    const [activePlayer, setActivePlayer] = useState('')


    const [block1, setBlock1] = useState('')
    const [block2, setBlock2] = useState('')
    const [block3, setBlock3] = useState('')
    const [block4, setBlock4] = useState('')
    const [block5, setBlock5] = useState('')
    const [block6, setBlock6] = useState('')
    const [block7, setBlock7] = useState('')
    const [block8, setBlock8] = useState('')
    const [block9, setBlock9] = useState('')

    function gameX(){
        setActivePlayer(player1)
    }
    function gameO(){
        setActivePlayer(player2)
    }
    
    function selectBlock1(){
        setBlock1(activePlayer)
    }
    function selectBlock2(){
        setBlock2(activePlayer)
    }
    function selectBlock3(){
        setBlock3(activePlayer)
    }
    function selectBlock4(){
        setBlock4(activePlayer)
    }
    function selectBlock5(){
        setBlock5(activePlayer)
    }
    function selectBlock6(){
        setBlock6(activePlayer)
    }
    function selectBlock7(){
        setBlock7(activePlayer)
    }
    function selectBlock8(){
        setBlock8(activePlayer)
    }
    function selectBlock9(){
        setBlock9(activePlayer)
    }

    function gameReset(){
        setActivePlayer('')
        setBlock1('')
        setBlock2('')
        setBlock3('')
        setBlock4('')
        setBlock5('')
        setBlock6('')
        setBlock7('')
        setBlock8('')
        setBlock9('')
    }

    console.log(activePlayer)

    // function selectBlock() {
    //     console.log("this is where the x and o go")
    // }

  return (
    <div>
        <Back/> 
        <div className="STbutton"> TicTacToe </div>
        {/* <button className="STbutton" onClick={gameX}>Click to Start</button> */}
        <button className="STbutton" onClick={gameX}>Exes</button>
        <button className="STbutton" onClick={gameO}>Ohs</button>

        {activePlayer === '' ? null : <span>{activePlayer}'s turn</span>}
        

        <div className="TTT STbutton">
            <div className="T" onClick={selectBlock1}>{block1}</div>
            <div className="T" onClick={selectBlock2}>{block2}</div>
            <div className="T" onClick={selectBlock3}>{block3}</div>
            <div className="T" onClick={selectBlock4}>{block4}</div>
            <div className="T" onClick={selectBlock5}>{block5}</div>
            <div className="T" onClick={selectBlock6}>{block6}</div>
            <div className="T" onClick={selectBlock7}>{block7}</div>
            <div className="T" onClick={selectBlock8}>{block8}</div>
            <div className="T" onClick={selectBlock9}>{block9}</div>
        </div>

        <button className='STbutton' onClick={gameReset}>RESET</button>
        
        
        
    </div>
  )
}

export default TicTacToe