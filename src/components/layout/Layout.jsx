import Header from "components/main/Header";
import Footer from "components/Footer/Footer";
import { LayoutStyle } from "components/styles/LayoutStyle";
import React from "react";

const Layout = ({ children }) => {
    return (
        <LayoutStyle>
            <Header />
            {children}
            <Footer />
        </LayoutStyle>
    );
};

export default Layout;
