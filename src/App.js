import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    savedVideosList: [],
  }

  themeChange = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  savedVideos = videoDetails => {
    const {savedVideosList} = this.state
    const checkSavedVideo = savedVideosList.find(eachVideoDetails => {
      if (eachVideoDetails.id === videoDetails.id) {
        return true
      }
      return false
    })
    if (checkSavedVideo === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoDetails],
      }))
    } else {
      const filterList = savedVideosList.filter(
        eachVideoDetails => eachVideoDetails.id !== videoDetails.id,
      )
      this.setState({savedVideosList: filterList})
    }
  }

  render() {
    const {isDark, savedVideosList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          themeChange: this.themeChange,
          savedVideosList,
          savedVideos: this.savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
