import ReadMoreButton from "./readMoreButton"
function Card2(){
    return(
        <div className='card'>
            <img src="https://www.svgrepo.com/show/376337/node-js.svg" alt='place' className='image'></img>
            <div className="blog-info">
              <div className='blog-details'>
                <h4 className='blog-tag'>New</h4>
                <h4 className='blog-name'>Building Scalable APIs with Node.js and Express</h4>
              </div>
              <div className="description"> 
                In this blog post,we ll explore the fundamentals of building robust and scalable APIs using
                Node.js and Express.js. Learn how to handle routes, middleware, and enhance the functionality of
                your web applications
              </div>
            </div>

            <ReadMoreButton/>
          </div>
    )
}
export default Card2