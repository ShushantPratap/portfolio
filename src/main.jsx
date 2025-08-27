import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, ProjectsPage, PreviewPage, AI_assistant } from './pages/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects/",
        element: <ProjectsPage />
      },
      {
        path: "/projects/:slug",
        element: <ProjectsPage />
      },
      {
        path: "/preview/:slug",
        element: <PreviewPage />
      },
      {
        path: "/ai-assistant",
        element: <AI_assistant />
      }
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
