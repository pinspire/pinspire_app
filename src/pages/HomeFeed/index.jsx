import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

const HomeFeed = () => {
    // const [images, setImages] = useState([]);

    // // Load initial images
    // useEffect(() => {
    //     loadImages();
    // }, []);
// const loadImages = () => {
//     //     const heights = [400, 218]; // Two small boxes for every large box
//     //     const newImages = Array.from({ length: 6 }).map((_, index) => ({
//     //         id: Math.random(),
//     //         height: heights[index % heights.length],
//     //         offset: Math.floor(Math.random() * 50) - 25, // Random offset between -25px and 25px
//     //     }));
//     //     setImages(newImages);
//     // Function to load images with specific heights
//     // 
//     };



    return (
        <div>
            <div className="flex flex-col">
            <Navbar />
            <div className="mt-24">
                <div>
                    
                </div>
                {/* <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    style={{ gridAutoRows: "min-content", minHeight: "120vh" }}
                >
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className="overflow-hidden rounded-lg shadow-lg"
                            style={{
                                height: `${image.height}px`,
                                transform: `translateY(${image.offset}px)`, // Offset each box
                                transition: "transform 0.3s ease",
                            }}
                        >
                            <img
                                src={`https://via.placeholder.com/200x${image.height}`}
                                alt="Placeholder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div> */}
            </div>
            </div>
        </div>
    );
};

export default HomeFeed;
