import React from 'react';
import BoardLayout from './components/BoardLayout';
import { highSchoolBoardMembers } from './constants/highSchoolBoardData';

const HighSchoolBoard = () => {
    return (
        <BoardLayout
            title="High School Board Members"
            members={highSchoolBoardMembers}
        />
    );
};

export default HighSchoolBoard;
