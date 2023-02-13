import React from 'react';

const Contact = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Fill out the form below to contact me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/11200873-177f-4cd7-a3e7-ad460c7bd033" method='POST' className='flex flex-col w-full '>
                        <input className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" placeholder='Enter Your Name:' />
                        <input className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="email" placeholder='Enter Your Email:' />
                        <textarea className='p-2 bg-tr
                         border-2 rounded-md text-black focus:outline-none' name="messege" rows="10"></textarea>
                        <button className='te xt-white px-6 py-3 mx-auto flex bg-gradient-to-b from-cyan-600 rounded-md items-center hover:scale-110 duration-300'>talk?</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;