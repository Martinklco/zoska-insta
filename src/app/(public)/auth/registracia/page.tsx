// src/app/auth/registracia/page.tsx

"use client"; // Ensures this component runs in the browser

import { useState } from "react"; // Importing useState for checkbox state
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox"; // Importing Checkbox
import Box from "@mui/material/Box"; // Importing Box for layout
import Link from "next/link"; // Importing Link for GDPR redirection
import { signIn } from "next-auth/react"; // Importing the signIn method
import { useTheme } from "@mui/material/styles"; // Importing useTheme to access theme
import Alert from "@mui/material/Alert";

export default function SignIn() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const theme = useTheme(); // Accessing the theme

  const handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(event.target.checked);
    if (event.target.checked) {
      setShowWarning(false);
    }
  };

  const handleButtonClick = (provider?: string) => {
    if (!isAgreed) {
      setShowWarning(true);
      return;
    }
    if (provider) {
      signIn(provider, { callbackUrl: "/prispevok" });
    }
  };

  const linkStyle = {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    }
  };

  const textStyle = {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          padding: "20px",
          borderRadius: "8px",
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          width: "300px",
          maxWidth: "90%",
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ 
            paddingTop: "30px",
            paddingBottom: "10px",
            color: theme.palette.text.primary,
            fontSize: "1.75rem",
            fontWeight: 500
          }}
        >
          Registrácia
        </Typography>

        <Typography 
          variant="body2" 
          sx={{ 
            ...textStyle,
            marginBottom: "30px",
          }}
        >
          Už ste zaregistrovaný/á? <Link href="/auth/prihlasenie" style={linkStyle}>Prihláste sa</Link>
        </Typography>

        <Box
          sx={{
            width: "250px",
            marginBottom: "20px",
            mx: "auto",
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Checkbox
              checked={isAgreed}
              onChange={handleAgreementChange}
              color="primary"
              sx={{ marginRight: "8px" }}
            />
            <Typography variant="body2" sx={{ ...textStyle, textAlign: 'left' }}>
              Súhlasím s <Link href="/gdpr" style={linkStyle}>GDPR</Link> a s <Link href="/podmienky" style={linkStyle}>podmienkami</Link>
            </Typography>
          </Box>
        </Box>

        {showWarning && (
          <Alert 
            severity="error" 
            sx={{ 
              mb: 2, 
              width: "250px",
              mx: "auto"
            }}
          >
            Musíte súhlasiť s GDPR a podmienkami
          </Alert>
        )}

        {/* Google Sign-In Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleButtonClick("google")}
          sx={{
            marginTop: "10px",
            width: "250px", // Same fixed width as other buttons
          }}
        >
          Registrovať sa cez Google
        </Button>

        {/* GitHub Login Button */}
        <Button
          variant="contained"
          onClick={() => handleButtonClick()}
          sx={{
            marginTop: "20px",
            backgroundColor: "#6e5494", // GitHub's purple color (unchanged)
            "&:hover": {
              backgroundColor: "#5a4376", // Darker shade on hover
            },
            width: "250px", // Same fixed width as other buttons
          }}
        >
          Registrovať sa cez GitHub
        </Button>
      </Box>
    </Box>
  );
}
