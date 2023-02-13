import React from 'react';

//Images
import HTML from "../../ImagesSkills/HTML.jpg";
import css from "../../ImagesSkills/css.png";
import tailw from "../../ImagesSkills/tailwind.jpg";
import javascript from "../../ImagesSkills/javascript.png";
import type from "../../ImagesSkills/typescript.png";
import react from "../../ImagesSkills/react.png";
import redux from "../../ImagesSkills/redux.png";
import grap from "../../ImagesSkills/grap.jpg";
import next from "../../ImagesSkills/next.jpg";
import git from "../../ImagesSkills/git.jpg";
import github from "../../ImagesSkills/github.webp";

const Skills = () => {
    const Skills=[
        {
            id:1,
            title:"HTML",
            src:HTML,
            style:'shadow-orange-500'
        },
        {
            id:2,
            title:"CSS",
            src:css,
            style:'shadow-blue-500'
        },
        {
            id:3,
            title:"TailWind",
            src:tailw,
            style:'shadow-sky-400'
        },
        {
            id:4,
            title:"JavaScript",
            src:javascript,
            style:'shadow-yellow-500'
        },
        {
            id:5,
            title:"TypeScript",
            src:type,
            style:'shadow-blue-700'
        },
        {
            id:6,
            title:"React.js",
            src:react,
            style:'shadow-blue-400'
        },
        {
            id:7,
            title:"Redux",
            src:redux,
            style:'shadow-blue-800'
        },
        {
            id:7,
            title:"GraphQl",
            src:grap,
            style:'shadow-pink-400'
        },
        {
            id:8,
            title:"Next.js",
            src:next,
            style:'shadow-white',
            newTitle:"(Learning!!)"
        },
        {
            id:9,
            title:"Git",
            src:git,
            style:'shadow-gray-500'
        },
        {
            id:10,
            title:"gitHub",
            src:github,
            style:'shadow-black-700'
        },
    ]


    return (
        <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                    <p className='py-6'>There are technologies that I have worked with and am improving my skills</p>
                </div>
                <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {Skills.map(({id,src,style,title,newTitle})=>(
                    <div key={id} className={'shadow-md hover:scale-150 duration-500 py-2 rounded-lg'+ " " + style}>
                        <img className='w-20 mx-auto' src={src} alt="HTML" />
                        <p className='mt-4'>{title}</p>
                        <span className='text-red-600 font-bold text-center'>{newTitle}</span>
                    </div>
                ))}

                </div>
            </div>
        </div>
    );
};

export default Skills;