import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Header from "../components/Header";
import Feed from "../components/Feed"; 
import Modal from "../components/Modal";
import Widgets from "../components/Widgets";
import Snowfall from 'react-snowfall'
const Home: NextPage = () => {
  return (

    
    
    <div className="bg-[url('../public/backgr.jpeg')] bg-cover h-screen overflow-y-scroll scrollbar-hide">
      
      <Head>
        <title>CitizenShare</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Snowfall 
      style={{
        
        position: 'fixed',
        width: '100vw',
        height: '100vh',
      }}
      


    />

      <Header/>
      <Widgets/>
      <Feed/>
      <Modal/>
      
    </div>
    

  
    

  )
}

export default Home
