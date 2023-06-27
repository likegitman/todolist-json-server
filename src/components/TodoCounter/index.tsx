import React from 'react';
import * as S from "./style";

interface TodoCounterProps {
    count: number;
}

function TodoCounter({count}: TodoCounterProps) {

    return (
        <S.TodoCounterContainer>
            <span>오늘의 할 일을 {count}개 완료했습니다!</span>
            <hr />
        </S.TodoCounterContainer>
    );
}

export default TodoCounter;