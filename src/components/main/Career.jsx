import React from 'react';
import 'styles/career.css'

const Career = () => {
    return (
        <section className="section1" id="section_career">
            <div className='timeline-div'>
                <div className='timeline-left'>
                    <h4>타임라인</h4>
                </div>
                <div className='timeline-right'>
                    <div className='timeline-period'>
                        <span className='timeline-period-label'>개발 경력 1년 5개월</span>
                    </div>
                    <div className="grid-timeline-wrap">
                        <div className="grid-timeline-labels">
                            <div className="year">2018</div>
                            <div className="year">2019</div>
                            <div className="year">2020</div>
                            <div className="year">2021</div>
                            <div className="year">2022</div>
                            <div className="year">2023</div>
                        </div>
                        <div className='grid-timeline'>
                            <div className='items education'>한서대학교 <span className='addText'>항공전자공학과</span></div>
                            <div className='items active1' title='한경닷컴IT교육센터'>한경닷컴IT교육센터</div>
                            <div className='items experience' title='(주)스마트디아그노시스 연구원'>(주)스마트디아그노시스 <span className='addText'>연구원</span></div>
                            <div className='items active2' title='[유데미X웅진씽크빅] React 프로젝트 캠프'>[유데미X웅진씽크빅] React 프로젝트 캠프</div>
                        </div>
                        <div className='toolbar'>
                            <div className='toolbar-title'></div>
                            <div className='toolbar-month'></div>
                            <div className='toolbar-period'></div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className='education-div'>
                <div className='education-left'>
                    <h4>학력</h4>
                </div>
                <div className='education-right'>
                    <div className='education-priod'>2014-03 ~ 2021-02</div>
                    <div className='education-title'>
                        <h3>한서대학교</h3>
                        <h4>항공전자공학 전공 / 항공기계공학 부전공</h4>
                        <h4>3.83 / 4.5 학점</h4>
                    </div>
                </div>
            </div>
            <br/>
            <div className='experience-div'>
                <div className='experience-left'>
                    <h4>경력</h4>
                </div>
                <div className='experience-right'>
                    <div className='experience-priod'>2021-12 ~ 2023-05 (1년 5개월)</div>
                    <div className='experience-info'>
                        <div className='experience-title'>
                            <h3>(주)스마트디아그노시스</h3>
                            <h4>연구개발팀 / 연구원</h4>
                        </div>
                        <ul className='tagList'>
                            <li>VanillaJS</li>
                            <li>Flask</li>
                            <li>Node.js</li>
                            <li>MySQL</li>
                            <li>AWS</li>
                        </ul>
                        <div className='decription'>
                            <p>웹 개발자로 전반적인 개발 진행</p>
                        </div>

                        <ul className='workList'>
                            <li className='workList-li'>
                                <h4>온라인 시험 인공지능 감독관 TestWith 개발 및 유지보수</h4>
                                <span>2021-12 ~ 2023-05</span>
                                <a href="https://testwith.co.kr/" rel="noreferrer">https://testwith.co.kr/</a>
                                <div>
                                    <ol>
                                        <li>Vanilla JS, Flask, Node.js, MySQL을 사용해 시험 문제 관리와 응시자 관리 기능 구현</li>
                                        <li>Flask를 통해 AWS SES를 활용하여 사용자의 엑셀에 있는 이메일 주소로 대량 발송 기능 구현</li>
                                        <li>텍스트 에디터를 사용하여 이미지와 오디오 등의 간편한 시험 문제 생성 기능 구현</li>
                                        <li>자체 문제은행 페이지를 구축하여 문제 관리</li>
                                        <li>Server-Sent Events (SSE)를 이용한 ChatGPT API의 실시간 FAQ 답변 스트리밍 구현</li>
                                    </ol>
                                </div>
                            </li>
                            <li className='workList-li'>
                                <h4>KMA 온라인 진단 플랫폼 LMS 개발 및 유지보수</h4>
                                <span>2022-08 ~ 2023-05</span>
                                <a href="https://kma.qualification.or.kr/" rel="noreferrer">https://kma.qualification.or.kr/</a>
                                <div>
                                    <ol>
                                        <li>Vanilla JS, Flask, MySQL로 프론트엔드 및 백엔드의 전체 개발 사이클을 기획부터 구현까지 담당</li>
                                        <li>온라인 강의 동영상에서 진도율 추적, 실시간 진도율 저장 및 다양한 제어 기능 구현</li>
                                        <li>수강생을 위한 강의, 시험, 과제 진행 기능 구현</li>
                                        <li>관리자 페이지에서 수강생, 강의, 시험, 과제 관리 기능을 개발</li>
                                    </ol>
                                </div>
                            </li>
                            <li className='workList-li'>
                                <h4>온라인 모의고사 플랫폼 개발 및 유지보수</h4>
                                <span>2023-02 ~ 2023-05</span>
                                <a href="https://testwith.co.kr/mock_student/main" rel="noreferrer">https://testwith.co.kr/mock_student/main</a>
                                <div>
                                    <ol>
                                        <li>Vanilla JS, Flask, Node.js, MySQL을 사용해 모의고사 시험 기능 구현</li>
                                        <li>토스페이먼츠 API를 통한 안정적인 결제 시스템 구현</li>
                                        <li>클라이언트가 첨부한 PDF를 서버에서 렌더링한 후, 암호화하여 사용자가 다운로드할 수 있도록 구현</li>
                                    </ol>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br/>

            <div className='active-div'>
                <div className='active-left'>
                    <h4>활동</h4>
                </div>
                <div className='active-right'>
                    <div className='active-item item-border'>
                        <div className='active-priod'>2023-06 ~ 2023-08</div>
                        <div className='active-info'>
                            <div className='active-title'>
                                <h3>[유데미X웅진씽크빅] React 프로젝트 캠프</h3>
                                <ul className='tagList'>
                                    <li>React</li>
                                    <li>Redux Toolkit</li>
                                </ul>
                                <p>역량 강화 코스를 통해 서비스 기획, React 개념 및 문법, 심화 과정을 습득하고 프로젝트 코스를 통한 기업 실무 프로젝트 진행</p>
                            </div>
                        </div>
                    </div>
                    <div className='active-item item-border'>
                        <div className='active-priod'>2021-03 ~ 2021-08</div>
                        <div className='active-info'>
                            <div className='active-title'>
                                <h3>[교육] 한경닷컴IT교육센터 교육 이수</h3>
                                <ul className='tagList'>
                                    <li>Python</li>
                                    <li>R</li>
                                    <li>Flask</li>
                                    <li>TensorFlow</li>
                                    <li>MariaDB</li>
                                    <li>UiPath</li>
                                </ul>
                                <p>빅데이터 분석을 활용한 인공지능 기반 디지털드랜스포메이션 과정 수료</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Career;