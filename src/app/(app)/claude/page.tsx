import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { CardGrid, PageTitle, Placeholder } from "@/components/page-parts";

export default function ClaudePage() {
  return (
    <>
      <PageTitle>Claude</PageTitle>
      <CardGrid min={340}>
        <Card className="flex flex-col gap-3">
          <div className="max-w-[85%] rounded-lg bg-pastel-pink px-3 py-2">
            Zdravo Sophia! Frag mich etwas oder üb mit mir ein Gespräch.
          </div>
          <Input placeholder="Nachricht …" disabled />
        </Card>
        <Card tone="blue">
          <CardTitle>Budget</CardTitle>
          <p className="text-sm">Monat: 30 CHF · Heute verfügbar: 1.00 CHF</p>
          <Progress value={12} tone="blue" className="my-2" />
          <p className="text-xs text-muted-foreground">
            Tagesbudget = Restbudget ÷ Resttage, Ungenutztes wandert mit.
          </p>
        </Card>
      </CardGrid>
      <Placeholder>Platzhalter. Der Chat wird später mit der Anthropic-API verbunden.</Placeholder>
    </>
  );
}
