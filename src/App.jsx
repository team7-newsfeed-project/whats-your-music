import GlobalStyle from "GlobalStyle";
import Router from "shared/Router";
// import { app, auth } from "database/firebase";

function App() {
    // console.log("app : ", app);
    //console.log("info : ", auth.currentUser);
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
}

export default App;
