export default function Comments({comments}) {
    const displayComments = () => {
        return (
            comments.map((comment, index) => {
                return (
                    <p key={comment[index]} >{comment}</p>
                )
            })
        )
    }
    return(
        <section>
            <h2>Comment Section</h2>
            {displayComments()}
        </section>
    )
}