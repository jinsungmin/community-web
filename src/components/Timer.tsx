import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components/macro";


const Root = styled.div`
  color: #e34c4c;
  font-size: 12px;
  font-weight: 500;
`;

const Timer = ({time, handleTimer, reset}: any) => {
  const [count, setCount] = useState(time)
  const delay = 1000

  useEffect(() => {
    setCount(time)
  }, [reset, time])

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      handleTimer(true)
    }
  }, delay)

  return (
    <Root>
      {Math.floor(count / 60)}: {count % 60 < 10 ? <>0{count % 60}</> : <>{count % 60}</>}
    </Root>
  )
}

function useInterval(callback: any, delay: any) {
  const savedCallback: any = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Timer;
