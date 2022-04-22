import { Route, Routes } from "react-router-dom"
import NavbarComponent from "../components/navbar/navbar.component"
import { DcScreen } from "../screens/dc/dc.screen"
import { HeroScreen } from "../screens/hero/hero.screen"
import MarvelScreen from "../screens/marvel/marvel.screen"
import SearchScreen from "../screens/search/search.screen"

export const DashboardRouter = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className="container">
        <Routes>
          <Route path="marvel" element={ <MarvelScreen /> } />
          <Route path="dc" element={ <DcScreen /> } />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:id" element={<HeroScreen />} />
          <Route path="/" element={ <MarvelScreen /> } />
        </Routes>
      </div>
    </>
  )
}
