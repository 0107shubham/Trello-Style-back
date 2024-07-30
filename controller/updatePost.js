import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Function to update a post
export const updatePost = async (req, res) => {
  const { id, title, description, status, priority, deadline, categoryId } =
    req.body;

  try {
    const updatedPost = await prisma.post.update({
      where: { id: id }, // ID of the post to update
      data: {
        title,
        description,
        status,
        priority,
        deadline: new Date(deadline), // Convert to Date object
        categoryId,
      },
    });
    res.json({ status: "Post updated", data: updatedPost });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Post update failed", error: error.message });
  }
};
