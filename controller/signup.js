import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const defaultCategories = [
  { title: "To-Do" },
  { title: "In Progress" },
  { title: "Under Review" },
  { title: "Completed" },
];

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create the new user
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    // Create default categories for the user
    await prisma.category.createMany({
      data: defaultCategories.map((category) => ({
        ...category,
        authorId: user.id,
      })),
    });

    res.json({ status: "user registered", data: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "User creation failed", error: error.message });
  }
};

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export const signup = async (req, res) => {
//   const { email, password, name } = req.body;

//   try {
//     const user = await prisma.user.create({
//       data: {
//         email,
//         password,
//         name,
//       },
//     });
//     res.json({ status: "user registered", data: user });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "User creation failed", error: error.message });
//   }
// };
