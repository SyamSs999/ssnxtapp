import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  NotFoundContainer,
  MainContainer,
  NotFoundImg,
  NotFoundText,
  NotFoundDesc,
} from './StyledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const notFoundImg = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <MainContainer>
            <SideBar />
            <NotFoundContainer isDark={isDark}>
              <NotFoundImg alt="not found" src={notFoundImg} />
              <NotFoundText isDark={isDark}>Page Not Found</NotFoundText>
              <NotFoundDesc isDark={isDark}>
                We are sorry, the page you requested could not be found.
              </NotFoundDesc>
            </NotFoundContainer>
          </MainContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
