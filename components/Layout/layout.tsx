import React, {ReactNode} from "react";
import Header from "../Header/Header";

type LayoutProps = {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) =>
    <>
        <Header/>
        <main>{children}</main>
        <footer></footer>
    </>

export default Layout;