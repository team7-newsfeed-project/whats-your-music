import { LayoutStyle } from "components/styles/LayoutStyle";
import React from "react";

const Layout = ({ children }) => {
    return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
