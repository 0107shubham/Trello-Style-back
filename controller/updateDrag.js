import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Function to update a post
export const updateDrag = async (req, res) => {
  const { id, categoryId } = req.body;

  try {
    const updatedPost = await prisma.post.update({
      where: { id: id }, // ID of the post to update
      data: {
        categoryId,
      },
    });
    res.json({ status: "Post drag updated", data: updatedPost });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Post update failed", error: error.message });
  }
};
