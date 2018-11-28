import React from 'react';
import path from 'path';

export function getCaseName(fileName) {
    return path.basename(fileName);
}