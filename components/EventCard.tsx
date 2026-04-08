import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { EventItem } from "@/lib/constants";

type Props = EventItem;

const EventCard = ({ title, image, date, location, time }: Props) => {
  return (
    <Link href="#" className="block h-full">
      {/* Inner container: flex column, full height for consistent card size */}
      <div className="flex flex-col h-full">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="h-48 w-full object-cover rounded border mb-4"
        />
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-gray-600 flex items-center mt-1">
          <FaCalendarAlt className="mr-2 shrink-0" />
          <span>Date: {date}</span>
        </p>
        <p className="text-gray-600 flex items-center mt-1">
          <FaMapMarkerAlt className="mr-2 shrink-0" />
          <span>Location: {location}</span>
        </p>
        <p className="text-gray-600 flex items-center mt-1">
          <FaClock className="mr-2 shrink-0" />
          <span>Time: {time}</span>
        </p>
      </div>
    </Link>
  );
};

export default EventCard;