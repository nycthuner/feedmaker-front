import {  Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import HomePage from "../page/private/homePage";
import NavBar from "../component/NavBar";
import FeedbackPage from "../page/private/feedbackPage";

type privateRouteType = {
    className?: string,
}

const privateRoute = ({className}: privateRouteType) => {
    return(
        <>  
        <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/feedback" element={<FeedbackPage/>}/>
                </Routes>
        </>
    )
}

export default styled(privateRoute)`
width: 100%;
height: 100%;
`