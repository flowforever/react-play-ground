import React, {useEffect, useState} from 'react';
import {storiesOf} from '@storybook/react';
import {BookNames} from "../helper/constants";
import {getCaseName} from "../helper/index";

const addStory = (fn, info) => storiesOf(BookNames.Hooks, module, {info}).add(getCaseName(__filename), fn, {info});