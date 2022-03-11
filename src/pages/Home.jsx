import React, { useEffect, useState } from "react";
import { getCoins } from "../helpers/coinFetch";


import CriptoTabla from "../components/CriptoTabla";

const Home = () => {
  const [coins, setCoins] = useState({
    loading: true,
    datos: [],
  });

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getCoins().then((respuesta) => {
      // console.log(respuesta);
      setCoins({
        loading: false,
        datos: respuesta,
      });
    });
  }, [update]);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          {coins.loading ? (
            <h3 className="text-white text-center">Cargando información...</h3>
          ) : (
            <CriptoTabla
              setUpdate={setUpdate}
              update={update}
              datos={coins.datos}
            />
                      )}
        </div>
      </div>
    </div>
  );
};

export default Home;
