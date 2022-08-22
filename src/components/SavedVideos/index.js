import {MdWhatshot} from 'react-icons/md'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import TrendingVideoItems from '../TrendingVideoItems'

import {
  MainContainer,
  TrendingContainer,
  TrendingVideosContainer,
  Banner,
  LogoContainer,
  BannerText,
  NoSavedImg,
  NoSavedContainer,
  NoSavedText,
  NoSavedDesc,
} from './StyledComponents'

const isSavedVideos = true

const SavedVideos = () => {
  const renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, savedVideosList} = value
        return (
          <TrendingContainer isDark={isDark} data-testid="savedVideos">
            {savedVideosList.length > 0 ? (
              <TrendingVideosContainer>
                <Banner isDark={isDark}>
                  <LogoContainer isDark={isDark}>
                    <MdWhatshot color="#ff0b37" fontSize={30} />
                  </LogoContainer>
                  <BannerText isDark={isDark}>Saved Videos</BannerText>
                </Banner>
                {savedVideosList.map(eachVideo => (
                  <TrendingVideoItems
                    eachVideo={eachVideo}
                    key={eachVideo.id}
                  />
                ))}
              </TrendingVideosContainer>
            ) : (
              <>
                <NoSavedContainer>
                  <NoSavedImg
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  />
                  <NoSavedText isDark={isDark}>
                    No saved videos found
                  </NoSavedText>
                  <NoSavedDesc isDark={isDark}>
                    You can save your videos while watching them
                  </NoSavedDesc>
                </NoSavedContainer>
              </>
            )}
          </TrendingContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  return (
    <>
      <Header isSavedVideos={isSavedVideos} />
      <MainContainer>
        <SideBar isSavedVideos={isSavedVideos} />
        {renderSuccessView()}
      </MainContainer>
    </>
  )
}

export default SavedVideos
