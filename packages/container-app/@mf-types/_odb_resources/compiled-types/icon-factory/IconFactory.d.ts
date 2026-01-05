import { IconProps } from 'lib/types/IconProps';
import React, { FunctionComponent } from 'react';
interface IconSet {
    outlined20?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    outlined24?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    outlined30?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    outlined48?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    filled20?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    filled24?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    filled30?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    filled48?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    inverted20?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    inverted24?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    inverted30?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    inverted48?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
interface IconSets {
    [iconSetName: string]: IconSet;
}
export declare const IconFactory: (iconSets: IconSets, name: string) => (props: IconProps) => React.JSX.Element;
export {};
