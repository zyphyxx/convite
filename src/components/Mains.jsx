import { IMG } from "../data";

export default function Mains() {
  return (
    <section className="text-center">
      <div className="text-lime-500" >
        <p>🎉 Queridos amigos e familiares,

          Estamos emocionados em convidar você para a festinha de 1 ano do nosso pequeno aventureiro,
           para celebrar conosco este momento especial,
            onde a alegria e o aprendizado se encontram para formar lembranças inesquecíveis! 🚀
        </p>

      </div>
    </section>

  );
}

export function Nome() {
  return (
    <section className="text-center ...">
      <div className="text-blue-500">
        <h2 className="font-semibold">Leonardo Freitas Mendes</h2>
        <img src={IMG[0].image} alt="Imagem"  />
      </div>
    </section>
  );
}

export function InfoSection() {
  return (
    <section className="text-center ..." >
      <div>
        <p>🗓️ <strong>Data:</strong> 10 de Março</p>
        <p>🕐 <strong>Hora:</strong> 13:00 h</p>
        <p>
          📍 <strong>Local:</strong> Estrada do Marengo nº 307, Boa Vista Suzano
        </p>
      </div>
    </section>
  )
}

export function Section () {
  return(
    <section className="text-center ..." >
      <div>

      </div>
    </section>
  );
}