import styled from 'styled-components'

export const MenuList = styled.ul`
  padding: 0;
  list-style: none;
  width: 100%;
`

export const ListItem = styled.li`
  height: 45px;
  width: 100%;
  ${props => {
    if (props.active) {
      if (props.isDark) {
        return 'background-color:#383838;'
      }
      return 'background-color:#e2e8f0;'
    }
    return 'background-color:transparent;'
  }}
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  margin: auto;
  height: 45px;
  @media (min-width: 768px) {
    margin: 0;
    margin-left: 25px;
  }
`

export const CategoryName = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-left: 15px;
  ${props => {
    if (props.active) {
      if (props.isDark) {
        return 'color:#f4f4f4; '
      }
      return 'color:#212121;'
    }
    if (props.isDark) {
      return 'color:#f1f5f9;'
    }
    return 'color:#212121;'
  }}
  font-weight : ${props => (props.active ? 'bold' : '400')};
`
