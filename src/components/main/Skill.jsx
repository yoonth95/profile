import React from 'react';
import 'styles/skill.css';
import image2 from 'assets/images/2.png';
import image3 from 'assets/images/3.png';

const Skill = () => {
    return (
        <section className="section1" id="section_skill">
            {/* <h2 style={{ margin: "30px 0 15px" }}>스킬 및 프로젝트</h2> */}
            <p className="additional" style={{margin: "10px 0 0 0"}}>사용했던 기술들을 나열했습니다.</p>
            <div className="info2">
                <div className="skill-list">
                    <h4>Front-End</h4>
                    <div>
                        <ul>
                            <li>HTML/CSS/JavaScript</li>
                            <li>jQuery</li>
                            <li>React</li>
                            <li>Redux Toolkit</li>
                            <li>Style Components</li>
                        </ul>
                    </div>
                </div>

                <div className="skill-list">
                    <h4>Back-End</h4>
                    <div>
                        <ul>
                            <li>Node.js</li>
                            <li>ExpressJS</li>
                            <li>Flask</li>
                            <li>AWS (EC2, S3, SES 등)</li>
                        </ul>
                    </div>
                </div>

                <div className="skill-list">
                    <h4>Database</h4>
                    <div>
                        <ul>
                            <li>MySQL</li>
                            <li>MariaDB</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr></hr>

            <p className="additional" style={{ margin: "10px" }}>팀 프로젝트입니다.</p>
            <div className="info2-project" style={{ marginBottom: "10px" }}>
                <img className="project-img3" src={image3} alt="이미지3" loading='lazy-loading'></img>
                <div className="project-info">
                    <h3 style={{ marginTop: "0" }}>웅진씽크빅 웹 빌더</h3>
                    <div className="use-skill">
                        <span>HTML / CSS / JS</span>
                        <span>React</span>
                        <span>Redux-toolkit</span>
                        <span>Node.js</span>
                        <span>ExpressJS</span>
                        <span>MySQL</span>
                        <span>Netlify / ngrok</span>
                    </div>
                    <div className='description'>
                        <p>개발자나 퍼블리셔가 아닌 누구나 쉽고 빠르게 상세 페이지를 제작 할 수 있는 웹 빌더입니다.</p>
                    </div>
                    <div className='description'>
                        <p>현재는 백엔드 서버가 ngrok 테스트만 진행 <br /> AWS EC2, RDS로 배포 진행 중</p>
                    </div>
                    <ul>
                        <li>팀 구성 - 4인</li>
                        <li><a href="https://woongjin-web-builder.netlify.app/">https://woongjin-web-builder.netlify.app/</a></li>
                        <li><a href="https://github.com/yoonth95/Web-Builder">https://github.com/yoonth95/Web-Builder</a></li>
                    </ul>
                </div>
            </div>
                
            <hr></hr>

            <p className="additional" style={{ margin: "10px" }}>개인 프로젝트입니다.</p>
            <div className="info2-project" style={{ marginBottom: "10px" }}>
                <img className="project-img2" src={image2} alt="이미지2" loading='lazy-loading'></img>
                <div className="project-info">
                    <h3 style={{ marginTop: "0" }}>계란 요리 성격 유형 검사</h3>
                    <div className="use-skill">
                        <span>HTML/CSS</span>
                        <span>Vaniila JS</span>
                        <span>React</span>
                        <span>Firebase</span>
                    </div>
                    <div className="description">
                        <p>성격 유형 검사를 통해 계란 요리와 매칭 시켜서 알려준다.</p>
                        <p>기획부터 시작해서 개발 및 배포까지 1인 개발</p>
                        <p><a href="https://velog.io/@yoonth95/%EA%B3%84%EB%9E%80-%EC%9A%94%EB%A6%AC-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%ED%85%8C%EC%8A%A4%ED%8A%B8" target='_blank' rel="noopener noreferrer">계란 요리 성격 유형 테스트 velog</a></p>
                    </div>
                    <ul>
                        <li>팀 구성 - 개인</li>
                        <li style={{marginTop: '20px'}}>React, AWS</li>
                        <ul style={{paddingTop: '0'}}>
                            <li><a href="https://egg-mbti.net/">https://egg-mbti.net/</a></li>
                            <li><a href="https://github.com/yoonth95/EBTI-React">https://github.com/yoonth95/EBTI-React</a></li>
                        </ul>
                        <li style={{marginTop: '20px'}}>VanillaJS, Firebase</li>
                        <ul style={{paddingTop: '0'}}>
                            <li><a href="https://egg-type.web.app/">https://egg-type.web.app/</a></li>
                            <li><a href="https://github.com/yoonth95/EBTI">https://github.com/yoonth95/EBTI</a></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skill;