
import { BadgeCheck, Hourglass } from 'lucide-react';
import React from 'react'

export const Status = ({name, email, completed, pending}) => {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            height={200}
            width={200}
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${name}`}
          />
        </div>
        <div className="text-sm">
          <p>{name}</p>
          <div className=" text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {email}
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <BadgeCheck className="h-4 w-4 text-gray-500" /> :
          <p className="text-[#4CAF94]">{completed}</p>
        </div>
        <span className=" text-gray-500">|</span>
        <div className="flex items-center justify-center">
          <Hourglass className="h-4 w-4 text-gray-500" /> :
          <p className="text-[#D8534F]">{pending}</p>
        </div>
      </div>
    </div>
  );
}
