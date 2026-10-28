import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageTitle, Placeholder } from "@/components/page-parts";

export default function QuickQuizPage() {
  return (
    <>
      <PageTitle>Quick-Quiz</PageTitle>
      <Card>
        <p className="mb-4 font-semibold">Thema wählen:</p>
        <div className="flex flex-wrap gap-2">
          <Button>Pronomen</Button>
          <Button variant="secondary">Präsens: biti</Button>
          <Button variant="accent">🎲 Mix aus allen</Button>
        </div>
      </Card>
      <Placeholder>
        Platzhalter. Später: Fragen und Antwortreihenfolge werden jedes Mal neu gemischt, mit
        wechselnden Fragetypen.
      </Placeholder>
    </>
  );
}
