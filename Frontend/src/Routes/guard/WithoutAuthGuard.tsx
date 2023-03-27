// import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

export const WithoutAuthGuard = ( props : any ) => {

  const userDetails = useSelector((state: any) => state.user.userDetails)

  return !userDetails?.token ? props.children : <Navigate to="/auth/dashboard" />;

}