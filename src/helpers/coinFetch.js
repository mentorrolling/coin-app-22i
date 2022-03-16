export const getCoins = async (pagina = 0) => {
  const resp = await fetch(
    `https://api.coincap.io/v2/assets?api-key=69ae8b08-db21-448a-b1c5-c344a5501628&limit=10&offset=${pagina}`
  );
  const { data } = await resp.json();
  return data;
};

export const getCoinId = async (id) => {
  const resp = await fetch(`https://api.coincap.io/v2/assets/${id}`);
  const { data } = await resp.json();

  return data;
};

export const searchCoinByName = async (termino) => {
  const resp = await fetch(
    `https://api.coincap.io/v2/assets?api-key=69ae8b08-db21-448a-b1c5-c344a5501628&search=${termino}&limit=10`
  );

  const { data } = await resp.json();

  return data;
};
