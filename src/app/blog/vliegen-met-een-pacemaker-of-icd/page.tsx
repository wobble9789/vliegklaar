import { BlogLayout } from "@/components/BlogLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vliegen met een pacemaker of ICD: Alles wat u moet weten | Vliegklaar",
  description: "Kunt u veilig vliegen met een pacemaker of ICD? Lees onze uitgebreide gids over de security check, medische verklaringen en tips voor een zorgeloze vlucht.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vliegen met een pacemaker of ICD: Tips voor senioren",
    "description": "Een complete gids voor reizigers met een pacemaker of ICD, inclusief informatie over de security op Schiphol en medische documentatie.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vliegklaar.nl/blog/vliegen-met-een-pacemaker-of-icd"
    }
  };

  return (
    <BlogLayout
      title="Vliegen met een pacemaker of ICD: Veilig en ontspannen op reis"
      publishDate="5 juni 2026"
      description="Veel senioren met een pacemaker of ICD vragen zich af of vliegen wel veilig is en wat er gebeurt bij de veiligheidscontrole op het vliegveld. In dit artikel beantwoorden we de meest gestelde vragen."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section>
        <h2>Is vliegen veilig met een pacemaker of ICD?</h2>
        <p>
          In de meeste gevallen is vliegen met een pacemaker of ICD (Implantable Cardioverter Defibrillator) volkomen veilig. Moderne apparaten zijn goed beschermd tegen de drukverschillen in de cabine en de elektronica van het vliegtuig. Het is echter altijd essentieel om voor vertrek contact op te nemen met uw cardioloog of technicus om te bevestigen dat uw specifieke situatie stabiel genoeg is voor een vliegreis.
        </p>
      </section>

      <section>
        <h2>De security check op het vliegveld</h2>
        <p>
          Dit is vaak het punt waar de meeste zorgen over bestaan. Hoewel de nieuwste generatie pacemakers en ICD&apos;s vaak niet meer reageren op de metaaldetectiepoortjes, blijft het advies om voorzichtig te zijn.
        </p>
        <ul>
          <li><strong>Meld het direct:</strong> Geef bij de beveiligingsbeambte aan dat u een geïmplanteerd medisch apparaat heeft voordat u door het poortje loopt.</li>
          <li><strong>De scan:</strong> Vaak mag u de normale metaaldetector passeren, maar de voorkeur gaat vaak uit naar de &apos;body scan&apos; (die geen magnetische velden gebruikt) of een handmatige controle.</li>
          <li><strong>Handmatige metaaldetector:</strong> De beveiliging gebruikt soms een handscanner. Vraag hen om deze niet te lang direct boven uw apparaat te houden.</li>
        </ul>
      </section>

      <section>
        <h2>Het belang van de pacemakerpas</h2>
        <p>
          Draag uw pacemakerpas of ICD-identificatiekaart altijd bij u in uw handbagage, of nog beter: in uw borstzak of portemonnee. Deze kaart is internationaal erkend en bevat cruciale informatie over uw apparaat. Toon deze kaart bij de security check; dit voorkomt onnodige discussies en zorgt voor een snellere afhandeling.
        </p>
      </section>

      <section>
        <h2>Tips voor tijdens de vlucht</h2>
        <p>
          Eenmaal aan boord gelden de normale adviezen voor senioren, met een paar extra aandachtspunten:
        </p>
        <ul>
          <li><strong>Blijf in beweging:</strong> Loop regelmatig een stukje door het gangpad om de bloedsomloop te stimuleren en trombose te voorkomen.</li>
          <li><strong>Hydratatie:</strong> Drink voldoende water en beperk alcohol en cafeïne.</li>
          <li><strong>Medicatie:</strong> Houd uw hartmedicatie altijd binnen handbereik in uw handbagage.</li>
        </ul>
      </section>

      <section>
        <h2>Wanneer moet u extra oppassen?</h2>
        <p>
          Als u onlangs een operatie heeft ondergaan voor het plaatsen of vervangen van de pacemaker/ICD, wordt vaak geadviseerd om 2 tot 6 weken te wachten met vliegen. Dit is om de wond te laten genezen en te controleren of de draden goed op hun plek blijven zitten. Overleg dit altijd met uw arts.
        </p>
      </section>

      <section>
        <h2>Reisbegeleiding van Vliegklaar</h2>
        <p>
          Vindt u het spannend om alleen te reizen met een pacemaker? De reisbegeleiders van Vliegklaar hebben ervaring met het ondersteunen van senioren met medische behoeften. Wij helpen u bij de security check, dragen uw koffers en zorgen ervoor dat u zich geen moment zorgen hoeft te maken over de praktische zaken van uw reis.
        </p>
      </section>
    </BlogLayout>
  );
}
