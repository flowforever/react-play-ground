import React, {useEffect, useState} from 'react';
import {createAddStory} from "../helper/index";
import {StoryWrapper} from "../helper/StoryWrapper";

const addStory = createAddStory(__filename);


const fetchListFromFakeAPI = () => new Promise(resolve => {
    console.log('Fetch user list');

    setTimeout(() => resolve(
        [
            {name: 'trump wang', id: 1},
            {name: 'ronnie o\'sullivan', id: 1},
        ]
    ), 500);
});

const useUserList = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetchListFromFakeAPI().then(setUserList);

        return () => {

        }
    });

    return [userList, setUserList];
};

function UserList() {
    const [userList, setUserList] = useUserList();

    return (
        <div>
            {userList.map(user => <UserItem user={user}/>)}
        </div>
    );
}

function UserItem({user}) {
    return (
        <div>
            {user.id} - {user.name}
        </div>
    );
}

addStory(() => {
    return (
        <StoryWrapper>
            <UserList />
        </StoryWrapper>
    );
});