// Example Usage of Prisma Client:

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function User(req, res) {
  const { name, email, password } = req.body;
  const newUser = await prisma.user.create({
    data: {
      name,
      email,

      password,
    },
  });
  console.log(name);
  return res.json({
    message: "success",
    data: newUser,
  });
}
