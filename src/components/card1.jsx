
import ReadMoreButton from "./readMoreButton"
function Card1(){
    return(
      <div className='card'>
      <img src="https://www.appstudio.ca/blog/wp-content/uploads/2020/10/Mern-Stack-Development-companies.jpg"
        alt='place' className='image'></img>
      <div className="blog-info">
        <div className='blog-details'>
          <h4 className='blog-tag'>New</h4>
          <h4 className='blog-name'>Exploring the MERN Stack</h4>
        </div>
        <div className="description">
          Uncover the power of the MERN stack as we take a deep dive into MongoDB, Express.js, React.js,
          and Node.js. Understand how these technologies work together to create modern and efficient web
          applications.
        </div>

      </div>

      <ReadMoreButton/>
    </div>
    )
}

export default Card1








