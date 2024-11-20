// components/MasonryGrid.js
import React from 'react';

const images = [
    { id: 1, src: "fruits-pin.jpg", alt: "" },
    { id: 2, src: "pin-choc.jpg", alt: "" },
    { id: 3, src: "pin-food.jpg", alt: "" },
    { id: 4, src: "image1.jpg", alt: "Image 1" },
    { id: 5, src: "image2.jpg", alt: "Image 2" },
    { id: 6, src: "image3.jpg", alt: "Image 3" },
    { id: 7, src: "image4.jpg", alt: "Image 4" },
    { id: 8, src: "image5.jpg", alt: "Image 5" },
    { id: 9, src: "image6.jpg", alt: "Image 6" },
    // Add more image objects here
];

const MasonryGrid = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {images.map((image, index) => (
                <div
                    key={image.id}
                    className={`overflow-hidden rounded-lg ${index % 3 === 0 ? 'col-span-2' : 'col-span-1'}`}
                    style={{ height: `${Math.floor(Math.random() * 200) + 150}px` }}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default MasonryGrid;
