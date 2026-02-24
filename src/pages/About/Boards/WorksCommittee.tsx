import React from 'react';
import BoardLayout from './components/BoardLayout';
import { worksCommitteeMembers } from './constants/worksCommitteeData';

const WorksCommittee = () => {
    return (
        <BoardLayout
            title="Works Committee Members"
            members={worksCommitteeMembers}
        />
    );
};

export default WorksCommittee;
