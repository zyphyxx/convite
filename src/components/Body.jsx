import React from 'react';
import { IMG } from "../data";

export default function Body() {
  return (
    <div className="justify-items-center" id='total'>
      <section className="text-center mb-8">
        <div class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          <h1 className="text-4xl font-bold">Convite Especial! </h1>
        </div>
      </section>

      <section className="text-lime-600 mb-8">
        <p>
          🎉 Queridos amigos e familiares, estamos radiantes em convidar vocês para a festinha de 1 ano do nosso pequeno explorador.
        </p>
        <p>
        Vamos celebrarmos juntos este momento mágico, onde a diversão e a alegria serão nossas guias em uma jornada repleta de descobertas e emoções! 🎉
        </p>
      </section>

      <section className="text-center mb-8">
        <div class="text-5xl font-extrabold ...">
          <h2 class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Leonardo Freitas Mendes</h2>
        </div>
      </section>

      <div className="grid justify-items-center mb-8">
        <img src={IMG[2].image} alt="Imagem" width="200px" className="rounded-lg" />
      </div>

      <section className="text-lime-600 mb-8">
        <div>
          <p className="mb-4">
            🦖 Embarque nesta incrível aventura ao mundo dos <b>dinossauros</b>! Uma festa cheia de <b>cores vibrantes, brincadeiras</b> e muitas descobertas pré-históricas aguardam por vocês. 🌈
          </p>
        </div>
      </section>

      <div className="grid justify-items-center mb-8">
        <img src={IMG[6].image} alt="Dinossauro" className="rounded-lg" width="200px" />
      </div>

      <section className="text-lime-600 mb-8">
        <div>
          <p className="mb-4">
            Mal podemos esperar para compartilhar este dia tão especial com todos vocês! 🌟
          </p>

          <div className="grid justify-items-center mb-8">
            <img src={IMG[4].image}  />
          </div>
        
          <p className="mb-4">
            Seu carinho é o presente mais valioso, mas se quiserem tornar esta jornada ainda mais inesquecível, ficaremos imensamente gratos! 🎁🌟
          </p>
          <div className="grid justify-items-center mb-4">
            <img src={IMG[0].image} width="200px" alt="Leo'saurinho Rex" />
          </div>
          <p className="mb-4">
            <b>Leo'saurinho Rex</b> está crescendo rápido, e as roupinhas que cabem nele são tamanho 3. Será uma alegria imensa contar com a presença de todos vocês! 🌟
          </p>
        </div>
      </section>

      <section className="text-center mb-8">
        <p className="text-orange-400 text-lg font-bold">Mal podemos esperar para compartilhar este dia mágico com vocês!</p>
      </section>

      <section className="text-lime-600 mb-8">
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
