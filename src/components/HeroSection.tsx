import npkLogo from "@/assets/npk-logo.png";
import productBundle from "@/assets/product-bundle.png";

const CTAButton = () => (
  <div className="flex flex-col items-center gap-2">
    <a
      href="https://pay.kiwify.com.br/poZZHxV"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-cta animate-pulse-cta inline-block text-center"
    >
      Quero ter frutas em 21 dias
    </a>
    <div className="flex items-center gap-2 opacity-70">
      <span className="text-xs text-muted-foreground">CHECKOUT SEGURO:</span>
      <span className="text-xs text-muted-foreground">💳 Cartão • Pix • Boleto</span>
    </div>
    <p className="text-xs text-muted-foreground italic mt-1">
      Se clicar no botão e nada acontecer, a promoção acabou, pedimos desculpa por isso!
    </p>
  </div>
);

const HeroSection = () => (
  <section className="section-cream py-8 md:py-16">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="flex justify-center mb-6">
        <img src={npkLogo} alt="NPK Natural" width={120} height={120} className="w-24 md:w-32" />
      </div>

      <h1 className="text-2xl md:text-4xl lg:text-5xl text-center leading-tight mb-8">
        O segredo japonês que faz qualquer planta dar frutos em{" "}
        <strong className="text-secondary">21 dias</strong> — funciona até em{" "}
        <em className="text-secondary not-italic font-bold">apartamento</em>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 flex justify-center">
          <img
            src={productBundle}
            alt="NPK Natural - Pacote completo com Pomar 21 Dias, Guia das Frutíferas e Plantas Sem Fim"
            width={800}
            height={600}
            className="w-full max-w-md"
          />
        </div>

        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-earth">
              12x de R$ 3,23
            </p>
            <p className="text-lg text-muted-foreground mt-1">
              ou <strong className="text-earth">R$ 27,90</strong> à vista
            </p>
          </div>
          <CTAButton />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
