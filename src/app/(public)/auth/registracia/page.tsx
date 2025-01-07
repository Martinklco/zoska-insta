// src/app/auth/registracia/page.tsx

"use client"; // Ensures this component runs in the browser

import { useState } from "react"; // Importing useState for checkbox state
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox"; // Importing Checkbox
import Box from "@mui/material/Box"; // Importing Box for layout
import Link from "next/link"; // Importing Link for GDPR redirection
import { signIn } from "next-auth/react"; // Importing the signIn method

export default function SignIn() {
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
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
      }}
    >
      <Typography variant="h5" gutterBottom>
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
          checked={isChecked}
          onChange={handleCheckboxChange}
          color="primary"
          sx={{ marginRight: "8px" }}
        />
        <Typography variant="body2" sx={{ textAlign: "left" }}>
          Súhlasím so spracovaním osobných údajov podľa{" "}
          <Link
            href="/gdpr" // Replace with your GDPR page route
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            GDPR
          </Link>
          .
        </Typography>
      </Box>

      {/* Google Sign-In Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => signIn("google", { callbackUrl: "/" })} // Sign in via Google
        disabled={!isChecked} // Disable button if checkbox is not checked
        sx={{
          marginTop: "10px",
          width: "250px", // Set fixed width
        }}
      >
        Prihlásiť sa cez Google
      </Button>

      {/* GitHub Login Button */}
      <Button
        variant="contained"
        disabled={!isChecked} // Disable button if checkbox is not checked
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
  );
}
