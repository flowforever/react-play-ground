import React from 'react';
import path from 'path';
import {storiesOf} from "@storybook/react";

export const createAddStory = filePath =>  (fn, info) => storiesOf(getBookName(filePath), module, {info}).add(getCaseName(filePath), fn, {info});

export function getCaseName(fileName) {
    return path.basename(fileName).replace('.stories.js', '');
}

export function getBookName(fileName) {
    return path.dirname(fileName).replace('stories/', '');
}

