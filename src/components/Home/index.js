import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoIosClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import VideoItems from '../VideoItems'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

import {
  WebsiteLogo,
  Banner,
  BannerTextContainer,
  BannerBtn,
  BannerText,
  Content,
  MainContainer,
  SearchContainer,
  SearchInput,
  SearchBtn,
  VideosContainer,
  NoVideosImg,
  NoVideosContainer,
  NoVideosText,
  NoVideosDesc,
  RetryBtn,
} from './StyledComponents'

const isHome = true

const renderConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  fail: 'FAIL',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    renderStatus: renderConstraints.success,
    homeVideosList: [],
    searchValue: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getHomeVideosData()
  }

  getHomeVideosData = async () => {
    this.setState({renderStatus: renderConstraints.loading})
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosApi = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      method: 'GET',
      headers: {Authorization: `bearer ${jwtToken}`},
    }
    const response = await fetch(homeVideosApi, options)
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
        homeVideosList: updatedData,
      })
    } else {
      this.setState({renderStatus: renderConstraints.fail})
    }
  }

  getSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  getSearchResults = () => {
    this.getHomeVideosData()
  }

  retryApi = () => {
    this.getHomeVideosData()
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  renderSuccessView = () => {
    const {homeVideosList} = this.state
    return homeVideosList.length ? (
      <VideosContainer>
        {homeVideosList.map(eachVideo => (
          <VideoItems eachVideo={eachVideo} key={eachVideo.id} />
        ))}
      </VideosContainer>
    ) : (
      this.renderNoVideosView()
    )
  }

  renderLoaderView = () => <LoadingView />

  renderFailureView = () => <FailureView retryApi={this.retryApi} />

  renderNoVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoVideosContainer>
            <NoVideosImg
              alt="no videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
            <NoVideosText isDark={isDark}>No Search results found</NoVideosText>
            <NoVideosDesc isDark={isDark}>
              Try different key words or remove search filter
            </NoVideosDesc>
            <RetryBtn onClick={this.retryApi} type="button">
              Retry
            </RetryBtn>
          </NoVideosContainer>
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
          const {showBanner, searchValue} = this.state
          return (
            <>
              <Header isHome={isHome} />
              <MainContainer>
                <SideBar isHome={isHome} />
                <Content data-testid="home" isDark={isDark}>
                  {showBanner && (
                    <Banner data-testid="banner">
                      <BannerTextContainer>
                        <WebsiteLogo
                          alt="nxt watch logo"
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <BannerBtn type="button">GET IT NOW</BannerBtn>
                      </BannerTextContainer>
                      <button
                        onClick={this.closeBanner}
                        type="button"
                        data-testid="close"
                      >
                        <IoIosClose fontSize={30} />
                      </button>
                    </Banner>
                  )}
                  <SearchContainer>
                    <SearchInput
                      value={searchValue}
                      onChange={this.getSearchValue}
                      isDark={isDark}
                      placeholder="Search"
                      type="search"
                    />
                    <SearchBtn
                      onClick={this.getSearchResults}
                      data-testid="searchButton"
                      isDark={isDark}
                      type="button"
                    >
                      <AiOutlineSearch
                        color={isDark ? '#cccccc' : '#383838'}
                        fontSize={20}
                      />
                    </SearchBtn>
                  </SearchContainer>
                  {this.renderSwitchCases()}
                </Content>
              </MainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
