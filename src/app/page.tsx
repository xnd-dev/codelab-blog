'use client';
import Image from "next/image";
import Heart1 from '../../public/assets/heart.svg'
import Heart2 from '../../public/assets/heart-active.svg'
import styles from "./page.module.css";
import { useState } from "react";


export default function Home() {
  const [isFilled, setIsFilled] = useState(false)

  const toggleIcon = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>Code<span>Lab</span></div>
        <input 
          type="text"
          placeholder='Pesquisar no blog'
        />

      </header>

      <main className={styles.main}>
        <div className={styles.box}>
          <div className={styles.date}>
            17 de ago, 2024 
            <Image
              src={isFilled ? Heart2 : Heart1} 
              alt="curtir"
              onClick={toggleIcon}
            />
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>O que é linguagem de programação? Conheça as principais:</h2>
            <h3 className={styles.subtitle}>Uma das mais populares vertentes da tecnologia da informação,
               a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.</h3>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.date}>
            17 de ago, 2024 
            <Image 
              src={isFilled ? Heart2 : Heart1} 
              alt="curtir"
              onClick={toggleIcon} 
              />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>GitHub agora permite fazer login sem precisar de senha.</h2>
            <h3 className={styles.subtitle}>O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas.
               A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.</h3>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.date}>
            17 de ago, 2024 
            <Image 
              src={isFilled ? Heart2 : Heart1} 
              alt="curtir"
              onClick={toggleIcon}
              />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>Por que os hiperlinks são azuis em sua maioria?</h2>
            <h3 className={styles.subtitle}>Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil.
               Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.</h3>
          </div>
        </div>
      </main>

    </div>
  );
}
