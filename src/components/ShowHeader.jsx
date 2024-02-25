import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ShowHeader({ children }) {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    // const dynamicPathRegex = /^\/layout\/update-listing\/\d+$/;

    if (
      location.pathname === "/layout" ||
      location.pathname === "/layout/products" ||
      location.pathname === "/layout/orders" ||
      location.pathname === "/sign-in" ||
      location.pathname === "/sign-up" ||
      location.pathname === "/layout/create-listing" ||
      location.pathname === '/layout/update-listing'
      // dynamicPathRegex.test(location.pathname)
    ) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);
  return <div>{showNavbar && children}</div>;
}
