import React, { Fragment } from 'react';
 
export interface Detail {
    id ? : number;
    content ? : string;
}

export interface DetailState {
    details: Detail[],
}


