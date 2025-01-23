import { fetchPosts } from "@/app/actions/posts";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

const PostsView = async () => {
  const posts = await fetchPosts(); // Use the server action to fetch posts

  return (
    <Container
      sx={{
        mt: 4,
        minHeight: "calc(100vh - 64px)", // Full viewport minus navbar
        paddingBottom: "64px", // Add padding at the bottom to prevent overlap with navbar
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Align the posts to the top
        position: "relative", // Ensure the posts are not conflicting with navbar's position
        zIndex: 1, // Ensure posts are behind the navbar
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Príspevky
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card
              sx={{
                position: "relative",
                overflow: "hidden",
                margin: "0 auto", // Center the card
                width: "90%", // Default width
                maxWidth: "600px", // Limit the maximum size
                height: "50vh", // Consistent height as a percentage of the screen
                "@media (min-width: 600px)": {
                  width: "80%", // Wider on larger screens
                },
                "@media (min-width: 960px)": {
                  width: "70%", // Wider on larger screens
                },
              }}
            >
              {/* Image covers the whole card */}
              <CardMedia
                component="img"
                image={post.imageUrl}
                alt={post.caption || "Príspevok bez popisu"}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* Overlay text appears on hover */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
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
    </Container>
  );
};

export default PostsView;
