import React from 'react';
import Navbar from "../../../components/Navbar";
import { apiCreatePins } from "../../../services/pin";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Create = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (event) => {
        try {
            event.preventDefault(); // Prevent page refresh on form submission
            const formData = new FormData(event.target); // Create FormData from form inputs

            // Call the API to create the pin
            const response = await apiCreatePins(formData);
            console.log(response.data); // Optionally log the response for debugging

            // Redirect to the home page after successful creation
            navigate('/home'); // Navigate to '/home' page

        } catch (error) {
            console.log("error", error); // Log any error that occurs during the form submission
        }
    };

    return (
        <div>
            <Navbar />
            <div className="w-full mt-20">
                <div className="flex justify-between mt-6">
                    <div className="flex ml-9">
                        <span className="text-[25px] font-bold">Create a Pin</span>
                    </div>
                </div>
                <p className="border-b-2 mt-3"></p>
                <form onSubmit={handleSubmit} className="flex border-2 border-[#f4b0cc] mt-5 ml-64 w-[40vw] h-[100vh] rounded-lg bg-[#FFFFFF]">
                    <div className="m-4 ml-16">
                        <div className="flex flex-col pb-7">
                            <label>Image</label>
                            <input type="file" className="border-2 border-[#f4b0cc] p-1 rounded-2xl w-[30vw] h-20" name="image" />
                        </div>
                        <div className="flex flex-col pb-7">
                            <label>Title</label>
                            <input type="text" className="border-2 border-[#f4b0cc] p-1 rounded-2xl w-[30vw] h-12" name="title" />
                        </div>
                        <div className="flex flex-col pb-7">
                            <label>Description</label>
                            <input type="text" className="border-2 border-[#f4b0cc] rounded-2xl h-12" name="description" />
                        </div>

                        <div className="flex flex-col pb-7">
                            <label>Category</label>
                            <select name="category" className="border-2 border-[#f4b0cc] p-1 rounded-2xl h-12">
                                <option value="food">Food</option>
                                <option value="dresses">Dresses</option>
                                <option value="makeup">Makeup</option>
                                <option value="hair">Hair</option>
                                <option value="relationship">Relationship</option>
                            </select>
                        </div>

                        <button className="flex border-2 p-2 px-4 rounded-full mt-7 place-self-end bg-[#f4b0cc] border-[#FF338A]" type="submit">
                            Publish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
