import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { BsThreeDots } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { apiGetPin, apiGetPinsByCategory } from '../../services/pin';
import { FaArrowRight } from "react-icons/fa";

const Apic = () => {
    const params = useParams();
    const pinId = params.id;

    const [pin, setPin] = useState();
    const [relatedPins, setRelatedPins] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [boardName, setBoardName] = useState("");
    const [boards, setBoards] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState(null);

    useEffect(() => {
        const fetchPin = async () => {
            const response = await apiGetPin(pinId);
            setPin(response.data);
        };
        fetchPin();
    }, [pinId]);

    useEffect(() => {
        const fetchRelatedPins = async () => {
            const response = await apiGetPinsByCategory(pin?.category);
            setRelatedPins(response.data);
        };
        if (pin?.category) fetchRelatedPins();
    }, [pin?.category]);

    const handleOptionSelect = (option) => {
        if (option === "download") {
            const link = document.createElement("a");
            link.href = `https://savefiles.org/${pin?.image}?shareable_link=523`;
            link.download = "downloaded_image.jpg"; // Customize filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        setShowDropdown(false);
    };

    const handleCreateBoard = () => {
        if (boardName.trim() === "") {
            alert("Please enter a valid board name!");
            return;
        }

        // Save the new board (here we just use state, but this could be a backend call)
        const newBoard = {
            name: boardName,
            image: pin?.image,
        };
        setBoards((prevBoards) => [...prevBoards, newBoard]);
        setBoardName(""); // Clear input field
        setShowModal(false); // Close the modal
    };

    const handleSelectBoard = (board) => {
        setSelectedBoard(board);
        alert(`Image saved to ${board.name}`);
    };

    return (
        <div>
            <Navbar />
            <div className="flex gap-9 mt-24 m-24">
                {/* Left Section */}
                <div className="border-2 h-[150vh] w-[40vw] rounded-3xl p-4">
                    <div className="flex justify-end gap-3 relative">
                        {/* Dropdown Toggle */}
                        <div
                            className="cursor-pointer"
                            onClick={() => setShowDropdown((prev) => !prev)}
                        >
                            <BsThreeDots />
                        </div>
                        {/* Dropdown Menu */}
                        {showDropdown && (
                            <div className="absolute right-0 top-8 bg-white shadow-lg rounded-md">
                                <ul>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => setShowModal(true)} // Show modal on "Create Board"
                                    >
                                        Create Board
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleOptionSelect("download")}
                                    >
                                        Download image
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Hide pin
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Report pin
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Embed pin
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* Image Section */}
                    <div className="h-[100vh] w-full mt-5 rounded-2xl overflow-hidden">
                        <img
                            src={`https://savefiles.org/${pin?.image}?shareable_link=523`}
                            alt="Pin Image"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <p className="mt-5">User</p>
                    <p className="border-b-2 w-full mt-7 mb-5"></p>
                    <p>8 comments</p>
                    <p className="border-2 py-3 rounded-3xl mt-8 text-center cursor-pointer">
                        Add comment
                    </p>
                </div>

                {/* Right Section */}
                <div className="h-[90vh] w-[40vw]">
                    <div className="flex gap-3">
                        <p className="text-[30px] font-semibold font-sans">Explore More</p>
                        <p className="pt-2">
                            <FaArrowRight />
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        {relatedPins.map((relatedPin) => (
                            <div key={relatedPin.id} className="rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={`https://savefiles.org/${relatedPin.image}?shareable_link=523`}
                                    alt={relatedPin.title || "Related Pin"}
                                    className="w-full h-[150px] object-cover"
                                />
                                <p className="text-center mt-2">{relatedPin.title || "Untitled"}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for Creating a Board */}
            {showModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-[40vw] h-[50vh]">
                        <h2 className="text-xl font-semibold mb-4 ">Create Board</h2>
                        <input
                            type="text"
                            placeholder="Board Name"
                            value={boardName}
                            onChange={(e) => setBoardName(e.target.value)}
                            className="border-2 w-full p-2 mb-4 rounded-md"
                        />
                        <button
                            onClick={handleCreateBoard}
                            className="bg-green-500 text-white px-6 py-2 rounded-full"
                        >
                            Save Board
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className="ml-4 bg-red-500 text-white px-6 py-2 rounded-full"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Display Created Boards */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Your Boards</h2>
                <div>
                    {boards.length > 0 ? (
                        boards.map((board, index) => (
                            <Link to="/boards/${board.id}"
                                key={index}
                                className="flex items-center mb-4 cursor-pointer"
                                onClick={() => handleSelectBoard(board)}
                            >
                                <p className="font-semibold">{board.name}</p>
                                <img
                                    src={`https://savefiles.org/${board.image}?shareable_link=523`}
                                    alt={board.name}
                                    className="ml-4 h-[50px] w-[50px] object-cover rounded-md"
                                />
                            </Link>
                        ))
                    ) : (
                        <p>No boards created yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Apic;
