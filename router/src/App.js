import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Not Found</p>,
    children: [
      { index: true, element: <Home /> },
      { path: "videos", element: <Videos /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
