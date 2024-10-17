// src/sections/AuthHomeView.tsx

import Typography from '@mui/material/Typography';

export default function AuthHomeView({ userName }: { userName: string }) {
  return (
    <>
      <Typography variant="h4">Domovská stránka Prihláseného používateľa</Typography>
      <Typography variant="h6">Vitaj, {userName}</Typography>
    </>
  );
}