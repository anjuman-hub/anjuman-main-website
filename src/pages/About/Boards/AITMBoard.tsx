import React from 'react';
import BoardLayout from './components/BoardLayout';
import { aitmBoardMembers } from './constants/aitmBoardData';

const AITMBoard = () => {
    return (
        <BoardLayout
            title="AITM Board Members"
            members={aitmBoardMembers}
        />
    );
};

export default AITMBoard;
