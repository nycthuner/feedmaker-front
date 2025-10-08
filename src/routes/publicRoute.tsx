import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import LoginPage from "../page/public/loginPage";

type publicRouteType = {
    className?: string,
}

const publicRoute = ({className}: publicRouteType) => {
    return(
        <>
            <BrowserRouter> 
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default styled(publicRoute)`
width: 100%;
height: 100%;
`