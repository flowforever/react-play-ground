import React from 'react';
import {createAddStory} from "../helper/index";
import {StoryWrapper} from "../helper/StoryWrapper";

const addStory = createAddStory(__filename);

addStory(() => {
    return (
        <StoryWrapper>
            Content
        </StoryWrapper>
    );
});