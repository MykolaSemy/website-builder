import { NextApiRequest, NextApiResponse } from "next";
import rows from "../../data.json";
import * as fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    fs.writeFileSync("data.json", JSON.stringify(req.body));
    res.status(200).json({ message: "data saved" });
  } else {
    res.status(200).json(rows);
  }
}
