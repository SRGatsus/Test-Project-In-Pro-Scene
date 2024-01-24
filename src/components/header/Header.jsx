import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";


export function Header({listNav}) {
    const location = useLocation();
    let currentNav = listNav.find(o => o.path === location.pathname)
    useEffect(() => {
        document.title = currentNav.title;
    }, []);
    return (
        <>
            <h1 className="custom-hide">{currentNav.title}</h1>
            <header>
                <h2 className="custom-hide">Главное меню</h2>
                <nav>
                    <ul>
                        {listNav.map(nav => {
                            return (
                                <Link to={nav.path} aria-current={"page"?currentNav.path === nav.path: ""} key={nav.path + "_"+nav.name_menu}>{nav.name_menu}</Link>
                    )
                        })}
                    </ul>
                </nav>
            </header>
        </>
    )
}