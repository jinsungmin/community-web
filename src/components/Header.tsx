import * as React from "react";
import styled, {withTheme} from "styled-components";
import {grey} from "@material-ui/core/colors";

import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {signOut} from "../redux/actions/auth";
import {useStyles} from '../css/style'

import {
  Grid,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {Menu as MenuIcon} from "@material-ui/icons";
import {getAuthReducer} from "../redux/reducers";
import { useSelector } from "react-redux";

const AppBar = styled(MuiAppBar)`
  background: #a3a3a3;
  color: ${grey[500]};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

type AppBarProps = {
  theme: {};
  onDrawerToggle: React.MouseEventHandler<HTMLElement>;
  category?: string;
};

const AppBarComponent: React.FC<AppBarProps> = ({onDrawerToggle}) => {
  const classes = useStyles()
  const history = useHistory()
  const {user}: any = useSelector(getAuthReducer);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickSignOut = async (e: any) => {
    e.preventDefault()

    history.push("/auth/sign-in");
    await dispatch(
      signOut()
    );
  }

  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0} style={{backgroundColor: '#1B4086'}}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item style={{width: '100%', display: 'flex', padding: '0 1%'}}>
              <div style={{flex: 1}}>
                {user && window.location.pathname.split('/')[1] !== 'auth' && <IconButton
                  style={{color:'white'}}
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                >
                  <MenuIcon/>
                </IconButton>}
              </div>
              <div style={{flex: 1}}>
                <div className={classes.headerTitle}>
                  커뮤니티
                </div>
              </div>
              {window.location.pathname.split('/')[1] !== 'auth' ? !user ? <div style={{flex: 1, textAlign: 'right'}}>
              <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.headerItem}
              >
                <MoreVertIcon />
              </Button>
              <Menu
                id="icon-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={(e) => history.push('/auth/sign-up')}>
                 회원가입
                </MenuItem>
                <MenuItem onClick={(e) => history.push('/auth/sign-in')}>
                  로그인
                </MenuItem>
              </Menu>
              </div> : <div style={{flex: 1, textAlign: 'right'}}>
                <Button className={classes.headerItem} onClick={(e) => clickSignOut(e)}>
                  로그아웃
                </Button></div>: <div style={{flex: 1}}/>}
            </Grid>
            <Grid item xs/>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
};

export default withTheme(AppBarComponent);
