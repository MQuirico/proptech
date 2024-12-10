import styles from "./planData.module.css";
export function PlanData({ handleNextStep }) {
  return (
    <div className={styles.content}>
      <h1>Declaración de datos personales</h1>
      <form className={styles.contentForm}>
        <div className={styles.inputlabel}>
          <label htmlFor="nameInput" className={styles.inputLabel}>
            Nombre
          </label>
          <input type="text" id="nameInput" />
        </div>
        <div className={styles.inputlabel}>
          <label htmlFor="lastNameInput" className={styles.inputLabel}>
            Apellido
          </label>
          <input type="text" id="lastNameInput" />
        </div>
        <div className={styles.inputlabel}>
          <label htmlFor="dniInput" className={styles.inputLabel}>
            DNI
          </label>
          <input type="text" id="dniInput" />
        </div>
        <div className={styles.inputlabel}>
          <label htmlFor="emailInput" className={styles.inputLabel}>
            Correo Electrónico
          </label>
          <input type="email" id="emailInput" />
        </div>
        <div className={styles.inputlabel}>
          <label htmlFor="phoneInput" className={styles.inputLabel}>
            Teléfono
          </label>
          <input type="number" id="phoneInput" />
        </div>
        <div className={styles.inputlabel}>
          <label htmlFor="addressInput" className={styles.inputLabel}>
            Dirección
          </label>
          <input type="text" id="addressInput" className={styles.textInput} />
        </div>
        <div className={styles.inputlabel}>
          <label htmlFor="cityInput" className={styles.inputLabel}>
            Ciudad
          </label>
          <input type="text" id="cityInput" className={styles.textInput} />
        </div>
        <div className={styles.inputlabel}>
          <label htmlFor="provinceInput" className={styles.inputLabel}>
            Provincia
          </label>
          <input id="provinceInput" className={styles.textInput} />
        </div>
        <div className={styles.inputcheck}>
          <input type="checkbox" id="acceptChekbox" />
          <label htmlFor="acceptChekbox" className={styles.inputlabel}>
            Declaro que los datos personales proporcionados en este proceso son
            verídicos, completos y actuales. Entiendo que cualquier información
            falsa o incompleta puede resultar en la invalidación de esta
            solicitud.
          </label>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.buttonnext} onClick={handleNextStep}>
            Continuar con la solicitud
          </button>
        </div>
      </form>
    </div>
  );
}
