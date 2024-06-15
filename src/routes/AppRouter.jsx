import React from 'react';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from '../features/homepage/HomePage';
import Shithead from '../features/game/Shithead';
import ApiTest from '../features/tests/apiTest';

export function withCondition(Component, condition, redirectTo) {
  return function InnerComponent() {
    return condition ? <Component /> : <Navigate to={redirectTo} replace />;
  };
}

export const withLoggedIn = (Component) => {
  return function InnerComponent(props) {
    const isAuthenticated = true; //useSelector(state => state.auth.isAuthenticated);
    return withCondition(Component, isAuthenticated, '/')(props);
  };
};

const Home = withLoggedIn(HomePage);
const ShitheadGame = withLoggedIn(Shithead);

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<ShitheadGame />} />
        <Route path="/tests" element={<ApiTest />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
