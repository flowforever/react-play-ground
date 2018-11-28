import React, {useEffect, useState} from 'react';
import {createAddStory} from "../helper/index";
import {StoryWrapper} from "../helper/StoryWrapper";
import {itemMargins, itemPaddings} from "../helper/styles";

const addStory = createAddStory(__filename);

const fetchListFromFakeAPI = (groupId) => new Promise(resolve => {
    console.log('Fetch user list');

    const createItem = (obj) => ({...obj, groupId});

    setTimeout(() => resolve(
        [
            createItem({name: 'trump wang', id: 1}),
            createItem({name: 'ronnie o\'sullivan', id: 1}),
        ]
    ), 500);
});

const useUserList = (groupId) => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetchListFromFakeAPI(groupId).then(setUserList);

        return () => {
            console.log('I am unmount.')
        }
    }, [groupId]);

    return [userList, setUserList];
};

function UserList({groupId}) {
    const [userList] = useUserList(groupId);

    return (
        <div>
            {userList.map(user => <UserItem key={`${user.id}-${user.name}`} {...user} />)}
        </div>
    );
}

class UserItem extends React.PureComponent {
    render() {
        const {id, name} = this.props;

        return (
            <div style={{...itemMargins, ...itemPaddings}}>
                {id} - {name}
            </div>
        );
    }
}

addStory(() => {
    return (
        <StoryWrapper>
            <UserList />
        </StoryWrapper>
    );
});