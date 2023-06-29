import React from 'react';
import 'styles/profile.css';
import image1 from 'assets/images/1.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faBloggerB } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
    return (
        <section className='section1' id='section_profile'>
            <div className="info1">
                <img className="profile" src={image1} alt='사진1' loading='lazy-loading'></img>
                <div style={{marginTop: '5%'}}>
                    <div className="user-info">
                        <p className="user-name">윤태현</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: '5px' }}>
                            <span>
                                <strong><FontAwesomeIcon icon={faEnvelope} /> : </strong>
                                yoonth0919@gmail.com
                            </span>
                            <span>
                                <strong><FontAwesomeIcon icon={faGithub} /> : </strong>
                                <a href="https://github.com/yoonth95">https://github.com/yoonth95</a>
                            </span>
                            <span>
                                <strong><FontAwesomeIcon icon={faBloggerB} /> : </strong>
                                <a href="https://velog.io/@yoonth95">https://velog.io/@yoonth95</a>
                            </span>
                            
                        </div>
                    </div>
                    <div>
                        Vanilla JS와 Flask를 활용한 프로젝트에서부터 MVP 개발을 통한 빠른 프로토타이핑까지 다양한 경험을 쌓았습니다. 
                        <br />사용자 중심의 혁신적인 서비스 개발에 초점을 두고 있습니다.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;

