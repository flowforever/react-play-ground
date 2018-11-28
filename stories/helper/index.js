import React from 'react';
import path from 'path';

export function getCaseName(fileName) {
    return path.basename(fileName).replace('.stories.js', '');
}

export function getBookName(fileName) {
    return path.dirname(fileName).replace('stories/', '');
}