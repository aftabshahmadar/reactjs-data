import React from 'react';
import html from './assets/images/html.png';
import css from './assets/images/css.png';
import js from './assets/images/js.png';
import react from './assets/images/react.png';

export default function Experience() {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: 'HTML',
      progress: 90,
    },
    {
      id: 2,
      logo: css,
      name: 'CSS',
      progress:70,
    },
    {
      id: 3,
      logo: js,
      name: 'JavaScript',
      progress: 80,
    },
    {
      id: 4,
      logo: react,
      name: 'React',
      progress: 50,
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div>
          <h1 className="text-3xl font-bold mb-5">Experiences</h1>
          <p className="font-semibold">
            I have worked and currently working on the below technologies.
          </p>
          {/* Add grid styling here */}
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 mt-10">
            {cardItems.map(({ id, logo, name }) => (
              <div
                className="p-5 flex flex-col items-center border-2 rounded-full shadow-lg cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[150px] h-[150px] object-cover rounded-full border-2"
                  alt={name}
                 
                />
                 <div className="px-2 font-bold text-xl mt-2">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
