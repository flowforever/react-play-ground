import React from 'react';
import {storiesOf} from '@storybook/react';
import {BookNames} from "../helper/constants";
import {getCaseName} from "../helper/index";
import {StoryWrapper} from "../helper/StoryWrapper";

const addStory = (fn, info) => storiesOf(BookNames.Hooks, module, {info}).add(getCaseName(__filename), fn, {info});

addStory(() => {
    return (
        <StoryWrapper>
            Content
        </StoryWrapper>
    );
});