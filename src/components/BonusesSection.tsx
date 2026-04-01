import { useState, useEffect } from "react";

const bonuses = [
  { name: "Pomar 21 dias", desc: "Aprenda a Poda Japonesa", price: "R$ 127,00" },
  { name: "Guia das Frutíferas", desc: "Plante o ano todo", price: "R$ 147,00" },
  { name: "Plantas Sem Fim", desc: "Livro líder em vendas Amazon", price: "R$ 97,00" },
];

const socialProofs = [
  { name: "Ana Paula", city: "São Paulo, SP", time: "2 min atrás" },
  { name: "Carlos M.", city: "Belo Horizonte, MG", time: "5 min atrás" },
  { name: "Fernanda S.", city: "Curitiba, PR", time: "8 min atrás" },
  { name: "João Pedro", city: "Rio de Janeiro, RJ", time: "12 min atrás" },
  { name: "Márcia L.", city: "Salvador, BA", time: "15 min atrás" },
];

const useCountdown = () => {
  const [time, setTime] = useState(() => {
    const saved = sessionStorage.getItem("npk-countdown");
    return saved ? Number(saved) : 15 * 60;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        const next = prev <= 0 ? 0 : prev - 1;
        sessionStorage.setItem("npk-countdown", String(next));
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = String(Math.floor(time / 60)).padStart(2, "0");
  const secs = String(time % 60).padStart(2, "0");
  return { mins, secs, expired: time <= 0 };
};

const BonusesSection = () => {
  const { mins, secs, expired } = useCountdown();

  return (
    <section className="section-white py-12 md:py-20">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center mb-10">
          Recapitulando tudo que você vai receber no{" "}
          <strong className="text-primary">NPK Natural</strong>
        </h2>

        <div className="space-y-4">
          {bonuses.map((b) => (
            <div
              key={b.name}
              className="flex items-center justify-between bg-background rounded-lg px-6 py-4 border border-border"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <span className="font-bold text-foreground">{b.name}</span>
                  <span className="text-muted-foreground"> - {b.desc}</span>
                </div>
              </div>
              <span className="price-strike text-lg">{b.price}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 space-y-4">
          <p className="text-xl md:text-2xl font-display">
            No total isso tudo deveria custar <strong className="text-red-strike">R$ 371,00</strong>
          </p>

          {/* Timer */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 max-w-md mx-auto">
            <p className="text-sm font-bold text-destructive uppercase tracking-wide mb-2">
              ⚠️ Oferta por tempo limitado
            </p>
            <p className="text-sm text-foreground mb-3">
              O preço volta para <strong>R$ 371,00</strong> em:
            </p>
            <div className="flex justify-center gap-3">
              <div className="bg-destructive text-destructive-foreground rounded-lg px-4 py-2 min-w-[60px]">
                <span className="text-3xl font-bold font-display">{expired ? "00" : mins}</span>
                <p className="text-xs opacity-80">min</p>
              </div>
              <span className="text-3xl font-bold text-destructive self-center">:</span>
              <div className="bg-destructive text-destructive-foreground rounded-lg px-4 py-2 min-w-[60px]">
                <span className="text-3xl font-bold font-display">{expired ? "00" : secs}</span>
                <p className="text-xs opacity-80">seg</p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="space-y-2 mt-6">
            {socialProofs.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">🟢</span>
                <span>
                  <strong className="text-foreground">{p.name}</strong> de {p.city} comprou{" "}
                  <span className="text-primary font-semibold">{p.time}</span>
                </span>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-display mt-4">
            mas apenas hoje, todos os bônus são <strong className="text-primary">gratuitos</strong> ao
            comprar o <strong className="text-primary">NPK Natural</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
