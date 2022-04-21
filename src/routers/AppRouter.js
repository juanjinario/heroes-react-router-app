import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DcScreen } from '../screens/dc/dc.screen'
import LoginScreen from '../screens/login/login.screen'
import MarvelScreen from '../screens/marvel/marvel.screen'
import SearchScreen from '../screens/search/search.screen'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <h2>Welcome to React Router</h2>
        <Routes>
            <Route path="/" element={ <MarvelScreen /> } />
            <Route path="/marvel" element={ <MarvelScreen /> } />
            <Route path="/dc" element={ <DcScreen /> } />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/login" element={<LoginScreen />} />
        </Routes>
    </BrowserRouter>
  )
}
