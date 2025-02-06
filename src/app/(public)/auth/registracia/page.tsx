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

export default function SignIn() {
  const [isGdprChecked, setIsGdprChecked] = useState(false); // State for GDPR checkbox
  const [isTermsChecked, setIsTermsChecked] = useState(false); // State for terms checkbox
  const theme = useTheme(); // Accessing the theme

  const handleGdprCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsGdprChecked(event.target.checked);
  };

  const handleTermsCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTermsChecked(event.target.checked);
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
        backgroundColor: theme.palette.background.default, // Applying background from theme
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
        <Typography variant="h5" gutterBottom sx={{ padding: "30px 0", color: theme.palette.text.primary }}>
          Registrácia
        </Typography>

        {/* GDPR Agreement Checkbox */}
        <Box
          sx={{
            width: "250px", // Match the max width of the buttons
            marginBottom: "20px",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Checkbox
            checked={isGdprChecked}
            onChange={handleGdprCheckboxChange}
            color="primary"
            sx={{ marginRight: "8px" }}
          />
          <Typography variant="body2" sx={{ textAlign: "left", color: theme.palette.text.primary }}>
            Súhlasím so spracovaním osobných údajov podľa{" "}
            <Link
              href="/gdpr"
              style={{
                color: theme.palette.primary.main, // Use primary color from theme
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              GDPR
            </Link>
            .
          </Typography>
        </Box>

        {/* Terms Agreement Checkbox */}
        <Box
          sx={{
            width: "250px", // Match the max width of the buttons
            marginBottom: "20px",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Checkbox
            checked={isTermsChecked}
            onChange={handleTermsCheckboxChange}
            color="primary"
            sx={{ marginRight: "8px" }}
          />
          <Typography variant="body2" sx={{ textAlign: "left", color: theme.palette.text.primary }}>
            Súhlasím s{" "}
            <Link
              href="/podmienky"
              style={{
                color: theme.palette.primary.main, // Use primary color from theme
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Podmienkami
            </Link>
            .
          </Typography>
        </Box>

        {/* Google Sign-In Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => signIn("google", { callbackUrl: "/prispevok" })}
          disabled={!isGdprChecked || !isTermsChecked} // Disable button if either checkbox is not checked
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
          disabled={!isGdprChecked || !isTermsChecked} // Disable button if either checkbox is not checked
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
