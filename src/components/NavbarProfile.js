import React from 'react';
export default function NavbarProfile(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : ""
    }

    return (

        <div className="col-sm-3">
            <div className="row">
                <div className="col">
                    <div id="sidebar-main" className="sidebar sidebar-default sidebar-separate sidebar-fixed">
                        <div className="sidebar-content">
                            <div className="sidebar-category sidebar-default">
                                <div className="category-title text-center">
                                    <span style={{ fontSize: 20 }}>Menu</span>
                                </div>

                                <div className="category-content">
                                    <ul id="menu-nav" className="nav flex-column">
                                        <li className={`nav-item-profile${getNavLinkClass("/profile/editprofile")}`}>
                                            <a href="/profile/editprofile" className="nav-link">
                                                <i class="fas fx fa-user-alt"></i> Profile</a>
                                        </li>
                                        <li className={`nav-item-profile${getNavLinkClass("/profile/historydonation")}`}>
                                            <a href="/profile/historydonation" className="nav-link">
                                                <i class="fas fx fa-history"></i> Histori donasi</a>
                                        </li>
                                        <li className={`nav-item-profile${getNavLinkClass("/profile/gantipassword")}`}>
                                            <a href="/gantipassword" className="nav-link active">
                                                <i class="fas fx fa-lock"></i> Ganti Password</a>
                                        </li>
                                        <li>
                                            <br /> <br />
                                            <div className="btn-keluar text-center mb-4 mt-5"  >
                                                <button class="btn btn-keluar btn-sm px-4" type="submit"  >Log out</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        // --------------------------------------------------------------------------


        // ==============================================================================

    )
}
