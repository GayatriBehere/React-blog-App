
import DeleteButton from "./deleteButton"
function ReadMoreButton(){
    return(
        <div className="button-container">
        <a href="./post.html" className='btn-red btn-read-more'>Read More...</a>

        <DeleteButton/>
      </div>
    )
}

export default ReadMoreButton