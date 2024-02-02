import { createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import MusicListPage from "./pages/music/MusicListPage"
import { ScreenWrapper } from "./components/ScreenWrapper"

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScreenWrapper>
        <HomePage />
      </ScreenWrapper>
    ),
  },
  {
    path: "/result",
    element: (
      <ScreenWrapper>
        <MusicListPage />
      </ScreenWrapper>
    ),
  },
])

export default routes
