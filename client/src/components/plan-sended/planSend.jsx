import { FaCheck } from "react-icons/fa";
import styles from "./planSend.module.css";
import { useSelector } from "react-redux";
export function PlanSend() {
  const { loanAmount, advanceAmount, cuotes } = useSelector(
    (state) => state.simulator
  );
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconCheck}>
          <FaCheck />
        </div>
        <div className={styles.textdetails}>
          <h1>¡Solicitud enviada con éxito!</h1>
          <p>
            Tu solicitud de financiamiento ha sido enviada para evaluación. En
            breve te estaremos contactando con los resultados.
          </p>
          <h3>Resumen de tu Solicitud</h3>
          <ul className={styles.resdetails}>
            <li>
              <span>Monto solicitado: {loanAmount}</span>
            </li>
            <li>
              <span>Adelanto proporcionado: {advanceAmount}</span>
            </li>
            <li>
              <span>Plazo Seleccionado: {cuotes}</span>
            </li>
            <li>
              <span>Estado: "En Evaluación"</span>
            </li>
          </ul>
          <p>
            Tu solicitud está siendo evaluada por nuestro equipo. Este proceso
            puede tomar hasta 72 horas hábiles. Recibirás una notificación por
            correo electrónico con el resultado. En caso de ser necesario, te
            solicitaremos información adicional.
          </p>
          <div className={styles.containerbuttons}>
            <button className={styles.buttondownload}>Descargar Contrato</button>
            <button className={styles.buttonsolicitude}>Ver solicitud</button>
          </div>
          <p>
            Si tienes preguntas o necesitas asistencia, contáctanos a través de
            nuestro correo electrónico: soporte@financiamiento.com o nuestro
            número de atención al cliente: 0800-XXX-XXXX.
          </p>
        </div>
      </div>
    </div>
  );
}
