import React, {createContext, useMemo, useReducer} from 'react';
import DiaryFormStore, {diaryFormReducer} from "./DiaryFormStore";

const RootContext = createContext();

const RootStore = ({ children }) => {
    const diaryFormStore = DiaryFormStore;
    const initialDiaryFormState = diaryFormStore.initialDiaryForm;
    const [diaryFormState, diaryFormDispatch] = useReducer(
        diaryFormReducer,
        initialDiaryFormState
    );
    //만약 dispatch를 통한 호출보다 메소드 형식으로 변경하고 싶다면 아래와 같이 store생성 시 dispatch에 의존을 부여하고 store내에서 reducer호출, 화면단에서는 데이터만 줌으로써 개발자 입장에서 실수 방지
    //const diaryFormStore = new DiaryFormStore(diaryFormDispatch);

    //useMemo를 통한 최적화
    const diaryFormMemo = useMemo(
        () => ({
            diaryForm: {
                diaryFormStore,
                diaryFormDispatch
            }
        }),
        [diaryFormStore, diaryFormDispatch]
    )
    const diaryStateMemo = useMemo(
        () => ({
            diaryFormState: { diaryFormState },
        }),
        [diaryFormState]
    );

    const value = {
        diaryForm: {...diaryFormMemo.diaryForm, ...diaryStateMemo.diaryFormState}
    }
    return (
        <RootContext.Provider value={value}>
            {children}
        </RootContext.Provider>
    )
}

export { RootContext, RootStore };