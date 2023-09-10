interface AnimeGirls {
  files: string[];
}

export const getGirls = async () => {
  const res = await fetch("https://api.waifu.pics/many/sfw/waifu", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ excludes: [] }),
  });
  const { files: girls } = (await res.json()) as AnimeGirls;
  return { girls };
};
