import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
  margin-right: 15px;
  @media (min-width: 576px) {
    display: flex;
    align-items: flex-start;
    padding: 20px;
    padding-right: 0;
  }
  @media (min-width: 768px) {
    padding: 50px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  @media (min-width: 576px) {
    width: 400px;
    margin-right: 15px;
  }
`
export const ChannelLogo = styled.img`
  width: 40px;
  margin-right: 10px;
  margin-left: 10px;
  @media (min-width: 576px) {
    display: none;
  }
`
export const Title = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  margin: 0;
  margin-bottom: 8px;
  font-weight: 500;
  @media (min-width: 576px) {
    margin-bottom: 15px;
  }
  @media (min-width: 768px) {
    font-size: 22px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
`
export const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  width: 100%;
  flex-wrap: wrap;
`

export const Text = styled.p`
  color: #475569;
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  line-height: 15px;
`

export const ChannelName = styled.p`
  color: #475569;
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  line-height: 15px;
  @media (min-width: 576px) {
    width: 100%;
    margin-bottom: 15px;
  }
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 8px;
  @media (min-width: 576px) {
    margin: 0;
  }
`
