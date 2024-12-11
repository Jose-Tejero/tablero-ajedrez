import { useState } from "react";
import Queen from "./icons/Queen";
import "./App.css";

function App() {
  const [count, setCount] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
  ]);

  const countUp = (indexRow, indexCol) => {
    const arrayCount = count.map((row) => [...row]);

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

  const getPiece = (value) => {
    if (!value) return "";
    if (value === 2) return <Queen size="60" />;

    return <Queen />;
  };

  return (
    <>
      <h1>Aprende ajedrez sencillo</h1>
      <div className="card">
        {count.map((valueRow, indexRow) => (
          <div key={indexRow} className="row">
            {valueRow.map((valueCol, indexCol) => (
              <button
                key={indexCol}
                onClick={() => countUp(indexRow, indexCol)}
                className="center cell"
              >
                {getPiece(valueCol)}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
