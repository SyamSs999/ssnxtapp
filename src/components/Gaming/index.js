import {Component} from 'react'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import GamingVideoItems from '../GamingVideoItems'
import FailureView from '../FailureView'
import LoadingView from '../LoadingView'

import {
  MainContainer,
  GamingContainer,
  GamingVideosContainer,
} from './StyledComponents'
import {Banner, LogoContainer, BannerText} from '../Trending/StyledComponents'

const isGaming = true

const renderConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  fail: 'FAIL',
  loading: 'LOADING',
}

class Gaming extends Component {
  state = {renderStatus: renderConstraints.initial, gamingVideosList: []}

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    this.setState({renderStatus: renderConstraints.loading})
    const jwtToken = Cookies.get('jwt_token')
    const gamingApi = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(gamingApi, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        renderStatus: renderConstraints.success,
        gamingVideosList: updatedData,
      })
    } else {
      this.setState({renderStatus: renderConstraints.fail})
    }
  }

  retryApi = () => {
    this.getGamingVideosData()
  }

  renderFailureView = () => <FailureView retryApi={this.retryApi} />

  renderLoaderView = () => <LoadingView />

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {gamingVideosList} = this.state
        return (
          <>
            <Banner isDark={isDark}>
              <LogoContainer isDark={isDark}>
                <SiYoutubegaming color="#ff0b37" fontSize={30} />
              </LogoContainer>
              <BannerText isDark={isDark}>Gaming</BannerText>
            </Banner>
            <GamingVideosContainer>
              {gamingVideosList.map(eachVideo => (
                <GamingVideoItems eachVideo={eachVideo} key={eachVideo.id} />
              ))}
            </GamingVideosContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSwitchCases = () => {
    const {renderStatus} = this.state
    switch (renderStatus) {
      case renderConstraints.success:
        return this.renderSuccessView()
      case renderConstraints.fail:
        return this.renderFailureView()
      case renderConstraints.loading:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header isGaming={isGaming} />
              <MainContainer>
                <SideBar isGaming={isGaming} />
                <GamingContainer data-testid="gaming" isDark={isDark}>
                  {this.renderSwitchCases()}
                </GamingContainer>
              </MainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
