import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`
export const GamingContainer = styled.div`
  height: 90vh;
  overflow-y: auto;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const GamingVideosContainer = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  width: 100%;
  padding: 20px;
  padding-right: 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    padding: 50px;
  }
`
