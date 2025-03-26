"use client";

import { useEffect, useState } from "react";
import { fetchPosts } from "@/app/actions/posts";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";

// Updated Post type to match your Prisma schema
type Post = {
  id: string;
  caption: string | null;
  user: {
    name: string | null;
  };
  createdAt: string;
  updatedAt: string;
  userId: string;
  tags: string[];
  images: {
    id: string;
    imageUrl: string;
    order: number;
    createdAt: string;
  }[];
};

const NonAuthHomeView = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayDisabled, setOverlayDisabled] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts.slice(0, 5));
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!overlayDisabled && window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setShowOverlay(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [overlayDisabled]);

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setOverlayDisabled(true);
    setTimeout(() => setOverlayDisabled(false), 5000);
  };

  return (
    <Container
      sx={{
        mt: 4,
        minHeight: "calc(100vh - 64px)",
        paddingBottom: "64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Príspevky (Neprihlásený užívateľ)
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card
              sx={{
                position: "relative",
                overflow: "hidden",
                margin: "0 auto",
                width: "90%",
                maxWidth: "600px",
                height: "50vh",
                "@media (min-width: 600px)": { width: "80%" },
                "@media (min-width: 960px)": { width: "70%" },
              }}
            >
              {/* Use the first image from the images array */}
              {post.images.length > 0 && (
                <CardMedia
                  component="img"
                  image={post.images[0].imageUrl}
                  alt={post.caption || "Príspevok bez popisu"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
              
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Typography variant="h6" align="center" sx={{ px: 2 }}>
                  {post.caption || "Bez popisu"}
                </Typography>
                <Typography variant="body2" align="center">
                  {post.user.name || "Neznámy používateľ"}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {showOverlay && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Limit ukážky dosiahnutý
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, textAlign: "center", maxWidth: "400px" }}>
            Prihláste sa na získanie plného prístupu k aplikácií.
          </Typography>
          <Button variant="contained" color="primary" component={Link} href="/auth/prihlasenie">
            Prihlásiť sa
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleCloseOverlay}
            sx={{
              mt: 2,
              backgroundColor: "#B71C1C",
              "&:hover": { backgroundColor: "#D32F2F" },
            }}
          >
            Zavrieť
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default NonAuthHomeView;