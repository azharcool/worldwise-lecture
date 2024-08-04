import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Outlet,
  useNavigate,
} from "react-router-dom";

import Homepage from "./pages/home-page/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import AppLayout from "./pages/app-layout/AppLayout";
import CityList from "./components/cities/CityList";
import CountryList from "./components/country/CountryList";
import City from "./components/city/City";
import CitiesProvider from "./contexts/CitiesProvider";
import Form from "./components/form/Form";
import AuthProvider, { useAuth } from "./contexts/AuthProvider";
import { Provider } from "react-redux";
// import { store } from "./redux/store";
import { store } from "./redux-toolkit/store";

function ProtectedRoute() {
  const { user } = useAuth();
  const isAuthenticated = user !== null;
  return isAuthenticated ? <Outlet /> : <Navigate to="login" replace={true} />;
}

function ProtectedRouteV1({ children }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isAuthenticated = user !== null;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [user]);

  return children;
}

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="product" element={<Product />} />
              <Route path="login" element={<Login />} />

              {/* <Route path="/" element={<ProtectedRoute />}> */}
              <Route
                path="app"
                element={
                  <ProtectedRouteV1>
                    <AppLayout />
                  </ProtectedRouteV1>
                }
              >
                <Route
                  index
                  element={<Navigate to="cities" replace={true} />}
                />

                <Route path="cities" element={<CityList />} />
                <Route path="cities/:cityId" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              {/* </Route> */}

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
