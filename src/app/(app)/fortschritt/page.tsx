import { Card, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CardGrid, PageTitle, Placeholder } from "@/components/page-parts";

function Topic({ title, g, w, s }: { title: string; g: number; w: number; s: number }) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <div className="space-y-3 text-sm">
        <div>
          Grammatik {g} %<Progress value={g} className="mt-1" />
        </div>
        <div>
          Wortschatz {w} %<Progress value={w} tone="blue" className="mt-1" />
        </div>
        <div>
          Sprechen/Verstehen {s} %<Progress value={s} tone="green" className="mt-1" />
        </div>
      </div>
    </Card>
  );
}

export default function FortschrittPage() {
  return (
    <>
      <PageTitle>Fortschritt</PageTitle>
      <CardGrid>
        <Topic title="Pronomen" g={96} w={90} s={70} />
        <Topic title="Präsens: biti" g={60} w={40} s={20} />
        <Card tone="green">
          <CardTitle>Gesamt (12-Monats-Ziel)</CardTitle>
          <Progress value={8} tone="green" className="my-2" />
          <p className="text-sm">8 % · 23 von 288 Std. · 4 von 45 Themen</p>
        </Card>
      </CardGrid>
      <Placeholder>Platzhalter-Daten.</Placeholder>
    </>
  );
}
