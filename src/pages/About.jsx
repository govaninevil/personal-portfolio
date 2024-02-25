import React from 'react'
import Header from '../component/Header'
import MoveWithCursor from '../component/MoveWithCursor'
import Shape from '../component/Shape'
import About2 from '../component/About'
import CircleText from '../assets/image/circle-text.svg'
import DetailTecno from '../component/DetailTecno'
import ClientReview from '../component/ClientReview'
import Project from '../component/Project'

const About = () => {
    return (
        <div>
            <MoveWithCursor />
            <Shape />
            <div className="md:container mx-auto">
                <Header />
                <div className="grid grid-cols-3">
                    <div>
                        <About2 />
                        {/* <Project /> */}
                    </div>

                    <div className="moreAbout col-span-2 overflow-y-scroll">
                        <section className='m-5 px-10 pt-8 pb-4 bg-white rounded-xl'>
                            <div className='flex justify-between'>
                                <div className="title">
                                    <h2 className='text-4xl font-bold'>Hi, This is <span className='text-blue-800 mr-2'>Nevil Govani</span>👋</h2>
                                </div>
                                <div class="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-slate-100 px-4 py-2 text-center text-base font-medium leading-none text-blue-600 lg:text-lg">
                                    <span class="relative flex h-3 w-3 shrink-0">
                                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                        <span class="relative inline-flex h-3 w-3 rounded-full bg-blue-700"></span>
                                    </span>
                                    <span>Available For Hire</span>
                                </div>
                            </div>
                            <div className='flex items-end justify-between'>
                                <div className="num w-[75%]">
                                    <p className='text-2xl text-slate-400 mt-8'> A dedicated <span className='font-bold text-black'>Web Designer 🖥️</span> & <span className='font-bold text-black'>Graphic Designer</span> professional with <span className='font-bold text-black'>2 years</span> of experience,Passion drives my commitment to creating exceptional digital experiences. </p>
                                    <div className="row flex gap-20 mt-16">
                                        <div className="box">
                                            <h2 className='text-4xl text-black font-[600]'>01+</h2>
                                            <p className='text-slate-500'>Year of Experience</p>
                                        </div>
                                        <div className="box">
                                            <h2 className='text-4xl text-black font-[600]'>20+</h2>
                                            <p className='text-slate-500'>Project Completed</p>
                                        </div>
                                        <div className="box">
                                            <h2 className='text-4xl text-black font-[600]'>15+</h2>
                                            <p className='text-slate-500'>Happy Client</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative -mt-6 hidden h-[100px] w-[100px] p-4 lg:block xl:-mt-10 mr-5">
                                    <img src={CircleText} alt="" class="absolute inset-0 h-full w-full animate-spin" />
                                    <div class="grid h-full w-full place-content-center rounded-full bg-blue-600 text-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-10 w-10">
                                            <path d="M20 5v30m-5-5 5 5 5-5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <DetailTecno />
                            <ClientReview />
                            <div class="mt-10 lg:mt-14">
                                <div class="group flex gap-6 overflow-hidden rounded-lg bg-slate-200 p-6">
                                    <div class="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                                        <a href="contact.html" class="relative inline-block whitespace-nowrap text-3xl font-medium text-slate-500 transition before:mr-3 before:content-['\2022'] hover:text-black  md:text-[40px]">
                                            Let's 👋 Work Together
                                        </a>
                                        <a href="contact.html" class="relative inline-block whitespace-nowrap text-3xl font-medium text-slate-500 transition before:mr-3 before:content-['\2022'] hover:text-black  md:text-[40px]">
                                            Let's 👋 Work Together
                                        </a>
                                    </div>
                                    <div class="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                                        <a href="contact.html" class="relative inline-block whitespace-nowrap text-3xl font-medium text-slate-500 transition before:mr-3 before:content-['\2022'] hover:text-black  md:text-[40px]">
                                            Let's 👋 Work Together
                                        </a>
                                        <a href="contact.html" class="relative inline-block whitespace-nowrap text-3xl font-medium text-slate-500 transition before:mr-3 before:content-['\2022'] hover:text-black  md:text-[40px]">
                                            Let's 👋 Work Together
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
