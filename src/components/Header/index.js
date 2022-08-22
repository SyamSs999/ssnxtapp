import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosClose} from 'react-icons/io'
import Popup from 'reactjs-popup'

import Menu from '../Menu'
import ThemeContext from '../../context/ThemeContext'

import {
  WebsiteLogo,
  Nav,
  IconsContainer,
  LogoutBtn,
  ProfileImg,
  PopupContainer,
  MenuContainer,
  CloseBtn,
  ThemeBtn,
  LogoutPopupContainer,
  PopupBtn,
  LogoutText,
  LogoutBtnText,
} from './StyledComponents'
import './index.css'

const overlayStyles = {
  backgroundColor: '#00000090',
}

const Header = props => {
  const {isTrending, isHome, isGaming, isSavedVideos} = props

  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, themeChange} = value

        const themeLogo = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const onThemeChange = () => {
          themeChange()
        }

        return (
          <Nav isDark={isDark}>
            <Link to="/">
              <WebsiteLogo alt="website logo" src={themeLogo} />
            </Link>
            <IconsContainer>
              <ThemeBtn
                onClick={onThemeChange}
                data-testid="theme"
                type="button"
              >
                {isDark ? (
                  <FiSun color="#f9f9f9" fontSize={25} />
                ) : (
                  <FaMoon fontSize={25} />
                )}
              </ThemeBtn>
              <Popup
                modal
                trigger={
                  <button className="lg-hide" type="button">
                    <GiHamburgerMenu
                      color={isDark ? '#f9f9f9' : '#181818'}
                      fontSize={25}
                    />
                  </button>
                }
              >
                {close => (
                  <PopupContainer isDark={isDark}>
                    <CloseBtn
                      onClick={() => {
                        close()
                      }}
                      type="button"
                    >
                      <IoIosClose
                        color={isDark ? '#f9f9f9' : '#181818'}
                        fontSize={35}
                      />
                    </CloseBtn>
                    <MenuContainer>
                      <Menu
                        isSavedVideos={isSavedVideos}
                        isGaming={isGaming}
                        isHome={isHome}
                        isTrending={isTrending}
                      />
                    </MenuContainer>
                  </PopupContainer>
                )}
              </Popup>
              <ProfileImg
                alt="profile"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              />

              <Popup
                overlayStyle={overlayStyles}
                modal
                trigger={
                  <LogoutBtn isDark={isDark} type="button">
                    <LogoutBtnText isDark={isDark}> Logout</LogoutBtnText>
                    <FiLogOut
                      className="lg-hide"
                      color={isDark ? '#f9f9f9' : '#181818'}
                      fontSize={25}
                    />
                  </LogoutBtn>
                }
              >
                {close => (
                  <LogoutPopupContainer isDark={isDark}>
                    <LogoutText isDark={isDark}>
                      Are you sure, you want to logout
                    </LogoutText>
                    <div>
                      <PopupBtn
                        color="#64748b"
                        backgroundColor="transparent"
                        onClick={() => close()}
                        type="button"
                      >
                        Cancel
                      </PopupBtn>
                      <PopupBtn
                        color="#ffffff"
                        backgroundColor="#3b82f6"
                        type="button"
                        onClick={onLogout}
                      >
                        Confirm
                      </PopupBtn>
                    </div>
                  </LogoutPopupContainer>
                )}
              </Popup>
            </IconsContainer>
          </Nav>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
