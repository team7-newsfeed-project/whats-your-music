import GlobalStyle from "GlobalStyle";
//import FirebaseAPI from "database/FirebaseAPI";
import Router from "shared/Router";
// import { app, auth } from "database/firebase";

function App() {
    // console.log("app : ", app);
    //console.log("info : ", auth.currentUser);
    return (
        <>
            <GlobalStyle />

            {/*<FirebaseAPI />*/}
            <Router />
        </>
    );
}

export default App;
