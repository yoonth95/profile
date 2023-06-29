import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'styles/nav.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faList, faBriefcase, faAward } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const tab = query.get('tab');

    return (
        <nav>
            <ul className="pagination">
                <li className={(tab === null || tab === 'profile') ? 'active' : ''}>
                    <Link to='/?tab=profile'><FontAwesomeIcon icon={faUser} />&nbsp; 프로필</Link>
                </li>

                <li className={tab === 'skill' ? 'active' : ''}>
                    <Link to='/?tab=skill'><FontAwesomeIcon icon={faList} />&nbsp; 스킬</Link>
                </li>

                <li className={tab === 'career' ? 'active' : ''}>
                    <Link to='/?tab=career'><FontAwesomeIcon icon={faBriefcase} />&nbsp; 경력</Link>
                </li>

                <li className={tab === 'award' ? 'active' : ''}>
                    <Link to='/?tab=award'><FontAwesomeIcon icon={faAward} />&nbsp; 수상 및 자격증</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;