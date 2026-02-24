
import BoardLayout from './components/BoardLayout';
import { deeniyatBoardMembers } from './constants/deeniyatBoardData';

const DeeniyatBoard = () => {
    return (
        <BoardLayout
            title="Deeniyat Board Members"
            members={deeniyatBoardMembers}
        />
    );
};

export default DeeniyatBoard;
