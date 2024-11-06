import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './pages/main'
import RegistrationForm from './pages/registrationForm'
import WelcomePage from './pages/WelcomePage'
import GenderForm from './pages/Gender'
import LangForm from './pages/LangForm'
import Categories from './pages/Categories'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />
    },
    {
      path:"/registration",
      element: <RegistrationForm />
    },
    {
      path:"/welcomepage",
      element: <WelcomePage />
    },
    {
      path:"/genderform",
      element: <GenderForm />
    },
    {
      path:"/langform",
      element: <LangForm />
    },
    {
      path:"/categories",
      element: <Categories />
    },
  ])
 

  return (
    <>
      <RouterProvider router={router} />;
    </>
  )
};

export default App;
