const fetchDonation = async (params: string) => {
  const reqOption = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_API}`,
    },
    cache: "no-store" as RequestCache,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/api/donations${params}`,
    reqOption,
  );

  if (!res.ok) {
    throw new Error("failed to fetch from server");
  }

  return res.json();
};

export default fetchDonation;
