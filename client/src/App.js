import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {check} from "./http/userApi";

const App = observer(() => {
    const {user} = useContext(Context)

    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
        })
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    );
})

export default App;
