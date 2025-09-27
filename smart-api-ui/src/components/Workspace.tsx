import { Box, Typography } from "@mui/material";

export default function Workspace({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <Box sx={{ flex: 1, overflow: "auto", bgcolor: "background.default" }}>
      <Box sx={{ px: 3, py: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>{title}</Typography>
        <Box sx={{ p: 3, bgcolor: "common.white", borderRadius: 2, border: 1, borderColor: "divider", minHeight: 360 }}>
          {children ?? <Typography color="text.disabled">Seleccione una acción del menú superior…</Typography>}
        </Box>
      </Box>
    </Box>
  );
}
