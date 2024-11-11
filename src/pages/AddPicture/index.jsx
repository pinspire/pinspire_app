import React from 'react'

const AddPicture = () => {
  return (
    <div>
         <div className="pl-52 pt-16 bg-[#F1F1F1] w-full">
                    <div className="flex mt-9 ml-9">
                        <p className="pt-3">icon</p>
                        <span className="text-[25px] font-bold">Add Advert</span>
                    </div>
                    <form className="border-2 mt-5 ml-9 w-[50vw] rounded-lg bg-[#FFFFFF]">
                        <div className="m-4">
                            <div className="flex flex-col pb-5">
                                <label>Title</label>
                                <input type="text" className="border-2 p-1 rounded-lg " name="title" />
                            </div>
                            <div className="flex flex-col pb-5">
                                <label>Media</label>
                                <input type="file" className="border-2 h-20 rounded-lg" name="media" />
                            </div>
                            <div className="flex flex-col pb-5">
                                <label htmlFor="">Description</label>
                                <input type="text" className="border-2 h-20 rounded-lg" name="description" />
                            </div>
                            {/* <div className="flex flex-col pb-5">
                                <label htmlFor="">Category</label>
                                <input type="text" className="border-2 h-10 rounded-lg" name="category" />
                            </div> */}
                            <div className="flex flex-col pb-5">
                                <label htmlFor="">Category</label>
                                <select name="" id="" className="border-2 p-1 rounded-lg">
                                    <option value="electronics">Hair</option>
                                    <option value="clothing">Fashion</option>
                                    <option value="interior">Wallpapers</option>
                                    <option value="accessories">Art</option>
                                    <option value="automobile">Makeup</option>
                                    <option value="kitchen">Selfies</option>
                                    <option value="">Food</option>
                                    <option value="">Nails</option>
                                    <option value="">Construction</option>
                                </select>
                            </div>
                        </div>
                        <button className="border-2 ml-80 p-1 px-3 mt-5 bg-green-600 text-white rounded-lg" type="submit">Save</button>
                    </form>

                </div>
    </div>
  )
}

export default AddPicture;