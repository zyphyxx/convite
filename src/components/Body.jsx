import React from 'react';
import { IMG } from "../data";

export default function Body() {
  return (
    <div className="text-center mb-8" id='total'>
      <section className="text-center mb-8">
        <div class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          <h1 className="text-4xl font-bold">Convite Especial! </h1>
        </div>
      </section>

      <section >
        <p className='text-sky-500'>
          🎉 Queridos amigos e familiares, estamos muito feliz em convidar vocês para a <b>festinha de 1 ano</b> do nosso pequeno explorador.  🎁 
        </p>
      
      </section>

      <section className="text-center mb-8">
        <div class="text-5xl font-extrabold ...">
          <h2 class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Leonardo Freitas Mendes</h2>
        </div>
      </section>

      <section>
        <div>
          <p className='text-sky-500'> Vamos celebrarmos juntos este momento mágico 🎉</p>
        </div>
      </section>

      <div className="grid justify-items-center mb-8">
        <img src={IMG[6].image} alt="Imagem" width="200px" className="rounded-lg" />
      </div>

      <section className="text-sky-500 mb-8">
        <div>
          <p className="mb-4">
            🦖 Embarque nesta incrível aventura ao mundo dos <b>dinossauros !</b>
          </p>
          <p>
          Em uma festa cheia de <b>cores vibrantes, brincadeiras</b> e muitas descobertas pré-históricas aguardam por vocês. 🌈
          </p>
        </div>
      </section>

      <div className="grid justify-items-center mb-8">
        <img src={IMG[8].image} alt="Dinossauro" className="rounded-lg" width="200px" />
      </div>

      <section className="text-sky-500 mb-8">
        <div className="text-center mb-8">
          <p >
            Mal podemos esperar para compartilhar este dia tão especial com todos vocês! 🌟
          </p>

          <div className="grid justify-items-center mb-8">
            <img src={IMG[4].image} className="rounded-lg" width="200px"  />
          </div>
        
          <p className="mb-4">
            Seu carinho é o presente mais valioso, mas se quiserem tornar esta jornada ainda mais inesquecível, ficaremos imensamente gratos! 🎁🌟
          </p>
          <div className="grid justify-items-center mb-4">
            <img src={IMG[9].image} width="200px" alt="Leo'saurinho Rex" />
          </div>
          <p className="mb-4">
            <b>Leo'saurinho Rex</b> está crescendo rápido, e as roupinhas que cabem nele são tamanho 3. Será uma alegria imensa contar com a presença de todos vocês! 🌟
          </p>
        </div>

        <div className="grid justify-items-center mb-4">
            <img src={IMG[10].image} width="200px" alt="Leo'saurinho Rex" />
          </div>
      </section>

      <section className="text-center mb-8">
        <p class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"><h3><b>Mal podemos esperar para compartilhar este dia mágico com vocês!</b></h3></p>
      </section>

      <section className="text-sky-500 mb-8">
        <div className="justify-items-center">
          <p className="mb-2">
            🗓️ <strong>Data:</strong> 10 de Março
          </p>
          <p className="mb-2">
            🕐 <strong>Hora:</strong> 13:00 h
          </p>
          <p className="mb-2">
            📍 <strong>Local:</strong> Estrada do Marengo nº 307, Boa Vista Suzano
          </p>
        </div>
      </section>

      <div className="grid justify-items-center mb-4">
        <img src={IMG[7].image} width="300px" className="rounded-lg" />
      </div>
    </div>
  );
}
