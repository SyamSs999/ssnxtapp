import styled from 'styled-components'

export const GamingVideoItem = styled.li`
  width: 150px;
  margin-bottom: 60px;
  margin-right: 15px;
  @media (min-width: 576px) {
    width: 170px;
  }
  @media (min-width: 768px) {
    width: 250px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`
export const Title = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
`
export const Text = styled.p`
  color: #475569;
  font-weight: 400;
  font-size: 15px;
  margin: 0;
  line-height: 20px;
`
