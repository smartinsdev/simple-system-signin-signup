import { NextApiRequest, NextApiResponse } from "next";
import bycrypt from "bcryptjs";
import prisma from "@/lib/prismadb";

const SALT = 10;

export async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, password } = req.body;

  try {
    const passwordHashed = bycrypt.hashSync(password, SALT);
    await prisma.user.create({
      data: {
        email,
        profileName: name,
        password: passwordHashed,
      },
    });
    res.status(201).json({
      message: "Congratulations! You will be redirected to the login",
      success: true,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Ops! Something is wrong!", success: false });
  }
}
