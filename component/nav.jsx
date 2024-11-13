'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {signIn, signOut, useSession, getProvider} from "next-auth/react"

const nav = () => {
    const isuserloggedin = true;
    return (
     
    <nav className='flex-betweeen w-full mb-16 pt-3'>
        <Link href="/" className='fex gap-2 flex-center'>
        <Image src="\assets\images\logo.svg"
        alt='prompter image'
         width={30}
         height={30}
        className="object-contain" 
         />
         <p className='logo_text'>prompter</p>
        </Link>

        <div className='sm:flex hidden'>
            {isuserloggedin ? (<div className='flex gap-3 md:gap-5'>
                <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
            </div>): (
                <>
                </>
            )}

        </div>
    </nav>
  )
}

export default nav