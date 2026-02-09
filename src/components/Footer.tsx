import { studioConfig } from "@/lib/studioConfig";

const Footer = () => (
  <footer className="bg-primary-dark py-12">
    <div className="container mx-auto max-w-[1200px] px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-primary-foreground">
        {/* Col 1 */}
        <div>
          <h4 className="text-xl font-bold mb-2">{studioConfig.NOME_STUDIO}</h4>
          <p className="text-sm text-primary-light">Il tuo sorriso è la nostra priorità</p>
        </div>

        {/* Col 2 */}
        <div>
          <h5 className="font-semibold mb-2">Contatti</h5>
          <p className="text-sm text-primary-light">{studioConfig.VIA}, {studioConfig.CITTA}</p>
          <a href={`tel:${studioConfig.TELEFONO.replace(/\s/g, "")}`}
            className="text-sm text-primary-light hover:text-primary-foreground block mt-1">
            {studioConfig.TELEFONO}
          </a>
        </div>

        {/* Col 3 */}
        <div>
          <h5 className="font-semibold mb-2">Informazioni</h5>
          <a href="#" className="text-sm text-primary-light hover:text-primary-foreground block">Privacy Policy</a>
          <a href="#" className="text-sm text-primary-light hover:text-primary-foreground block mt-1">Cookie Policy</a>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center">
        <p className="text-sm text-primary-light">
          © {new Date().getFullYear()} {studioConfig.NOME_STUDIO}. Tutti i diritti riservati.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
