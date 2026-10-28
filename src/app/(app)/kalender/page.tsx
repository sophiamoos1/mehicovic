import { Card } from "@/components/ui/card";
import { CardGrid, PageTitle, Placeholder } from "@/components/page-parts";

const days = [
  ["Pronomen", "pink"],
  ["Pronomen", "pink"],
  ["biti", "blue"],
  ["biti", "blue"],
  ["biti", "blue"],
  ["Genitiv m.", "green"],
  ["Genitiv m.", "green"],
  ["Genitiv m.", "green"],
  ["Genitiv m.", "green"],
  ["Akkusativ", "pink"],
  ["Akkusativ", "pink"],
  ["Akkusativ", "pink"],
  ["Wiederholung", "blue"],
  ["Akkusativ", "pink"],
] as const;

const start = Date.UTC(2026, 9, 29);

export default function KalenderPage() {
  const fmt = new Intl.DateTimeFormat("de-CH", {
    weekday: "short",
    day: "numeric",
    month: "numeric",
    timeZone: "UTC",
  });
  return (
    <>
      <PageTitle>Kalender · nächste 14 Tage</PageTitle>
      <CardGrid min={130}>
        {days.map(([thema, tone], i) => (
          <Card key={i} tone={tone} className="p-4">
            <p className="text-xs text-muted-foreground">{fmt.format(start + i * 86_400_000)}</p>
            <p className="font-semibold">{thema}</p>
          </Card>
        ))}
      </CardGrid>
      <Placeholder>
        Platzhalter-Daten. Später passt sich der Kalender deinem Tempo an: Brauchst du länger bei
        einem Thema, verschiebt sich der Rest. Das 12-Monats-Ziel ist ein Ziel, kein harter Schnitt.
      </Placeholder>
    </>
  );
}
