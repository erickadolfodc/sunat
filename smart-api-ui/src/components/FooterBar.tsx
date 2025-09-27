import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";

export default function FooterBar() {
  const [zoom, setZoom] = useState(100);
  return (
    <Box sx={{ borderTop: 1, borderColor: "divider", px: 2, py: 1, display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="caption" sx={{ flex: 1 }}>Listo</Typography>
      <Typography variant="caption">Zoom {zoom}%</Typography>
      <Slider size="small" value={zoom} onChange={(_, v) => setZoom(v as number)} min={50} max={200} sx={{ width: 160 }} />
    </Box>
  );
}
