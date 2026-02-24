import BoardLayout from './components/BoardLayout';
import { degreeBoysBoardMembers } from './constants/degreeBoysBoardData';

const DegreeBoysBoard = () => {
    return (
        <BoardLayout
            title="Degree College Board - Boys"
            members={degreeBoysBoardMembers}
        />
    );
};

export default DegreeBoysBoard;
