import React from 'react'
import Header from '../components/Header'
import MainBlock from '../components/MainBlock'
import Footer from '../components/Footer'
import NewPostForm from '../components/NewPostForm'


const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <NewPostForm />


      <section className='main'>
        <MainBlock />
      </section>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Home