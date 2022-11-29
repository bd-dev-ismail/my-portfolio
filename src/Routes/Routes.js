import { createBrowserRouter } from "react-router-dom";
import AddProject from "../AddProject/AddProject";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home/Home";
import All from "../components/Projects/All";
import Bootstrap from "../components/Projects/Bootstrap";
import JavaScript from "../components/Projects/JavaScript";
import MernStack from "../components/Projects/MernStack";
import Projects from "../components/Projects/Projects";
import ReactJs from "../components/Projects/ReactJs";
import Main from "../layout/Main";
import ProjectLayout from "../layout/ProjectLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/add",
        element: <AddProject />,
      },
    ],
  },
  {
    path: "/projects",
    element: <ProjectLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/projects",
        element: <All />,
      },
      {
        path: "/projects/:id",
        element: <Projects />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/project/${params.id}`),
      },
    ],
  },
]);