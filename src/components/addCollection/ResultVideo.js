import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addVideoList } from "../../redux/modules/collectionSlice";
import Loading from "../../common/Loading";
const ResultVideo = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  //검색결과가 있을때, 없을때. 모달
  const [add, setAdd] = useState(null);
  const data = useSelector(
    (state) => state.myCollectionSlice.searchResult.data
  );

  const loading = useSelector(
    (state) => state.myCollectionSlice.searchResult.loading
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : data.length === 0 ? (
        <AlertBox>검색 결과가 없습니다.</AlertBox>
      ) : (
        data?.map((x, idx) => {
          return (
            <ResultBox
              key={idx}
              onClick={() => {
                dispatch(addVideoList(x));
                nav(-1);
              }}
            >
              {x.title}
            </ResultBox>
          );
        })
      )}
    </>
  );
};
export default ResultVideo;

const ResultBox = styled.div`
  margin: 10px;
  border-bottom: 1px solid #efefef;
  border-left: 2px solid #b295e9;
  padding: 5px;

  &:active {
    background-color: #efefef;
  }
`;
const AlertBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 10px;
`;
