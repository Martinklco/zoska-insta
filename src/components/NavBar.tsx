"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar"; // Import Avatar from Material UI
import { useThemeMode } from "./ThemeProvider";

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const { data: session } = useSession(); // Get session data to check if user is logged in
  const { toggleTheme, mode } = useThemeMode(); // Access theme toggle functionality

  // Define unauthenticated navigation items
  const unauthNavItems = [
    { label: "Domov", icon: <HomeIcon />, href: "/" },
    { label: "O mne", icon: <InfoIcon />, href: "/o-mne" },
    { label: "Registrácia", icon: <AppRegistrationIcon />, href: "/auth/registracia" },
  ];

  // Define authenticated navigation items
  const authNavItems = [
    { label: "Domov", icon: <HomeIcon />, href: "/prispevok" },
    { label: "Hľadanie", icon: <SearchIcon />, href: "/hladanie" },
    { label: "Pridať", icon: <AddCircleIcon />, href: "/pridat" },
    {
      label: "Profil",
      icon: session?.user?.image ? (
        <Avatar
          src={session.user.image} // Fetch profile image from the session
          alt="Profile Picture"
          sx={{ width: 32, height: 32, cursor: "pointer" }}
        />
      ) : (
        <PersonIcon />
      ),
      href: "/profil",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        zIndex: 9, // Ensure the navbar is above the posts
      }}
    >
      <BottomNavigation
        sx={{ flex: 1 }} // Take up all available space
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* If logged in, show authenticated navbar; otherwise, show unauthenticated navbar */}
        {(session ? authNavItems : unauthNavItems).map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.label}
            icon={item.icon}
            component={Link}
            href={item.href}
          />
        ))}

        {/* Show Prihlásenie if not logged in, otherwise Odhlásenie */}
        {!session ? (
          <BottomNavigationAction
            label="Prihlásenie"
            icon={<LoginIcon />}
            component={Link}
            href="/auth/prihlasenie"
          />
        ) : (
          <BottomNavigationAction
            label="Odhlásenie"
            icon={<LogoutIcon />}
            component={Link}
            href="/auth/odhlasenie"
          />
        )}
      </BottomNavigation>

      {/* Dark mode toggle button on the far right */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", px: 2}}>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === "light" ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Box>
    </Box>
  );
}

