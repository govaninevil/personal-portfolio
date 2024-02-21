import React from 'react'
import gradient1 from '../assets/image/gradient-1.png'
import gradient2 from '../assets/image/gradient-2.png'
import shape1 from '../assets/image/object-3d-1.png'
import shape2 from '../assets/image/object-3d-2.png'

const Shape = () => {
  return (
    <div>
      <div className="shapes">
        <div className="fixed -left-1/2 -top-1/2 -z-10 animate-spin xl:-left-[20%] xl:-top-1/3">
          <img src={gradient1} alt="" className="" />
        </div>
        <div className="fixed -right-[50%] top-[10%] -z-10 animate-spin duration-300 xl:-right-[15%] xl:top-[10%]">
          <img src={gradient2} alt="" className="" />
        </div>
        <div
          className="move-with-cursor fixed left-[5%] top-[20%] -z-10"
          style={{
            transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0s",
            transform: "translate(4.75px, 2.62px) rotate(7.37deg)"
          }}
        >
          <img src={shape1} alt="" className="" />
        </div>
        <div
          className="move-with-cursor fixed bottom-[20%] right-[5%] -z-10"
          style={{
            transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0s",
            transform: "translate(4.75px, 2.62px) rotate(7.37deg)"
          }}
        >
          <img src={shape2} alt="" className="" />
        </div>
      </div>
    </div>
  )
}

export default Shape
