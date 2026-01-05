
    export type RemoteKeys = '_components/Button' | '_components/Theme';
    type PackageType<T> = T extends '_components/Theme' ? typeof import('_components/Theme') :T extends '_components/Button' ? typeof import('_components/Button') :any;