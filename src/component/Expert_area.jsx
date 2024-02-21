import React from 'react'
import Exper_area_card from './Exper_area_card'
import htmlIcon from '../assets/image/html-svg.svg'
import cssIcon from '../assets/image/css.svg'
import jsIcon from '../assets/image/javascript.svg'
import rIcon from '../assets/image/react.svg'
import tailwindIcon from '../assets/image/tailwindcss.svg'
import figmaIcon from '../assets/image/figma.svg'
import xdIcon from '../assets/image/xd.svg'
import photoshopIcon from '../assets/image/photoshop.svg'
import aiIcon from '../assets/image/ai.svg'
import wordPressIcon from '../assets/image/wordPress.svg'

const Expert_area = () => {
    const ltr = [
        { id: 1, img: htmlIcon, name: "Html" },
        { id: 2, img: cssIcon, name: "Css" },
        { id: 3, img: jsIcon, name: "Java Script" },
        { id: 4, img: rIcon, name: "React Js" },
        { id: 5, img: wordPressIcon, name: "Wordpress" }
    ]
    const rtl =[
        { id: 1, img: xdIcon, name: "Xd" },
        { id: 2, img: photoshopIcon, name: "Photoshop" },
        { id: 3, img: aiIcon, name: "Illustrator" },
        { id: 4, img: figmaIcon, name: "Figma" },
        { id: 5, img: tailwindIcon, name: "Tailwind Css" }
    ]
    return (
        <div>
            <section className='m-5 px-5 py-3 bg-white rounded-xl'>
                <div className="Work">
                    <div className="heading mb-6">
                        <h2 className='text-[25px] font-[600] my-3'>My Expert Area</h2>
                    </div>
                    <div className="experience  overflow-x-hidden mb-5 ">
                        <div className="box flex gap-x-5 animate-[infinitescroll_10s_infinite]">
                            {ltr.map((item, index) => (
                                <Exper_area_card item={item} />
                            ))}
                        </div>
                    </div>
                    <div className="experience  overflow-x-hidden  ">
                        <div className="box flex gap-x-5 animate-[rtlinfinitescroll_10s_infinite]">
                            {rtl.map((item, index) => (
                                <Exper_area_card item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Expert_area
