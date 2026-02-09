import { MonitorSmartphone, Users, Heart, ShieldCheck } from "lucide-react";

const features = [
  { icon: MonitorSmartphone, title: "Tecnologie Avanzate", desc: "Utilizziamo le più moderne tecnologie diagnostiche e terapeutiche." },
  { icon: Users, title: "Team Esperto", desc: "Professionisti qualificati con anni di esperienza al tuo servizio." },
  { icon: Heart, title: "Ambiente Confortevole", desc: "Studio accogliente progettato per il tuo massimo comfort e relax." },
  { icon: ShieldCheck, title: "Massima Igiene", desc: "Protocolli di sterilizzazione certificati per la tua sicurezza." },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-secondary-light/20">
    <div className="container mx-auto max-w-[1000px] px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Perché scegliere il nostro studio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-4">
            <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-card shadow-md">
              <f.icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-1">{f.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
