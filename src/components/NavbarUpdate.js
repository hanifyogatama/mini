import React from 'react';


export default function NavbarUpdate(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : ""
    }

    return (
        <div className="container mt-5">
            <nav className="navbar bg-none px-0">
                <ul className="nav-content">
                    <li className={`nav-item-content${getNavLinkClass("/donasi/description")}`}>
                        <a className="nav-link px-0" href="/donasi/description">Deskripsi</a>
                    </li>
                    <li className={`nav-item-content${getNavLinkClass("/donasi/updateactivity")} pl-4 pr-3`}>
                        <a className="nav-link px-0" href="/donasi/updateactivity">Update Aktivitas</a>
                    </li>
                    <li className={`nav-item-content${getNavLinkClass("/donasi/updatedonasi")} pl-2`}>
                        <a className="nav-link px-0" href="/donasi/updatedonasi">Update Donasi</a>
                    </li>
                </ul>
            </nav>
        </div >
    )
}
