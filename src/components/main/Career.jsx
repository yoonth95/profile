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
                        <span className='timeline-period-label'>개발 경력 1년 6개월</span>
                    </div>
                    <div className="grid-timeline-wrap">
                        <div className="grid-timeline-labels">
                            <div className="year">2017</div>
                            <div className="year">2018</div>
                            <div className="year">2019</div>
                            <div className="year">2020</div>
                            <div className="year">2021</div>
                            <div className="year">2022</div>
                            <div className="year">2023</div>
                        </div>
                        <div className='grid-timeline'>
                            <div className='items education'>한서대학교 <span>항공전자공학과</span></div>
                            <div className='items experience' title='(주)스마트디아그노시스 연구원'>(주)스마트디아그노시스 <span>연구원</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className='education-div'>
                <div className='education-left'>
                    <h4>학력</h4>
                    <div className='education-priod'>2014-03 ~ 2021-02</div>
                </div>
                <div className='education-right'>
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
                    <h4>업무 경험</h4>
                    <div className='experience-priod'>2021-12 ~ 2023-05 <br/>(1년 6개월)</div>
                </div>
                <div className='experience-right'>
                    <div className='experience-title'>
                        <h3>(주)스마트디아그노시스</h3>
                        <h4>연구개발팀 / 연구원</h4>
                    </div>
                    <ul className='tagList'>
                        <li>VanillaJS</li>
                        <li>Flask</li>
                        <li>MySQL</li>
                        <li>AWS</li>
                    </ul>
                    <div className='decription'>
                        <p>프론트엔드 개발자로 전반적인 개발 진행</p>
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
        </section>
    );
};

export default Career;