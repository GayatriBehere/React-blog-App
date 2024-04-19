import ReadMoreButton from "./readMoreButton"
function Card4(){
    return(
        <div className='card'>
            <img src="https://newrelic.com/sites/default/files/styles/800w/public/2021-10/mongo_logo.jpg?itok=Z1PabBZB"
              alt='place' className='image'></img>
            <div className="blog-info">
              <div className='blog-details'>
                <h4 className='blog-tag'>New</h4>
                <h4 className='blog-name'>Demystifying MongoDB: A NoSQL Database Solution</h4>
              </div>
              <div className="description">
                Learn about MongoDB, a popular NoSQL database, and its role in modern web development. Discover
                the advantages of using MongoDB for storing and retrieving data, and how it fits into the MERN
                stack. </div>
            </div>

            <ReadMoreButton/>
          </div>
    )
}
export default Card4