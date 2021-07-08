import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';

export default function VerifyButton({data, submit}: any) {
  const initBtn = {color: '#9b9b9b', backgroundColor: '#fafafa', border: 0}
  const changeBtn = {color: 'white', backgroundColor: '#3269d3', border: '1px solid #3269d3'}

  const [buttonStyle, setButtonStyle] = useState<any>(initBtn);

  useEffect(() => {
    if (data.data.match(data.match)) {
      setButtonStyle(changeBtn)
    } else {
      setButtonStyle(initBtn)
    }
  }, [data.data])

  return (
    <Button
      style={{
        color: buttonStyle.color,
        width: '15%',
        height: '36px',
        margin: '10px 5px 0 5px',
        backgroundColor: buttonStyle.backgroundColor,
        border: buttonStyle.border,
        borderRadius: '2px',
        padding: '8px 5.5px'
      }} onClick={(e) => submit(buttonStyle, e)}>
      {data.text}
    </Button>
  );
}