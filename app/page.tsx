import React from "react";
import ExploreBtn from "@/components/ExploreBtn";
import NavBar from "@/components/NavBar";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants";

const page = () => {
    return (
        <section>
            <NavBar />
            <h1 className="text-3xl font-bold text-center mt-10">
                Welcome to the Dev Events Centre!
            </h1>
            <p className="text-center mt-4 text-lg ">
                The Centre for Developer Events in Africa
            </p>
            <ExploreBtn  />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3>Featured Events</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <EventCard key={event.title} {...event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default page;
