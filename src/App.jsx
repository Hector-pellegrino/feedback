import { createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Home } from "./pages/Home"
import { theme } from "./styles/theme"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])

export function App() {
  return (
    <div>
      <ThemeProvider theme={theme}> 
        <RouterProvider router={router} />  
      </ThemeProvider>
    </div>
  )
}

