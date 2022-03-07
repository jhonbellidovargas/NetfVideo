import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import proptypes from 'prop-types'
import classNames from 'classnames'

import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

const Header = (props) => {

  const { user,isLogin, isRegister } = props
  const hasUser = Object.keys(user).length > 0

  const handleLogout = () => {
    props.logoutRequest({})
  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister
  })
  
  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Video"/>
        <h1 className='header__title'>NetfVideos</h1>
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email}/>
              :
                <img src={userIcon} alt=""/>
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ?
              <li>
                <Link to="/">
                  {user.name}
                </Link>
              </li>
              :
                null
          }
          {
            hasUser ?
              <li>
                <a href="#logout" onClick={handleLogout}>Cerrar Sesión</a>
              </li>
            :
              <li>
                <Link to="/login">
                  Iniciar Sesion
                </Link>
              </li>
          }

        </ul>
      </div>
    </header>
  )
}

const propTypes = {
  user: proptypes.object,
  isLogin: proptypes.bool,
  isRegister: proptypes.bool,
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
