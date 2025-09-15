import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../../pages/Layout";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary.jsx";

const Home = lazy(() => import("../../pages/Home"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage"));

function Routing() {
  return (
    <CustomErrorBoundary>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="/details/:coinId" element={<CoinDetailsPage />} />
        </Route>
      </Routes>
    </CustomErrorBoundary>
  );
}

export default Routing;
