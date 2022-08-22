import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  text-align: center;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureViewImg = styled.img`
  width: 70%;
  max-width: 300px;
`
export const FailureViewText = styled.h1`
  color: ${props => (props.isDark ? '#f1f1f1' : '#1e293b')};
  font-size: 20px;
`
export const FailureViewDesc = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#1e293b')};
  font-size: 16px;
`
export const RetryBtn = styled.button`
  color: #f1f1f1;
  font-size: 16px;
  height: 40px;
  width: 80px;
  border-radius: 5px;
  background-color: #4f46e5;
`
