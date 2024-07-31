import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPost = async (req, res) => {
  const { title, description, priority, deadline, categoryId } = req.body;

  try {
    const post = await prisma.post.create({
      data: {
        title,
        description,

        priority,
        deadline,
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
    res.json({ status: "Post created f", data: post });
  } catch (error) {
    res.status(500).json({
      message: "Post creation failed",
      error: error.message,
      data: req.body,
    });
  }
};
