
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route, RouterProvider
} from "react-router-dom";
import Registration from '../pages/Registration';
import Otpveri from '../pages/Otpveri';
import Login from "../pages/Login";
import Emailverified from "../pages/Emailverified";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route
          path="/"
          element={<Registration />}
        />
         <Route
          path="/login"
          element={<Login />}
        />
          <Route
          path="/emailverification/:token"
          element={<Emailverified />}
        />
       <Route
          path="/otpVerification/:email"
          element={<Otpveri />}
        />
        
    </Route>
  ))

function App() {

  return (
    <>
     <RouterProvider
    router={router}
    
  />
    </>
  )
}

export default App;
