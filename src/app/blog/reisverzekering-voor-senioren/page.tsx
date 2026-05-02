import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisverzekering voor senioren: Waar moet u op letten? | Vliegklaar',
  description: 'Een goede reisverzekering is essentieel voor senioren. Ontdek alles over medische dekking, leeftijdslimieten en aanvullende opties voor een zorgeloze vakantie.',
};

const ReisverzekeringSeniorenPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Reisverzekering voor senioren: Tips voor een zorgeloze vakantie</h1>
      
      <p className="text-lg mb-8">
        Als senior geniet u hopelijk volop van uw vrije tijd, en daar horen mooie reizen bij. Maar wist u dat een standaard reisverzekering niet altijd voldoende dekking biedt voor ouderen? In dit artikel bespreken we de belangrijkste aandachtspunten bij het afsluiten van een reisverzekering voor senioren.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Medische kosten: De belangrijkste dekking</h2>
        <p className="mb-4">
          Uw basiszorgverzekering vergoedt spoedeisende medische hulp in het buitenland vaak tot het Nederlandse tarief. In landen als de Verenigde Staten, Zwitserland of Canada liggen de kosten echter veel hoger. Een reisverzekering met dekking voor medische kosten is daarom onmisbaar om hoge rekeningen te voorkomen.
        </p>
        <p className="bg-blue-50 p-4 border-l-4 border-blue-500 italic">
          Let op: Heeft u een chronische aandoening? Controleer dan of deze gedekt is als de situatie tijdens de reis verergert.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Leeftijdslimieten en acceptatie</h2>
        <p className="mb-4">
          Sommige verzekeraars hanteren een maximale leeftijd voor het afsluiten van bepaalde (doorlopende) reisverzekeringen. Gelukkig zijn er steeds meer aanbieders die geen leeftijdsgrens hanteren, al kan de premie voor ouderen soms iets hoger liggen vanwege een hoger ingeschat risico.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Repatriëring en hulpverlening</h2>
        <p className="mb-4">
          Mocht u onverhoopt ziek worden of een ongeluk krijgen waardoor u eerder naar huis moet (repatriëring), dan kunnen de kosten enorm oplopen. Een goede reisverzekering dekt deze kosten en biedt 24/7 toegang tot een alarmcentrale die u kan ondersteunen in uw eigen taal.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Annuleringsverzekering</h2>
        <p className="mb-4">
          Een annuleringsverzekering is voor senioren vaak extra relevant. Als u of een direct familielid plotseling ziek wordt voor vertrek, krijgt u de reissom (deels) terug. Kijk goed naar de voorwaarden: sommige verzekeringen keren ook uit als u tijdens de reis wegens medische redenen eerder naar huis moet.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Veelgestelde vragen (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Is een doorlopende verzekering goedkoper?</h3>
            <p>Als u meer dan 21 dagen per jaar op vakantie gaat, is een doorlopende reisverzekering meestal voordeliger dan losse kortlopende verzekeringen.</p>
          </div>
          <div>
            <h3 className="font-bold">Moet ik mijn EHIC-pas meenemen?</h3>
            <p>Ja, de European Health Insurance Card (EHIC) bewijst dat u verzekerd bent in Nederland en maakt de afwikkeling van zorgkosten binnen Europa eenvoudiger.</p>
          </div>
        </div>
      </section>

      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-bold mb-2">Samen veilig op reis</h3>
        <p>
          Naast een goede verzekering is fysieke begeleiding soms wenselijk. Vliegklaar ondersteunt senioren tijdens hun vliegreis: van het inchecken tot het vinden van de juiste gate en hulp bij de bagage. Zo gaat u niet alleen goed verzekerd, maar ook fysiek ondersteund op pad. 
          <a href="/contact" className="text-green-700 font-semibold underline ml-1">Bekijk onze diensten</a>.
        </p>
      </div>
      
      {/* JSON-LD voor SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Reisverzekering voor senioren: Waar moet u op letten?",
            "description": "Een goede reisverzekering is essentieel voor senioren. Ontdek alles over medische dekking, leeftijdslimieten en aanvullende opties voor een zorgeloze vakantie.",
            "author": {
              "@type": "Organization",
              "name": "Vliegklaar"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Vliegklaar",
              "logo": {
                "@type": "ImageObject",
                "url": "https://vliegklaar.nl/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://vliegklaar.nl/blog/reisverzekering-voor-senioren"
            }
          }),
        }}
      />
    </div>
  );
};

export default ReisverzekeringSeniorenPage;
