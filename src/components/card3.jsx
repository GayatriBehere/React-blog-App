import ReadMoreButton from "./readMoreButton"
function Card3(){
    return(
        <div className='card'>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt='place'
              className='image'></img>
            <div className="blog-info">
              <div className='blog-details'>
                <h4 className='blog-tag'>New</h4>
                <h4 className='blog-name'>Harnessing the Power of React.js for Interactive UI</h4>
              </div>
              <div className="description">
                Explore the world of React.js and discover how this JavaScript library can revolutionize the way
                you build user interfaces. From component-based architecture to state management, we ll cover it
                all. </div>
            </div>

           <ReadMoreButton/>
          </div>
    )
}

export default Card3