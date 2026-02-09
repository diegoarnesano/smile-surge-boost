import { Star, Phone } from "lucide-react";
import { studioConfig } from "@/lib/studioConfig";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[600px] bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-[1200px] px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h2 className="text-2xl font-bold text-primary">
              {studioConfig.NOME_STUDIO}
            </h2>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
              Il tuo sorriso è la nostra priorità
            </h1>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm text-muted-foreground">
                {studioConfig.RATING} · {studioConfig.NUM_RECENSIONI} recensioni Google
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToForm}
                className="rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground shadow-md transition-all hover:bg-accent-hover hover:shadow-lg"
              >
                Prenota la tua visita
              </button>
              <a
                href={`tel:${studioConfig.TELEFONO.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-8 py-4 text-lg font-semibold text-primary transition-all hover:bg-primary-light/20"
              >
                <Phone className="h-5 w-5" />
                Chiama ora
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 max-w-[600px]">
            <img
              src={heroImage}
              alt="Paziente sorridente dopo visita dentistica"
              className="w-full rounded-2xl shadow-lg object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
