
import BoardLayout from './components/BoardLayout';
import { specialInviteesMembers } from './constants/specialInviteesData';

const SpecialInvitees = () => {
    return (
        <BoardLayout
            title="Special Invitees"
            members={specialInviteesMembers}
        />
    );
};

export default SpecialInvitees;
