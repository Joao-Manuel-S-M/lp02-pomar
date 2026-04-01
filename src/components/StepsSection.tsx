import { Mail, BookOpen, Sprout } from "lucide-react";

const steps = [
  {
    icon: Mail,
    title: "Acesse seu e-mail",
    desc: "Você receberá um e-mail com o NPK Natural. Basta clicar no email e acessar na hora.",
  },
  {
    icon: BookOpen,
    title: "Acesse o guia",
    desc: "Você vai receber todo passo a passo do NPK Natural na plataforma.",
  },
  {
    icon: Sprout,
    title: "Tudo pronto para colher",
    desc: "Todo material do NPK Natural é muito fácil de seguir, basta aplicar e começar a ver resultados.",
  },
];

const StepsSection = () => (
  <section className="section-white py-12 md:py-20">
    <div className="container max-w-4xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl text-center mb-4">
        Você vai receber o <strong className="text-primary">NPK Natural</strong> imediatamente no
        seu e-mail
      </h2>
      <p className="text-center text-muted-foreground mb-10">Três simples passos para acessar...</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <step.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
