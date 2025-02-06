// src/app/o-mne/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import { Facebook, GitHub, Language, Person } from "@mui/icons-material";

export const metadata = { title: "O mne | ZoškaSnap" };

export default function About() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 64px)", // Ensures proper spacing below the navbar
        textAlign: "center",
        py: 4, // Adds padding
      }}
    >
      {/* Person Icon as Profile Picture */}
      <IconButton
        sx={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          backgroundColor: "grey.300", // Light background for contrast
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Person sx={{ fontSize: 80, color: "grey.700" }} />
      </IconButton>

      {/* About Me Title */}
      <Typography variant="h4" sx={{ padding: "30px" }} gutterBottom>
        Niečo o mne
      </Typography>

      {/* Description */}
      <Typography variant="body1" sx={{ maxWidth: 600, mb: 3 }}>
        Ahoj! Volám sa Martin a toto je môj projekt Zoškagram. Rád programujem, 
        objavujem nové technológie a vytváram veci, ktoré majú zmysel. Ak sa chceš 
        dozvedieť viac, neváhaj ma kontaktovať!
      </Typography>

      {/* Links Section */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <IconButton
          component={Link}
          href="https://www.facebook.com/spsezochova"
          target="_blank"
          rel="noopener"
          color="primary"
        >
          <Facebook fontSize="large" />
        </IconButton>

        <IconButton
          component={Link}
          href="https://zochova.sk"
          target="_blank"
          rel="noopener"
          color="primary"
        >
          <Language fontSize="large" />
        </IconButton>

        <IconButton
          component={Link}
          href="https://github.com/martinklco"
          target="_blank"
          rel="noopener"
          color="primary"
        >
          <GitHub fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
}
