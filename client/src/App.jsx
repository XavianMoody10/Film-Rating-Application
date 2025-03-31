import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { TVShowsLibrary } from "./pages/TVShowsLibrary/TVShowsLibrary";
import { MoviesLibrary } from "./pages/MoviesLibrary/MoviesLibrary";
import { MediaDetails } from "./pages/MediaDetails/MediaDetails";
import { Header } from "./layouts/Header/Header";
import { SideNavigation } from "./layouts/SideNavigation/SideNavigation";
import { SideNavigationProvider } from "./context/SideNavigationProvider";

const App = () => {
  // Routes (React Router)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          element={
            <>
              <Header />
              <SideNavigation />
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviesLibrary />} />
          <Route path="/tv_shows" element={<TVShowsLibrary />} />
          <Route path="/:id" element={<MediaDetails />} />
        </Route>
      </Route>
    )
  );

  return (
    <SideNavigationProvider>
      <RouterProvider router={router} />
    </SideNavigationProvider>
  );
};

export default App;
