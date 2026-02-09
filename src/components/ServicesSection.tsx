import { Sparkles, Grid3X3, Wrench, Sun, Scissors, Baby } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Igiene Dentale", desc: "Pulizia professionale e prevenzione per mantenere denti e gengive sani." },
  { icon: Grid3X3, title: "Ortodonzia", desc: "Apparecchi e allineatori trasparenti per un sorriso perfettamente allineato." },
  { icon: Wrench, title: "Implantologia", desc: "Soluzioni definitive per sostituire i denti mancanti con impianti di qualità." },
  { icon: Sun, title: "Sbiancamento", desc: "Trattamenti professionali per un sorriso più bianco e luminoso." },
  { icon: Scissors, title: "Chirurgia Orale", desc: "Interventi specialistici con le tecnologie più avanzate." },
  { icon: Baby, title: "Odontoiatria Pediatrica", desc: "Cure delicate e specializzate per i più piccoli in un ambiente accogliente." },
];

const ServicesSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto max-w-[1200px] px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        I nostri servizi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-lg border border-border bg-card p-8 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <s.icon className="h-12 w-12 text-primary mb-4" />
            <h4 className="text-xl font-semibold text-foreground mb-2">{s.title}</h4>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
