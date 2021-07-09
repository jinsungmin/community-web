import React, {useState} from 'react';
import {
  Button
} from '@material-ui/core';
import {useStyles} from "../css/style";
import AlertDialog from '../components/AlertDialog';

export default React.memo(function SubmitBtn({submitCheck, setSubmit, text, msg, title}: any) {
  const classes = useStyles()
  const [alert, setAlert] = useState<any>({title: '', msg: '', open: false, type:'submit'})

  return (
    alert.open ? <div><AlertDialog data={alert} handleAlert={setAlert} handleSubmit={setSubmit}/>
        <Button type="submit" disabled={submitCheck()} onClick={(e) => setAlert({title, msg, open: true, type:'submit'})}
                variant="outlined" color="primary" className={classes.submitBtn}>
          {text}</Button></div>
      : <Button type="submit" disabled={submitCheck()} onClick={(e) => setAlert({title, msg, open: true, type:'submit'})}
                variant="outlined" color="primary" className={classes.submitBtn}>
        {text}
      </Button>
  );
})