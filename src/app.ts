import express from "express";
import boletinesRoutes from "./routes/boletines";

const app = express();

app.use(express.json());
app.use("/boletines", boletinesRoutes);

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Mostrador corriendo en puerto ${PORT}`);
});

/*
Actividad 5
1. ¿Qué ventajas y desventajas ves al utilizar colas para gestionar la comunicación entre contenedores en contraste a protocolos sincrónicos como HTTP?
Las colas permiten una comunicación asíncrona, lo que mejora la escalabilidad y tolenrancia al fallo de la aplicación, ya que los servicios no dependen de la disponibilidad inmediata de otros. Sin embargo, las desventajas son la complejidad adicional en la gestión de mensajes y servicios y en la garantía de entrega.

2. ¿Cuál consideras que sería una manera de incrementar la resiliencia de la aplicación en caso de que el envío de un mensaje falle?
Se podría incrementar implementar un sistema de reintentos con backoff exponencial para los mensajes que fallan, así como una cola de mensajes muertos (DQL) para manejar los mensajes que no se pueden procesar después de varios intentos.

3. ¿Qué otro método crees que exista para el monitoreo de mensajes de manera sincrónica además de colas/notificaciones?
Se podrían utilizar sistemas de monitoreo en tiempo real como WebSockets para permitir una comunicación bidireccional y en tiempo real entre los servicios.

Actividad 6
Conclusión:
Esta práctica me permitió entender de mejor manera la teoría y práctica de temas como el manejo de contenedores y el uso de SQS para la comunicación entre servicios. Además, me ayudó a comprender (y conectar con mi clase de Arquitectura de Software) la importancia de la tolerancia al fallo y la escalabilidad en aplicaciones distribuidas, así como los diferentes métodos de comunicación entre servicios. En general, fue una experiencia enriquecedora que me brindó conocimientos valiosos para el desarrollo de aplicaciones modernas.
*/
