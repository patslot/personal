import React from 'react'
import logo from '../images/logo.svg'
import './navigation.module.scss'
export default () => {
    let toggleMenu = () => {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
    return (
      <nav className="flex flex-wrap items-center justify-between p-2"> 

        <img className="logo" src={logo} alt="ACME" width="40" /> 
        <div className="flex md:hidden">
          <button id="hamburger" onClick={ () => toggleMenu()}>
            <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" alt="open" />
            <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" alt="open" />
          </button>
        </div>
        <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">        
            <a href="/" className="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home</a>
            <a href="/" className="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Products</a>
            <a href="/" className="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Pricing</a>
            <a href="/" className="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Contact</a>
        </div>
        
      </nav>
    
    )
}



