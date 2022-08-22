import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  LoginContainer,
  WebsiteLogo,
  LoginForm,
  Label,
  UserInput,
  ShowPasswordContainer,
  CheckboxInput,
  CheckboxLabel,
  LoginBtn,
  ErrMsg,
} from './StyledComponents'

class Login extends Component {
  state = {errMsg: '', username: '', password: '', checkPassword: false}

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  onCheckPassword = event => {
    this.setState({checkPassword: event.target.checked})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApi = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApi, options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFail(data.error_msg)
    }
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFail = errMsg => {
    this.setState({errMsg})
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const {errMsg, username, password, checkPassword} = this.state
          const jwtToken = Cookies.get('jwt_token')

          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          const themeLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <MainContainer isDark={isDark}>
              <LoginContainer isDark={isDark}>
                <WebsiteLogo alt="website logo" src={themeLogo} />
                <LoginForm onSubmit={this.onLogin}>
                  <Label isDark={isDark} htmlFor="username">
                    USERNAME
                  </Label>
                  <UserInput
                    onChange={this.getUsername}
                    value={username}
                    isDark={isDark}
                    placeholder="Username"
                    type="text"
                    id="username"
                  />
                  <Label isDark={isDark} htmlFor="password">
                    PASSWORD
                  </Label>
                  <UserInput
                    onChange={this.getPassword}
                    value={password}
                    isDark={isDark}
                    placeholder="Password"
                    type={checkPassword ? 'text' : 'password'}
                    id="password"
                  />
                  <ShowPasswordContainer>
                    <CheckboxInput
                      onChange={this.onCheckPassword}
                      type="checkbox"
                      id="showPasswordCheckBox"
                    />
                    <CheckboxLabel
                      isDark={isDark}
                      htmlFor="showPasswordCheckBox"
                    >
                      Show Password
                    </CheckboxLabel>
                  </ShowPasswordContainer>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {errMsg.length > 0 && <ErrMsg>*{errMsg}</ErrMsg>}
                </LoginForm>
              </LoginContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
