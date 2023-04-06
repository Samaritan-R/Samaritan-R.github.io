import { useRoutes } from 'react-router-dom'
import CssCompontents from '../pages/css';
import Home from '../pages/home';
import DebonceButton from '../pages/js/debonce';
import Login from "../pages/login";
export default function BaseRouter() {
    const element = useRoutes(
        [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'Login',
                element: <Login />,
            },
            {
                path: 'Css',
                element: <CssCompontents />,
            },
            {
                path: 'js',
                element: <DebonceButton />,
            }
        ]
    )
    return element
}