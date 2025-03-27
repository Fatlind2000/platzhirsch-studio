'use client';

import React from 'react';
import Image from 'next/image';
import { HiOutlineMail } from 'react-icons/hi';

const TeamMember = () => {
  const team = [
    {
      name: 'John Portman',
      role: 'Designer',
      image: '/Images/Team/reading-area.jpg',
      email: 'john.portman@example.com',
    },
    {
      name: 'Alison Clutcher',
      role: 'Photographer',
      image: '/Images/Team/reading-area.jpg',
      email: 'alison.clutcher@example.com',
    },
    {
      name: 'Russell Otten',
      role: 'Operations Manager',
      image: '/Images/Team/reading-area.jpg',
      email: 'russell.otten@example.com',
    },
    {
      name: 'Julie Crawford',
      role: 'Architect',
      image: '/Images/Team/reading-area.jpg',
      email: 'julie.crawford@example.com',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <p className="text-[#daa14c] uppercase tracking-widest font-semibold mb-2">
      unser Team kennen
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-[#1f1f1f] mb-12">
         Wir gestalten Lebensräume,<br className="hidden md:block" />  die begeistern.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {team.map((member, index) => (
          <div key={index} className="text-center group overflow-hidden">
            {/* Image container */}
            <div className="relative w-full h-[400px] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={`mailto:${member.email}`}
                  className="text-white text-3xl hover:text-[#daa14c] transition"
                >
                  <HiOutlineMail />
                </a>
              </div>
            </div>

            <p className="font-bold mt-4 text-[#1f1f1f]">{member.name}</p>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
