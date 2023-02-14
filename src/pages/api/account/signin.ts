import type { NextApiRequest, NextApiResponse } from "next";

import { signInUser } from "@/controllers/user/signInUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await signInUser(req, res);
  } else {
    return res
      .status(500)
      .end(`The HTTP ${req.method} method is not supported at this route.`);
  }
}
