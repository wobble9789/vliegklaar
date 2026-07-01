import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe gaat een senior door de paspoortcontrole? | Vliegklaar',
  description: 'Tips voor senioren bij de paspoortcontrole en Marechaussee. Lees hoe u zich voorbereidt op grenscontrole op het vliegveld.',
};

export default function PaspoortControleBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn paspoort uit het hoesje halen bij de controle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, de Koninklijke Marechaussee vraagt vrijwel altijd om het paspoort uit het hoesje te halen. Dit versnelt het scannen en de visuele controle van de echtheidskenmerken."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik als senior gebruikmaken van de automatische paspoortpoortjes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, als u een e-paspoort heeft (met het chip-logo op de voorkant) en 16 jaar of ouder bent, kunt u vaak de self-service poortjes gebruiken. Let wel op dat u recht in de camera kijkt en uw bril of hoed afzet."
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
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8">
          Hoe gaat een senior door de paspoortcontrole?
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Voor veel senioren is de paspoortcontrole een spannend moment van de reis. De Koninklijke Marechaussee voert strenge controles uit, en de rijen kunnen soms lang zijn. In dit artikel leggen we uit wat u kunt verwachten en hoe u hier ontspannen doorheen komt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Voorbereiding is het halve werk</h2>
          <p>
            Zorg dat u uw paspoort of ID-kaart op een makkelijk bereikbare plek heeft, maar wel veilig (bijvoorbeeld in een tas met rits). Haal het document alvast uit het beschermhoesje voordat u aan de beurt bent. Dit voorkomt gestuntel aan de balie.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Fysieke ondersteuning</h2>
          <p>
            Heeft u moeite met lang staan? Geef dit aan bij het luchthavenpersoneel. Er zijn vaak aparte rijen voor reizigers die assistentie nodig hebben. Als u via Vliegklaar reist, zorgt uw begeleider ervoor dat u een zitplaats heeft of dat we gebruikmaken van de prioriteitsrijen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Schengen vs. Niet-Schengen</h2>
          <p>
            Reist u binnen Europa (Schengenlanden)? Dan heeft u meestal geen uitgebreide paspoortcontrole, maar moet u zich nog wel kunnen legitimeren. Voor reizen buiten Europa krijgt u te maken met de marechaussee die uw documenten grondig controleert en eventueel vragen stelt over uw reisdoel.
          </p>
          <p className="mt-4">
            <Link href="/blog/schengen-regels-2026" className="text-primary-600 hover:underline">
              Lees hier meer over de actuele Schengen-regels in 2026.
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">De automatische poortjes (E-gates)</h2>
          <p>
            Op Schiphol ziet u vaak rijen met automatische poortjes. Deze scannen uw paspoort en maken een foto van uw gezicht. Voor senioren kan dit soms verwarrend zijn. 
            <strong> Tip:</strong> Zet uw bril af en kijk recht in de camera. Als het poortje niet opengaat, is er altijd een medewerker in de buurt om u naar een handmatige balie te verwijzen.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl mt-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Hulp nodig bij uw volgende reis?</h2>
            <p className="text-primary-800 mb-6">
              Ziet u op tegen de drukte en de controles op de luchthaven? Onze reisbegeleiders wijken niet van uw zijde en loodsen u overal rustig doorheen.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              Neem contact op voor de mogelijkheden
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
