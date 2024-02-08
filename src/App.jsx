import GlobalStyle from "GlobalStyle";
import Layout from "components/layout/Layout";
import Router from "shared/Router";
import { app, auth } from "database/firebase";

function App() {
    console.log("app : ", app);
    //console.log("info : ", auth.currentUser);
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
