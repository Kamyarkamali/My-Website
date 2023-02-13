import React from 'react';

//Images
import profito1 from "../../Profito/profito1jpg.jpg";
import profito2 from "../../Profito/profito2.jpg";
import profito3 from "../../Profito/profito3.jpg";
import profito4 from "../../Profito/profito4.jpg";

const ProtfoiLio = () => {
    const protfolios=[
        {
            id:1,
            src:profito1,
            href:"https://fabulous-sprite-e715a6.netlify.app/",
            href2:"https://github.com/Kamyarkamali/Contact-App"
        },
        {
            id:2,
            src:profito2,
            href:"https://dynamic-sherbet-d2c3f7.netlify.app/products",
            href2:"https://github.com/Kamyarkamali/Create-shopping-cart"
        },
        {
            id:3,
            src:profito3,
            href:"https://aquamarine-malabi-fd4b4a.netlify.app/products",
            href2:"https://github.com/Kamyarkamali/ShoppingCart2"
        },
        {
            id:4,
            src:profito4,
            href:"https://delicate-mousse-b4004d.netlify.app/chats",
            href2:"https://github.com/Kamyarkamali/Chat-App"
        }
    ]


    return (
        <div name="protfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='p-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Project</p>
                    <p className='py-6'>check out my some work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0'>
                    {protfolios.map(({id,src,href,href2})=>(
                         <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                         <img className='rounded-md duration-200 hover:scale-105' src={src} alt="" />
                         <div className='flex items-center justify-center'>
                         <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={href}>Online</a></button>
                         <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={href2}>github</a></button>
                         </div>
                     </div>
                    ))}

                   
                </div>
            </div>
        </div>
    );
};

export default ProtfoiLio;