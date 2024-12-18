"use client"

import React from "react";

interface UserCardProps {
  name: string;
  title: string;
  image: string;
  phone: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, title, image, phone }) => (
  <div className="pb-4 shadow-xl rounded-xl w-full">
    <div className="flex flex-col">
      <img
        src={image as string}
        alt={name}
        className="h-[350px] w-full mb-4 object-cover relative rounded-t-xl"
      />
      <div className="ml-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">{title}</p>
        <p className="text-gray-500">{phone}</p>
        <a href={`tel:${phone}`} className="text-blue-500 mt-2 font-semibold">
          Contact
        </a>
      </div>
    </div>
  </div>
);

export default UserCard;

