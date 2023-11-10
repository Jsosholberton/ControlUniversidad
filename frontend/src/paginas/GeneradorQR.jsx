import React from "react";
import QRCode from "react-qr-code";
import Alerta from "../components/Alerta";
import { useState, useEffect } from "react";

const GeneradorQR = () => {
  const [documento, setDocumento] = useState("");
  const [alerta, setAlerta] = useState({});
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (documento.length < 6) {
      setAlerta({
        msg: "Documento debe tener 6 caracteres",
        error: true,
      });
      return;
    }
    setUrl(`http://161.35.129.87/#/home/${documento}`);
    setAlerta({
      msg: "Código QR generado",
      error: false,
    });
  };
  const { msg } = alerta;
  return (
    <>
      <h1 className="text-green-600 font-black text-6xl capitalize">
        Genera tu QR
      </h1>
      {msg && <Alerta alerta={alerta} />}
      <form
        className="my-10 bg-white shadow rounded-lg p-10 "
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Pon tu documento de identidad
          </label>
          <input
            id="documento"
            type="number"
            placeholder="Numero"
            className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Generar QR"
          className="bg-sky-700 mb-5 w-full py-3 text-white text-sm uppercase font-bold
                          rounded hover:cursor-pointer hover:bg-sky-800 transition colors"
        />
      </form>
      {url && <QRCode className="mx-auto" value={url} />}
    </>
  );
};

export default GeneradorQR;
