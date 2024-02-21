import React from 'react'

const ServiceCard = ({ item }) => {
  return (
    <div className='mx-auto w-full'>
      <div className="rounded-2xl bg-slate-100 p-2 text-center mb-8 lg:mb-0 md:p-6 mx-3">
        <div className="grid place-content-center rounded-lg bg-white p-6 px-9">
          {item.img}
        </div>
        <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
          {item.name}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
