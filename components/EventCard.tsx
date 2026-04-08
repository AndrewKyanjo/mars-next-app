import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt,FaClock, FaTimes } from "react-icons/fa";
import { EventItem } from "@/lib/constants";

type Props = EventItem;

const EventCard = ({ title, image, date, location, time }: Props) => {
    return (
        <Link href="#" >
          {// Use Next.js Image component for optimized image loading
            //should have a rounded border and a fixed height of 200px, and the image should cover the entire area without distortion
          }
            <Image src={image} alt={title} width={300} height={200} className=" h-48 object-cover mb-4 rounded border"    />
            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="text-gray-600 flex items-center">
                <FaCalendarAlt className="mr-2" />
                Date: {date}
            </p>
            <p className="text-gray-600 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                Location: {location}
            </p>
            <p className="text-gray-600 flex items-center">
                <FaClock className="mr-2" />
                Time: {time}
            </p>
        </Link>
    );
};

export default EventCard;
