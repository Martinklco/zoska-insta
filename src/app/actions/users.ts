"use server";

import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export const fetchUsers = async (searchQuery?: string) => {
  try {
    const users = await prisma.user.findMany({
      where: searchQuery
        ? {
            name: {
              contains: searchQuery,
              mode: "insensitive",
            },
          }
        : undefined,
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
      },
    });

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Could not fetch users");
  }
};

export const searchUsers = async (searchQuery?: string) => {
  try {
    const users = await prisma.user.findMany({
      where: searchQuery
        ? {
            name: {
              contains: searchQuery,
              mode: "insensitive",
            },
          }
        : undefined,
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
      },
    });

    return users;
  } catch (error) {
    console.error("Error searching users:", error);
    throw new Error("Failed to search users");
  }
}; 