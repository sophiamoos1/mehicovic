import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageTitle, Placeholder } from "@/components/page-parts";

const rows = [
  { thema: "Pronomen (ličnih zamjenica)", std: 4, datum: "29.10.", status: "96 % ✓", tone: "green" as const },
  { thema: "Präsens: biti", std: 3, datum: "02.11.", status: "in Arbeit", tone: "blue" as const },
  { thema: "Genitiv Sg. maskulin", std: 5, datum: "05.11.", status: "geplant", tone: "pink" as const },
  { thema: "Akkusativ Sg.", std: 5, datum: "12.11.", status: "geplant", tone: "pink" as const },
];

export default function PlanPage() {
  return (
    <>
      <PageTitle>Lehrplan</PageTitle>
      <Card className="overflow-x-auto">
        <table className="w-full min-w-[420px] text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2">Thema</th>
              <th>Std.</th>
              <th>Datum</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.thema} className="border-b last:border-0">
                <td className="py-2.5">{r.thema}</td>
                <td>{r.std}</td>
                <td>{r.datum}</td>
                <td>
                  <Badge tone={r.tone}>{r.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Placeholder>
        Platzhalter-Daten. Später: einmaliger Import aus dem Google-Sheet, danach Verwaltung hier
        (Termine verschiebbar).
      </Placeholder>
    </>
  );
}
