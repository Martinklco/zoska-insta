// src/app/auth/prihlasenie/page.tsx

"use client"; // Ensures this component runs in the browser

import { signIn } from "next-auth/react"; // Importing the signIn method
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Box from "@mui/material/Box"; // Importing Box for layout
import { useTheme } from "@mui/material/styles"; // Importing useTheme for theme access

export default function SignIn() {
  const theme = useTheme(); // Accessing the theme

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: theme.palette.background.default, // Background color from the theme
      }}
    >
      {/* Window Container */}
      <Box
        sx={{
          padding: "20px",
          borderRadius: "8px",
          border: `1px solid ${theme.palette.divider}`, // Light border color
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
          Prihlásenie
        </Typography>

        <Typography
          gutterBottom
          sx={{
            color: theme.palette.text.secondary, // Secondary text color from theme
          }}
        >
          Nie ste prihlásený/á?
          
          <Link
            href="/auth/registracia"
            style={{
              color: theme.palette.primary.main, // Primary color from theme
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Zaregistrujte sa
          </Link>
        </Typography>

        {/* Google Sign-In Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => signIn("google", { callbackUrl: "/prispevok" })}
          sx={{
            marginTop: "20px",
            width: "250px", // Same fixed width as Registrácia
          }}
        >
          Prihlásiť sa cez Google
        </Button>
          
        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            backgroundColor: "#6e5494", // GitHub's purple color
            "&:hover": {
              backgroundColor: "#5a4376", // Darker shade on hover
            },
            width: "250px", // Same fixed width as Google button
          }}
        >
          Prihlásiť sa cez GitHub
        </Button>
      </Box>
    </Box>
  );
}
