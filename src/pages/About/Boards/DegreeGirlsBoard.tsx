import BoardLayout from './components/BoardLayout';
import { degreeGirlsBoardMembers } from './constants/degreeGirlsBoardData';

const DegreeGirlsBoard = () => {
    return (
        <BoardLayout
            title="Degree College Board - Girls"
            members={degreeGirlsBoardMembers}
        />
    );
};

export default DegreeGirlsBoard;
