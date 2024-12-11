import React, { useState } from 'react';
import ConfirmationModal from "./confirmationModal"
import './planTerms.css';

const PlanTerms = ({handleNextStep, handlePreviousStep}) => {
  const [accepted, setAccepted] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const handleAccept = () => {
    setAccepted(!accepted);
  };

  return (
    <div className="contract-container">
      <h1>Contrato de Solicitud de Financiamiento</h1>
      
      <div className="contract-content">
        <section>
          <h2>1. Alcance del Contrato</h2>
          <p>Este contrato establece los términos y condiciones bajo los cuales Financial.al gestionará la solicitud de financiamiento presentada por el usuario. La aceptación de este contrato no implica la aprobación automática del financiamiento, sino que someterá la solicitud a una evaluación detallada por parte de nuestros equipos de análisis.</p>
        </section>
        
        <section>
          <h2>2. Obligaciones del Usuario</h2>
          <p>Al aceptar estos términos, el usuario se compromete a:</p>
          <ul>
            <li>Proporcionar información y documentación completa, veraz y actualizada.</li>
            <li>Respetar los plazos y procedimientos definidos para la evaluación.</li>
          </ul>
        </section>
        
        <section>
          <h2>3. Proceso de Evaluación</h2>
          <p>La solicitud será sometida a una evaluación integral de los documentos y datos proporcionados. La aprobación o rechazo estará sujeta a la evaluación del historial crediticio, capacidad de pago y otros factores relevantes. El usuario será notificado sobre el resultado dentro de un plazo de [X días].</p>
        </section>
        
        <section>
          <h2>4. Condiciones del Financiamiento</h2>
          <p>En caso de aprobación, las condiciones finales (monto, tasa de interés, plazos, etc.) podrán variar respecto a la simulación inicial, dependiendo del análisis de riesgo crediticio. Estas serán informadas al usuario para su confirmación final antes de formalizar el financiamiento.</p>
        </section>
        
        <section>
          <h2>5. Política de Privacidad</h2>
          <p>Los datos y documentos proporcionados serán tratados conforme a nuestra política de privacidad, que puede consultarse en financia.gt.</p>
        </section>
        
        <section>
          <h2>6. Envío del Contrato</h2>
          <p>Una copia de este contrato será enviada al correo electrónico proporcionado por el usuario durante el proceso de solicitud. Esto asegura que pueda consultar los términos y condiciones en cualquier momento.</p>
        </section>
        
        <section>
          <h2>7. Confirmación</h2>
          <p>El usuario declara haber leído y comprendido los términos de este contrato, aceptando que su solicitud será sometida a evaluación y que no se garantiza su aprobación.</p>
        </section>
      </div>
      
      <div className="acceptance">
        <label>
          <input 
            type="checkbox" 
            checked={accepted} 
            onChange={handleAccept}
          />
          Acepto los <span className="terms">Términos y condiciones</span> del contrato
        </label>
      </div>
      
      <button 
        className="confirm-button" 
        disabled={!accepted}
        onClick={()=>{
          setIsOpen(true)
          }}
      >
        CONFIRMAR SOLICITUD
      </button>

      <ConfirmationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleNextStep={handleNextStep}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default PlanTerms;


