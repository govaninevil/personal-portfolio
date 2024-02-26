// Project_page.js
import React, { useState } from 'react';
import Header from '../component/Header';
import MoveWithCursor from '../component/MoveWithCursor';
import Shape from '../component/Shape';
import About from '../component/About';
import Paginate from '../component/Paginate';
import glysis from '../assets/image/Glysis-softwere.png'
import narad from '../assets/image/narad.png'

const Project_page = () => {
  const [currentPage, setCurrentPage] = useState(0); // Current page state

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  // Your content data
  const slides = [
    { id: 1, imageUrl: glysis , link: 'https://glysis-digital.netlify.app/', name: 'Glysis Digital', tecno: 'Html, Tailwind'},
    { id: 2, imageUrl: narad, link: 'https://naradgo.in/', name: 'Narad Aushdh Bandar', tecno: 'Wordpress' },
    { id: 3, imageUrl: narad, link: 'https://naradgo.in/', name: 'Narad Aushdh Bandar', tecno: 'Wordpress' },
    { id: 4, imageUrl: glysis , link: 'https://glysis-digital.netlify.app/', name: 'Glysis Digital', tecno: 'Html, Tailwind' },
    { id: 5, imageUrl: glysis , link: 'https://glysis-digital.netlify.app/', name: 'Glysis Digital', tecno: 'Html, Tailwind' },
    { id: 6, imageUrl: narad, link: 'https://naradgo.in/', name: 'Narad Aushdh Bandar', tecno: 'Wordpress' },
  ];

  // Calculate the start and end index for the current page
  const startIndex = currentPage * 2;
  const endIndex = Math.min(startIndex + 2, slides.length);

  return (
    <div>
      <MoveWithCursor />
      <Shape />
      <div className="md:container mx-auto">
        <Header />
        <div className="lg:grid grid-cols-3">
          <div>
            <About />
          </div>
          <div className="service col-span-2">
            <section className='m-5 px-10 pt-8 pb-4 bg-white rounded-xl'>
              <div className="title">
                <h2 className='text-4xl font-bold'>Check Out My Latest <span className='text-blue-800 mr-2'>Projects</span>👋</h2>
              </div>
              <div className="content">
                <p className='text-2xl text-slate-400 mt-8'>I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
              </div>
              <div className="project-page">
                <div className="slides-container">
                  {slides.slice(startIndex, endIndex).map((slide) => (
                    <div key={slide.id} className="slide group relative overflow-hidden rounded-lg bg-slate-100 p-4 pb-0 md:p-6 md:pb-0 xl:p-10 xl:pb-0 my-8">
                      <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
                      <div class="flex flex-wrap items-start justify-between py-4 md:p-6 bg-white">
                        <div class="">
                          <h3 class="text-lg font-medium md:text-xl lg:text-2xl">
                            <p class=" text-black">
                              {slide.name}
                            </p>
                          </h3>
                          <p class="text-sm text-muted lg:text-base">
                            {slide.tecno}
                          </p>
                        </div>
                        <a href={slide.link} target='_blank' class="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-black transition hover:text-blue-600">
                          <span>Visit Site</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0">
                            <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <Paginate pageCount={Math.ceil(slides.length / 2)} onPageChange={handlePageChange} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_page;
