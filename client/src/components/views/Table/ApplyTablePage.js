import React from "react";
import { Table } from "antd";
import SubjectAddModal from "./SubjectAddModal";
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const container = css`
  width: 70%;
`;

const modalPosition = css`
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
`;

function ApplyTablePage() {
  const columns = [
    {
      title: "학년",
      width: 70,
      dataIndex: "grade",
      key: "grade",
      fixed: "left",
    },
    {
      title: "과목명",
      width: 150,
      dataIndex: "subjectName",
      key: "subjectName",
      fixed: "left",
    },
    {
      title: "교수명",
      width: 75,
      dataIndex: "professorName",
      key: "professorName",
      fixed: "left",
    },
    {
      title: "구분",
      width: 90,
      dataIndex: "subjectType",
      key: "subjectType",
    },
    {
      title: "학점",
      dataIndex: "subjectPoint",
      key: "subjectPoint",
      width: 70,
    },
    {
      title: "요일",
      dataIndex: "date",
      key: "date",
      width: 70,
    },
    {
      title: "과목 코드",
      dataIndex: "subjectCode",
      key: "subjectCode",
      width: 75,
    },
    {
      title: "강의실",
      dataIndex: "classroom",
      key: "classroom",
      width: 80,
    },
    {
      title: "평점",
      dataIndex: "rate",
      key: "rate",
      width: 80,
    },
    {
      title: "신청인원",
      dataIndex: "countApply",
      key: "countApply",
      width: 90,
    },
    {
      title: "제한인원",
      dataIndex: "limitApply",
      key: "limitApply",
      width: 90,
    },
    {
      title: "경쟁률",
      dataIndex: "competitionRate",
      key: "competitionRate",
      width: 75,
    },
    {
      title: "신청",
      key: "operationa",
      fixed: "right",
      width: 60,
      render: () => <a href="#">신청</a>,
    },
    {
      title: "장바구니 담기",
      key: "operation",
      fixed: "right",
      width: 120,
      render: () => <a href="#">장바구니 담기</a>,
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      grade: `${i}학년`,
      subjectName: `React 기초${i}`,
      professorName: "박현우",
      subjectType: "전공/필수",
      subjectPoint: "3학점",
      date: "화/4-6",
      subjectCode: "12121",
      classroom: "중/102",
      rate: `${i} / 100`,
      countApply: `${i} 명`,
      limitApply: "100 명",
      competitionRate: `${i} : 1`,
    });
  }

  return (
    <div css={container}>
       <h1>강의 목록</h1>
      <Table
        columns={columns}
        dataSource={data}
        sticky
        scroll={{ x: 1000, y: 300 }}
      />
      <div css={modalPosition}>
        <SubjectAddModal />
      </div>
    </div>
  );
}

export default ApplyTablePage;
