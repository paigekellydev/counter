import {useState} from 'react'

export default function CommentForm({addComment}) {

    const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value.toUpperCase())
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addComment(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={text}></input>
            <button type="submit">Submit</button>
        </form>
    )
}