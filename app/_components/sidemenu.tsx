"use client";
import Link from 'next/link'
import { useState } from "react"


export default function SideMenu() {
    const [ open,setOpen ] = useState(false)
    
    return(
        <div className="fixed flex flex-col top-0 right-0 text-right">
       <div
            className="hover-container"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>
            {!open && (
                <div className="navbar-hamburger text-2xl"> &#9776; </div>
        )}
            {open && (
           <div className="flex flex-col top-0 right-0 text-right">
            <i><Link href="/">Home</Link> </i>
            <i><Link href="/resume">Resume</Link> </i>
            <i> <Link href="#">Services</Link> </i>
            <i> <Link href="#">Team And Co-Companies</Link> </i>
            <i> <Link href="#">About</Link> </i>
         </div>)}
        </div>
     </div>
    )
}