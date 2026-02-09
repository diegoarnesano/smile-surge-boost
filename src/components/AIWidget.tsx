import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const AIWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      {open && (
        <div className="mb-4 w-[360px] max-w-[90vw] rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between bg-primary px-4 py-3">
            <span className="font-semibold text-primary-foreground text-sm">Assistente AI</span>
            <button onClick={() => setOpen(false)} aria-label="Chiudi assistente">
              <X className="h-5 w-5 text-primary-foreground/80 hover:text-primary-foreground" />
            </button>
          </div>
          <div id="ai-widget-container" className="p-6 text-center">
            <p className="text-muted-foreground text-sm">
              Ciao! 👋 Come posso aiutarti? Chiedimi informazioni sui nostri servizi o prenota un appuntamento.
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Apri assistente AI"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-xl transition-transform hover:scale-105 animate-pulse-soft"
      >
        {open ? (
          <X className="h-7 w-7 text-primary-foreground" />
        ) : (
          <MessageCircle className="h-7 w-7 text-primary-foreground" />
        )}
      </button>
    </div>
  );
};

export default AIWidget;
