
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";
import { useAuth, AuthProvider } from "../context/AuthContext";

const AppRouterContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      {isAuthenticated ? <PrivateRoute /> : <PublicRoute />}
    </BrowserRouter>
  );
};

const AppRouterRoot = () => {
  return (
    <AuthProvider>
      <AppRouterContent />
    </AuthProvider>
  );
};

export default styled(AppRouterRoot)`
  width: 100%;
  height: 100%;
`;