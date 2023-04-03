import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Photos from './components/Photos';
import Add from './components/Add';
import Update from './components/Update';
import "./style.css"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Photos />
    },
    {
      path: "/add",
      element: <Add />
    },
    {
      path: "/update/:id",
      element: <Update />
    }
  ]);

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
