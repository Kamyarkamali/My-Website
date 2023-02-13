import React from 'react';

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>I am Kamyar Kamali Kamazani, a programmer and website designer.
                            I have been learning programming for a year and have created several projects
                            I am interested in learning and working in a team!Why programming? Because I love to make and createI want to go from being a junior to being a senior and being a full stack developer</p>
                <br/>
                <p className='text-xl'>I live in the west of Tehran Master's degree in accounting from Shahr Quds University</p>
            </div>
        </div>
    );
};

export default About;