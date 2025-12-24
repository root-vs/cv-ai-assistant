
export default async function (req, res) {
  const { messages } = await req.json();

  const response = await fetch("https://api.langbase.com/v1/pipes/run", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.API_KEY}`
    },
    body: JSON.stringify({ messages })
  });

  const data = await response.json();
  return res.json(data);
}
