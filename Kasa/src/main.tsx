import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './index.css'
import Home from './routes/home';
import About from './routes/about';
import Annonce from './components/pages/Annonce';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const data = await fetch('../../data.json').then(res => res.json())
          return data
        }
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/:id',
        element: <Annonce />,
        loader: async ({params}) => {
          const data = await fetch('../../data.json').then(res => res.json())
          return data.find((item: any) => item.id === params.id)
        }
      }
    ],
  },
])

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  </React.StrictMode>
)
