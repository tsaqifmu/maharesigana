import config from "./config";

const fetchBlog = async (params: string) => {
  const reqOption = {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN_API}`,
    },
    // cache: "no-store" as RequestCache,
  };

  const res = await fetch(`${config.URL_API}${params}`, reqOption);

  if (!res.ok) {
    throw new Error("failed to fetch from server");
  }

  return res.json();
};

export default fetchBlog;
