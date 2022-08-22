import ThemeContext from '../../context/ThemeContext'

import {
  FailureViewImg,
  FailureViewContainer,
  FailureViewText,
  FailureViewDesc,
  RetryBtn,
} from './StyledComponents'

const FailureView = props => {
  const {retryApi} = props

  const onRetry = () => {
    retryApi()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer>
            <FailureViewImg alt="failure view" src={failureImg} />
            <FailureViewText isDark={isDark}>
              Oops! Something Went Wrong
            </FailureViewText>
            <FailureViewDesc isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewDesc>
            <RetryBtn onClick={onRetry} type="button">
              Retry
            </RetryBtn>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default FailureView
