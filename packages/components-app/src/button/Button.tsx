import { Button as MuiButton } from '@mui/material';

export const Button = (props: React.ComponentProps<typeof MuiButton>) => {
  return <MuiButton variant="contained" color="primary" {...props} />;
};