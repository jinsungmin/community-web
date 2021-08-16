import React, {useState, useEffect} from 'react'
import {useSelector} from "react-redux";
import {getCommentListReducer} from "../../../../redux/reducers";
import Create from '../Create'
import Edit from '../Edit'
import {findAll} from "../../../../services/commentService"

import styled from "styled-components/macro";
import {
    Card as MuiCard,
    Paper as MuiPaper,
    Typography,
    Divider
} from "@material-ui/core";
import {spacing} from "@material-ui/system";

import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import SubdirectoryArrowRightTwoToneIcon from '@material-ui/icons/SubdirectoryArrowRightTwoTone';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);

const List = ({user, history, deleteComment}: any) => {
    const {comments}: any = useSelector(getCommentListReducer);
    const [add, setAdd] = useState<any>(null)
    const [update, setUpdate] = useState<any>(null)
    const [child, setChild] = useState<any>({})

    console.log(comments)

    const addComment = (id: number) => {
        if (id === add) setAdd(null)
        else setAdd(id)
    }

    const updateComment = (id: number) => {
        if (id === update) setUpdate(null)
        else setUpdate(id)
    }

    const openChild = async (parentId: number) => {
        if (parentId in child && child[parentId].open) {
            setChild({...child, [parentId]: {...child[parentId], open: false}})
        } else {
            const {data}: any = await findAll({start: 0, perPage: 10, parentId})
            setChild({...child, [parentId]: {...data, open: true}})
        }
    }

    return (
        <Card mb={6} style={{margin: 0, width: '100%'}}>
            <Paper>
                <div style={{backgroundColor: 'white', marginTop: '20px'}}>
                    {comments && comments.data.map((row: any, index: number) => (
                        <div key={index}>
                            <div style={{padding: '5px 10px', display: 'flex'}}>
                                <div style={{width: '80%'}}>
                                    <Typography>
                                        작성자: {row.userName}
                                    </Typography>
                                    <Typography>
                                        {row.content}
                                    </Typography>
                                </div>
                                <div style={{width: '20%', marginTop: '5px'}}>
                                    {user.id === row.userId &&
                                    <div style={{float: 'right'}}
                                         onClick={(e) => deleteComment(row.id)}
                                    >
                                        <DeleteOutlinedIcon style={{cursor: 'pointer'}}/>
                                    </div>}
                                    {user.id === row.userId &&
                                    <div style={{float: 'right'}}
                                         onClick={(e) => updateComment(row.id)}
                                    >
                                        <EditOutlinedIcon style={{cursor: 'pointer'}}/>
                                    </div>}
                                    <div style={{float: 'right'}}
                                         onClick={(e) => openChild(row.id)}
                                    >
                                        <ListAltOutlinedIcon style={{cursor: 'pointer'}}/>
                                    </div>
                                    <div style={{float: 'right'}}
                                         onClick={(e) => addComment(row.id)}
                                    >
                                        <AddCommentOutlinedIcon style={{cursor: 'pointer'}}/>
                                    </div>
                                </div>
                            </div>
                            <Divider/>
                            {row.id === add && <div style={{padding: '5px 10px'}}>
                                <Create postId={row.postId} commentId={row.id} history={history} type="comment"/>
                            </div>}
                            {row.id === update && <div style={{padding: '5px 10px'}}>
                                <Edit comment={row} history={history} />
                            </div>}
                            {row.id in child && child[row.id].open && child[row.id].data.map((row: any, index: number) =>
                                <div key={index}>
                                    <div style={{padding: '5px 10px', display: 'flex'}}>
                                        <div style={{marginTop: '5px'}}>
                                            <SubdirectoryArrowRightTwoToneIcon/>
                                        </div>
                                        <div style={{width: '80%', paddingLeft: '10px'}}>
                                            <Typography>
                                                작성자: {row.userName}
                                            </Typography>
                                            <Typography>
                                                {row.content}
                                            </Typography>
                                        </div>
                                        <div style={{width: '20%', marginTop: '5px'}}>
                                            {user.id === row.userId &&
                                            <div style={{float: 'right'}}
                                                 onClick={(e) => deleteComment(row.id)}
                                            >
                                                <DeleteOutlinedIcon style={{cursor: 'pointer'}}/>
                                            </div>}
                                            {user.id === row.userId &&
                                            <div style={{float: 'right'}}
                                                 onClick={(e) => updateComment(row.id)}
                                            >
                                                <EditOutlinedIcon style={{cursor: 'pointer'}}/>
                                            </div>}
                                        </div>
                                    </div>
                                    <Divider/>
                                    {row.id === update && <div style={{padding: '5px 10px'}}>
                                        <Edit comment={row} history={history} />
                                    </div>}
                                </div>
                            )
                            }
                        </div>
                    ))}
                </div>
            </Paper>
        </Card>

    )
}

export default List