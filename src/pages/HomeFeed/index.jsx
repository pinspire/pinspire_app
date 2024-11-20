import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { apiGetPins } from "../../services/pin";
import { Link } from "react-router-dom";

const HomeFeed = () => {
    const [pins, setPins] = useState([]);


    const getPins = async () => {
        try {
            const response = await apiGetPins();
            console.log(response);
            console.log(response.data);
            setPins(response.data);
        } catch (error) {
            console.error('Error fetching advert:', error);
        }
    };

    useEffect(() => {
        getPins();
    }, []);

    // const images = [
    //     { id: 1, src: "https://via.placeholder.com/300x500" },
    //     { id: 2, src: "https://via.placeholder.com/300x500" },
    //     { id: 3, src: "https://via.placeholder.com/300x500" },
    //     { id: 4, src: "https://via.placeholder.com/300x500" },
    //     { id: 5, src: "https://via.placeholder.com/300x500" },
    //     { id: 1, src: "https://via.placeholder.com/300x500" },
    //     { id: 2, src: "https://via.placeholder.com/300x500" },
    //     { id: 3, src: "https://via.placeholder.com/300x500" },
    //     { id: 4, src: "https://via.placeholder.com/300x500" },
    //     { id: 5, src: "https://via.placeholder.com/300x500" },
    //     // Add more images as needed
    //   ];


    return (
        <div>
            <div className="flex flex-col">
                <Navbar />
                <div className="mt-24">
                    <div>
                        <div className="pinterest-container">
                            {pins.map((pins, index) => (
                                <div className="pinterest-item" key={index}>
                                    <Link to={`/apic/${pins.id}`}><img src={`https://savefiles.org/${pins.image}?shareable_link=523`}alt={`Image ${pins.id}`} className="pinterest-image" /></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFeed;
