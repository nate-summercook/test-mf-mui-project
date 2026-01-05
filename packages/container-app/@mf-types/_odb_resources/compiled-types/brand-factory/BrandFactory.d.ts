import { BrandProps } from 'lib/types/BrandProps';
import React from 'react';
interface BrandSet {
    [brandName: string]: React.FC<React.SVGProps<SVGSVGElement>>;
}
interface BrandSets {
    [brandSetName: string]: BrandSet;
}
export declare const BrandFactory: (brandSets: BrandSets, name: string) => (props: BrandProps) => React.JSX.Element;
export {};
