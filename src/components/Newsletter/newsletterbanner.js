import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bgImage from "../../../public/Images/Newsletter/minotti-patio.jpg";

const newsletterbanner = () => {
  return (
    <div>
         <div className="relative w-full h-150 pt-25">
          {/* Background image */}
          <Image
            src={bgImage}
            alt="Newsletter"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            placeholder="blur"
            quality={75}
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 z-10" />
      
          <div className="relative z-20 flex flex-col items-center justify-center h-full">
            <div className="flex items-center justify-center text-white gap-2 mb-8">
              <div>
                <Link href="/"><p className="text-sm font-normal">HOME</p></Link>
              </div>
              <div><p>/</p></div>
              <div><Link href="#"><p className="text-sm font-normal">NEWSLETTER</p></Link></div>
            </div>
            <p className="font-bold text-4xl md:text-5xl tracking-normal text-white text-center">
              Newsletter
            </p>
          </div>
        </div>
    </div>
  )
}

export default newsletterbanner
