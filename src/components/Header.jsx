import Logo from "../assets/images/logo.svg";
import MoonIcon from "../assets/images/icon-moon.svg";
function Header() {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-xl  p-2 sm:p-3 lg:p-4">
     <img src={Logo} alt="Logo"className="w-20 sm:w-36 lg:w-40"/>
     <button>
     <img src={MoonIcon} alt="Dark mode" className="  px-4 py-2  border rounded-full bg-gray-200" />
     </button>
    </div>
  )
}

export default Header;