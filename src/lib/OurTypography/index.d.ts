import * as React from 'react';
import {OverridableComponent } from '../OverridableComponent';
export interface TypographyTypeMap<P = {}, D extends React.ElementType = 'span'> {
    props: P & {
        /**
         * The content of the component.
         */
        style?: 'normal | disabled | white';
        children?: React.ReactNode;
        variant?: 'title' | 'subtitle' |'common' | 'detailed';

    };
    defaultComponent: D;
    classKey: TypographyClassKey;
}

export type TypographyClassKey =
    'title' |
    'subtitle' |
    'common'|
    'detailed'|
    'normal' |
    'disabled'|
    'white' |
    'root';

declare const Typography: OverridableComponent<TypographyTypeMap>;
export default Typography;
