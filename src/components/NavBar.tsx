"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import InfoIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { useThemeMode } from "./ThemeProvider";

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const { data: session } = useSession();
  const { toggleTheme, mode } = useThemeMode();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//  const userId = session?.user?.id;

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault(); // Prevent navigation
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
    handleClose();
  };

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
          src={session.user.image}
          alt="Profile Picture"
          sx={{ width: 32, height: 32 }}
        />
      ) : (
        <PersonIcon />
      ),
      href: "#",
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          zIndex: 9,
        }}
      >
        <BottomNavigation
          sx={{ flex: 1 }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {(session ? authNavItems : unauthNavItems).map((item, index) => (
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={item.icon}
              component={Link}
              href={item.href}
              onClick={item.label === "Profil" ? handleProfileClick : undefined}
            />
          ))}

          {!session && (
            <BottomNavigationAction
              label="Prihlásenie"
              icon={<LoginIcon />}
              component={Link}
              href="/auth/prihlasenie"
            />
          )}
        </BottomNavigation>

        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", px: 2 }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === "light" ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Box>
      </Box>

      <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleClose}
  anchorOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
  transformOrigin={{
    vertical: "bottom",
    horizontal: "right",
  }}
>
  <MenuItem 
    component={Link} 
    href={`/profil/${session?.user?.id}`}
    onClick={handleClose}
  >
    <ListItemIcon>
      <PersonIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText>Môj profil</ListItemText>
  </MenuItem>
  <MenuItem onClick={handleLogout}>
    <ListItemIcon>
      <LogoutIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText>Odhlásiť sa</ListItemText>
  </MenuItem>
</Menu>
    </>
  );
}

