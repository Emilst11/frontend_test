import React from "react";
import Navbar from "../components/Navbar";

const MainLayouts = (props) => {
    return(
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
    )
}
export default MainLayouts