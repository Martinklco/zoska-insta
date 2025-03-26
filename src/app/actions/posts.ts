"use server";

// Import Prisma client
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

// Fetch all posts with related data
export const fetchPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { name: true } }, // Include only the user's name
        images: {
          orderBy: {
            order: 'asc'
          }
        }
      }
    });

    // Serialize dates to strings for client-side compatibility
    return posts.map((post) => ({
      ...post,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
      // Ensure images are properly serialized if they contain dates
      images: post.images.map(image => ({
        ...image,
        createdAt: image.createdAt.toISOString()
      }))
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return empty array instead of throwing error for better UX
  }
};