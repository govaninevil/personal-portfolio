import React from 'react'
import Header from '../component/Header';
import MoveWithCursor from '../component/MoveWithCursor';
import Shape from '../component/Shape';
import About from '../component/About';

const Contact = () => {
  return (
    <div>
      <MoveWithCursor />
      <Shape />
      <div className="md:container mx-auto">
        <Header />
        <div className="lg:grid grid-cols-3">
          <div>
            <About />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
