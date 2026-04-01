const comments = [
  { name: "Rebeca Dias", text: "Será que precisa de muita coisa pra preparar? Minha cidade é pequena, não consigo encontrar de tudo", likes: 12, avatar: "https://i.pravatar.cc/80?img=1" },
  { name: "Joana Rodrigues", text: "Siiim! Qualquer quitanda de esquina tem, você já deve ter aí na sua casa!", likes: 15, reply: true, avatar: "https://i.pravatar.cc/80?img=5" },
  { name: "Carol Gonçalves Santana", text: "Minha jabuticabeira só dá umas frutinhas pequenas e meio opacas. Será que a terra pode ser o problema?", likes: 9, avatar: "https://i.pravatar.cc/80?img=9" },
  { name: "Diana Lima", text: "Sim, amiga, acontecia o mesmo com a minha, depois que comecei a colocar o NPK natural, agora elas tão pretinhas e brilhantes", likes: 1, reply: true, avatar: "https://i.pravatar.cc/80?img=16" },
  { name: "Cleiton Prudente", text: "Não sabia que dava para acelerar o crescimento das frutas. Vou tentar, obrigado.", likes: 6, avatar: "https://i.pravatar.cc/80?img=51" },
  { name: "Roberto Motta", text: "Só tenho que agradecer! Nunca imaginei que conseguiria colher frutas tão rápido em casa", likes: 16, avatar: "https://i.pravatar.cc/80?img=53" },
  { name: "Maria Donizette", text: "Isso é só pra quem tem experiência com jardinagem ou qualquer um consegue fazer? Eu to realmente querendo tentar", likes: 4, avatar: "https://i.pravatar.cc/80?img=23" },
];

const CommentsSection = () => (
  <section className="section-cream py-12 md:py-20">
    <div className="container max-w-2xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl text-center font-bold mb-2">Comentários</h2>
      <p className="text-center text-muted-foreground mb-8">{comments.length} comentários</p>

      <div className="space-y-4">
        {comments.map((c, i) => (
          <div key={i} className={`flex gap-3 ${c.reply ? "ml-10" : ""}`}>
            <img
              src={c.avatar}
              alt={c.name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              loading="lazy"
            />
            <div className="flex-1">
              <p className="font-bold text-sm text-foreground">{c.name}</p>
              <p className="text-sm text-foreground mt-1">{c.text}</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span>Curtir</span>
                <span>Responder</span>
                <span>👍 {c.likes}</span>
                <span>1 h</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CommentsSection;
