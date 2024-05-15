import React, { ReactElement } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Grid } from "@mui/material";

interface ILayout {
    children: ReactElement,
}

const Layout: React.FC<ILayout> = ({children}) => {
    return (
        <>
            <Header />
            <Grid container spacing={2} marginTop={2} marginX={5}>
                <Grid item md={2}>
                    <Sidebar />
                </Grid>
                <Grid item md={10}>
                {children}
                </Grid>
            </Grid>           
        </>
    )
}

export default Layout