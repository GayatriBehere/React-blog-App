import ReadMoreButton from "./readMoreButton"
 function Card6(){
    return(
        <div className='card'>
        <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo-768x432.png" alt='place'
          className='image'></img>
        <div className="blog-info">
          <div className='blog-details'>
            <h4 className='blog-tag'>New</h4>
            <h4 className='blog-name'>GitHub Essentials: Navigating the Collaboration Hub</h4>
          </div>
          <div className="description">
            Explore the features of Next.js, a powerful React framework. Learn how Next.js simplifies the
            process of building server-rendered React applications, and discover its benefits for seamless
            client-side navigation. </div>
        </div>

        <ReadMoreButton/>
      </div>
    )
}
export default Card6