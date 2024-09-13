import React from 'react';

export default function Header() {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10">
            <div className="flex items-start">
                {/* Left side - Image and text content */}
                <div className="flex-shrink-0 mr-10">
                    <img src='/src/assets/images/profile2.png' className='h-74  -ms-32 rounded ' alt="Profile" />
                </div>

                {/* Right side - Text content */}
                <div className="flex-1">
                    <h1 className='text-5xl font-bold -ms-40'>Aftab Shahmadar</h1>
                    <p className='text-xl mt-2 -ms-40'>Creative Front-End Developer</p>
                    <p className='text-lg mt-4 -ms-40'>
                    My name is Aftab Shahmadar, and I completed my 10th standard at Saint Mary's High School in Upleta. Following that, I pursued a 3-year diploma in Computer Engineering at Radhe Institute of Engineering, also located in Upleta. Currently, I am attending specialized classes in React.js development in Rajkot to deepen my expertise in modern front-end technologies. Alongside my formal education, I have independently studied and mastered CSS, HTML, JavaScript, and Bootstrap through online courses and self-learning. I am passionate about constantly improving my skills and staying updated with the latest industry trends. With a strong commitment to hard work and a desire to push my career forward, I am eager to contribute to projects that challenge me and allow me to grow as a developer.
                    </p>
                </div>
            </div>
        </section>
    );
}
