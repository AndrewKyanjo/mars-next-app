"use client";
import React from "react";

const ExploreBtn = () => {
    return (
        <div>
            {" "}
            <p
                onClick={() => console.log("Explore clicked!")}
                className=" text-center mt-4 text-lg"
            >
                Explore
            </p>
        </div>
    );
};

export default ExploreBtn;
