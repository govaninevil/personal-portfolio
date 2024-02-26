import React from "react";
import Card from "./Service-card";


const Service = () => {
  const data = [
    {
      id: 1, name: "UI/UX Designer", img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-12 w-12 text-primary lg:h-20 lg:w-20  text-blue-500">
        <path d="M8 13.333A5.333 5.333 0 0 1 13.333 8h37.334A5.333 5.333 0 0 1 56 13.333v37.334A5.333 5.333 0 0 1 50.667 56H13.333A5.333 5.333 0 0 1 8 50.667V13.333ZM40 8 8 40M25.334 8l-16 16M53.333 9.333 38.667 24M24 40 10.666 53.333"></path>
        <path d="M56 24H24v32"></path>
      </svg>
    },
    {
      id: 2, name: "Web Devlopment", img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-12 w-12 text-primary lg:h-20 lg:w-20  text-blue-500">
        <path d="M33.333 42.667H10.667A2.667 2.667 0 0 1 8 40V13.333a2.667 2.667 0 0 1 2.667-2.666h42.666A2.667 2.667 0 0 1 56 13.333v21.334M18.667 53.333h10.666M24 42.667v10.666M53.333 56l5.334-5.333-5.334-5.334m-8 0L40 50.667 45.333 56"></path>
      </svg>
    }, {
      id: 3, name: "Degital Marketing", img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-12 w-12 text-primary lg:h-20 lg:w-20  text-blue-500">
        <path d="M10.666 13.333a2.667 2.667 0 0 1 2.667-2.666h37.334a2.667 2.667 0 0 1 2.666 2.666v5.334a2.667 2.667 0 0 1-2.666 2.666H13.332a2.666 2.666 0 0 1-2.667-2.666v-5.334Zm0 21.334A2.667 2.667 0 0 1 13.333 32H24a2.667 2.667 0 0 1 2.666 2.667v16A2.667 2.667 0 0 1 24 53.333H13.333a2.666 2.666 0 0 1-2.667-2.666v-16ZM37.334 32h16m-16 10.667h16m-16 10.666h16"></path>
      </svg>
    }, {
      id: 4, name: "Graphic Desing", img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-12 w-12 text-primary lg:h-20 lg:w-20  text-blue-500">
        <path d="M36.214 36.773a15.982 15.982 0 0 1 1.12 5.894A15.86 15.86 0 0 1 32 54.56a15.814 15.814 0 0 1-10.666 4.107c-8.827 0-16-7.174-16-16 0-7.36 5.013-13.6 11.786-15.44"></path>
        <path d="M46.88 27.227c6.773 1.84 11.787 8.08 11.787 15.44 0 8.826-7.174 16-16 16A15.814 15.814 0 0 1 32 54.56"></path>
        <path d="M16 21.333a16 16 0 1 0 32 0 16 16 0 0 0-32 0Z"></path>
      </svg>
    },

  ];
  return (
    <div>
      <section className='m-5 px-5 py-3 bg-white rounded-xl'>
        <div className="heading mb-5 md:flex md:flex-wrap lg:justify-between items-center">
          <h2 className='text-[25px] font-[600] my-3'>Service I Offerd</h2>
          <a href="#" className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-blue-700 transition hover:border-b-blue-700"><span>See All Services</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <path d="M17.5 11.667v-5h-5" />
            <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
          </svg>
          </a>
        </div>
        <div className="service-box sm:grid grid-cols-2 xl:grid-cols-4 gap-y-5 mb-4">
          {data.map((item, index) => (
            <Card item={item} />
          ))}
        </div>
      </section>


    </div>
  );
};

export default Service;
