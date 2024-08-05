"use client"

import React from "react";

interface UserCardProps {
  name: string;
  title: string;
  image: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, title, image }) => (
  <div className="p-4 shadow-lg rounded-lg">
    <div className="flex flex-col items-center">
      <img
        src={image as string}
        alt={name}
        className="w-[200px] h-[250px] mb-4"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{title}</p>
      <button className="text-blue-500 mt-2 font-semibold">Contact</button>
    </div>
  </div>
);

export default UserCard;

