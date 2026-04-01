import productBundle from "@/assets/product-bundle.png";

const SecondCTASection = () => (
  <section className="section-cream py-12 md:py-20">
    <div className="container max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center">
          <img
            src={productBundle}
            alt="NPK Natural"
            loading="lazy"
            width={800}
            height={600}
            className="w-full max-w-sm"
          />
        </div>
        <div className="flex-1 flex flex-col items-center gap-4">
          <p className="text-3xl md:text-4xl font-display font-bold text-earth text-center">
            12x de R$ 3,23
          </p>
          <p className="text-lg text-muted-foreground text-center">
            ou <strong className="text-earth">R$ 19,90</strong> à vista
          </p>
          <a
            href="https://syncpagamentoseguro.com/checkout/a17116c4-2f48-4e6a-8aa1-457797d99ce5+a1711865-bd81-43ed-a746-cd39f02cc64b"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta animate-pulse-cta inline-block text-center"
          >
            Quero ter frutas em 21 dias
          </a>
          <div className="flex items-center gap-2 opacity-70">
            <span className="text-xs text-muted-foreground">CHECKOUT SEGURO: 💳 Cartão • Pix • Boleto</span>
          </div>
          <p className="text-xs text-muted-foreground italic">
            Se clicar no botão e nada acontecer, a promoção acabou, pedimos desculpa por isso!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SecondCTASection;
