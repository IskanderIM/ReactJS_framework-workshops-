import { Link } from "react-router-dom";

// homework lesson 4 
export const MainPage = () => (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/HomePage">Главная страница</Link>
                </li>
                <li>
                    <Link to="/AboutPage">О нас</Link>
                </li>
                <li>
                    <Link to="/">Страница приложения</Link>
                </li>
            </ul>
        </nav>
    </>
);
