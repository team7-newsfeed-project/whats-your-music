import React from "react";
import { LayoutStyle } from "components/styles/LayoutStyle";
import Footer from "components/Footer/Footer";

const Layout = ({ children }) => {
    return (
        <LayoutStyle>
            {children}
            <Footer />
        </LayoutStyle>
    );
};

export default Layout;
