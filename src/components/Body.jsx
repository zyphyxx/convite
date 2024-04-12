import React, { useState } from 'react';
import { IMG } from "../data";

export default function Body() {
  const [imageSize1, setImageSize1] = useState("200px");
  const [imageSize2, setImageSize2] = useState("200px");
  const [imageSize3, setImageSize3] = useState("200px");
  const [imageSize4, setImageSize4] = useState("200px");
  const [imageSize5, setImageSize5] = useState("200px");

  const toggleImageSize1 = () => {
    setImageSize1(imageSize1 === "200px" ? "400px" : "200px");
  };

  const toggleImageSize2 = () => {
    setImageSize2(imageSize2 === "200px" ? "400px" : "200px");
  };

  const toggleImageSize3 = () => {
    setImageSize3(imageSize3 === "200px" ? "400px" : "200px");
  };

  const toggleImageSize4 = () => {
    setImageSize4(imageSize4 === "200px" ? "400px" : "200px");
  };

  const toggleImageSize5 = () => {
    setImageSize5(imageSize5 === "200px" ? "400px" : "200px");
  };

  return (
    <div className="text-center mb-8" id='total'>
      <section className="text-center mb-8">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          <h1 className="text-4xl font-bold"><u>Convite Especial! </u></h1>
        </div>
      </section>

      <section>
        <p className='text-sky-500'>
          🎉 Queridos amigos e familiares, estamos muito felizes em convidar vocês para a <b>festinha de 1 ano</b> do nosso pequeno explorador.  🎁
        </p>
      </section>

      <section className="text-center mb-8">
        <div className="text-5xl font-extrabold ...">
          <button><h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Leonardo Freitas Mendes</h2></button>
        </div>
      </section>

      <section>
        <div>
          <p className='text-sky-500'> Vamos celebrar juntos este momento mágico 🎉</p>
        </div>
      </section>

      {/* Adicionando manipulador de evento de clique e estilo de tamanho dinâmico */}
      <div className="grid justify-items-center mb-8" onClick={toggleImageSize1}>
        <img src={IMG[6].image} alt="Imagem" width={imageSize1} className="rounded-lg" />
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

      <div className="grid justify-items-center mb-8" onClick={toggleImageSize2}>
        <img src={IMG[8].image} alt="Dinossauro" width={imageSize2} className="rounded-lg" />
      </div>

      <section className="text-sky-500 mb-8">
        <div className="text-center mb-8">
          <p>
            Mal podemos esperar para compartilhar este dia tão especial com todos vocês! 🌟
          </p>

          <div className="grid justify-items-center mb-8" onClick={toggleImageSize3}>
            <img src={IMG[4].image} alt="" className="rounded-lg" width={imageSize3} />
          </div>

          <p className="mb-4">
            Seu carinho é o presente mais valioso, mas se quiserem tornar esta jornada ainda mais inesquecível, ficaremos imensamente gratos! 🎁🌟
          </p>
          <div className="grid justify-items-center mb-4" onClick={toggleImageSize4}>
            <img src={IMG[9].image} width={imageSize4} alt="Leo'saurinho Rex" />
          </div>
          <p className="mb-4">
            <b>Leo'saurinho Rex</b> está crescendo rápido, e as roupinhas que cabem nele são tamanho 3. Será uma alegria imensa contar com a presença de todos vocês! 🌟
          </p>
        </div>
      </section>

      <div className="grid justify-items-center mb-4" onClick={toggleImageSize5}>
        <img src={IMG[11].image} width={imageSize5} alt="Leo'saurinho" />
      </div>

      <section className="text-center mb-8">
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"><b>Mal podemos esperar para compartilhar este dia mágico com vocês!</b></p>
      </section>

      <section className="text-sky-500 mb-8" >
        <div className="justify-items-center">
          <p className="mb-2">
            🗓️ <strong>Data:</strong> 10 de Março
          </p>
          <p className="mb-2">
            🕐 <strong>Hora:</strong> 13:00 h
          </p>
          <p className="mb-2">
            📍 <strong>Local:</strong> Suzano
          </p>
        </div>
      </section>

      <div className="grid justify-items-center mb-4">
        <img src={IMG[7].image} width="90%" alt="Localização" className="rounded-lg" />
      </div>
    </div>
  );
}
