import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './List';

const App: React.FC = () => {
    const isAuth = true;

    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    !route.auth || isAuth ? (
                        <Route key={index} {...route} />
                    ) : null
                ))}
            </Routes>
        </Router>
    );
};

export default App;