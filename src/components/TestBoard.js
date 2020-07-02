import React, {useState} from 'react';
import './index.css';

export const TestBoard = () => {

const [inputSize, setInputSize] = useState(null);

const [board, setBoard] = useState([...Array(5).fill(' ')]);
const [square, setSquare] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();
  setBoard(() => [ ...Array(Number(inputSize)).fill(' ')])
}

const handleClick = (rowIndex, colIndex) => {
  console.log(rowIndex, colIndex)
  setSquare(() => 'X')
}

 const drawBoard = () => {
   
    return (
            <div className="mainContainer">
              {board.map((row, indexRow) =>(
                <>
                {board[indexRow]=[]}
                <div className="row" key={indexRow}>
                  {board.map((col, indexCol) =>(
                  board[indexRow][indexCol] = square,
                    <>
                    {console.log(square)}
                    <button
                      onClick={() => handleClick(square)} 
                      className="testRow"
                      key={indexCol}
                    >
                      {square}
                    </button>
                    </>
                  ))}
                </div>
                </>
              ))}
            </div>
    );
 }


  return (
    <div>
      <form onSubmit={handleSubmit} style={{textAlign:'center'}}>
        <label>
          Board Size:
          <input type="text" value={inputSize} onChange={(event)=> setInputSize(event.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {drawBoard()}
    </div>

  );
};