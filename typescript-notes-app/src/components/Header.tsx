import React from 'react'
import "./Header.css"
interface IHeaderPorps {

}
export const Header: React.FunctionComponent<IHeaderPorps> = () => {
  return (
    <div className='navbar'>
          <h2>TypeScript Notes App</h2>
    </div>
  )
}
