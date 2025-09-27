import { Box, Button, Stack, Typography } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HistoryIcon from "@mui/icons-material/History";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BusinessIcon from "@mui/icons-material/Business";
import SaveIcon from "@mui/icons-material/Save";
import UploadIcon from "@mui/icons-material/Upload";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SearchIcon from "@mui/icons-material/Search";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import CheckIcon from "@mui/icons-material/Check";
import HomeIcon from "@mui/icons-material/Home";

type Action = {
  key: string;
  label: React.ReactNode;
  icon: React.ReactNode;
  onClick?: () => void;
};

export default function Ribbon(props: { onAction: (key: string) => void }) {
  const actions: Action[] = [
    { key: "compras", label: <>Compras<br />RCE</>, icon: <StorefrontIcon /> },
    { key: "historial_rce", label: <>Historial<br />RCE</>, icon: <HistoryIcon /> },
    { key: "ventas", label: <>Ventas<br />RVIE</>, icon: <AssessmentIcon /> },
    { key: "historial_rvie", label: <>Historial<br />RVIE</>, icon: <HistoryIcon /> },
    { key: "consulta_cpe", label: <>Consulta<br />CPE</>, icon: <SearchIcon /> },
    { key: "consulta_masiva_cpe", label: <>Consulta<br />masiva CPE</>, icon: <FindInPageIcon /> },
    { key: "empresas", label: "Empresas", icon: <BusinessIcon /> },
    { key: "seleccionar", label: "Seleccionar", icon: <CheckIcon /> },
    { key: "inicio", label: "Inicio", icon: <HomeIcon /> },
    { key: "guardar", label: "Guardar", icon: <SaveIcon /> },
    { key: "exportar", label: "Exportar", icon: <UploadIcon /> },
    { key: "salir", label: "Salir", icon: <ExitToAppIcon /> },
  ];

  return (
    <Box sx={{ px: 1, py: 1, borderBottom: 1, borderColor: "divider", bgcolor: "background.paper" }}>
      <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" justifyContent="center" sx={{ rowGap: 1 }}>

        {actions.map(a => (
          <Button
            key={a.key}
            size="small"
            startIcon={a.icon}
            onClick={() => props.onAction(a.key)}
            sx={{ textTransform: "none", minHeight: "48px" }}
            variant="outlined"
          >
            {a.label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
