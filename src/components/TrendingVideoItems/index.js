import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import ThemeContext from '../../context/ThemeContext'

import {
  Thumbnail,
  VideoItem,
  ChannelLogo,
  Title,
  Text,
  TextContainer,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
} from './StyledComponents'

import './index.css'

const TrendingVideoItems = props => {
  const {eachVideo} = props
  const {thumbnailUrl, title, channel, viewCount, publishedAt, id} = eachVideo
  const publishedInYearsAgo = formatDistanceToNow(new Date(publishedAt)).slice(
    5,
  )
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link className="link" to={`videos/${id}`}>
            <VideoItem>
              <Thumbnail alt="video thumbnail" src={thumbnailUrl} />
              <ChannelContainer>
                <ChannelLogo alt="channel logo" src={channel.profileImageUrl} />
                <div>
                  <Title isDark={isDark}>{title}</Title>
                  <ChannelInfo>
                    <ChannelName>{channel.name}</ChannelName>
                    <BsDot className="show" fontSize={20} color="#475569" />
                    <TextContainer>
                      <Text>{viewCount} views</Text>
                      <BsDot fontSize={20} color="#475569" />
                      <Text>{publishedInYearsAgo} ago</Text>
                    </TextContainer>
                  </ChannelInfo>
                </div>
              </ChannelContainer>
            </VideoItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoItems
