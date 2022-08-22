import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const TrendingContainer = styled.div`
  height: 90vh;
  overflow-y: auto;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingVideosContainer = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  width: 100%;
`
export const Banner = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
  height: 12vh;
  display: flex;
  align-items: center;
  padding: 10px;
  @media (min-width: 576px) {
    padding: 20px;
    padding-right: 0;
  }
  @media (min-width: 768px) {
    height: 15vh;
    padding: 50px;
  }
`
export const LogoContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${props => (props.isDark ? '#000000' : '#cbd5e1')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  @media (min-width: 768px) {
    height: 80px;
    width: 80px;
    border-radius: 40px;
    margin-right: 20px;
  }
`
export const BannerText = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 22px;
`
export const NoSavedContainer = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedImg = styled.img`
  width: 100%;
  max-width: 500px;
`
export const NoSavedText = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 25px;
`
export const NoSavedDesc = styled.p`
  color: ${props => (props.isDark ? '#f1f1f1' : '#1e293b')};
  font-size: 16px;
`
