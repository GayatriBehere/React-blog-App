/* eslint-disable react/no-unescaped-entities */
import './app.css'
import Heading from './components/heading';
import CardContainer from './components/cardContainer';
import Footer from './components/footer';
import Compose from './components/compose';
function App() {
  return (
    <>
      <div className="container-inner">
        <Heading/>
         <CardContainer/>
      </div>
     <Compose/>
     <Footer/>
   
    </>
  )
}

export default App
