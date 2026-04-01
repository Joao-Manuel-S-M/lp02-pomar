import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "1 - Meus primeiros frutos nasceram em apenas 10 dias, é normal?",
    a: "Sim, isso é possível. A depender do estado atual da sua frutífera antes de você começar a seguir o nosso guia, os resultados podem aparecer mais rápido do que o esperado ao aplicar o passo a passo do NPK natural.",
  },
  {
    q: "2 - Os frutos estão nascendo muito rápido e sobrecarregando minha frutífera, tem algo que eu possa fazer?",
    a: "Isso é algo extremamente comum! Dependendo do tamanho da sua frutífera, você pode perceber que ela está sobrecarregada com novos frutos. Nesse caso, recomendamos que você realize colheitas regulares para aliviar o peso nos galhos. Para não desperdiçar os frutos excedentes, entre em contato com o nosso time para um guia de armazenamento.",
  },
  {
    q: "3 - Preciso de ideias de novas receitas para não desperdiçar a quantidade de frutos. Vocês têm alguma sugestão?",
    a: "Sim, nossa equipe está desenvolvendo novos guias para ajudar quem busca ideias de receitas para aproveitar melhor seus frutos sem desperdício. Em breve, elas estarão disponíveis.",
  },
  {
    q: "4 - Qual é a forma de pagamento do NPK Natural?",
    a: "Oferecemos diversas formas de pagamento para facilitar sua compra. Você pode realizar o pagamento via Kiwify, além de opções como Pix, cartão de crédito e boleto bancário.",
  },
  {
    q: "5 - O pagamento é seguro?",
    a: "Sim, o pagamento é totalmente seguro. Utilizamos plataformas confiáveis que seguem os mais altos padrões de segurança para proteger suas informações financeiras e pessoais.",
  },
  {
    q: "6 - O NPK Natural funciona para mim?",
    a: "Sim, seguindo os passos do NPK Natural qualquer pessoa que precise acelerar o crescimento de frutos consegue atingir um resultado satisfatório.",
  },
  {
    q: "7 - Tem garantia?",
    a: "Sim, oferecemos garantia de 7 dias pela Kiwify e de 60 dias por nossa conta.",
  },
  {
    q: "8 - Como vou acessar o NPK Natural?",
    a: "Após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso. Você poderá acessar o conteúdo pela plataforma Kiwify a qualquer momento, de forma prática e segura.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-white py-12 md:py-20">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-10">Perguntas Frequentes</h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-foreground hover:bg-muted/50 transition-colors"
              >
                <span className="text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
