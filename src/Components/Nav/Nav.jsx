import React, { useEffect } from 'react'
import { IoMenu } from "react-icons/io5";
import { IconContext } from "react-icons";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from 'react-router-dom'
import '../../App.css'
function Nav() {


 

    function handelSmallNav  (){
        const smallNav = document.querySelector('.smallNav')
    
        smallNav.classList.add('goLeft')
      }
    
      function handelCloseSmallNav (){
        const smallNav = document.querySelector('.smallNav')
        smallNav.classList.remove('goLeft')
      }
    
    
    
      const Links = [
        'Home',
        'About',
        'Projects',
        'Contact'
      ]
  return (
    <>
        <div className='shadow-md  sticky top-0 bg-white z-40   nav-bar'>
    <nav className='w-[90%]   py-6 mx-auto flex justify-between items-center '>
                  <div className="logo">
                    <Link to={'/'}><h1  className='text-3xl font-extrabold cursor-pointer'>Nishant.dev</h1></Link>
                  </div>

                  <div className='links 900:hidden'>
                      <ul className='flex gap-5'>
                          {
                            Links.map((items, index)=>(
                              <li key={index}><a href={`#${items}`} className='text-xl font-bold hover:text-[#147efb] transition-colors ease-linear duration-150 cursor-pointer'>{items}</a></li>
                            ))
                          }
                          
                      </ul>
                  </div>

                  <div onClick={handelSmallNav} className='hidden 900:block menu'>
                            <IconContext.Provider value={{className:"w-[40px] h-[40px] hover:text-[#147efb] transition-colors ease-linear duration-150 cursor-pointer "}}>
                                  <IoMenu />
                            </IconContext.Provider>
                  </div>

                  

          </nav>
          <div className='absolute w-full h-[100vh] flex items-center justify-center z-20 bg-white left-0 top-[0%] smallNav '>
                                <div onClick={handelCloseSmallNav} className="text-black absolute cursor-pointer right-[50px] top-[2.5rem] hover:text-[#147efb] transition-colors ease-linear duration-150 cursor-pointer">
                                      <IconContext.Provider value={{className:"w-[40px] h-[40px]"}} >
                                        <IoCloseSharp />
                                      </IconContext.Provider>
                                </div>

                                <ul className='flex flex-col gap-5 items-center' >
                                      {
                                        Links.map((items , index)=>(
                                          <li key={index}><a onClick={handelCloseSmallNav} href={`#${items}`} className='text-3xl font-bold hover:text-[#147efb] transition-colors ease-linear duration-150 cursor-pointer'>{items}</a></li>
                                        ))
                                      }
                                </ul>
                  </div>
    </div>
    </>
  )
}

export default Nav
