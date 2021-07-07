import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";

import {useStyles} from "../css/style";
import {useHistory} from "react-router-dom";

export default React.memo(function AlertDialog({data, handleAlert, handleSubmit}: any) {
    const [open, setOpen] = React.useState(data.open);
    const classes = useStyles();
    const history = useHistory();

    const handleClose = () => {
        handleAlert({title: '', msg: '', open: false})
        if(handleSubmit && data.seq) {
            handleSubmit(true)
        }
        setOpen(false);
        if(data.url) {
            history.push(`/${data.url}`)
        }
    };

    const handleCancel = () => {
        handleAlert({title: '', msg: '', open: false})
        handleSubmit(false)
        setOpen(false);
    }

    const handleNext = () => {
        handleAlert({title: '', msg: '', open: false})
        handleSubmit(true)
        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {data.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" className={classes.diaglogMsg}>
                    {data.msg}
                </DialogContentText>
            </DialogContent>
            {!data.type ? <DialogActions>
                <Button onClick={handleClose} color="primary">
                    확인
                </Button>
            </DialogActions>: <DialogActions>
                <Button onClick={handleCancel} color="primary">
                    {data.type === 'submit' || data.type === 'delete' ? '취소' : '인증하기'}
                </Button>
                <Button onClick={handleNext} color="primary" autoFocus>
                    {data.type === 'submit' || data.type === 'delete' ? '확인' : '다음에 하기'}
                </Button>
            </DialogActions>}
        </Dialog>
    );
})