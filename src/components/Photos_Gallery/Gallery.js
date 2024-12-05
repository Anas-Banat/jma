import React from 'react'
import front from "../public/front.png"
import liveroom from "../public/liveroom.png"
import cleanKitchen from "../public/cleanKitchen.png"
import car1 from "../public/car1.png"
import carin from "../public/carin.png"
import commerical from "../public/commerical.png"
import Image from 'next/image'

const RoomItem = ({imageSrc, altText, title}) => (
    <span
    className='group relative over-hidden'
    >
        <div className='group-hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'>
        <Image
        src={imageSrc}
        className='w-full h-full object-cover transform scale-100 group-hover:scale-105' alt={altText}
        />
        </div>
        <div className='absolute bottom-0 left-2/4 -translate-x-2/4 text-black font-medium uppercase text-xl md:text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
            {title}
        </div>

    </span>
)

const rooms = [
    {
      imageSrc: front,
      altText: 'Room',
      title: 'Room',
    },
    {
      imageSrc: liveroom,
      altText: 'Livingroom',
      title: 'LivingRoom',
    },
    {
      imageSrc: cleanKitchen,
      altText: 'CleanKitchen',
      title: 'CleanKitchen',
    },
    {
        imageSrc: car1,
        altText: 'Car',
        title: 'Car',
      },
      {
        imageSrc: carin,
        altText: 'Vehicle Interior',
        title: 'Vehicle Interior',
      },
      {
        imageSrc: commerical,
        altText: 'Commerical',
        title: 'Commerical',
      },
  ];

const RoomSection = () => {   
           
  return (
    <section className='py-16 px-4 md:px-28'>
        <div className='container mx-auto'>
            <h2 className='text-4xl sm:text-[46px] text-center text-primary mb-3'>Results & Rooms</h2>
            <div className='grid gap-10 md:grid-cols-2 py-10'>
                <p className='opacity-60 font-light sm:text-lg'>
                Serveyoo Cleaning is your trusted partner in creating pristine and inviting spaces. With a passion for cleanliness and a commitment to excellence, we specialize in delivering top-tier cleaning solutions that transform environments.

                </p>
                <ul className='py-5 sm:py-9 px-7 bg-primary rounded-3xl'>
                    <li className='grid items-center grid-cols-[32px_auto] my-1'>
                        <image
                            src='https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg'
                            alt='broom'
                        />
                        <span className='text-white font-light ml-2'>Hands on Cleaning</span>
                    </li>
                    <li className='grid items-center grid-cols-[32px_auto] my-1'>
                        <image
                            src='https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            alt='mop'
                        />
                        <span className='text-white font-light ml-2'>Efficent & Respectful</span>
                    </li>
                    <li className='grid items-center grid-cols-[32px_auto] my-1'>
                        <image
                            src='https://images.pexels.com/photos/4108726/pexels-photo-4108726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            alt='sponge'
                        />
                        <span className='text-white font-light ml-2'>Healthy & Beautiful</span>
                    </li>
                </ul>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[8px]'>
                {rooms.map((room, index) => (
                    <RoomItem
                    key={index}
                    imageSrc={room.imageSrc}
                    altText={room.altText}
                    title={room.title}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default RoomSection