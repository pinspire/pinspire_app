import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './pages/main'
import RegistrationForm from './pages/registrationForm'
import WelcomePage from './pages/WelcomePage'
import GenderForm from './pages/Gender'
import LangForm from './pages/LangForm'
import Categories from './pages/Categories'
import AddPicture from './pages/AddPicture'
import HomeFeed from './pages/HomeFeed'
import Create from './pages/Gender/Create'
import Login from './pages/Login'
import Apic from './pages/a-pic'
import Boards from './pages/Boards'
import SavedBoards from './pages/Boards'

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
      path:'/login',
      element: <Login />
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
    {
      path:"/addpic",
      element: <AddPicture />
    },
    {
      path:"/home",
      element: <HomeFeed />
    },
    {
      path:"/create",
      element: <Create />
    },
    {
      path:"/apic/:id",
      element: <Apic />
    },
    {
      path:"/boards",
      element: <SavedBoards />
    }
  ])
 

  return (
    <>
      <RouterProvider router={router} />;
    </>
  )
};

export default App;
