import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";
import { getProfileById } from "@/app/actions/profiles";

type ProfileDetailViewProps = {
  userId: string;
};

const ProfileDetailView = async ({ userId }: ProfileDetailViewProps) => {
  const profile = await getProfileById(userId);

  if (!profile) {
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h5">Profil nebol nájdený</Typography>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        mt: 4,
        minHeight: "calc(100vh - 64px)",
        paddingBottom: "64px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        src={profile.image}
        alt={profile.name}
        sx={{ width: 100, height: 100, mb: 2 }}
      />
      <Typography variant="h4">{profile.name}</Typography>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          mt: 2,
          mb: 2,
          justifyContent: "center",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h6">{profile.postCount}</Typography>
          <Typography variant="body2">Príspevky</Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="h6">{profile.followerCount}</Typography>
          <Typography variant="body2">Sledovatelia</Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="h6">{profile.followingCount}</Typography>
          <Typography variant="body2">Sleduje</Typography>
        </Box>
      </Box>

      {profile.location && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {profile.location}
        </Typography>
      )}

      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {profile.bio || "Tento používateľ zatiaľ nemá bio."}
      </Typography>

      <Button variant="contained" disabled>
        Sledovať
      </Button>

      {/* Post Gallery Section */}
      <Box sx={{ mt: 6, width: "100%" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Príspevky
        </Typography>
        <Grid container spacing={2}>
  {profile.posts.map((post) => (
    <Grid item xs={12} sm={6} md={4} key={post.id}>
      <Link href={`/prispevok/${post.id}`} passHref>
        <Box
          component="a"
          sx={{
            display: "block",
            position: "relative",
            width: "100%",
            aspectRatio: "1",
            borderRadius: 2,
            overflow: "hidden",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: 3,
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.15)",
              },
            },
          }}
        >
          <Image
            src={post.image || "/placeholder.png"}
            alt="Post"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Link>
    </Grid>
  ))}
</Grid>

      </Box>
    </Container>
  );
};

export default ProfileDetailView;
