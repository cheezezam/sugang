import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import axios from "axios";

const container = css`
  width: 70%;
  margin-bottom: 5rem;
`;

function MySubjectTable() {
  const [MySubject, setMySubject] = useState([]);

  let data = [];
  for (let i = 0; i < MySubject.length; i++) {
    data.push({
      key: i,
      department: MySubject[i].department,
      grade: `${MySubject[i].grade}학년`,
      subjectName: MySubject[i].subjectName,
      professorName: MySubject[i].professorName,
      subjectType: MySubject[i].subjectType,
      subjectPoint: MySubject[i].subjectPoint,
      date: MySubject[i].date,
      subjectCode: MySubject[i].subjectCode,
      classroom: MySubject[i].classroom,
      division: MySubject[i].division,
      rate: MySubject[i].rate,
      countApply: `${i} 명`,
      limitApply: MySubject[i].limitApply,
      competitionRate: `${i} : 1`,
    });
  }

  useEffect(() => {
    let variable = localStorage.getItem("userId");
    axios.post("/api/subject/getSubject", variable).then((response) => {
      if (response.data.success) {
        setMySubject(response.data.result);
        console.log(response.data.result);
      } else {
        alert("불러오기 실패");
      }
    });
  }, []);

  const columns = [
    {
      title: "학과",
      width: 70,
      dataIndex: "department",
      key: "department",
      fixed: "left",
    },
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
      width: 85,
    },
    {
      title: "강의실",
      dataIndex: "classroom",
      key: "classroom",
      width: 80,
    },
    {
      title: "분반",
      dataIndex: "division",
      key: "division",
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
      title: "취소",
      key: "cancel",
      fixed: "right",
      width: 60,
      render: (record) => (
        <Button style={{ padding: "0 5px" }} type='danger' onClick={() => onCancelClick(record)}>
          취소
        </Button>
      ),
    },
  ];

  const onCancelClick = (data) => {
    const { subjectName } = data;

    let variable = {
      subjectName,
    };
    console.log(data);
    axios.post("/api/subject/deleteSubject", variable).then((response) => {
      if (response.data.success) {window.location.reload();
      } else {
        alert("취소 실패");
      }
    });
  };

  return (
    <div css={container}>
      <h1>내 강의</h1>
      <Table
        columns={columns}
        dataSource={data}
        sticky
        scroll={{ x: 1000, y: 300 }}
        pagination={false}
      />
    </div>
  );
}

export default MySubjectTable;
