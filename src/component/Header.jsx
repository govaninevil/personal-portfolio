import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    const [mobile, setMobile] = useState(false)
    return (
        <header className={mobile ? " m-5 p-3 lg:p-5 bg-white rounded-2xl mobile" : "m-5 p-3 lg:p-5 bg-white rounded-2xl"}>
            <div className="nevbar">
                <div className="container flex items-center justify-between ">
                    <div className="logo">
                        <a href="#" className="text-xl flex items-center text-[24px] lg:text-[28px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="h-6 lg:h-10 w-6 lg:w-10 mr-2 lg:mr-4"
                            >
                                <path
                                    fill="currentColor"
                                    d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
                                ></path>
                            </svg>
                            Nevil Govani
                        </a>
                    </div>
                    <div className="nev-box">
                        <div className="navs fixed xl:static xl:flex xl:items-center top-0 -left-full xl:-left-0 w-full h-screen xl:h-auto bg-white p-8 xl:p-0">
                            <div className="logo flex justify-between xl:hidden">
                                <a href="#" className="text-xl flex items-center text-[24px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6 mr-2"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
                                        ></path>
                                    </svg>
                                    Nevil Govani
                                </a>
                                <button id="close"  onClick={() => setMobile(false)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        id="close"
                                        className="h-8 w-8"
                                    >
                                        <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                                    </svg>
                                </button>
                            </div>
                            <ul className="mt-10 xl:flex xl:mt-0 xl:gap-4">
                                <li className="w-1/2">
                                    <Link to="/"
                                        className="flex items-center p-4 mb-2 lg:mb-0 rounded-xl hover:bg-slate-100 transition duration-300 ease-in-out text-[20px] "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.2"
                                            className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark mr-4"
                                        >
                                            <path d="M15.833 7.258 11.39 3.802a2.222 2.222 0 0 0-2.728 0L4.216 7.258a2.22 2.22 0 0 0-.858 1.754v6a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.666v-6c0-.686-.317-1.334-.859-1.755Z"></path>
                                            <path d="M13.333 12.5c-1.841 1.11-4.826 1.11-6.667 0" />
                                        </svg>
                                        Home
                                    </Link>
                                </li>
                                <li className="w-1/2">
                                    <Link to="/About"
                                        className="flex gap-3 items-center p-4 mb-2 lg:mb-0 rounded-xl hover:bg-slate-100 transition duration-300 ease-in-out text-[20px]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.2"
                                            className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                                        >
                                            <path d="M10.5 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                            <path d="M10.5 2.5c6 0 7.5 1.5 7.5 7.5s-1.5 7.5-7.5 7.5S3 16 3 10s1.5-7.5 7.5-7.5Z" />
                                            <path d="M5.5 16.708v-.041a3.333 3.333 0 0 1 3.333-3.334h3.334a3.333 3.333 0 0 1 3.333 3.334v.041" />
                                        </svg>
                                        About
                                    </Link>
                                </li>
                                <li className="w-1/2">
                                    <Link to="/Service"
                                        className="flex gap-3 items-center p-4 mb-2 lg:mb-0 rounded-xl hover:bg-slate-100 transition duration-300 ease-in-out text-[20px]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.2"
                                            className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                                        >
                                            <path d="M10.5 3.333 3.833 6.667 10.5 10l6.667-3.333L10.5 3.333ZM3.833 10l6.667 3.333L17.167 10M3.833 13.333l6.667 3.334 6.667-3.334" />
                                        </svg>
                                        Service
                                    </Link>
                                </li>
                                <li className="w-1/2">
                                    <Link to="/Project"
                                        className="flex gap-3 items-center p-4 mb-2 lg:mb-0 rounded-xl hover:bg-slate-100 transition duration-300 ease-in-out text-[20px]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.2"
                                            className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                                        >
                                            <path d="m3.503 5.998 5.949-2.591a.8.8 0 0 1 1.058.439l4.103 9.918a.834.834 0 0 1-.428 1.087l-5.948 2.59a.8.8 0 0 1-1.059-.438l-4.103-9.92a.833.833 0 0 1 .428-1.085ZM13 3.333h.833a.833.833 0 0 1 .834.834v2.916M17.167 5c.22.093.433.18.64.263a.833.833 0 0 1 .442 1.092l-1.915 4.478" />
                                        </svg>
                                        Work
                                    </Link>
                                </li>
                                {/* <li className="w-1/2">
                                    <Link to=""
                                        className="flex gap-3 items-center p-4 mb-2 lg:mb-0 rounded-xl hover:bg-slate-100 transition duration-300 ease-in-out text-[20px]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.2"
                                            className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                                        >
                                            <path d="m14.667 9.167 1.25-1.25a2.357 2.357 0 1 0-3.333-3.334l-8.75 8.75v3.334h3.333L8.834 15m2.916-9.583 3.333 3.333m.417 9.583 2.792-2.736a1.785 1.785 0 0 0 .004-2.56 1.87 1.87 0 0 0-2.608-.005l-.186.184-.186-.184a1.869 1.869 0 0 0-2.607-.005 1.787 1.787 0 0 0-.005 2.56l2.796 2.746Z" />
                                        </svg>
                                        Blog
                                    </a>
                                </li> */}
                                <li className="w-1/2">
                                    <Link to="/Contact"
                                        className="flex gap-3 items-center p-4 mb-2 lg:mb-0 rounded-xl hover:bg-slate-100 transition duration-300 ease-in-out text-[20px]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.2"
                                            className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                                        >
                                            <path d="M6.667 7.5h6.666m-6.666 3.333h5M15 3.333a2.5 2.5 0 0 1 2.5 2.5V12.5A2.5 2.5 0 0 1 15 15h-4.167l-4.166 2.5V15H5a2.5 2.5 0 0 1-2.5-2.5V5.833a2.5 2.5 0 0 1 2.5-2.5h10Z" />
                                        </svg>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <div className="contact-btn absolute xl:static bottom-24 left-8 text-[22px] rounded-xl xl:ml-5">
                                <a
                                    href="#"
                                    className="px-10 py-3 rounded-lg bg-zinc-900 text-white inline-block text-center"
                                >
                                    Let's Talk
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu xl:hidden">
                        <button id="mobile" onClick={() => setMobile(true)}>
                            <svg
                                className="h-9 w-9 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
