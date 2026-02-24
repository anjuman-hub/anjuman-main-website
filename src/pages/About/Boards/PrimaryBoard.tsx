import React from 'react';
import BoardLayout from './components/BoardLayout';
import { primaryBoardMembers } from './constants/primaryBoardData';

const PrimaryBoard = () => {
    return (
        <BoardLayout
            title="Nursery & Primary School Board Members"
            members={primaryBoardMembers}
        />
    );
};

export default PrimaryBoard;
