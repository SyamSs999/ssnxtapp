import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const WebsiteLogo = styled.img`
  width: 120px;
  align-self: center;
`
export const Content = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  height: 90vh;
  overflow-y: auto;
  width: 100%;
  @media (min-width: 768px) {
    width: 80vw;
  }
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 35vh;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const BannerTextContainer = styled.div`
  max-width: 360px;
`
export const BannerText = styled.p`
  color: #181818;
  font-size: 18px;
  font-weight: 600;
`
export const BannerBtn = styled.button`
  height: 40px;
  padding: 0px 8px 0px 8px;
  border: 2px solid #181818;
  background-color: transparent;
  color: #181818;
  font-size: 15px;
  font-weight: 500;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`

export const SearchInput = styled.input`
  height: 40px;
  border: 1px solid ${props => (props.isDark ? '#606060' : '#cccccc')};
  border-right: none;
  outline: none;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  background-color: transparent;
  font-size: 16px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#313131')};
`
export const SearchBtn = styled.button`
  height: 40px;
  width: 70px;
  border: 1px solid ${props => (props.isDark ? '#606060' : '#cccccc')};
  background-color: ${props => (props.isDark ? '#313131' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const VideosContainer = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`
export const NoVideosContainer = styled.div`
  text-align: center;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideosImg = styled.img`
  width: 70%;
  max-width: 300px;
`
export const NoVideosText = styled.h1`
  color: ${props => (props.isDark ? '#f1f1f1' : '#1e293b')};
  font-size: 20px;
`
export const NoVideosDesc = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#1e293b')};
  font-size: 16px;
`
export const RetryBtn = styled.button`
  color: #f1f1f1;
  font-size: 16px;
  height: 40px;
  width: 80px;
  border-radius: 5px;
  background-color: #4f46e5;
`
