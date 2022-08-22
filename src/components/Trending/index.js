import {Component} from 'react'
import Cookies from 'js-cookie'

import {MdWhatshot} from 'react-icons/md'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import TrendingVideoItems from '../TrendingVideoItems'
import FailureView from '../FailureView'
import LoadingView from '../LoadingView'

import {
  MainContainer,
  TrendingContainer,
  TrendingVideosContainer,
  Banner,
  LogoContainer,
  BannerText,
} from './StyledComponents'

const isTrending = true

const renderConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  fail: 'FAIL',
  loading: 'LOADING',
}

class Trending extends Component {
  state = {renderStatus: renderConstraints.initial, trendingVideosList: []}

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({renderStatus: renderConstraints.loading})
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosApi = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(trendingVideosApi, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        renderStatus: renderConstraints.success,
        trendingVideosList: updatedData,
      })
    } else {
      this.setState({renderStatus: renderConstraints.fail})
    }
  }

  retryApi = () => {
    this.getTrendingVideosData()
  }

  renderFailureView = () => <FailureView retryApi={this.retryApi} />

  renderLoaderView = () => <LoadingView />

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {trendingVideosList} = this.state
        return (
          <>
            <Banner isDark={isDark}>
              <LogoContainer isDark={isDark}>
                <MdWhatshot color="#ff0b37" fontSize={30} />
              </LogoContainer>
              <BannerText isDark={isDark}>Trending</BannerText>
            </Banner>
            <TrendingVideosContainer>
              {trendingVideosList.map(eachVideo => (
                <TrendingVideoItems eachVideo={eachVideo} key={eachVideo.id} />
              ))}
            </TrendingVideosContainer>
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
              <Header isTrending={isTrending} />
              <MainContainer>
                <SideBar isTrending={isTrending} />
                <TrendingContainer isDark={isDark} data-testid="trending">
                  {this.renderSwitchCases()}
                </TrendingContainer>
              </MainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
