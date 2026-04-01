import guaranteeImg from "@/assets/guarantee-image.png";

const GuaranteeSection = () => (
  <section className="section-cream py-12 md:py-20">
    <div className="container max-w-4xl mx-auto px-4">
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-8">
        PLANTE E COLHA OU NÃO PAGUE
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            Acreditamos tanto no poder do NPK Natural que oferecemos uma garantia sem complicação:{" "}
            <strong>você tem 60 dias de garantia por nossa conta</strong>, para aplicar o método e
            ver suas plantas florescerem, frutificarem e ficarem mais vivas que nunca.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-foreground mt-4">
            Se nesse período suas plantas não mostrarem frutos maiores, mais doces e vigorosos,{" "}
            <strong>você não paga nada</strong>. Simples assim: ou você colhe resultados em 60 dias,
            ou devolvemos cada centavo.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-foreground mt-4">
            <strong>Sem perguntas. Sem burocracia.</strong> São sete dias direto pela Kiwify e mais
            60 dias por nossa conta!
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-4 italic">
            Porque a sua alegria ao ver as flores nascerem é, pra nós, a colheita mais valiosa de
            todas.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={guaranteeImg}
            alt="Garantia de 60 dias"
            loading="lazy"
            width={800}
            height={600}
            className="w-64 md:w-80"
          />
        </div>
      </div>
    </div>
  </section>
);

export default GuaranteeSection;
