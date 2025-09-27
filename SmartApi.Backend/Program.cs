var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(p =>
        p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});
var app = builder.Build();

app.UseCors();

// Simple sample endpoints (swap with real data access)
app.MapGet("/api/compras", () => Results.Ok(new
{
    fecha = DateTime.UtcNow,
    items = new[] {
        new { id = 1, proveedor = "Proveedor A", total = 1200.50 },
        new { id = 2, proveedor = "Proveedor B", total = 987.10 },
    }
}));

app.MapGet("/api/historial-rce", () => Results.Ok(new
{
    desde = "2024-01-01",
    hasta = "2025-01-01",
    entradas = new[] {
        new { id = 101, evento = "Alta RCE", usuario = "admin" },
        new { id = 102, evento = "Edición RCE", usuario = "operador" },
    }
}));

app.MapGet("/api/ventas", () => Results.Ok(new
{
    periodo = "Mensual",
    total = 15432.75,
    top = new[] { "Producto A", "Producto B" }
}));

app.MapGet("/api/empresas", () => Results.Ok(new[]
{
    new { id = "C001", nombre = "Empresa Uno" },
    new { id = "C002", nombre = "Empresa Dos" }
}));

app.MapGet("/api/historial-rvie", () => Results.Ok(new
{
    periodo = "2024-01-01 a 2025-01-01",
    eventos = new[] {
        new { id = 201, evento = "Venta RVIE", usuario = "vendedor" },
    }
}));

app.MapGet("/api/consulta-cpe", () => Results.Ok(new
{
    cpe_id = "F001-123",
    estado = "Aceptado"
}));

app.MapGet("/api/consulta-masiva-cpe", () => Results.Ok(new
{
    total_consultas = 5,
    resultados = new[] {
        new { cpe_id = "F001-124", estado = "Aceptado" },
        new { cpe_id = "B001-456", estado = "Rechazado" },
    }
}));

app.Run();