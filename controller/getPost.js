import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPost = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await prisma.post.findMany({
      where: { authorId: userId },
    });
    if (!posts || posts.length === 0) {
      return res.status(404).json({
        message: "No posts found for this user",
      });
    }
    return res.json({
      message: "Posts retrieved successfully",
      data: posts,
    });
  } catch (error) {
    console.error("Error retrieving posts:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
