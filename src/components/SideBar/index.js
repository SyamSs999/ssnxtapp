import {SideBarContainer, Logos, Footer, FooterText} from './StyledComponents'
import Menu from '../Menu'
import ThemeContext from '../../context/ThemeContext'

const SideBar = props => {
  const {isTrending, isHome, isGaming, isSavedVideos} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SideBarContainer isDark={isDark}>
            <Menu
              isSavedVideos={isSavedVideos}
              isGaming={isGaming}
              isHome={isHome}
              isTrending={isTrending}
            />
            <Footer>
              <FooterText isDark={isDark}>CONTACT US</FooterText>
              <div>
                <Logos
                  alt="facebook logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                />
                <Logos
                  alt="twitter logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                />
                <Logos
                  alt="linked in logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                />
              </div>
              <FooterText isDark={isDark}>
                Enjoy! Now to see your channels and recommendations!
              </FooterText>
            </Footer>
          </SideBarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SideBar
