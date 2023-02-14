import { NextApiRequest, NextApiResponse } from "next";
import bycrypt from "bcryptjs";
import prisma from "@/lib/prismadb";
import { excludeField } from "@/helpers/excludeFields";

export async function signInUser(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        profileName: true,
        image: true,
        password: true,
      },
    });

    if (!user)
      return res.status(401).json({
        success: false,
      });

    const passwordHashed = bycrypt.compareSync(password, user.password!);

    if (!passwordHashed)
      return res.status(401).json({
        success: false,
      });

    const userWithoutPassword = excludeField(user, ["password"]);

    return res.status(200).json({ user: userWithoutPassword, success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
}
