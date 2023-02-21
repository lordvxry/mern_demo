import {FC} from 'react';
import {Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from '@blueprintjs/core';
import {Link} from 'react-router-dom';

const AppNavbar: FC = () => {
    return (
        <Navbar className={Classes.DARK}>
            <NavbarGroup>
                <NavbarHeading>Films</NavbarHeading>
                <NavbarDivider/>
                <Link to={'/'}><Button className={Classes.MINIMAL} icon="home" text="Home"/></Link>
                <Link to={'/create'}><Button className={Classes.MINIMAL} icon="add" text="Add film"/></Link>
            </NavbarGroup>
        </Navbar>
    );
};

export default AppNavbar;