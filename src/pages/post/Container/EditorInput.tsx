import React, {useMemo} from 'react'

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {uploadToS3} from "../../../lib/uploadToS3";

const EditorInput = ({content, setContent}: any) => {
    function imageHandler(this:any) {
        const input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.setAttribute('accept', '.png, .jpg, .jpeg')
        input.click()

        input.onchange = async (e:any) => {
            const files = e.target.files
            for (let i = 0; i < files.length; i++) {
                const path = await uploadToS3(files[i])
                const range = this.quill.getSelection()
                this.quill.insertEmbed(range.index, 'image', process.env.REACT_APP_FILE_URL + path)
            }
        }

    }

    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{'header': [1, 2, false]}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image'],
                [{'align': []}, {'color': []}, {'background': []}],          // dropdown with defaults from theme
                ['clean']
            ],
            handlers: {
                image: imageHandler
            }
        }
    }), [])

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
                theme="snow"
                modules={modules}
                formats={formats}
                value={content || ''}
                onChange={(content, delta, source, editor) => setContent(editor.getHTML())} />
        </div>
    )
}

export default React.memo(EditorInput);