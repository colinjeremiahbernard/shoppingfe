import React from "react";
import { HeaderArea } from './styled'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderArea>
        <div className="Container">
               <div className="logo">
                    <Link to = '/' >
                        <span className="logo-1"> S </span>
                        <span className="logo-2"> H </span>
                        <span className="logo-3"> O </span>
                        <span className="logo-4"> P </span>
                    </Link>
                </div>
                <nav>
                   <ul> 
                      <li link to="signin"> Login </li>
                      <li link to='signup'> Cadastrar </li>
                      <li> Login </li>
                      <li> Login </li>
                   </ul>
                </nav>       
        </div>
    </HeaderArea>
  )
}
export default Header