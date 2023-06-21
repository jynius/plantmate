
import React, {useReducer, useState} from 'react';
import ApiService from "../services/ApiService";
import apiService from "../services/ApiService";

export const diaryListReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_DIARY_LIST':
            return { ...state, ["diaryList"]: action.payload };
        case 'CHANGE_DIARY_SEARCH':
            const newState = {
                ...state,
                [action.payload.name]: action.payload.value
            }
            return newState;
        case 'CLEAR_DIARY_LIST':
            return action.payload;
        default:
            return state;
    }
};

function DiaryListStore(){
    const initialDiaryList = {
        diaryList: [1,2],
        search: { //검색정보
            sort : "",
            searchType: "",
            searchKeyword: "",
        },
        page: { //페이지 정보
            currentPage: 1,
            size: "9",
            totalPage: 1
        }
    };

    const searchDiaryList = (diaryListDispatch, param) => {
        apiService.get("growth", param)
            .then((response) => {
                const list = response.list;
                diaryListDispatch({type: "CHANGE_DIARY_LIST", payload: list})
            })
            .catch((response) => {
                console.log(response)
            })
    }
    return { initialDiaryList, searchDiaryList };
};
export default new DiaryListStore();