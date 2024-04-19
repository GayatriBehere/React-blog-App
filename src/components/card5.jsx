import ReadMoreButton from "./readMoreButton"
function Card5(){
    return(
        <div className='card'>
        <img src="https://i.ibb.co/jhS4qCR/akatsuki.jpg" alt='place' className='image'></img>
        <div className="blog-info">
          <div className='blog-details'>
            <h4 className='blog-tag'>New</h4>
            <h4 className='blog-name'>Akatsuki Coding Club: Igniting Passion for Programming</h4>
          </div>
          <div className="description">
            Get to know the Akatsuki Coding Club and their mission to inspire and educate aspiring
            programmers. Learn about the club s activities, workshops, and how it contributes to the coding
            community.
          </div>
        </div>

       <ReadMoreButton/>
      </div>
    )
}
export default Card5