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
} from './StyledComponents'

const VideoItems = props => {
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
          <Link className="link" to={`/videos/${id}`}>
            <VideoItem>
              <Thumbnail alt="video thumbnail" src={thumbnailUrl} />
              <ChannelContainer>
                <ChannelLogo alt="channel logo" src={channel.profileImageUrl} />
                <div>
                  <Title isDark={isDark}>{title}</Title>
                  <Text>{channel.name}</Text>
                  <TextContainer>
                    <Text>{viewCount} views</Text>
                    <BsDot fontSize={20} color="#475569" />
                    <Text>{publishedInYearsAgo} ago</Text>
                  </TextContainer>
                </div>
              </ChannelContainer>
            </VideoItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItems
