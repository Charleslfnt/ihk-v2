import React from 'react';
import ReactDOM from 'react-dom';
import { RouteProps, Route, link } from 'react-router-dom';
import '../../App.css';
import Navbar from '../NavComponent/Nav';
import Banner from '../BannerComponent/Banner';
import Introduce from '../IntroduceComponent/Introduce';
import Contact from '../ContactComponent/Contact';
import Group from '../GroupComponent/group';


class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <Introduce />
                <Group />
                <Contact />
            </div>
        )
    }
}

export default App


