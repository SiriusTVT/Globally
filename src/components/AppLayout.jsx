import React from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function AppLayout() {
    const location = useLocation();

    React.useEffect(() => {
        // Limpiar localStorage solo cuando estamos en la ruta raíz
        if (location.pathname === '/') {
            localStorage.clear();
            console.log('localStorage limpiado en ruta /', {
                pathname: location.pathname,
                timestamp: new Date().toISOString()
            });
        }
    }, [location.pathname]);

    return <Outlet />;
}

export default AppLayout;