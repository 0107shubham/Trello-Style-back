import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPost = async (req, res) => {
  const { userId } = req.body;
  // console.log(userId);
  // res.json({ message: "hii", value: userId });

  try {
    const userWithPostsAndCategories = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        categories: {
          include: {
            posts: true, // Include posts for each category
          },
        },
      },
    });

    res.json({ message: "Sucess", Data: userWithPostsAndCategories });

    console.log(
      "User with Posts and Categories:",
      JSON.stringify(userWithPostsAndCategories, null, 2)
    );
  } catch (error) {
    console.error("Error retrieving data:", error);
  } finally {
    await prisma.$disconnect();
  }
};
