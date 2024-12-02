import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Artists from './Components/Artists/Artists.jsx'
import Albums from './Components/Albums/Albums.jsx'
import Radio from './Components/Radio/Radio.jsx'
import Charts from './Components/Charts/Charts.jsx'
import Playlists from './Components/Playlists/Playlists.jsx'
import Podcast from './Components/Podcast/Podcast.jsx'

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path:"/populer-artist",
    element: <Artists />
  },
  {
    path:"/populer-album",
    element: <Albums />
  },
  {
    path:"/populer-radio",
    element: <Radio />
  },
  {
    path:"/featured-charts",
    element: <Charts />
  },
  {
    path:"/playlists",
    element: <Playlists />
  },
  {
    path:"/browse-podcasts",
    element: <Podcast />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
