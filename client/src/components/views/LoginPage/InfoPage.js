import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import { Button } from "antd";
const heading = css`
  display: block;
  margin-top: 45px;
  margin-bottom: 20px;
  padding-top: 17px;
  background: url("https://www.sungkyul.ac.kr/sites/guide/images/common/bul-h2.png")
    no-repeat left top;
  font-family: "Noto Regular";
  line-height: 1.3;
  font-size: 24px;
  color: #222222;
`;

const wrapSchedule = css`
  display: flex;
  align-items: stretch;
  margin-bottom: 50px;
`;

const wrapScheduleContainer = css`
  flex: 1 1 0;
  max-width: 100%;
  min-width: 0;
  position: relative;
  margin-left: 40px;
  box-sizing: border-box;
`;

const h2 = css`
  position: relative;
  width: 250px
  height: 30px;
  margin-bottom: 20px;
  padding: 2px 20px 0;
  background: #70bded;
  font-size: 1rem;
  color: #fff;
  letter-spacing: -1px;
  word-spacing: -1px;
  box-sizing: border-box;
`;

const schedule = css`
  position: relative;
  float: left;
  width: 100%;
  height: 110px;
  padding-left: 20px;
  border-left: 1px solid #70bded;
  box-sizing: border-box;
  font-size: 1rem;
`;

function InfoPage() {
  return (
    <div>
      <div>
        <div css={heading}>수강신청 일정</div>
        <div css={wrapSchedule}>
          <div css={wrapScheduleContainer}>
            <h2 css={h2}>
              학부 수강신청
              <small style={{ marginLeft: "1rem" }}>Undergraduate</small>
            </h2>
            <div css={schedule}>
              <p>
                학부 수강 안내
                <br /> Course Registration
              </p>
              <Button>more</Button>
            </div>
          </div>
          <div css={wrapScheduleContainer}>
            <h2 css={h2}>
              장바구니 수강신청
              <small style={{ marginLeft: "1rem" }}>WishList</small>
            </h2>
            <div css={schedule}>
              <p>
                희망과목 수강 안내
                <br /> WishList Course Registration
              </p>
              <Button>more</Button>
            </div>
          </div>
          <div css={wrapScheduleContainer}>
            <h2 css={h2}>계절학기 수강신청</h2>
            <div css={schedule}>
              <p>
                계절학기 수강 안내
                <br /> Summer/Winter Course Registration
              </p>
              <Button>more</Button>
            </div>
          </div>
          <div css={wrapScheduleContainer}>
            <h2 css={h2}>
              대학원 수강신청
              <small style={{ marginLeft: "0.1rem" }}>Graduate school</small>
            </h2>
            <div css={schedule}>
              <p>
                대학원 수강 안내
                <br /> Graduate Course Registration
              </p>
              <Button>more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
