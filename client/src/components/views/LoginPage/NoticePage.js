import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Icon } from "antd";

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

const border = css`
  flex: 1 1 0;
  max-width: 100%;
  min-width: 0;
  position: relative;
  margin-left: 20px;
  padding: 38px 30px;
  border: 1px solid #dedede;
  background: #fff;
  box-sizing: border-box;
`;

const em = css`
  font-style: normal;
  font-weight: 700;
  font-size: inherit;
  color: #70bded;
`;

function NoticePage() {
  return (
    <div>
      <div css={heading}>공지사항</div>
      <div css={border}>
        <div style={{ display: "flex" }}>
          <Icon type="right" style={{ fontSize: "1.3rem" }} />
          <p>
            소스코드는 <em css={em}>https://github.com/parkhj0423/sugang</em>
            에서 확인할 수 있으며 별도의 문의사항은 깃허브에 등록된
            <em css={em}> 개인 메일주소</em>로 부탁드립니다.
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <Icon type="right" style={{ fontSize: "1.3rem" }} />
          <p>
            오류 및 개선 문의는{" "}
            <em css={em}>https://github.com/parkhj0423/sugang/issues</em> 에
            이슈를 등록해주시기 바랍니다.
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <Icon type="right" style={{ fontSize: "1.3rem" }} />
          <p>
            <em css={em}>
              미흡한 부분을 지속적으로 유지보수 및 리팩토링할 예정입니다.
            </em>
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <Icon type="right" style={{ fontSize: "1.3rem" }} />
          <p>
            <em css={em}>크롬</em> 브라우저에 최적화 되어있습니다.
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <Icon type="right" style={{ fontSize: "1.3rem" }} />
          <p>
            본 사이트는 <em css={em}>경희대학교 모의 수강신청 시스템</em>의 랜딩
            페이지를 참고하여 제작하였습니다
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoticePage;
