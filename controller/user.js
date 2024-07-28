import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function User(req, res) {
  try {
    const { name, email, password } = req.body;

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    // Log the name of the new user
    console.log(name);

    // Return a success response
    return res.json({
      message: "success",
      data: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    // Return an error response
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}
