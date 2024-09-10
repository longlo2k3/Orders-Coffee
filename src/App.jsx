import Hero from './components/Hero/Hero'  
import Coffee from './components/Coffee/Coffee'
import WhereToBuy from './components/WhereToBuy/WhereToBuy'
import AppBanner from './components/AppBanner/AppBanner'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="overflow-x-hidden ">
      <Hero/> 
      <Coffee/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
    </div>
  )
}

export default App
