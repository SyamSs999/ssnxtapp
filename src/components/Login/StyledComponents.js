import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121 ' : '#f1f1f1')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 15px;
`
export const LoginContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f8fafc')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  min-height: 400px;
  border-radius: 10px;
  padding: 45px 15px 45px 15px;
  @media (min-width: 768px) {
    padding: 45px;
    height: 430px;
  }
`

export const WebsiteLogo = styled.img`
  width: 120px;
  align-self: center;
  @media (min-width: 768px) {
    width: 160px;
  }
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  color: ${props => (props.isDark ? '#f1f5f9' : '#7e858e')};
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 15px;
`
export const UserInput = styled.input`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  height: 40px;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #94a3b8;
  font-size: 15px;
  margin-bottom: 10px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckboxInput = styled.input`
  height: 16px;
  width: 16px;
  margin-right: 8px;
`

export const CheckboxLabel = styled.label`
  color: ${props => (props.isDark ? '#f1f5f9' : '#181818')};
  line-height: 15px;
  font-weight: 500;
`
export const LoginBtn = styled.button`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  border-radius: 8px;
  background-color: #3b82f6;
  border: none;
  margin-top: 25px;
`
export const ErrMsg = styled.p`
  color: #ff0000;
  font-size: 15px;
  margin: 0;
`
