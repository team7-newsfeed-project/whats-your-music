import GlobalStyle from "GlobalStyle";
import Layout from "components/layout/Layout";
import Router from "shared/Router";

function App() {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Router />
            </Layout>
        </>
    );
}

export default App;
