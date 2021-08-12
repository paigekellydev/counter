import {useState} from 'react'

export default function CommentForm(props) {

    const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value.toUpperCase())
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setText('')
        props.addComment(text)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={text}></input>
            <button type="submit">Submit</button>
        </form>
    )
}