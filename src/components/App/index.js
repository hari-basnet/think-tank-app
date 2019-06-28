import React from "react";
import './style.css';
import HelmetComponent from '../Helmet'
import Nav from '../Nav'

import Header from '../Header';
const App = ({ data }) => {
    const { contentfulIndex } = data;
    const { headerTitle, headerSubtitle, headerPill, headerImage, headerImageAlt } = contentfulIndex;
    const header = {
        headerTitle,
        headerSubtitle,
        headerPill,
        headerImage,
        headerImageAlt
    }
    const jsx = (
        <div>
            <HelmetComponent></HelmetComponent>
            <Nav></Nav>
            <Header
                header={header}
            ></Header>
        </div>
    )
    return jsx;
}
export default App;