import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const ClientReview = () => {
  const reviews = [
    { id: 1, name: 'Yuvraj rana - ', review: '"Working with Nevil Govani was a seamless experience from start to finish. They were responsive, collaborative, and consistently delivered high-quality work. I highly recommend them to anyone in need of web development and digital marketing expertise."', post: 'Marketing Manager', star: '⭐⭐⭐⭐⭐'},
    { id: 2, name: 'Jane Smith - ', review: 'Excellent work, exceeded my expectations!', post: 'Project Maneger', star: '⭐⭐⭐⭐⭐'},
    { id: 3, name: 'Alice Johnson - ', review: 'Wonderful experience, will definitely return!', post: 'Project Maneger', star: '⭐⭐⭐⭐'},
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev"><BsArrowLeftSquare className='w-10 h-10 text-blue-500' /></button>,
    nextArrow: <button className="slick-next"><BsArrowRightSquare className='w-10 h-10 text-blue-500' /></button>,
  };
  return (
    <div>
      <section className="slider mt-16">
        <div className="title mb-8">
          <h2 className='text-3xl font-bold'>Feedback from Our Clients</h2>
        </div>
        <Slider {...settings}>
          {reviews.map(review => (
            // <div key={review.id}>
            //   <h3>{review.name}</h3>
            //   <p></p>
            // </div>
            <div className="flex h-full flex-col justify-between rounded-lg bg-slate-100 p-6" key={review.id}>
              <div className="star">
                {review.star}
              </div>
              <blockquote className="mt-6 flex-1 text-lg">
                {review.review}
              </blockquote>
              <p className="mt-8 font-medium text-xl">
                {review.name}
                <span className="font-normal text-muted">{review.post}</span>
              </p>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  )
}

export default ClientReview
