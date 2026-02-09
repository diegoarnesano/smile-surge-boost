import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { studioConfig } from "@/lib/studioConfig";

const BookingForm = () => {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    const nome = (form.get("nome") as string)?.trim();
    const email = (form.get("email") as string)?.trim();
    const telefono = (form.get("telefono") as string)?.trim();

    if (!nome) errs.nome = "Campo obbligatorio";
    if (!email) errs.email = "Campo obbligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Email non valida";
    if (!telefono) errs.telefono = "Campo obbligatorio";
    else if (!/^(\+39)?\s?\d[\d\s]{7,14}$/.test(telefono)) errs.telefono = "Formato non valido";

    return errs;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setFormState("loading");
    setTimeout(() => setFormState("success"), 1500);
  };

  if (formState === "success") {
    return (
      <section id="form-section" className="py-24 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
        <div className="container mx-auto max-w-[600px] px-6">
          <div className="rounded-xl bg-card p-10 shadow-xl text-center">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Grazie!</h3>
            <p className="text-muted-foreground">
              Abbiamo ricevuto la tua richiesta. Ti contatteremo entro 24 ore per confermare l'appuntamento.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="form-section" className="py-24 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
      <div className="container mx-auto max-w-[600px] px-6">
        <div className="rounded-xl bg-card p-8 md:p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-2">
            Prenota il tuo appuntamento
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Compila il modulo e ti ricontatteremo al più presto per confermare.
          </p>

          {formState === "error" && (
            <div className="mb-6 flex items-center gap-2 rounded-lg border-2 border-destructive bg-destructive/10 p-4">
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
              <p className="text-sm text-foreground">
                Ops! Qualcosa è andato storto. Riprova o chiamaci al {studioConfig.TELEFONO}.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <Field label="Nome *" error={errors.nome}>
              <input name="nome" type="text" placeholder="Mario Rossi" maxLength={100} className="form-input" />
            </Field>

            <Field label="Email *" error={errors.email}>
              <input name="email" type="email" placeholder="mario.rossi@email.com" maxLength={255} className="form-input" />
            </Field>

            <Field label="Numero di Telefono *" error={errors.telefono}>
              <input name="telefono" type="tel" placeholder="+39 333 123 4567" maxLength={20} className="form-input" />
            </Field>

            <button
              type="submit"
              disabled={formState === "loading"}
              className="w-full rounded-lg bg-accent px-6 py-4 text-lg font-semibold text-accent-foreground shadow-md transition-all hover:bg-accent-hover hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {formState === "loading" && <Loader2 className="h-5 w-5 animate-spin" />}
              Invia Richiesta
            </button>
          </form>

          <div className="mt-6 flex justify-center">
            <a
              href={`https://wa.me/${studioConfig.TELEFONO.replace(/[\s+]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white font-semibold shadow-md transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 32 32" className="h-6 w-6 fill-white">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.89 15.89 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-2.282 2.108-3.14 2.162-.786.05-1.51.374-5.088-1.058-4.318-1.728-7.06-6.13-7.274-6.416-.21-.286-1.72-2.286-1.72-4.362 0-2.076 1.088-3.098 1.474-3.52.39-.424.846-.528 1.128-.528.286 0 .57.002.82.016.264.012.618-.1.966.738.39.852 1.288 3.146 1.4 3.374.112.228.186.494.038.78-.15.286-.224.464-.44.714-.214.248-.452.554-.644.744-.214.214-.438.446-.188.876.25.428 1.11 1.834 2.384 2.972 1.636 1.462 3.016 1.916 3.444 2.13.428.214.678.178.926-.108.25-.286 1.072-1.25 1.358-1.678.286-.428.57-.356.962-.214.39.144 2.484 1.172 2.912 1.386.428.214.714.322.82.494.112.178.112 1.012-.278 2.098z" />
              </svg>
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div>
    <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>
    {children}
    {error && <p className="text-sm text-destructive mt-1">{error}</p>}
  </div>
);

export default BookingForm;