import drive from "drive-db";

export default async (req, res) => {
  const db = await drive("1zI9zkP9Rj-CajXPoB7uCrV7d8eG3U7J9mr_DKMz2Nvw");
  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.show == "Yes"
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sanitizeResult));
};
