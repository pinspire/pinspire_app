import { IoIosNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { BsHCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex gap-8 h-[13vh] items-center border-b-2 shadow-sm">
        <img src={logo} alt="" className="h-6 w-6 ml-6"/>
        < Link to="/home">Home</Link>
        <Link to="/create">Create</Link>
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