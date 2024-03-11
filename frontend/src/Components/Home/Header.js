import React from 'react'
import Search from './Search'
import Filter from './Filter'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { propertyAction } from '../../Store/Property/property-slice'
import { getAllProperties } from '../../Store/Property/property-action'
import { Logout } from "../../Store/User/user-action"
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useSelector((state) => state.user)
  const navigate = useNavigate()

  const logout = () => {
    dispatch(Logout())
    toast.success("user has logged out successfully.")
    navigate('/')
  }

  const allproperties = () => {
    dispatch(propertyAction.updateSearchParams({}))
    dispatch(getAllProperties())
  }

  return (
    <>
      <nav className='header row sticky-top'>
        <Link to='/'>
          <img src="/assets/logo.png" alt="logo" className='logo' onClick={allproperties} />
        </Link>

        <div className='search_filter'>
          <Search />
          <Filter />
        </div>

        {!isAuthenticated && !user && (
          <Link to="/login">
            <span className="material-symbols-outlined web_logo">
              account_circle
            </span>
          </Link>
        )}



      </nav>
    </>
  )
}

export default Header
