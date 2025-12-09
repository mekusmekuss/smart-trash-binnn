// netlify/functions/coupons.js
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "coupons.json");

  // Ensure file exists
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ coupons: [] }, null, 2));
  }

  if (req.method === "GET") {
    const data = fs.readFileSync(filePath, "utf8");
    return res.status(200).json(JSON.parse(data));
  }

  if (req.method === "POST") {
    const incoming = JSON.parse(req.body);

    fs.writeFileSync(filePath, JSON.stringify(incoming, null, 2));

    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
