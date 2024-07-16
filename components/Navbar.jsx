import Image from 'next/image'
import logo from '../assets/logo.png'
export default function Navbar() {
  return (
    
 <nav className="bg-white sticky  w-full z-20 top-0 left-0 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center">
      <Image src={logo} width={50} height={250} className="mr-3" alt="Ahead Logo"/>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-black hover:bg-grey rounded-full text-sm px-4 py-3 text-center mr-3 md:mr-0 ">Download app</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-black bg-black rounded md:bg-transparent md:hover:text-blue-700 md:text-black md:p-0 " aria-current="page">Emotions</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  ">Manifesto</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0   ">Self-awareness test</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0   ">Work with us</a>
      </li>
    </ul>
  </div>
  </div>
</nav> 
  )
}

