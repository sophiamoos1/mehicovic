import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { CardGrid, PageTitle, Placeholder } from "@/components/page-parts";

export default function HeutePage() {
  return (
    <>
      <PageTitle>Dobro veče, Sophia! · Heute (60 Min.)</PageTitle>
      <CardGrid>
        <Card tone="pink">
          <CardTitle>Vorschlag</CardTitle>
          <p className="font-semibold">Genitiv Singular (maskulin) – Einführung</p>
          <p className="my-2 text-sm text-muted-foreground">Neu · 35 Min. + 25 Min. Wiederholung</p>
          <div className="mb-3 flex gap-1.5">
            <Badge>Grammatik</Badge>
            <Badge tone="blue">Muster</Badge>
          </div>
          <Button>Session starten</Button>
        </Card>

        <Card tone="blue">
          <CardTitle>Alternative</CardTitle>
          <p className="font-semibold">Ličnih zamjenica wiederholen + Serienszene</p>
          <p className="my-2 text-sm text-muted-foreground">Wiederholung · 30 Min. + 30 Min. Hören</p>
          <Button variant="secondary">Stattdessen wählen</Button>
        </Card>

        <Card tone="green">
          <CardTitle>Bonus-Session</CardTitle>
          <p className="mb-3 text-sm text-muted-foreground">
            Wenn du im Plan voraus bist. Zählt als Bonus, abgehakt wird das Thema erst mit
            zusätzlichem Test.
          </p>
          <Button variant="accent">Bonus starten</Button>
        </Card>

        <Card>
          <CardTitle>Fällige Wiederholungen</CardTitle>
          <ul className="divide-y text-sm">
            <li className="flex justify-between py-2">
              Präsens: biti <Badge>fällig</Badge>
            </li>
            <li className="flex justify-between py-2">
              Begrüssungen <Badge>fällig</Badge>
            </li>
            <li className="flex justify-between py-2">
              Zahlen 1–20 <Badge tone="blue">Erhaltung</Badge>
            </li>
          </ul>
        </Card>
      </CardGrid>
      <Placeholder>Platzhalter-Daten. Tagesplan und Wiederholungen kommen aus der Datenbank.</Placeholder>
    </>
  );
}
