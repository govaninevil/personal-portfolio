import React from 'react'

const Work_together = () => {
  return (
    <section className='m-5 p-5 bg-white rounded-xl h-[335px]'>
      <div className="rounded-2xl bg-white p-6 shadow">
        <marquee
          behavior="scroll"
          direction="left"
          className="overflow-hidden text-nowrap rounded-lg bg-slate-100 p-3 text-lg font-medium text-muted "
        >
          Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀
          Crafting Digital Experiences 🎨
        </marquee>
        <h2 className="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light">
          Let's👋 <br />
          Work Together
        </h2>
        <a href=''
          className="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-blue-700 transition hover:border-b-blue-700 "
        >
          <span>Let's Talk</span>
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
    </section>
  )
}

export default Work_together
