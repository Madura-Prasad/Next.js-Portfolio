import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-5 flex items-center justify-between cursor-pointer'>
        <span>  <Link href="https://www.linkedin.com/in/madura-prasad/" className='underline underline-offset-2' target={"_blank"}> Madura Prasad</Link> &copy; {new Date().getFullYear()}</span>
      
      </Layout>
    </footer>
  )
}

export default Footer
