
import React from 'react';
import Log from '../components/ppp.png'


function Navbar() {
    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={Log} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
                            Movify
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar

