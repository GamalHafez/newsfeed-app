export default async function handler(req, res) {
  const params = req.url.split("?")[1];

  const finalUrl = `https://gnews.io/api/v4/top-headlines?apikey=${process.env.GNEWS_API_KEY}&${params}`;

  const apiRes = await fetch(finalUrl);
  const data = await apiRes.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
