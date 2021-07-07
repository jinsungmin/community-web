import React from "react";
import styled from "styled-components/macro";
import {darken} from "polished";
import PerfectScrollbar from "react-perfect-scrollbar";
import "../vendor/perfect-scrollbar.css";
import {spacing} from "@material-ui/system";

import {
    Box as MuiBox,
    Drawer as MuiDrawer,
    List as MuiList,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";

import * as Icon from "@material-ui/icons";
import {useHistory} from "react-router-dom";

const Box = styled(MuiBox)(spacing);

const Drawer = styled(MuiDrawer)`
  border-right: 0;

  > div {
    border-right: 0;
  }
`;

const Scrollbar = styled(PerfectScrollbar)`
  background-color: #1B4086;
`;

const List = styled(MuiList)`
  background-color: #1B4086;
`;

const Items = styled.div`
  padding-top: ${(props: { theme: { spacing: (arg0: number) => any; }; }) => props.theme.spacing(2.5)}px;
  padding-bottom: ${(props: { theme: { spacing: (arg0: number) => any; }; }) => props.theme.spacing(2.5)}px;
`;

const Brand = styled(Box)<{
    component?: React.ReactNode;
    to?: string;
}>`
  font-size: ${(props: { theme: { typography: { h3: { fontSize: any; }; }; }; }) => props.theme.typography.h3.fontSize};
  font-weight: ${(props: { theme: { typography: { fontWeightMedium: any; }; }; }) => props.theme.typography.fontWeightMedium};
  color: white;
  background-color: #1B4086;
  font-family: ${(props: { theme: { typography: { fontFamily: any; }; }; }) => props.theme.typography.fontFamily};
  min-height: 56px;
  padding-left: ${(props: { theme: { spacing: (arg0: number) => any; }; }) => props.theme.spacing(6)}px;
  padding-right: ${(props: { theme: { spacing: (arg0: number) => any; }; }) => props.theme.spacing(6)}px;
  padding-top: 15px;
  justify-content: center;
  cursor: pointer;

  ${(props: { theme: { breakpoints: { up: (arg0: string) => any; }; }; }) => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }

  &:hover {
    background-color: #1b4086;
  }

`;

type CategoryType = {
    activeClassName?: string;
    button?: boolean;
    onClick?: () => void;
    to?: string;
    exact?: boolean;
};

const Category = styled(ListItem)<CategoryType>`
  padding-bottom: ${(props: { theme: { spacing: (arg0: number) => any; }; }) => props.theme.spacing(3)}px;
  padding-right: ${(props: { theme: { spacing: (arg0: number) => any; }; }) => props.theme.spacing(7)}px;
  font-weight: ${(props: { theme: { typography: { fontWeightRegular: any; }; }; }) => props.theme.typography.fontWeightRegular};
  height: 50px;
  color: white;

  svg {
    color: white;
    font-size: 20px;
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: #1b4086;
  }

  &.${(props) => props.activeClassName} {
    background-color: ${(props: { theme: { sidebar: { background: string; }; }; }) =>
    darken(0.35, props.theme.sidebar.background)};

    span {
      color: ${(props: { theme: { sidebar: { color: any; }; }; }) => props.theme.sidebar.color};
    }
  }
`;

const CategoryText = styled(ListItemText)`
  margin: 0;

  span {
    color: white;
    font-size: 14px;
      //font-size: ${(props: { theme: { typography: { h1: { fontSize: any; }; }; }; }) => props.theme.typography.h1.fontSize}px;
    padding: 0 ${(props: { theme: { spacing: (arg0: number) => any; }; }) => props.theme.spacing(4)}px;
  }
`;

type SidebarCategoryPropsType = {
    name?: string;
    icon?: JSX.Element;
    classes?: string;
    isOpen?: boolean;
    isCollapsable: boolean;
    badge?: string | number;
    activeClassName?: string;
    url: string;
    history: any;
    button: true;
    onClick?: any;
    to?: string;
    exact?: boolean;
};

const SidebarCategory: React.FC<SidebarCategoryPropsType> = ({
                                                                 isOpen,
                                                                 isCollapsable,
                                                                 icon,
                                                                 name, url, history,
                                                                 ...rest
                                                             }) => {
    const active = url.substring(1) === window.location.pathname.split('/')[1]

    return (
        <div style={{backgroundColor: active ? 'rgb(0 0 0 / 14%)' : '#1B4086'}}
             onClick={() => history.push(url)}>
            <Category {...rest}>
                {icon}
                <CategoryText>{name}</CategoryText>
            </Category>
        </div>
    );
};

type SidebarPropsType = {
    classes?: string;
    PaperProps: {
        style: {
            width: number;
        };
    };
    variant?: "permanent" | "persistent" | "temporary";
    open?: boolean;
    onClose?: () => void;
};

const menus: any = [
    {
        id: 'post',
        title: '게시글',
        icon: <Icon.Dashboard/>,
        url: `/post`,
    },
    {
        id: 'edit',
        title: '계정',
        icon: <Icon.Dashboard/>,
        url: `/edit`,
    }
]

const Sidebar: React.FC<SidebarPropsType> = ({
                                                 classes,
                                                 ...rest
                                             }) => {
    const history = useHistory();
    const toggle = (index: number) => {
    }

    return (
        <Drawer variant="permanent" {...rest}>
            <Brand>
                <Box ml={1}>
                    메뉴
                </Box>
            </Brand>
            <Scrollbar>
                <List disablePadding>
                    <Items>
                        <React.Fragment>
                            {menus.map((row: any, index: number) => (
                                <React.Fragment key={index}>
                                    <SidebarCategory
                                        isOpen={false}
                                        isCollapsable={false}
                                        icon={row.icon}
                                        name={row.title}
                                        history={history}
                                        url={row.url}
                                        button={true}
                                        onClick={() => toggle(index)}
                                    />
                                </React.Fragment>))
                            }
                        </React.Fragment>
                    </Items>
                </List>
            </Scrollbar>
        </Drawer>
    );
};

export default Sidebar;
