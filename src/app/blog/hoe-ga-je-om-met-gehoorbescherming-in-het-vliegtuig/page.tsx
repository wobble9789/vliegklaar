import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe ga je om met gehoorbescherming in het vliegtuig? | Vliegklaar',
  description: 'Tips voor senioren over gehoorbescherming tijdens het vliegen. Bescherm uw gehoor tegen cabinegeluid en drukverschillen. Lees meer bij Vliegklaar.',
};

export default function GehoorbeschermingBlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is gehoorbescherming nodig in een vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hoewel het geluidsniveau in moderne vliegtuigen meestal binnen veilige grenzen blijft, kan het constante gebrom van de motoren (tussen 80 en 85 decibel) vermoeiend zijn en op lange termijn schadelijk voor het gehoor, vooral voor senioren met een al kwetsbaar gehoor."
        }
      },
      {
        "@type": "Question",
        "name": "Helpen oordopjes tegen oorpijn tijdens het stijgen en dalen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, speciale 'pressure-regulating' oordopjes hebben een filter dat de luchtdrukveranderingen geleidelijker doorgeeft aan het trommelvlies, wat de bekende oorpijn aanzienlijk kan verminderen."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik gehoorbescherming combineren met een gehoorapparaat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tijdens de vlucht is het vaak comfortabeler om het gehoorapparaat uit te doen of op een lagere stand te zetten en noise-cancelling koptelefoons te gebruiken. Bespreek dit altijd met uw audicien voor uw specifieke situatie."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe ga je om met gehoorbescherming in het vliegtuig?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Een comfortabele vliegreis begint bij rust aan uw hoofd. Voor senioren kan het constante lawaai in de cabine niet alleen vermoeiend zijn, maar ook invloed hebben op het welzijn na de vlucht.
          </p>
        </header>

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1544644063-2339be0f74ef?w=1200&q=80"
            alt="Senior met koptelefoon in vliegtuig"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Vliegen is een indrukwekkende ervaring, maar de cabine van een vliegtuig is zelden echt stil. Het constante gezoem van de motoren en het suizen van de airconditioning zorgen voor een achtergrondlawaai dat bij veel mensen leidt tot vermoeidheid of zelfs hoofdpijn. Voor ouderen is gehoorbescherming daarom geen overbodige luxe, maar een essentieel onderdeel van een <Link href="/blog/checklist-senioren-vliegen" className="text-primary-600 hover:underline">goede reisvoorbereiding</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Waarom gehoorbescherming belangrijk is</h2>
          <p>
            Tijdens de kruisvlucht ligt het geluidsniveau in de cabine vaak rond de 80 decibel. Ter vergelijking: dit is vergelijkbaar met het geluid van een drukke weg of een stofzuiger. Wanneer u hier meerdere uren achter elkaar aan wordt blootgesteld, moeten uw hersenen hard werken om dit geluid te filteren. Dit is een belangrijke oorzaak van de bekende &apos;vliegtuigmoeheid&apos;.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Soorten bescherming</h2>
          <ul>
            <li><strong>Noise-cancelling koptelefoons:</strong> Deze zijn ideaal voor senioren. Ze produceren een &apos;tegengeluid&apos; waardoor het monotone gebrom van de motoren wegvalt. U kunt dan op een lager volume naar muziek luisteren of simpelweg van de stilte genieten.</li>
            <li><strong>Drukregulerende oordopjes:</strong> Speciaal ontworpen voor mensen die last hebben van hun oren tijdens het stijgen en dalen. Ze bevatten een klein filter dat de drukverschillen reguleert.</li>
            <li><strong>Schuimrubberen oordopjes:</strong> De meest voordelige optie. Ze dempen het geluid over de hele breedte, maar maken het soms lastig om mededelingen van het personeel te verstaan.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Tips voor onderweg</h2>
          <p>
            Draag uw gehoorbescherming of koptelefoon niet de hele reis onafgebroken. Geef uw oren af en toe rust. Als u gebruikmaakt van een <Link href="/blog/vliegen-met-een-gehoorapparaat-senioren" className="text-primary-600 hover:underline">gehoorapparaat</Link>, overleg dan voor vertrek met uw audicien wat de beste instelling is voor in het vliegtuig. Soms is het dragen van een over-ear noise-cancelling koptelefoon over uw gehoorapparaat heen een goede oplossing, mits dit niet gaat rondzingen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Vliegveld assistentie en communicatie</h2>
          <p>
            Als u slechthorend bent of gehoorbescherming draagt, is het extra belangrijk om belangrijke omroepen niet te missen. Maak gebruik van <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie</Link> zodat het personeel weet dat ze u persoonlijk moeten informeren bij gate-wijzigingen.
          </p>
        </div>

        <footer className="mt-16 p-8 bg-primary-50 rounded-2xl border border-primary-100">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Persoonlijke begeleiding nodig?</h3>
          <p className="text-gray-700 mb-6">
            Ziet u op tegen de communicatie en het lawaai op de luchthaven? Onze begeleiders zorgen dat u geen enkele melding mist en ondersteunen u bij elke stap van uw reis.
          </p>
          <Link
            href="/reisbegeleiding-ouderen"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors"
          >
            Ontdek onze reisbegeleiding
          </Link>
        </footer>
      </article>
    </main>
  );
}
