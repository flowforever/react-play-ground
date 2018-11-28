import React from 'react';
import {createAddStory} from "../helper/index";
import {StoryWrapper} from "./StoryWrapper";

const addStory = createAddStory(__filename);

addStory(() => {
    return (
        <StoryWrapper>
            Story Template
        </StoryWrapper>
    );
});