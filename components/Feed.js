import React from 'react'
import Posts from "./Posts"
import MiniProfile from "./MiniProfile";
import {useSession} from "next-auth/react";
import Widgets from "../components/Widgets";


function Feed() {

const {data:session}=useSession();

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto">

    <section className="col-span-2">
    <Posts/>

    </section>

    {session && (
      <section childrenlassName="hidden xl:inline-grid md:col-span-1">
<div className="fixed top-40">
<MiniProfile />


</div>


</section>

      
    )}



    </main>
  )
}

export default Feed