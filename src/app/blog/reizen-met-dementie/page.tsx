import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met Dementie: Tips voor een Rustige Reis | Vliegklaar',
  description: 'Hoe bereidt u een vliegreis voor met iemand met dementie? Van vliegveldassistentie tot tips voor in het vliegtuig. Lees onze gids.',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Reizen met dementie: Tips voor een zorgeloze vakantie</h1>
      
      <p className="text-lg mb-6">
        Op vakantie gaan met een naaste die aan dementie lijdt, is een uitdaging maar zeker niet onmogelijk. Met een zorgvuldige planning en de juiste ondersteuning kunnen deze reizen nog steeds waardevolle herinneringen opleveren voor het hele gezin.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Voorbereiding is het halve werk</h2>
      <p className="mb-4">
        Een goede voorbereiding begint bij het kiezen van de juiste bestemming. Vermijd plekken met te veel prikkels of extreme temperatuurwisselingen. Kies voor een omgeving die rust uitstraalt en waar u zich allebei op uw gemak voelt.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Documenten en Veiligheid</h2>
      <p className="mb-4">
        Zorg dat u alle medische gegevens bij de hand heeft. Een SOS-armbandje of een kaartje in de zak met contactgegevens kan veel onrust wegnemen bij zowel de reiziger als de begeleider.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">De reis zelf</h2>
      <p className="mb-4">
        Of u nu met de auto, trein of het vliegtuig gaat: neem de tijd. Plan ruime overstappen en zorg voor voldoende rustmomenten. Prikkels op drukke stations of vliegvelden kunnen sneller leiden tot onrust of verwarring.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Hulp inschakelen</h2>
      <p className="mb-4">
        Schroom niet om hulp te vragen. Veel transportbedrijven bieden speciale assistentie aan. Ook kunt u overwegen om een professionele reisbegeleider van Vliegklaar in te schakelen, die ervaring heeft met het ondersteunen van ouderen met dementie.
      </p>

      <div className="bg-primary-50 p-6 rounded-lg mt-12 border border-primary-100">
        <h3 className="text-xl font-bold mb-2 text-primary-900">Zorgeloos op pad?</h3>
        <p className="text-primary-800">
          Vliegklaar biedt gespecialiseerde begeleiding voor senioren met dementie. Wij nemen de logistieke zorgen uit handen, zodat u samen kunt genieten.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Reizen met dementie: Tips voor een zorgeloze vakantie",
            "description": "Ontdek hoe u een geslaagde vakantie plant met iemand die dementie heeft. Praktische tips over bestemmingen, veiligheid en ondersteuning.",
            "author": {
              "@type": "Organization",
              "name": "Vliegklaar"
            },
            "datePublished": "2026-04-29"
          })
        }}
      />
    </article>
  );
}
