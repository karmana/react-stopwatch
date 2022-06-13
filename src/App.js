import Stopwatch from "./components/Stopwatch/Stopwatch";
import Button from './components/Button/Button';
import React, {useEffect, useState} from "react";
import Container from "./components/Container/Container";

const App = () => {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
      let interval;
      if (running) {
          interval = setInterval(() => {
              setTime((prevTime) => prevTime + 10);
          }, 10);
      } else if (!running) {
          clearInterval(interval);
      }
      return () => clearInterval(interval);
  }, [running]);
  
  return (
    <Container>
      <Stopwatch time={time} />
      <Button action={() => setRunning(true)}>Start</Button>
      <Button action={() => setRunning(false)}>Stop</Button>
      <Button action={() => setTime(0)}>Reset</Button>
    </Container>
  );
}

export default App;
