import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Function to delete a post
export const deletePost = async (req, res) => {
  const { id } = req.body; // Post ID from the URL

  try {
    const deletedPost = await prisma.post.delete({
      where: { id: id }, // ID of the post to delete
    });
    res.json({ status: "Post updated", data: deletedPost });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Post deletion failed", error: error.message });
  }
};
