import React from 'react';
import PropTypes from 'prop-types';
import {storiesOf} from '@storybook/react';



export const createAddStory = folderName => (name, fn) => storiesOf(folderName).add(name, fn);