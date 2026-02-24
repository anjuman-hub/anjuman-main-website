import BoardLayout from './components/BoardLayout';
import { aceBoardMembers } from './constants/aceBoardData';

const ACEBoard = () => {
    return (
        <BoardLayout
            title="ACE Board (B.Ed)"
            members={aceBoardMembers}
        />
    );
};

export default ACEBoard;
