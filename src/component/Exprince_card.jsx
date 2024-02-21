import React from 'react'

const Exprince_card = ({ item }) => {
    return (
        <div className="border border-blue-100 rounded-xl p-3 mb-3">
            <div className="flex justify-between ">
                <div className="name font-[600] text-[20px]">
                    {item.name}
                </div>
                <div className="date text-[16px]">
                    {item.date}
                </div>

            </div>
            <div className="post text-[14px]">
                {item.post}
            </div>
        </div>
    )
}

export default Exprince_card
