import React from 'react';
import { useLocation } from 'react-router-dom';
import 'styles/main.css'

import Profile from './main/Profile';
import Skill from './main/Skill';
import Award from './main/Award';
import Career from './main/Career';


const Main = () => {
    const query = new URLSearchParams(useLocation().search);
    const tab = query.get('tab');

    return (
        <main>
            {(tab === 'profile' || tab === null) ? <Profile /> 
            : tab === 'skill' ? <Skill /> 
            : tab === 'career' ? <Career /> 
            : <Award />}
        </main>
    );
};

export default Main;