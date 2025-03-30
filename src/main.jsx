import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import People from './pages/People.jsx'
import Error from './pages/Error.jsx'
import LogIn from './pages/LogIn.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import MoviesDetails from './pages/MoviesDetails.jsx'
import ContactUs from './pages/ContactUs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Popular from './pages/Popular.jsx'
import Upcomming from './pages/Upcomming.jsx'
import Now_Playing from './pages/Now_Playing.jsx'
import NowPlaying from './pages/Now_Playing.jsx'
import TopRated from './pages/Top_Rated.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/popular",
          element: <Popular />
        },
        {
          path: "/upcomming",
          element: <Upcomming />
        },
        {
          path: "/now-playing",
          element: <NowPlaying />
        },
        {
          path: "/top-rated",
          element: <TopRated />
        },
        {
          path: "/people",
          element: <People/>
        },
        {
          path: "/contact-us",
          element: <ContactUs/>
        },
        {
          path: "/about-us",
          element: <AboutUs/>
        },
      ],
      errorElement: <Error/>
    },
    {
      path: "/login",
      element: <LogIn/>
    },
    {
      path: "/movie/:id",
      element:<MoviesDetails/>
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
