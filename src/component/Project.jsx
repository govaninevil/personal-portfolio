import React from 'react'
import Glysis from '../assets/image/Glysis-softwere.png'
import Narad from '../assets/image/narad.png'

const project = () => {
    return (
        <div>
            <div>
                <section className='m-5 px-5 py-3 bg-white rounded-xl'>
                    <div className="heading mb-5 flex justify-between items-center">
                        <h2 className='text-[25px] font-[600] my-3'>Recent Project</h2>
                        <a href="#" className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-blue-700 transition hover:border-b-blue-700"><span>All Projects</span>
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
                            </svg></a>
                    </div>
                    <div className="project">
                        <div className="box p-5  rounded-xl bg-slate-100 mb-5">
                            <img src={Glysis} alt="" className='h-[160px] sm:h-[270px] mx-auto' />
                            <div className='detail mt-5'>
                                <h4 className='text-2xl '>Glysis Digital Pvt. Ltd.</h4>
                                {/* <p className='mb-3'>“Albero Pharma” a pharmaceutical company based in Vapi, Gujarat. We have designed and developed their Website.</p> */}
                            </div>
                        </div>
                        <div className="box p-5  rounded-xl bg-slate-100 mb-5">
                            <img src={Narad} alt="" className='h-[160px] sm:h-[270px] mx-auto' />
                            <div className='detail mt-5'>
                                <h4 className='text-2xl '>Narad Aushadh Bhandar</h4>
                                {/* <p className='mb-3'>“Albero Pharma” a pharmaceutical company based in Vapi, Gujarat. We have designed and developed their Website.</p> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default project
