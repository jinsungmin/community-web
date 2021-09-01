import React, {useState} from 'react'
import {Divider, Typography} from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import AddCommentOutlinedIcon from "@material-ui/icons/AddCommentOutlined";
import Create from "../Create";
import Edit from "../Edit";
import SubdirectoryArrowRightTwoToneIcon from "@material-ui/icons/SubdirectoryArrowRightTwoTone";
import {findAll} from "../../../../services/commentService";

const Detail = ({index, row, user, history, ref, deleteComment}: any) => {
    const [add, setAdd] = useState<any>(null)
    const [update, setUpdate] = useState<any>(null)
    const [child, setChild] = useState<any>({})

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
        <>
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
        </>
    )
}

export default React.memo(Detail);
