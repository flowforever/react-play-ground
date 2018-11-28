import React, {useEffect, useState} from 'react';
import {storiesOf} from '@storybook/react';
import {BookNames} from "../helper/constants";
import {getCaseName} from "../helper/index";

const addStory = (name, fn, info) => storiesOf(BookNames.Hooks, module, {info}).add(name, fn, {info});

function UseEffectDemoComponent() {
    useEffect(() => {
        console.log('running side effect.');

        return () => {
            console.log('I am unmount.')
        }
    });

    return (
        <div>
            Child Component
        </div>
    );
}

function BasicUsage() {
    const [isActive, setIsActive] = useState(true);

    return (
        <div onClick={() => setIsActive(!isActive)} style={{padding: 20}}>
            Parent Component <br/>
            {isActive ? <UseEffectDemoComponent/> : null}
        </div>
    );
}

addStory(getCaseName(__filename), () => (<BasicUsage/>), {});