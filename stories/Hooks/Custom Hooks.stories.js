import React from 'react';
import {storiesOf} from '@storybook/react';
import {getBookName, getCaseName} from "../helper/index";
import {StoryWrapper} from "../helper/StoryWrapper";

const addStory = (fn, info) => storiesOf(getBookName(__filename), module, {info}).add(getCaseName(__filename), fn, {info});

addStory(() => {
    return (
        <StoryWrapper>
            Content
        </StoryWrapper>
    );
});