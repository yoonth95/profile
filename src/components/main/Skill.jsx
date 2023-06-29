import React from 'react';
import 'styles/skill.css';
import image2 from 'assets/images/2.png';

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
                            <li>HTML/CSS</li>
                            <li>Pug</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                        </ul>
                    </div>
                </div>

                <div className="skill-list">
                    <h4>Back-End</h4>
                    <div>
                        <ul>
                            <li>Flask</li>
                            <li>Node.js</li>
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

            <p className="additional" style={{ margin: "10px" }}>개인 프로젝트입니다.</p>
            <div className="info2" style={{ marginBottom: "100px" }}>
                <img src={image2} alt="이미지2" loading='lazy-loading'></img>
                <div className="project-info">
                    <h3 style={{ marginTop: "0" }}>계란 요리 성격 유형 검사</h3>
                    <div className="use-skill">
                        <span>HTML/CSS</span>
                        <span>Vaniila JS</span>
                        <span>Firebase</span>
                    </div>
                    <div style={{ margin: "10px 0" }}>
                        <p>성격 유형 검사를 통해 계란 요리와 매칭 시켜서 알려준다.</p>
                        <p>기획부터 시작해서 개발 및 배포까지 1인 개발</p>
                    </div>
                    <ul>
                        <li>팀 구성 - 개인</li>
                        <li><a href="https://egg-type.web.app/">https://egg-type.web.app/</a></li>
                        <li><a href="https://github.com/yoonth95/EBTI">https://github.com/yoonth95/EBTI</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skill;