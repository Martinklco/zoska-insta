"use client"; // Ensures this component runs in the browser

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { signOut } from 'next-auth/react'; // Importing the signOut method
import Box from '@mui/material/Box'; // Importing Box for layout
import { useTheme } from '@mui/material/styles'; // Importing useTheme for theme access

export default function SignOut() {
  const theme = useTheme(); // Accessing the theme

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: theme.palette.background.default, // Background color from the theme
      }}
    >
      {/* Window Container */}
      <Box
        sx={{
          padding: "20px",
          borderRadius: "8px",
          border: `1px solid ${theme.palette.divider}`, // Light border color from theme
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow for window effect
          width: "300px", // Consistent width
          maxWidth: "90%", // Make it responsive on smaller screens
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            padding: "30px 0",
            color: theme.palette.text.primary, // Primary text color from theme
          }}
        >
          Odhlásenie
        </Typography>

        {/* Sign Out Button */}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => signOut({ callbackUrl: '/' })} // Sign out and redirect to home
          sx={{
            marginTop: '20px',
            width: "250px", // Same fixed width as other buttons
          }}
        >
          Odhlásiť sa
        </Button>
      </Box>
    </Box>
  );
}
