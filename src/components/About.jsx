import React from 'react'

const About = () => {
  return (
    <div className="  mt-[80px] h-[70vh] items-center justify-center text-center flex flex-col">
        <p> hello there!</p>
        <p>I created this website in React using Tailwind CSS for styling.</p>
        <p>everything you see here is coded by hand by me.</p>
        <p>with the exception of the bubbles... I totally stole those.</p>
        <p>this website is open source, and you can view the source code at <a href='https://github.com/Trufflie/baby'>Github</a> </p>
        <p>over time i may add more functionality, or remove the site all together.</p>
        <p>If you have any issues (or want a site for yourself), please fill out this form.</p>
        
        <form action="https://getform.io/f/zbxdolmb" method='Post' className='flex flex-col max-w-[600px] '>
            <div className='pb-8'>
                
   
                
            </div>
            <input className='p-2 bg-[ccd6f6]' type='text' placeholder='Name' name="name" />
            <input className='my-4 p-2 bg-[ccd6f6]' type='email' placeholder='Email' name="email" />
            <textarea className='bg-[ccd6f6] p-2' placeholder='Message' name="message"  cols="30" rows="2"></textarea>
            <button className='text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center'>Lets Talk</button>
            </form>        
    </div>
    
  )
}

export default About