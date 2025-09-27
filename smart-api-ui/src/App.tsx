import { Box } from "@mui/material";
import Ribbon from "./components/Ribbon";
import Workspace from "./components/Workspace";
import FooterBar from "./components/FooterBar";
import { useState, useEffect } from "react";
import axios from "axios";

type ViewKey = "compras" | "historial_rce" | "ventas" | "historial_rvie" | "consulta_cpe" | "consulta_masiva_cpe" | "empresas" | "seleccionar" | "inicio" | "guardar" | "exportar" | "salir" | "";

export default function App() {
  const [view, setView] = useState<ViewKey>("");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!view) return;
      if (view === "guardar" || view === "exportar" || view === "salir" || view === "seleccionar" || view === "inicio") return;
      const urlMap: Record<string, string> = {
        compras: "/api/compras",
        historial_rce: "/api/historial-rce",
        ventas: "/api/ventas",
        historial_rvie: "/api/historial-rvie",
        consulta_cpe: "/api/consulta-cpe",
        consulta_masiva_cpe: "/api/consulta-masiva-cpe",
        empresas: "/api/empresas",
      };
      const url = urlMap[view];
      if (url) {
        const { data } = await axios.get(url);
        setData(data);
      }
    };
    fetchData();
  }, [view]);

  return (
    <Box sx={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
      <Ribbon onAction={(k) => setView(k as ViewKey)} />
      <Workspace title={titleFor(view)}>
        <pre style={{ margin: 0 }}>{data ? JSON.stringify(data, null, 2) : ""}</pre>
      </Workspace>
      <FooterBar />
    </Box>
  );
}

function titleFor(view: ViewKey) {
  switch (view) {
    case "compras": return "Compras RCE";
    case "historial_rce": return "Historial RCE";
    case "ventas": return "Ventas RVIE";
    case "historial_rvie": return "Historial RVIE";
    case "consulta_cpe": return "Consulta CPE";
    case "consulta_masiva_cpe": return "Consulta masiva CPE";
    case "empresas": return "Empresas";
    case "seleccionar": return "Seleccionar";
    case "inicio": return "Inicio";
    case "guardar": return "Guardar";
    case "exportar": return "Exportar";
    case "salir": return "Salir";
    default: return "Inicio";
  }
}