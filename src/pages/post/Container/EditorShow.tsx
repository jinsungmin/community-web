import React from 'react'

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditorInput = ({content}: any) => {

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',
    ]
    return (
        <div>
            <ReactQuill
                style={{height: "500px", overflowY: 'auto'}}
                readOnly
                theme="snow"
                formats={formats}
                value={content || ''}
            />
        </div>
    )
}

export default EditorInput