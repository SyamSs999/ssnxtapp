import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
    height: 90vh;
    width: 20vw;
  }
`
export const Footer = styled.div`
  padding: 25px;
`
export const Logos = styled.img`
  width: 30px;
  margin-right: 10px;
`
export const FooterText = styled.p`
  font-size: 18px;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  font-weight: 500;
`
