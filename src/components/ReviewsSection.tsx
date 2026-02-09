import { Star } from "lucide-react";
import { studioConfig } from "@/lib/studioConfig";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        className={`h-5 w-5 ${s <= rating ? "fill-warning text-warning" : "text-border"}`}
      />
    ))}
  </div>
);

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("it-IT", { month: "long", year: "numeric" });
};

const ReviewsSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto max-w-[1200px] px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
        Cosa dicono i nostri pazienti
      </h2>
      <div className="flex items-center justify-center gap-2 mb-12">
        <StarRating rating={5} />
        <span className="text-lg text-muted-foreground">
          {studioConfig.RATING} su 5 · {studioConfig.NUM_RECENSIONI} recensioni Google
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {studioConfig.recensioni.map((r, i) => (
          <div key={i} className="rounded-lg border border-border bg-card p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-foreground">{r.nome}</span>
              <StarRating rating={r.stelle} />
            </div>
            {r.testo && (
              <p className="text-muted-foreground leading-relaxed line-clamp-4">
                "{r.testo}"
              </p>
            )}
            <p className="text-sm text-muted-foreground/70 mt-3 capitalize">
              {formatDate(r.data)}
            </p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground/70 mt-8">
        Recensioni verificate da Google
      </p>
    </div>
  </section>
);

export default ReviewsSection;
