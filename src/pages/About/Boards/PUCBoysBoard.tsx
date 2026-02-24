import React from 'react';
import BoardLayout from './components/BoardLayout';
import { pucBoysBoardMembers } from './constants/pucBoysBoardData';

const PUCBoysBoard = () => {
    return (
        <BoardLayout
            title="PU College Board - Boys (2024–2028)"
            members={pucBoysBoardMembers}
        />
    );
};

export default PUCBoysBoard;
