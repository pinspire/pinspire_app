import Navbar from "../../../components/Navbar";

const Create = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className=" w-full">
                    <div className="flex justify-between mt-6">
                        <div className="flex ml-9">
                            <span className="text-[25px] font-bold">Create Pin</span>
                        </div>
                        
                    </div>
                    <p className="border-b-2 mt-3"></p>
                    <form className="flex border-2 mt-5 ml-64 w-[60vw] h-[100vh] rounded-lg bg-[#FFFFFF]">
                        <div className="flex flex-col pb-5 h-[50vh] ml-16 mt-4">
                            <label>Media</label>
                            <input type="file" className="border-2 rounded-3xl h-[30rem] " name="media" />
                        </div>
                        <div className="m-4">
                            <div className="flex flex-col pb-5">
                                <label>Title</label>
                                <input type="text" className="border-2 p-1 rounded-2xl w-[30vw] h-12" name="title" />
                            </div>
                            <div className="flex flex-col pb-5">
                                <label htmlFor="">Description</label>
                                <input type="text" className="border-2 rounded-2xl h-28" name="description" />
                            </div>

                            <div className="flex flex-col pb-5">
                                <label htmlFor="">Category</label>
                                <select name="" id="" className="border-2 p-1 rounded-2xl h-12">
                                    <option value="electronics">Food</option>
                                    <option value="clothing">Fashion</option>
                                    <option value="interior">Makeup</option>
                                    <option value="accessories">Ankara</option>
                                    <option value="automobile">Wallpapers</option>
                                    <option value="kitchen">Relationship</option>
                                    <option value="">Art</option>
                                    <option value="">Jewelry</option>
                                    <option value="">Nature</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Tags</label>
                                <input type="text" className="border-2 p-1 rounded-2xl h-12" name="tag" />
                            </div>
                            <button className="flex border-2 p-2 px-4 rounded-full mt-5">Publish</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Create;