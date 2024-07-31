import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPost = async (req, res) => {
  const { title, description, status, priority, deadline, categoryId } =
    req.body;

  try {
    const post = await prisma.post.create({
      data: {
        title: title || "Title",
        description: description || "Description",
        status: status || "",
        priority: priority || "LOW",
        deadline: deadline || new Date(),
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
    res.json({ status: "Post created", data: post });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Post creation failed", error: error.message });
  }
};
