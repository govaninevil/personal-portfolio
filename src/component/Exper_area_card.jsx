import React from 'react'

const Exper_area_card = ({ item }) => {
  return (
    <div>
        <div className="skill-box rounded-xl">
            <div className="img-box bg-slate-100 p-3 rounded-xl w-[200px]">
                <img src={item.img} alt="" className='w-20 h-20 mx-auto'/>
            </div>
            <div className="name">
                <p className='text-center text-stone-600 text-[20px]'>
                    {item.name}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Exper_area_card
