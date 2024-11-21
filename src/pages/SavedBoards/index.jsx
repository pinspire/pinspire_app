import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { apiGetBoards } from "../../services/pin";
import { Link } from "react-router-dom";

const AllBoards = () => {
  const [boards, setBoards] = useState([]);

  const getBoards = async () => {
    try {
      const response = await apiGetBoards();
      console.log(response.data);

      setBoards(response.data);
    } catch (error) {
      console.log("Error fetching boards", error);
    }
  };

  useEffect(() => {
    getBoards();
  }, []);



  return (
    <div>
      <Navbar />
      <div className="mt-20 px-8">
        <h1 className="text-2xl font-bold mb-6">Saved Boards</h1>
        <div className="grid grid-cols-4 gap-6">
          {boards.length > 0 ? (
            boards.map((board, index) => (
              <Link
                to={`/boards/${board.id}`} // Fixed interpolation
                key={index}
                className="flex flex-col items-center"
              >
                <img
                  src={`https://savefiles.org/${board.image}?shareable_link=523`}
                  alt={board.name || "Board Image"}
                  className="h-[25vh] w-[18vw] object-cover rounded-lg shadow-md"
                  onError={(e) => {
                    e.target.src = "/placeholder.png"; // Fallback to a placeholder image
                  }}
                />
                <p className="font-semibold mt-2 text-center">{board.name}</p>
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

export default AllBoards;
