import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const NotFoundContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const NotFoundImg = styled.img`
  width: 100%;
  max-width: 500px;
`
export const NotFoundText = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 25px;
`
export const NotFoundDesc = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#1e293b')};
  font-size: 16px;
`
