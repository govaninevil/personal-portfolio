import React from 'react'
import Exprince_card from './Exprince_card'

const Work = () => {
    const data =[
        {id: 1, date: "2019-2021", name: "Alain Software", post: "Web Designer"},
        {id: 2, date: "2021-2022", name: "Pixlet Studio", post: "Web Designer"},
        {id: 3, date: "2022-2024", name: "Glysis Software", post: "Sr. Web Designer"}
    ]
    return (
        <div>
            <section className='m-5 px-5 py-3 bg-white rounded-xl'>
                <div className="Work">
                    <div className="heading mb-5">
                        <h2 className='text-[25px] font-[600] my-3'>Work Experience</h2>
                    </div>
                    <div className="experience">
                        {data.map((item, index) => (
                            <Exprince_card item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work
