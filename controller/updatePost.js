import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority, deadline, authorId } =
      req.body;
    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title,
        description,
        status,
        priority,
        deadline: new Date(deadline),
        authorId,
      },
    });
    return res.json({
      message: "Post updated successfully",
      data: updatedPost,
    });
  } catch (error) {
    console.error("Error updating post:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
