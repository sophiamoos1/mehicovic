import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { CardGrid, PageTitle, Placeholder } from "@/components/page-parts";

export default function WortschatzPage() {
  return (
    <>
      <PageTitle>Wortschatz</PageTitle>
      <CardGrid>
        <Card>
          <CardTitle>Thema: Begrüssung</CardTitle>
          <ul className="divide-y text-sm">
            <li className="flex justify-between py-2">
              <b>Zdravo</b> <span>Hallo</span>
            </li>
            <li className="flex justify-between py-2">
              <b>Hvala</b> <span>Danke · спасибо</span>
            </li>
          </ul>
        </Card>
        <Card tone="pink">
          <CardTitle>Slang aus Serien</CardTitle>
          <ul className="divide-y text-sm">
            <li className="flex justify-between py-2">
              <span>
                <b>Nema frke</b> <Badge tone="pink">Slang</Badge>
              </span>
              <span>Kein Problem</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                <b>Bolan!</b> <Badge tone="pink">Slang</Badge>
              </span>
              <span>Mega!</span>
            </li>
          </ul>
        </Card>
      </CardGrid>
      <Placeholder>
        Platzhalter-Daten. Später: nach Thema sortiert, mit Audio (Vesna/Goran) und Serien-Quellen.
      </Placeholder>
    </>
  );
}
