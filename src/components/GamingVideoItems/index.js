import {Link} from 'react-router-dom'
import {Thumbnail, GamingVideoItem, Title, Text} from './StyledComponents'
import ThemeContext from '../../context/ThemeContext'

const GamingVideoItems = props => {
  const {eachVideo} = props
  const {title, thumbnailUrl, viewCount, id} = eachVideo
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <GamingVideoItem>
              <Thumbnail alt="video thumbnail" src={thumbnailUrl} />
              <Title isDark={isDark}>{title}</Title>
              <Text>{viewCount} Watching Worldwide</Text>
            </GamingVideoItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItems
