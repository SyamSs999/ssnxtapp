import React from 'react'

const ThemeContext = React.createContext({
  isDark: true,
  themeChange: () => {},
  savedVideosList: [],
  savedVideos: () => {},
})

export default ThemeContext
