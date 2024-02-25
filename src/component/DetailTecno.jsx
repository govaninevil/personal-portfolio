import React from 'react'
import Card from './DetailTecnoCard'
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

const DetailTecno = () => {
    const data =[
        { id: 1, img: htmlIcon },
        { id: 2, img: cssIcon},
        { id: 3, img: jsIcon},
        { id: 4, img: rIcon},
        { id: 5, img: wordPressIcon},
        { id: 6, img: tailwindIcon},
        { id: 7, img: photoshopIcon},
        { id: 8, img: aiIcon},
        { id: 9, img: figmaIcon},
        { id: 10, img: xdIcon}
    ]
  return (
    <div>
      <section className='detailtecon mt-16'> 
        <div className="title mb-8">
            <h2 className='text-3xl font-bold'>Here I Demonstrate the Extent of My ✨ Technical Expertise</h2>
        </div>
        <div className="tecno flex flex-wrap gap-10 items-center">
            {data.map((item, index) => (
                <Card item={item} />
            ))}
        </div>
      </section>
    </div>
  )
}

export default DetailTecno