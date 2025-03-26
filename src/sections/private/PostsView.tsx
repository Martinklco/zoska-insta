import { fetchPosts } from "@/app/actions/posts";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

const PostsView = async () => {
  const posts = await fetchPosts();

  return (
    <Container
      sx={{
        mt: 4,
        minHeight: "calc(100vh - 64px)",
        paddingBottom: "64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        position: "relative",
        zIndex: 1,
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
                margin: "0 auto",
                width: "90%",
                maxWidth: "600px",
                height: "50vh",
                "@media (min-width: 600px)": {
                  width: "80%",
                },
                "@media (min-width: 960px)": {
                  width: "70%",
                },
              }}
            >
              {/* Display the first image from PostImage relation */}
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
              
              {/* Overlay text appears on hover */}
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
    </Container>
  );
};

export default PostsView;