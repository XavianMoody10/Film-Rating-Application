import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { PageTemplate } from "./templates/PageTemplate/PageTemplate";
import { SideNavigationProvider } from "./contexts/SideNavigationContext";

const App = () => {
  // All routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<PageTemplate />}>
          <Route index element={<Home />} />
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
