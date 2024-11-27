'use client';
import Image from "next/image";
import Heart1 from '../../public/assets/heart.svg'
import Heart2 from '../../public/assets/heart-active.svg'
import styles from "./page.module.css";
import { useState } from "react";

const initialPosts = [
  {
    id: 1,
    date: "17 de ago, 2024",
    title: "O que é linguagem de programação? Conheça as principais:",
    subtitle: "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.", 
    isLiked: false,
  },
  { 
    id: 2,
    date: "17 de ago, 2024",
    title:"GitHub agora permite fazer login sem precisar de senha.",
    subtitle:"O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.", 
    isLiked: false,
  },
  { 
    id:3,
    date: "17 de ago, 2024",
    title:"Por que os hiperlinks são azuis em sua maioria?",
    subtitle:"Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.", 
    isLiked: false,
  },
]

export default function Home() {
  const [posts, setPosts] = useState(initialPosts)

  const toggleLike = (id:number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => 
        post.id === id ? { ...post, isLiked: !post.isLiked } : post
      )
    );
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
        {posts.map((post)=> (
          <div key={post.id} className={styles.box}>
            <div className={styles.date}>
              {post.date}
              <Image
                src={post.isLiked ? Heart2 : Heart1} 
                alt={post.isLiked ? "Descurtir" : "Curtir"}
                onClick={() => toggleLike(post.id)}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>{post.title}</h2>
              <h3 className={styles.subtitle}>{post.subtitle}</h3>
            </div>
          </div>
                ))}
      </main>
    </div>
  );
}
