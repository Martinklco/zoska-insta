import { fetchPostById } from "@/app/actions/posts";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const PostDetailView = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPostById(params.id);

  if (!post) {
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h6">Príspevok nebol nájdený</Typography>
      </Container>
    );
  }

  // Format date as "D. M. YYYY" (e.g., "7. 4. 2025")
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)",
        pb: 10,
        px: 0, // Remove horizontal padding from container
      }}
    >
      <Card
        sx={{
          width: "100%",
          boxShadow: "none",
          bgcolor: "transparent",
        }}
      >
        {/* Post header with user info */}
        <Box sx={{ display: "flex", alignItems: "center", px: 2, py: 1.5 }}>
          <Avatar 
            src={post.user.image || undefined}
            sx={{ 
              mr: 2,
              width: 48,
              height: 48
            }}
          >
            {post.user.name?.charAt(0) || "U"}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography 
              variant="subtitle2" 
              component="div"
              sx={{ fontWeight: 600 }}
            >
              {post.user.name || "Neznámy používateľ"}
            </Typography>
          </Box>
          <IconButton size="small">
            <BookmarkBorderIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        {/* Post image - modified to match width */}
        {post.images.length > 0 && (
          <Box sx={{ width: '100%' }}>
            <CardMedia
              component="img"
              image={post.images[0].imageUrl}
              alt={post.caption || "Príspevok bez popisu"}
              sx={{
                width: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                bgcolor: "background.default",
              }}
            />
          </Box>
        )}

        {/* Action buttons - moved below image */}
        <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center' }}>
          <IconButton size="medium" sx={{ mr: 1 }}>
            <FavoriteBorderIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>

        {/* Post caption - full width */}
        {post.caption && (
          <Box sx={{ px: 2, width: '100%' }}>
            <Typography 
              variant="body2" 
              sx={{ 
                whiteSpace: "pre-line",
                "& strong": { fontWeight: 600 }
              }}
            >
              <strong>{post.user.name || "Neznámy používateľ"}</strong> {post.caption}
            </Typography>
          </Box>
        )}

        {/* Post date */}
        <Typography 
          variant="caption" 
          color="text.secondary" 
          sx={{ px: 2, py: 0.5, display: "block" }}
        >
          {formatDate(post.createdAt)}
        </Typography>

        {/* Comments section */}
        <Box sx={{ px: 2, py: 1 }}>
          {post.comments?.map((comment) => (
            <Box key={comment.id} sx={{ mb: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  "& strong": { 
                    fontWeight: 600,
                    mr: 1
                  }
                }}
              >
                <strong>{comment.user?.name || "Neznámy používateľ"}</strong>
                {comment.content}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Add comment form - styled like the image */}
        <Box 
          component="form" 
          sx={{ 
            borderTop: 1,
            borderColor: "divider",
            mt: "auto",
            px: 2,
            py: 1.5,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <TextField
            fullWidth
            variant="standard"
            placeholder="Pridať komentár..."
            InputProps={{
              disableUnderline: true,
              sx: {
                fontSize: '0.875rem',
                '&::placeholder': {
                  color: 'text.secondary',
                  opacity: 1
                }
              }
            }}
            sx={{ 
              flexGrow: 1,
              mr: 1
            }}
          />
          <Button
            size="small"
            sx={{
              color: 'primary.main',
              textTransform: 'none',
              fontWeight: 600,
              minWidth: 'auto',
              '&:hover': {
                bgcolor: 'transparent',
              }
            }}
          >
            Odoslať
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default PostDetailView;