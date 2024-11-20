import Navbar from "../../../components/Navbar";
import { apiCreatePins } from "../../../services/pin";

const Create = () => {

    const handleSubmit = async (event) => {
        try {
            event.preventDefault(); 
            const formData = new FormData(event.target); 
            
            const response = await apiCreatePins(formData);
            console.log(response.data)
            Navigate('/home')
        } catch (error) {
            console.log("error", error)
        }
    };


    return (
        <div>
            <div>
                <Navbar />
                <div className=" w-full mt-20">
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
                                <label htmlFor="">Description</label>
                                <input type="text" className="border-2 border-[#f4b0cc] rounded-2xl h-12" name="description" />
                            </div>

                            <div className="flex flex-col pb-7">
                                <label htmlFor="">Category</label>
                                <select name="category" id="" className="border-2 border-[#f4b0cc] p-1 rounded-2xl h-12">
                                    <option value="electronics">Food</option>
                                    <option value="clothing">Dresses</option>
                                    <option value="interior">Makeup</option>
                                    <option value="accessories">Hair</option>
                                    <option value="kitchen">Relationship</option>

                                </select>
                            </div>
                            {/* <div className="flex flex-col">
                                <label htmlFor="">Tags</label>
                                <input type="text" className="border-2 p-1 rounded-2xl h-12" name="tag" />
                            </div> */}
                            <button className="flex border-2 p-2 px-4 rounded-full mt-7 place-self-end bg-[#f4b0cc] border-[#FF338A]" type="submit">Publish</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Create;