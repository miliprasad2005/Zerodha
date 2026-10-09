import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {

        axios.get(
            "http://localhost:3002/verify",
            {
                withCredentials: true
            }
        )
        .then((response) => {

            if (response.data.success) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }

        })
        .catch(() => {
            setIsAuthenticated(false);
        });

    }, []);

    if (isAuthenticated === null) {
        return <div>Checking authentication...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRoute;