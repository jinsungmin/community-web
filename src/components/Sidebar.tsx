import React from "react";
import styled from "styled-components/macro";
import {darken} from "polished";
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

import {getCategoryListReducer} from "../redux/reducers";
import {useSelector} from "react-redux";
import * as Icon from "@material-ui/icons";
import {useHistory} from "react-router-dom";

const List = styled(MuiList)`
  background-color: #1B4086;
`;

const Items = styled.div`
  padding-top: ${(props: { theme: { spacing: (arg0: number) => any; }; }) => props.theme.spacing(2.5)}px;
  padding-bottom: ${(props: { theme: { spacing: (arg0: number) => any; }; }) => props.theme.spacing(2.5)}px;
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
  display: flex;
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
    color: #1b4086;
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
    url: string | null;
    type: string;
    history: any;
    button: true;
    onClick?: any;
    to?: string;
    exact?: boolean;
};

const SidebarCategory: React.FC<SidebarCategoryPropsType> = ({
                                                                 isOpen,
                                                                 isCollapsable,
                                                                 name,type , url, history,
                                                                 ...rest
                                                             }) => {
    return (
        <div onClick={() => history.push({
                 pathname: `/${type}`,
                 search: `?mid=${name}`,
                 state: {id: url, name: name}
             })
             }>
            <Category {...rest}>
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

const Sidebar: React.FC<SidebarPropsType> = ({
                                                 classes,
                                                 ...rest
                                             }) => {
    const {categories}: any = useSelector(getCategoryListReducer)
    const {open} = rest
    const history = useHistory();
    const toggle = (index: number) => {
    }

    return (
        open ? <div style={{backgroundColor: 'white'}}>
            {<div style={{display:'flex'}}>
                <React.Fragment>
                    <SidebarCategory
                        isOpen={false}
                        isCollapsable={false}
                        name="뉴스"
                        type="news"
                        history={history}
                        url={null}
                        button={true}
                        onClick={() => toggle(0)}
                    />
                </React.Fragment>
            </div>}
            <div style={{display:'flex'}}>
                {categories.data.map((row: any, index: number) => (
                    <React.Fragment key={index}>
                        <SidebarCategory
                            isOpen={false}
                            isCollapsable={false}
                            name={row.name}
                            type="post"
                            history={history}
                            url={row.id}
                            button={true}
                            onClick={() => toggle(index)}
                        />
                    </React.Fragment>))
                }
            </div>
        </div> : <></>
    );
};

export default Sidebar;
