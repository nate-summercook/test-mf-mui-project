import { SxProps } from '@mui/material';
export type IconVariant = '20' | '24' | '30' | '48';
export interface IconProps {
    size?: number | string;
    variant?: IconVariant;
    type?: 'neutral' | 'outlined' | 'filled' | 'inverted';
    color?: string;
    sx?: SxProps;
}
