import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import jwt from "jsonwebtoken";
const JWT_SECRET = "your_jwt_secret";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({
      message: "Signed in successfully",
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sign-in failed",
      error: error.message,
    });
  }
};
