import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import LoginPage from "../page/public/loginPage";
import CreateUserPage from "../page/private/createUserPage";

type publicRouteType = {
    className?: string,
}

const publicRoute = ({className}: publicRouteType) => {
    return(
        <>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/novousuario" element={<CreateUserPage/>}/>
            </Routes>
        </>
    )
}

export default styled(publicRoute)`
width: 100%;
height: 100%;
`