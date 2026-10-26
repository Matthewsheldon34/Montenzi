import montenzic from "../assets/montenzic.png"
import {NavLink} from "react-router"
function Message(){
    return(
        <>
         <header>
<nav className=" space-x-0.5 p-4 w-auto flex justify-between  bg-amber-900 rounded">

    <div className="logo flex space-x-0.5 p-0 items-center justify-center w-auto">
<a className="flex space-x-0.5 p-0 items-center justify-center gap-5">
    <img src={montenzic} alt="montenzi" className="h-20 w-20 rounded-full" />
    <span className="text-2xl font-sans font-bold text-white">Montenzi</span>
</a>
    </div>

  <ul className="w-auto flex items-center gap-5 p-4">
  <li>
    <NavLink 
      to="/" 
      className={({ isActive }) => 
        `font-normal ${isActive ? 'text-gray-200 font-bold text-xl' : 'text-gray-200 text-xl' }`
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/collection" 
      className={({ isActive }) => 
        `font-normal ${isActive ? 'text-gray-200  font-bold  ' : 'text-gray-200 text-xl'}`
      }
    >
      Collections
    </NavLink>
  </li>
  <li>
    <NavLink 

      
      className={({ isActive }) => 
        `font-normal ${isActive ? 'text-gray-200  font-bold ' : 'text-gray-200 text-xl'}`
      }
    >
      Contact
    </NavLink>
  </li>
  <li>
    <NavLink 
      
      className={({ isActive }) => 
        `font-normal ${isActive ? 'text-gray-500 font-bold' : 'text-gray-200 text-xl'}`
      }
    >
      Message
    </NavLink>
  </li>
</ul>

<div className="relative cursor-pointer text-green-600   hover:text-green-700 transition-colors flex mt-7 gap-4 w-auto">
      {/* Shopping Cart SVG Icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={2}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
        />
      </svg>
      
      {/* Optional Badge for Item Count */}
      <span className="relative  bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
        0
      </span>
      </div>
</nav>
          </header>
        </>
    )
}
export default Message