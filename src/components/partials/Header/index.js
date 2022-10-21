import React from "react";
import { HeaderArea } from './styled'
import { Link } from 'react-router-dom'
import { isLogged } from '../../../helpers/AuthHandler.js'

const Header = () => {
  let logged = isLogged();

  return (
    <HeaderArea>
        <div className="Container">
               <div className="logo">
                    <Link to = '/'>
                        <span className="logo-1"> S </span>
                        <span className="logo-2"> H </span>
                        <span className="logo-3"> O </span>
                        <span className="logo-4"> P </span>
                    </Link>
                </div>
                <nav>
                   <ul> 
                      {logged &&
                          <>
                            <li>
                               <link to="/my-account"> Minha Conta </link>
                            </li>
                            <li>
                               <link to="/logout"> Sair </link>
                            </li>
                            <li>
                               <link to="post-an-ad" className="button">
                                 Postar um Anuncio </link>
                            </li> 
                          </>
                      }
                      {!logged &&
                          <>
                             <li>
                                 <link to="/signin"> Login </link>
                              </li>
                              <li>
                                 <link to="/signup"> Cadastrar </link>
                              </li>
                              <li>
                                  <link to="signin" className="button">
                                  Postar um Anuncio </link>
                              </li> 
                          </>
                      }
                    </ul>
                </nav>       
        </div>
    </HeaderArea>
  )
}
export default Header