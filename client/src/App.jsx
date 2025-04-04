import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { TVShowsLibrary } from "./pages/TVShowsLibrary/TVShowsLibrary";
import { MoviesLibrary } from "./pages/MoviesLibrary/MoviesLibrary";
import { TVShowDetails } from "./pages/TVShowDetails/TVShowDetails";
import { Header } from "./layouts/Header/Header";
import { SideNavigation } from "./layouts/SideNavigation/SideNavigation";
import { SideNavigationProvider } from "./context/SideNavigationProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";

const queryClient = new QueryClient();

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
              <ScrollRestoration />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviesLibrary />} />
          <Route path="/tv_shows" element={<TVShowsLibrary />} />
          <Route path="/details/movie/:id" element={<MovieDetails />} />
          <Route path="/details/tv_show/:id" element={<TVShowDetails />} />
        </Route>
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SideNavigationProvider>
        <RouterProvider router={router} />
      </SideNavigationProvider>
    </QueryClientProvider>
  );
};

export default App;
