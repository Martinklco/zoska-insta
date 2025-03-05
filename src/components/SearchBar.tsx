"use client";

import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { searchUsers } from "@/app/actions/users";

type User = {
  id: string;
  name: string | null;
  image: string | null;
  profile: {
    bio: string | null;
    location: string | null;
  } | null;
};

export default function SearchBar() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    try {
      const results = await searchUsers(query);
      setUsers(results);
    } catch (error) {
      console.error("Error searching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load all users when component mounts
  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <Box sx={{ p: 2, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
      <Box
        sx={{
          position: users.length > 0 ? "sticky" : "static",
          top: 0,
          zIndex: 100,
          mb: 2,
          bgcolor: theme.palette.background.default,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Vyhľadaj používateľov..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </Box>

      {isLoading ? (
        <Typography>Načítava sa...</Typography>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {users.map((user) => (
            <Link
              href={`/profil/${user.id}`}
              key={user.id}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  bgcolor: theme.palette.background.paper,
                  "&:hover": {
                    bgcolor: theme.palette.action.hover,
                  },
                }}
              >
                <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    src={user.image || undefined}
                    alt={user.name || "User"}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box>
                    <Typography variant="h6" color="text.primary">
                      {user.name}
                    </Typography>
                    {user.profile?.location && (
                      <Typography variant="body2" color="text.secondary">
                        {user.profile.location}
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Link>
          ))}
          {users.length === 0 && searchQuery && (
            <Typography color="text.secondary">
              Žiadni používatelia neboli nájdení.
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
} 