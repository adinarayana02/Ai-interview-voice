"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient';
import { DraftModeProvider } from 'next/dist/server/async-storage/draft-mode-provider'


function Login
() {
  /**
   * use to sign in with google
   */
  const signInWithGoogle=async()=>{
    const {error}=await supabase.auth.signInWithOAuth({
      provider:'google'
    })
    if(error)
    {
      console.error('Error:',error.message)
    }
  }
  return (
    <div>
      <div className='flex flex-col items-center justify-center
      h-screen'>
        <div className='flex flex-col items-center border round-2xl p-8'>
          <Image src={'/logo.png'} alt='logo'
            width={180}
            height={100}
            className='w-[180px]'
          />
          <div className='flex item-center flex-col' >
            <Image src ={'/login.jpg'}alt='login'
              width={400}
              height={200}
            className='w-[400px] h-[250px] rounded -2xl'
            />
            <h2 className='text-2xl font-bold text-center mt-5'>Welcome to AiCruiter</h2>
            <p className='text-grey-500 text-center'>sign In with Google Authentication</p>
            <Button className='mt-7 w-full'
              onClick={signInWithGoogle}
            >Login with Google  </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
