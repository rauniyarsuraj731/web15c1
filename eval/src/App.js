// import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";
function App() {
  const [score, setScore] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [over, setOver] = useState(0);
  const [ball, setBall] = useState(0);
  
  const handleScore = (value) => {
    setScore(score + value);
  };
  const handleWicket = (value) => {
    setWicket(wicket + value);
  };
  const handleBall = (value) => {
    setBall(ball + value);
    setOver(Math.floor(ball / 6));
  };

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:
          <h1 className="scoreCount">
            {
              // show "score" here
              score 
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over: {" "}
          <h1 className="overCount">
            {
             over
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>{
          handleScore(1);
        }} className="addScore1">Add 1</button>

        <button onClick={()=>{
          handleScore(4);
        }}  className="addScore4">Add 4</button>
        <button onClick={()=>{
          handleScore(6);
        }}  className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{
         handleWicket(1);
        }} >Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{
          handleBall(1);
        }} >Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
