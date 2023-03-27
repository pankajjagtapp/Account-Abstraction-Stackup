import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './component/common/mainLayout/MainLayout';
import SimpleLayout from './component/common/mainLayout/SimpleLayot';
import Dashboard from './component/Pages/Dashboard/Dashboard';
import LandingPage from './component/Pages/LandingPage/LandingPage';
import GetAddress from "./component/Pages/GetAddress/GetAddress"
import { RequireAuth } from './Routes/guard/AuthGuard';
import { WithoutAuthGuard } from './Routes/guard/WithoutAuthGuard';


const Application = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<WithoutAuthGuard><SimpleLayout /></WithoutAuthGuard>}>
        <Route
          index
          element={<GetAddress />}
        />
      </Route>
      <Route path="/liquidityPage" element={<WithoutAuthGuard><SimpleLayout /></WithoutAuthGuard>}>
        <Route
          index
          element={<LandingPage />}
        />
      </Route>

      <Route path="/auth" element={<RequireAuth><MainLayout /></RequireAuth>}>

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />

      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Application