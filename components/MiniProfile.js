import React from 'react'
import{signOut,useSession} from "next-auth/react";
import Widgets from "../components/Widgets";
function MiniProfile() {
  const {data:session} =useSession();
console.log(session);

  return (
    
    <div classname="flex item-center justify-between mt-14 ml-10">
<img className=" w-16 h-16 rounded-full border p-[2px] " src={session?.user?.image} alt=""  />

<div className="flex-1 mx-4">
<h2 className="font-bold">{session?.user?.name}</h2>
<h3 className="text-sm text-black">welcome to citizenShare</h3>


</div>
<h4>
  
</h4>
<button onClick={signOut} className="text-black text-sm font-semibold">Sign out</button>
    </div>
    
  )
}

export default MiniProfile