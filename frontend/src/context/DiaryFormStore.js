
import React from 'react';

export const diaryFormReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_DIARY_PHOTO_FORM':
            if(state.photos.length > 0) {
                const newPhotos = state.photos.concat(action.payload.photos)
                const newState = {...state,photos: newPhotos}
                return newState;
            }
            return { ...state, ...action.payload };
        case 'ADD_DIARY_FORM':
            const newState = {
                ...state,
                [action.payload.id]: action.payload.value
            }
            return newState;
        case 'CLEAR_DIARY_FORM':
            return { ...action.payload };
        // 나머지 필드에 대한 액션과 상태 업데이트 처리
        default:
            return state;
    }
};

// function DiaryFormStore({dispatch}){
function DiaryFormStore(){
    const initialDiaryForm = {
        title:'',
        date: '',
        nickName: '',
        plantLength: '',
        leafCount: '',
        growthStatus: '',
        waterSupply: '',
        soilType: '',
        fertilizerType: '',
        temperature: '',
        humidity: '',
        growthContent: '',
        remarks: '',
        photos: []
    };

    const clearDiaryForm = (dispatch) => {
        // dispatch( (field) => {
        //     dispatch({ type: `${field.toUpperCase()}`, payload: initialDiaryForm });
        // })
    }

    return { initialDiaryForm, clearDiaryForm };
};
export default new DiaryFormStore();