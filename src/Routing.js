
import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Top from "./components/Top";
import Upcomming from "./components/Upcomming";
import Singlemovie from "./components/Singlemovie";
import SearchMovies from "./components/SearchMovies";

const customRouter = createBrowserRouter([
    {
      path: "",
      element:<App/>, 
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: "/singlemoviepage/:id",
            element: <Singlemovie/>
          },
          {
            path: "/topmoviepage",
            element: <Top />
          },
          {
            path: "/upcommingmoviepage",
            element: <Upcomming/>
          },
          {
            path: "/searchmovies/:search",
            element:<SearchMovies/>
          }
        
      ],
    }
  ]);
  export default customRouter;