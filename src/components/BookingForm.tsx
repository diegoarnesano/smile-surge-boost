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