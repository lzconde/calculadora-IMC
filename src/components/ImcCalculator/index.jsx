import { useState, useEffect } from 'react';

import styles from './ImcCalculator.module.css';

const ImcCalculator = () => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState("");

    useEffect(() => {
        if(altura && peso){
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
            
            if (imcCalculado < 18.5) {
                setClassificacao("Abaixo do peso");
            } else if (imcCalculado < 24.9) {
                setClassificacao("Peso normal");
            } else if (imcCalculado < 29.9) {
                setClassificacao("Sobrepeso");
            } else {
                setClassificacao("Obesidade");
            }
            } else {
              setImc(null);
              setClassificacao("");
            }
        }, [altura, peso]);

    return(
    <div className={styles.container}>
        <h1>Calculadora de IMC</h1>
        <div className={styles.formGroup}>
            <label>Altura (cm):</label>
            <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Digite sua altura"
            />
        </div>
        <div className={styles.formGroup}>
            <label>Peso (kg):</label>
            <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite seu peso"
            />
        </div>
        {imc && (
        <div className={styles.result}>
            <h2>Seu IMC: {imc}</h2>
            <p>Classificação: {classificacao}</p>
        </div>
    )}
    </div>
    )
}

export default ImcCalculator;