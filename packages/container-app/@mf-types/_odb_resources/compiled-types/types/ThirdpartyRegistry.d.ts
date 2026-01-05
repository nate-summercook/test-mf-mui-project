export interface ThirdpartyLayerHeaderProps {
    titleKey: string;
    subtitleKey?: string;
    closeAriaKey: string;
    backLabelKey?: string;
}
export interface ThirdpartyLayer {
    bookmarkable?: boolean;
    scriptUrl?: string;
    tagName: string;
    hasBackButton?: boolean;
    attributes?: object;
    headerProps: ThirdpartyLayerHeaderProps;
}
export interface ThirdpartyRegistry {
    initializationScripts?: string[];
    layers?: {
        [key: string]: ThirdpartyLayer[];
    };
}
