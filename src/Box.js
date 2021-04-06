import React, { useState } from "react";

const Box = () => {
  const [data, setData] = useState([
    // [2, 3, 1],
    // [6, 7, 0],
    // [4, 5, 8],
    [1, 2, 3],
    [4, 5, 6],
    [7, 0, 8],
  ]);
  const final_result = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
  ];
  const [message, setMessage] = useState("");

  const handleButton = (e) => {
    for (let i = 0; i < data.length; i++) {
      let flag = false;
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j] === e) {
          console.log(i, j);
          // left
          if (data[i][j + 1] === 0) {
            console.log("left");
            let temp;
            temp = data[i][j];
            data[i][j] = data[i][j + 1];
            data[i][j + 1] = temp;
            setData([...data]);
            flag = true;
            break;
          }
          // up
          if (i >= 0 && i < 2 && j >= 0 && j < 3 && data[i + 1][j] === 0) {
            console.log("up");
            let temp = data[i][j];
            data[i][j] = data[i + 1][j];
            data[i + 1][j] = temp;
            setData([...data]);
            flag = true;
            break;
          }

          // left
          if (data[i][j - 1] === 0) {
            console.log("right");
            let temp;
            temp = data[i][j];
            data[i][j] = data[i][j - 1];
            data[i][j - 1] = temp;
            setData([...data]);
            flag = true;
            break;
          }
          // down
          if (i > 0 && i < 3 && data[i - 1][j] === 0) {
            console.log("down");
            let temp = data[i][j];
            data[i][j] = data[i - 1][j];
            data[i - 1][j] = temp;
            setData([...data]);
            flag = true;
            break;
          }
        }
      }
      if (flag) break;
    }

    let flag = true;

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j] !== final_result[i][j]) {
          flag = false;
        }
      }
    }
    if (flag) {
      let a = "congratulation, You have won the match!";
      setMessage(a);
    }
  };

  return (
    <div className="box">
      <div className="msg">{message}</div>
      {data.map((e, index) => {
        return (
          <div key={index} className="flex">
            {e.map((ele, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleButton(ele)}
                  className={ele ? "world" : "hello"}
                >
                  {ele !== 0 && ele}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Box;
