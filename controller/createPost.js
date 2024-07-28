import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPost = async (req, res) => {
  try {
    const { title, description, status, priority, deadline, authorId } =
      req.body;
    const newPost = await prisma.post.create({
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
      message: "Post created successfully",
      data: newPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
