import {addDecorator, configure} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

addDecorator(withInfo({
    inline: true,
    styles: {
        header: {
            h1: {fontSize: 16},
            h2: {fontSize: 12},
        }
    },
}));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
