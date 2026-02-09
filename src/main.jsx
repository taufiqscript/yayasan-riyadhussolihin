import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing/index.jsx'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import DetailBerita from './pages/DetailBerita'

const route = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/detail-berita/:id', element: <DetailBerita /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
