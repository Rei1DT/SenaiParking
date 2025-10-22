import React, { useState } from 'react';
import { getAxiosWithToken } from '../../api';

const Veiculos = () => {
  const [id, setId] = useState("");
  const [placa, setPlaca] = useState("");
  const [resultId, setResultId] = useState(null);
  const [resultPlaca, setResultPlaca] = useState([]);
  const [error, setError] = useState("");

  const buscarPorId = async () => {
    setError("");
    setResultId(null);
    try {
      const axiosInstance = await getAxiosWithToken();
      const res = await axiosInstance.get(`/api/veiculos/id/${id}`);
      setResultId(res.data);
    } catch (e) {
      setError("Não encontrado ou erro na consulta por ID.");
    }
  };

  const buscarPorPlaca = async () => {
    setError("");
    setResultPlaca([]);
    try {
      const axiosInstance = await getAxiosWithToken();
      const res = await axiosInstance.get(`/api/veiculos/placa/${placa}`);
      setResultPlaca(res.data);
    } catch (e) {
      setError("Não encontrado ou erro na consulta por placa.");
    }
  };

  return (
    <div>
      <h1>Buscar Veículos</h1>
      <div>
        <label>ID:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={buscarPorId}>Buscar por ID</button>
      </div>
      {resultId && (
        <div>
          <h2>Resultado por ID:</h2>
          <pre>{JSON.stringify(resultId, null, 2)}</pre>
        </div>
      )}
      <div>
        <label>Placa:</label>
        <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        <button onClick={buscarPorPlaca}>Buscar por Placa</button>
      </div>
      {resultPlaca.length > 0 && (
        <div>
          <h2>Resultado por Placa:</h2>
          <pre>{JSON.stringify(resultPlaca, null, 2)}</pre>
        </div>
      )}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Veiculos;