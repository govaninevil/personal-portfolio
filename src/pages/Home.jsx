import {useState} from 'react'
import '../App.css'
import Header from '../component/Header.jsx'
import About from '../component/About.jsx'
import Service from '../component/Service.jsx'
import Work from '../component/Work.jsx'
import Expert_area from '../component/Expert_area.jsx'
import Project from '../component/Project.jsx'
import MoveWithCursor from '../component/MoveWithCursor.jsx'
import Shape from '../component/Shape.jsx'
import Work_together from '../component/Work_together.jsx'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <MoveWithCursor/>
      <Shape />
      <div className="md:container mx-auto">
        <Header />
          <div className="lg:grid grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-1">
            <div className="row-span-2">
              <About />
            </div>
            <div>
              <Work />
            </div>
            <div className="row-span-2">
              <Project />
            </div>
            <div>
              <Expert_area />
            </div>
            <div className='lg:row-span-2 xl:col-span-2 xl:row-span-1'>
              <Service />
            </div>
            <Work_together />
          </div>
      </div>
    </div>
  )
}


export default Home;