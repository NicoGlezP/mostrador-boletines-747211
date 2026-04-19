import { Router } from "express";
import { db } from "../services/db.service";

const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { correo } = req.query;

    if (!correo) {
      return res.status(400).json({ error: "Correo requerido" });
    }

    const [rows]: any = await db.execute(
      "SELECT * FROM boletines WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Boletín no encontrado" });
    }

    const boletin = rows[0];

    // Validar correo
    if (boletin.correo !== correo) {
      return res.status(403).json({ error: "No autorizado" });
    }

    // Marcar como leído
    await db.execute(
      "UPDATE boletines SET leido = true WHERE id = ?",
      [id]
    );

    res.json({
      mensaje: boletin.mensaje,
      imagen: boletin.imagen_url,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno" });
  }
});

export default router;
