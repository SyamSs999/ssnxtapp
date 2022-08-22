import styled from 'styled-components'

export const WebsiteLogo = styled.img`
  width: 120px;
  align-self: center;
`
export const Nav = styled.nav`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0px 15px 0px 15px;
  @media (min-width: 768px) {
    padding: 0px 60px 0px 60px;
  }
`
export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  @media (min-width: 768px) {
    width: 200px;
  }
`
export const LogoutBtn = styled.button`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 0px 18px 0px 18px;
    border: 1px solid ${props => (props.isDark ? '#f8f8f8' : '#3b82f6')};
    background-color: transparent;
    border-radius: 2px;
  }
`
export const ProfileImg = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 30px;
  }
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: none;
  }
`
export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`

export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  cursor: pointer;
`
export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  height: 150px;
  width: 300px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PopupBtn = styled.button`
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
  height: 40px;
  font-weight: 600;
  width: 80px;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 2px;
`
export const LogoutText = styled.p`
  color: ${props => (props.isDark ? '#d7dfe9' : '#00306e')};
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 30px;
`

export const LogoutBtnText = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    font-size: 15px;
    color: ${props => (props.isDark ? '#f8f8f8' : '#3b82f6')};
    font-weight: 500;
    font-size: 17px;
    margin-bottom: 30px;
    font-weight: 600;
    margin: 0;
  }
`
