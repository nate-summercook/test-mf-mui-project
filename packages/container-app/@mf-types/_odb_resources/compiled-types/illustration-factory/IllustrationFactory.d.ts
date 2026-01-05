import { IllustrationProps } from 'lib/types/IllustrationProps';
import React from 'react';
interface IllustrationSet {
    [illustrationName: string]: React.FC<React.SVGProps<SVGSVGElement>>;
}
interface IllustrationSets {
    [illustrationSetName: string]: IllustrationSet;
}
export declare const IllustrationFactory: (illustrationSets: IllustrationSets, name: string) => (props: IllustrationProps) => React.JSX.Element;
export {};
