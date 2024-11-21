// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const SavedBoards = () => {
//     // State to hold the saved boards (this can come from local storage, API, etc.)
//     const [savedBoards, setSavedBoards] = useState([]);

//     useEffect(() => {
//         // For this example, we're using mock data. Replace it with actual data fetching logic.
//         const boards = [
//             { id: 1, name: 'Board 1', image: 'board_image_1.jpg' },
//             { id: 2, name: 'Board 2', image: 'board_image_2.jpg' },
//             { id: 3, name: 'Board 3', image: 'board_image_3.jpg' },
//         ];
//         setSavedBoards(boards);
//     }, []);

//     return (
//         <div className="saved-boards-container">
//             <h2 className="text-xl font-semibold mb-4">Saved Boards</h2>
//             <div className="grid grid-cols-3 gap-4">
//                 {savedBoards.length > 0 ? (
//                     savedBoards.map((board) => (
//                         <div key={board.id} className="board-item">
//                             <Link className="flex items-center">
//                                 <p className="font-semibold">{board.name}</p>
//                                 <img
//                                     src={`https://savefiles.org/${board.image}?shareable_link=523`}
//                                     alt={board.name}
//                                     className="ml-4 h-[100px] w-[100px] object-cover rounded-md"
//                                 />
//                             </Link>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No boards saved yet.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SavedBoards;
