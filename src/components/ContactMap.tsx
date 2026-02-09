import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { studioConfig } from "@/lib/studioConfig";

const ContactMap = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto max-w-[1200px] px-6">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Info */}
        <div className="lg:w-2/5 space-y-6">
          <h3 className="text-3xl font-bold text-foreground">Dove siamo</h3>

          <ContactItem icon={MapPin}>
            <span className="text-muted-foreground">
              {studioConfig.VIA}, {studioConfig.CITTA}, {studioConfig.PROVINCIA}
            </span>
          </ContactItem>

          <ContactItem icon={Phone}>
            <a href={`tel:${studioConfig.TELEFONO.replace(/\s/g, "")}`}
              className="text-primary hover:underline">
              {studioConfig.TELEFONO}
            </a>
          </ContactItem>

          <ContactItem icon={Mail}>
            <a href={`mailto:${studioConfig.EMAIL}`}
              className="text-primary hover:underline">
              {studioConfig.EMAIL}
            </a>
          </ContactItem>

          <ContactItem icon={Clock}>
            <div className="text-muted-foreground space-y-0.5">
              <p>{studioConfig.ORARI.feriali}</p>
              <p>{studioConfig.ORARI.sabato}</p>
              <p>{studioConfig.ORARI.domenica}</p>
            </div>
          </ContactItem>

          <a
            href={studioConfig.LINK_MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-all hover:bg-primary-light/20"
          >
            <ExternalLink className="h-4 w-4" />
            Apri in Google Maps
          </a>
        </div>

        {/* Map */}
        <div className="lg:w-3/5">
          <iframe
            title="Mappa studio dentistico"
            width="100%"
            height="400"
            style={{ border: 0 }}
            className="rounded-lg shadow-md"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${studioConfig.VIA} ${studioConfig.CITTA} ${studioConfig.PROVINCIA}`
            )}&output=embed`}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

const ContactItem = ({ icon: Icon, children }: { icon: typeof MapPin; children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
    {children}
  </div>
);

export default ContactMap;
