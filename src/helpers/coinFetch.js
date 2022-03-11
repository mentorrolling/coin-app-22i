export const getCoins = async () => {
  const resp = await fetch(
    "https://api.coincap.io/v2/assets?api-key=7254d569-9d06-4b4b-b2d8-aa518d378008&limit=10"
  );
  const { data } = await resp.json();
  return data;
};
