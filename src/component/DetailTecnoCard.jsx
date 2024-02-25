import React from 'react'

const DetailTecnoCard = ({ item }) => {

    return (
        <div>
            <div className="rounded-xl p-8 bg-slate-200 w-full">
                <img src={item.img} alt="" className='w-20 h-20 mx-auto' />
            </div>
        </div>
    )
}

export default DetailTecnoCard
