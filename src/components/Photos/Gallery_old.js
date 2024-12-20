"use client"

import React from 'react'
import front from "../../../public/images/blog/blog-03.jpg"
import liveroom from "../../../public/images/blog/blog-03.jpg"
import cleanKitchen from "../../../public/images/blog/blog-03.jpg"
import car1 from "../../../public/images/blog/blog-03.jpg"
import carin from "../../../public/images/blog/blog-03.jpg"
import commerical from "../../../public/images/blog/blog-03.jpg"
import Image from 'next/image'

const PhotoItem = ({imageSrc, altText}) => (
    
        <div className='transition-transform duration-300 ease-in-out cursor-pointer'>
        <Image
        src={imageSrc}
        className='px-4 py-4 w-full h-full object-cover transform scale-100 group-hover:scale-105' 
        alt={altText}
        />
        </div>
)

const rooms = [
    {
      imageSrc: front,
      altText: 'Room',
    },
    {
      imageSrc: liveroom,
      altText: 'Livingroom',
    },
    {
      imageSrc: cleanKitchen,
      altText: 'CleanKitchen',
    },
    {
        imageSrc: car1,
        altText: 'Car',
      },
      {
        imageSrc: carin,
        altText: 'Vehicle Interior',
      },
      {
        imageSrc: commerical,
        altText: 'Commerical',
      },
  ];

const Gallery = () => {   
           
  return (
    <section className='py-16 px-4 md:px-28'>
        <div className='container mx-auto'>
            <div className='grid gap-10 py-10'>
                <p className='opacity-60 font-light sm:text-lg'>
                Serveyoo Cleaning is your trusted partner in creating pristine and inviting spaces. With a passion for cleanliness and a commitment to excellence, we specialize in delivering top-tier cleaning solutions that transform environments.</p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[8px]'>
                {rooms.map((room, index) => (
                    <PhotoItem
                    key={index}
                    imageSrc={room.imageSrc}
                    altText={room.altText}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Gallery