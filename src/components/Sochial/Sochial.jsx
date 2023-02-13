import React from 'react';



//Icons
import { FaGithub,FaLinkedin } from "react-icons/fa"
import { Hi0utLineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Sochial = () => {
    const Links=[
        {
            id:1,
            child:(
                <>
                Linkdin <FaLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/in/kamyar-kamali-671a5822b/",
            style:"rounded-tr-md"
        },
        {
            id:2,
            child:(
                <>
                Githube <FaGithub size={30}/>
                </>
            ),
            href:"https://github.com/Kamyarkamali",
            style:"rounded-tr-md"

        },
        {
            id:3,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:"../../assets/resume-Kamyar-kamali.docx",
            style:"rounded-tr-md",
            download:true
        }
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                
            {Links.map(({id,href,style,download,child})=>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md'+ " " + style}>
                    <a href={href} className='flex justify-between items-center w-full text-white'download={download}>
                    <>
                    {child}
                    </>
                    </a>
                    </li>
            ))}

            </ul>
        </div>
    );
};

export default Sochial;