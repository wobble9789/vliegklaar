import { BlogLayout } from "@/components/BlogLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoe ga je om met bagage-regels als senior? | Vliegklaar",
  description: "Praktische tips voor senioren over bagage-regels: van vloeistoffen en medicatie tot het voorkomen van te zware koffers.",
};

export default function Page() {
  return (
    <BlogLayout
      title="Hoe ga je om met bagage-regels als senior?"
      publishDate="6 juni 2026"
      description="Bagage-regels veranderen regelmatig en kunnen per luchtvaartmaatschappij verschillen. In dit artikel helpen we u om zonder stress uw koffers te pakken."
    >
      <section>
        <h2>Handbagage: Wat mag er mee?</h2>
        <p>
          In uw handbagage neemt u de belangrijkste zaken mee. Voor senioren zijn dit vaak medicijnen, een bril, gehoorapparaten en belangrijke reisdocumenten. Let erop dat vloeistoffen (zoals zalfjes of vloeibare medicatie) in verpakkingen van maximaal 100ml moeten zitten, verpakt in een transparant zakje.
        </p>
      </section>

      <section>
        <h2>Medicatie en medische apparatuur</h2>
        <p>
          Heeft u vloeibare medicijnen of medische apparatuur nodig die niet aan de standaard regels voldoet? Zorg dan voor een medisch paspoort of een verklaring van uw arts. Hiermee voorkomt u vertraging bij de security-check. Apparaten zoals een CPAP voor slaapapneu mogen vaak gratis mee als extra medische bagage, mits vooraf aangemeld.
        </p>
      </section>

      <section>
        <h2>Het gewicht van uw koffer</h2>
        <p>
          Een te zware koffer is niet alleen duur aan de incheckbalie, maar ook lastig te hanteren. Gebruik een koffer met vier wielen (een spinner) die gemakkelijk rolt. Weeg uw koffer thuis alvast met een kofferweger om verrassingen te voorkomen.
        </p>
      </section>

      <section>
        <h2>Tips voor makkelijk inpakken</h2>
        <ul>
          <li><strong>Labels:</strong> Voorzie elke koffer van een duidelijk label met uw contactgegevens.</li>
          <li><strong>Herkenbaarheid:</strong> Gebruik een opvallende kofferriem of een kleurrijke koffer om uw bagage snel te herkennen op de bagageband.</li>
          <li><strong>Hulpmiddelen:</strong> Rollators of krukken mogen bijna altijd gratis mee tot aan de deur van het vliegtuig.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusie</h2>
        <p>
          Door slim in te pakken en de regels vooraf te kennen, begint uw reis een stuk ontspannener. Heeft u hulp nodig bij het tillen van uw bagage of de begeleiding op het vliegveld? Vliegklaar helpt u graag bij elke stap van uw reis.
        </p>
      </section>
    </BlogLayout>
  );
}
