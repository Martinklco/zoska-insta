"use client"; // Keep this at the top

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home'; // Icon for Domov
import PersonIcon from '@mui/icons-material/Person'; // Icon for Profily
import PostAddIcon from '@mui/icons-material/PostAdd'; // Icon for Príspevky
import LoginIcon from '@mui/icons-material/Login'; // Icon for Prihlásenie
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'; // Icon for Registrácia
import Link from 'next/link'; // Import Link from next/link

// Define the navigation items in an array
const navItems = [
  { label: 'Domov', icon: <HomeIcon />, href: '/' },
  { label: 'Profily', icon: <PersonIcon />, href: '/profil' },
  { label: 'Príspevky', icon: <PostAddIcon />, href: '/prispevok' },
  { label: 'Prihlásenie', icon: <LoginIcon />, href: '/auth/prihlasenie' },
  { label: 'Registrácia', icon: <AppRegistrationIcon />, href: '/auth/registracia' },
];

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction 
            key={index} // Use index as key
            label={item.label} 
            icon={item.icon} 
            component={Link} 
            href={item.href} // Dynamic href
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
