import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DcScreen } from '../screens/dc/dc.screen'
import LoginScreen from '../screens/login/login.screen'
import MarvelScreen from '../screens/marvel/marvel.screen'
import SearchScreen from '../screens/search/search.screen'
import { DashboardRouter } from './dashboardRouter'

export const AppRouter = () => {
  return (
    // BrowserRouter only 1 time
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginScreen />} />

            {/* Could be <Route path="/dashboard/*"></Route> */}
            <Route path="/*" element={<DashboardRouter/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

// export const AppRouter = () => {
//   return (
//     <BrowserRouter>
//         <NavbarComponent></NavbarComponent>
//         <Routes>
//             <Route path="/" element={ <MarvelScreen /> } />
//             <Route path="/marvel" element={ <MarvelScreen /> } />
//             <Route path="/dc" element={ <DcScreen /> } />
//             <Route path="/search" element={<SearchScreen />} />
//             <Route path="/login" element={<LoginScreen />} />
//         </Routes>
//     </BrowserRouter>
//   )
// }
