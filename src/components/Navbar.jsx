import { IoIosNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { BsHCircleFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="h-[]">
      <div className="flex gap-8 h-[13vh] items-center border-b-2 shadow-md">
        <p>Logo</p>
        <p>Home</p>
        <p>Create</p>
        <button className="border-2 p-3 px-[30%] rounded-full bg-[#E1E1E1]">Search</button>
        <p className="text-[30px]"><IoIosNotifications /></p>
        <p className="text-[25px]"><RiMessage2Fill /></p>
        <p className="text-[25px]"><BsHCircleFill /></p>
        <p></p>
      </div>
    </div>
  )
}

export default Navbar;