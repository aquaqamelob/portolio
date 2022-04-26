import './App.css'
import Navbar from './components/Navbar'
import NewsCard from './components/NewsCard'
import React from 'react'
import Footer from './components/Footer'

function App() {
  const [isBlur, setIsBlur] = React.useState(false)
  let blurClass = isBlur ? "w-11/12 lg:grid md:grid-cols-none lg:grid-cols-2 2xl:grid-cols-3 transition gap-5 justify-between blur" : "w-11/12 lg:grid md:grid-cols-none lg:grid-cols-2 2xl:grid-cols-3 transition gap-5 justify-between"


  return (
    <div className="App bg-gradient-to-bl from-purple-500 via-amber-500 to-pink-500 transition" >

      <div className="flex justify-center relative z-10">
        <Navbar setIsBlur={setIsBlur}></Navbar>
      </div>
      <div className="flex justify-center" onClick={() => setIsBlur(false)}>
        <div className={blurClass}>
          <NewsCard doubleHeight></NewsCard>
          <NewsCard ></NewsCard>
          <NewsCard ></NewsCard>
          <NewsCard doubleWidth></NewsCard>
          <NewsCard doubleWidth></NewsCard>
          <NewsCard alone></NewsCard>

        </div>
      </div>
      <div className='flex justify-center'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
