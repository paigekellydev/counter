import React, {useState} from 'react';
import Counter from './components/Counter'
import CommentForm from './components/CommentForm';
import Comments from './components/Comments'

export default function App() {

  const [comments, setComments] = useState([])

  // addComment function is passed as props to comment form
  // new comment is added to comments existing array
  const addComment = (comment) => {
    setComments([...comments, comment])
  }

  return (
    <div>
      <Counter />
      <CommentForm addComment={addComment}/>
      <Comments comments={comments}/>
    </div>
  )
}
