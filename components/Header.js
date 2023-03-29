import React from 'react'
import Image from "next/image";
import {PaperAirplaneIcon, MenuIcon,SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon,BookOpenIcon,PlayIcon} from "@heroicons/react/outline";
import {signIn,signOut,useSession} from "next-auth/react";
import {HomeIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import {modalState} from "../atoms/modalAtom";
import Widgets from "../components/Widgets";
import Link from "next/link";


function Header() {

  const {data: session} =useSession();
  const [open,setOpen]=useRecoilState(modalState);
  const router=useRouter();

  

  return (
      <div className="shadow-sm border-b  bg-indigo-500 sticky top-0 z-50">
         <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
         {/*left*/}
      
    
    <div onClick={()=>router.push('/')} className='relative hidden lg:inline-grid h-24 w-24 cursor-pointer'>
    
      
        <img src="/citi3.png" 
        layout="fill" 
        objectFit="contain"
            
        />
      </div>

      <div onClick={()=>router.push('/')} className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
        <img src="/citi3.png" 
        layout="fill" 
        objectFit="contain"/>
        
      </div>
      <div>
        
      </div>
      <div className="max-w-xs">

      <div>
        <h1 className="pointer-events-none animate-pulse">  <PaperAirplaneIcon className="h-5 w-5 text-gray-500"/>Welcome to CitizenShare </h1>
      </div>
      </div>
{/*right*/}
      
      <div className="flex items-center justify-end space-x-4">
      <HomeIcon onClick={()=>router.push('/')} className="navBtn"/>
      <MenuIcon className="h-6 md:hidden cursor-pointer" />


{session ?  (
  <>
      <div className="relative navBtn">
      <a href="https://starcitizen.tools/" target="blank">
      <span>StarWiki</span>
      
      <div className="absolute -top-1 -right-2 text-xs w-5 h-5
       rounded-full flex items-center justify-center
      animate-pulse text-white">
        
      </div>
      </a>

      </div>
      <a href="https://www.erkul.games/live/calculator" target="blank">
      <span className="navBtn">Erkul</span>
      


      </a>
      <PlusCircleIcon onClick={()=>setOpen(true)} className="navBtn"/>
      
      <img
      onClick={signOut}
       src={session.user.image}
      alt="profile pic"
      className="h-10 w-10 rounded-full cursor-pointer"/>
      
      </>

):(
  <button onClick={signIn}>Sign In</button>
)}
      </div>
</div>
    </div>
  );
}

export default Header