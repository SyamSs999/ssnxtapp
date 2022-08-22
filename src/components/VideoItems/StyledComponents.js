import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 100%;
  margin-bottom: 60px;
  padding-right: 15px;
  @media (min-width: 576px) {
    width: 260px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`
export const ChannelLogo = styled.img`
  width: 40px;
  margin-right: 10px;
`
export const Title = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  margin: 0;
  margin-bottom: 8px;
  font-weight: 500;
`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  margin-top: 8px;
`

export const Text = styled.p`
  color: #475569;
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  line-height: 15px;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 5px;
`
