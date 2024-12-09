import { useState } from 'react';
import Queen from './icons/queen';
import QueenMax from './icons/QueenMax';
import './App.css';

function App() {
  const [count, setCount] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
  ]);

  const countUp = (indexRow, indexCol) => {
    const arrayCount = [...count];

    if (arrayCount[indexRow][indexCol] == 0) {
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (arrayCount[i][j] == 2) {
            arrayCount[indexRow][indexCol]++;
            arrayCount[i][j] = 0;
            console.log(arrayCount[i][j]);
            setCount(arrayCount);
          }
        }
      }
    } else if (arrayCount[indexRow][indexCol] == 1) {
      arrayCount[indexRow][indexCol]++;
      setCount(arrayCount);
    } else if (arrayCount[indexRow][indexCol] == 2) {
      arrayCount[indexRow][indexCol]--;
      setCount(arrayCount);
    }
  };

  return (
    <>
      <h1>Aprende ajedrez sencillo</h1>
      <div className='card'>
        {count.map((valueRow, indexRow) => (
          <div>
            {valueRow.map((valueCol, indexCol) => (
              <button
                key={indexRow + indexCol}
                onClick={() => countUp(indexRow, indexCol)}
                className={
                  indexRow % 2 != 0
                    ? indexCol % 2 == 0
                      ? 'space-dimension'
                      : 'white-button space-dimension'
                    : indexCol % 2 == 0
                    ? 'white-button space-dimension'
                    : 'space-dimension'
                }
              >
                {/* {valueCol == 1 && <Queen />}
              {valueCol == 2 && <QueenMax style={{fontSize: 20}}/>} */}
                {/* {valueCol == 1 && 1}
              {valueCol == 2 && 2} */}
                {valueCol == 1 ? (
                  <Queen />
                ) : valueCol == 2 ? (
                  <QueenMax style={{ fontSize: 20 }} />
                ) : (
                  ''
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
