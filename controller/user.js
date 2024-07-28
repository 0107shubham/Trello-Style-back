import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function User(req, res) {
  try {
    const { name, email, password } = req.body;

    console.log("User creation started");
    const start = Date.now();

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    const end = Date.now();
    console.log(`User created in ${end - start}ms`);

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
