import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export async function getProfileById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        image: true,
        profile: {
          select: {
            bio: true,
            location: true,
          },
        },
        posts: {
          select: {
            id: true,
            images: {
              select: {
                imageUrl: true,
                order: true,
              },
              orderBy: {
                order: "asc",
              },
            },
          },
        },
        followers: {
          select: { id: true },
        },
        following: {
          select: { id: true },
        },
      },
    });

    if (!user) return null;

    return {
      id: user.id,
      name: user.name ?? "Neznámy používateľ",
      image: user.image ?? "/default-avatar.png",
      bio: user.profile?.bio ?? null,
      location: user.profile?.location ?? null,
      postCount: user.posts.length,
      followerCount: user.followers.length,
      followingCount: user.following.length,
      posts: user.posts.map((post) => ({
        id: post.id,
        image: post.images[0]?.imageUrl ?? "/placeholder.png", // First image or fallback
      })),
    };
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    return null;
  }
}
