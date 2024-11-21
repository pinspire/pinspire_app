import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigate
import { apiAddBoard } from "../../services/pin";

const Board = () => {
    const [boardName, setBoardName] = useState(""); // State for board name
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form submission from reloading the page
        try {
            if (boardName.trim() === "") {
                alert("Please enter a board name!");
                return;
            }

            // Call API to add the board
            const response = await apiAddBoard({ name: boardName }); // Pass board name to API
            setBoards((prevBoards) => [...prevBoards, response.data]); // Update state with new board
            console.log("Board created:", response.data);

            // Navigate to the saved page
            navigate("/saved");
        } catch (error) {
            console.error("Error creating board", error);
            alert("An error occurred while creating the board. Please try again.");
        }
    };

    return (
        <div>
            <div className="border-2 h-[50vh] w-[35vw] justify-center ml-80 mt-20 gap-3 rounded-3xl">
                <p className="text-[2rem] font-semibold flex justify-center mb-3">Create Board</p>
                <div className="pl-5">
                    <p className="text-[20px]">Board Name</p>
                    <input
                        type="text"
                        value={boardName} // Bind input to state
                        onChange={(e) => setBoardName(e.target.value)} // Update state on change
                        className="border-2 w-[30vw] h-10 rounded-xl mb-20"
                    />
                    <div className="flex justify-between">
                        <button
                            className="border-2 px-3 py-1 rounded-3xl bg-[#e2e2e2] border-[#e2e2e2]"
                            onClick={() => navigate("/")} // Cancel and go back
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit} // Use onClick instead of onSubmit
                            className="border-2 px-3 py-1 mr-5 rounded-3xl bg-[#FF338A] border-[#FF338A]"
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;
