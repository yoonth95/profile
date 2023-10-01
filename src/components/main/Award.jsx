import React from 'react';
import 'styles/award.css';

const Award = () => {
    return (
        <section className="section1" id="section_award">
            {/* <h2 style={{ margin: "30px 0" }}>수상 및 s자격증</h2> */}
            <div className="award-info">
                <div className="award-list">
                    <div className="award-date">2023-08</div>
                    <div className="award-text">
                        <h3>[유데미X웅진씽크빅] React 프로젝트 캠프</h3>
                        <p>5개의 프로젝트 중 웅진씽크빅 관리자 페이지 웹 빌더 개발로 전체 2등</p>
                    </div>
                </div>
                <div className="award-list">
                    <div className="award-date">2023-04</div>
                    <div className="award-text">
                        <h3>SQLD 자격증 취득</h3>
                        <p></p>
                    </div>
                </div>
                <div className="award-list">
                    <div className="award-date">2021-08</div>
                    <div className="award-text">
                        <h3>UiPath RPA League 2021 Boot Camp 해커톤</h3>
                        <p>OCR를 활용한 명함 데이터 추출 및 상품 기획서 워드 자동화 제작 및 이메일 발송 개발로 1등 상 수상</p>
                    </div>
                </div>
                <div className="award-list">
                    <div className="award-date">2021-07</div>
                    <div className="award-text">
                        <h3>한경닷컴IT교육센터 주관 공모전</h3>
                        <p>어린이집 아동 학대 데이터 분석과 CCTV 영상 분류 및 챗봇으로 1등 상 수상</p>
                    </div>
                </div>
                <div className="award-list">
                    <div className="award-date">2021-06</div>
                    <div className="award-text">
                        <h3>정보처리기사 자격증 취득</h3>
                        <p></p>
                    </div>
                </div>
                <div className="award-list">
                    <div className="award-date">2020-11</div>
                    <div className="award-text">
                        <h3>대학 교내 캡스톤 경진대회</h3>
                        <p>아두이노 기반 센서를 활용한 자동 분리수거 쓰레기통 제작으로 장려상 수상</p>
                    </div>
                </div>
                <div className="award-list">
                    <div className="award-date">2019-11</div>
                    <div className="award-text">
                        <h3>학과 학술대회</h3>
                        <p>아두이노 기반 무인 비행 장치 및 조종 웨어러블 장갑 제작으로 1등 상 수상</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Award;