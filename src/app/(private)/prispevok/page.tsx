// src/app/prispevok/page.tsx
import Typography from "@mui/material/Typography";
import PostsView from "@/sections/private/PostsView";

export const metadata = {
  title: "Zoznam príspevkov | Zoska",
};

export default async function PostList() {
  return (
    <>
      <Typography variant="h3" component="h1" align="center" sx={{ my: 4 }}>
      </Typography>
      {/* Render the server-side PostsView */}
      <PostsView />
    </>
  );
}
