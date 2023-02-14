import type { NextApiRequest, NextApiResponse } from "next";

import { createUser } from "@/controllers/user/createUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await createUser(req, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
