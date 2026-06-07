import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe bereidt u een vliegreis voor met een scootmobiel? | Vliegklaar',
  description: 'Wilt u vliegen met een scootmobiel? Lees alles over de regels van luchtvaartmaatschappijen, accu-eisen en hoe u vliegveld assistentie regelt voor senioren.',
};

export default function VliegenMetScootmobielPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Hoe bereidt u een vliegreis voor met een scootmobiel?",
    "description": "Een praktische gids voor senioren die willen reizen met een scootmobiel, inclusief tips over accu's en assistentie.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    },
    "datePublished": "2026-06-07"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag een scootmobiel mee in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, een scootmobiel mag mee als ruimbagage. U moet dit wel minimaal 48 uur van tevoren aanmelden bij de luchtvaartmaatschappij."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de regels voor de accu van een scootmobiel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lithium-accu's mogen vaak tot een bepaalde capaciteit (Wh) mee. Droge accu's (gel/AGM) zijn meestal geen probleem, maar moeten wel ontkoppeld kunnen worden."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section className="bg-primary-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar blog overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe bereidt u een vliegreis voor met een scootmobiel?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Reizen met een scootmobiel opent de wereld voor senioren die minder mobiel zijn. Maar het meenemen van een scootmobiel in het vliegtuig vraagt om een goede voorbereiding. In dit artikel leggen we stap voor stap uit waar u op moet letten.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-primary">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Stap 1: Meld uw scootmobiel op tijd aan</h2>
          <p className="mb-4">
            Het belangrijkste is dat u uw scootmobiel direct bij het boeken, maar uiterlijk <strong>48 uur voor vertrek</strong>, aanmeldt bij de luchtvaartmaatschappij. De ruimte in het bagageruim is beperkt, en de bemanning moet weten welk type accu er in uw voertuig zit.
          </p>
          <p className="mb-4">Houd de volgende gegevens bij de hand:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Merk en model van de scootmobiel</li>
            <li>Afmetingen (ingeklapt/gedemonteerd)</li>
            <li>Gewicht</li>
            <li>Type accu (Lithium, Gel, of Droge accu)</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary-800 mb-6">Stap 2: Accu-voorschriften begrijpen</h2>
          <p className="mb-4">
            De veiligheidsregels voor accu&apos;s zijn streng. Er wordt onderscheid gemaakt tussen verschillende soorten:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Lithium-ion accu&apos;s:</strong> Deze moeten vaak losgekoppeld worden en mee als handbagage als ze een bepaalde capaciteit (Wattuur) overschrijden.</li>
            <li><strong>Niet-lekkende accu&apos;s (Gel/AGM):</strong> Deze mogen meestal in de scootmobiel blijven zitten, mits de polen zijn afgeplakt en de accu is ontkoppeld zodat de scootmobiel niet per ongeluk aan kan gaan.</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary-800 mb-6">Stap 3: Op het vliegveld</h2>
          <p className="mb-4">
            U kunt meestal met uw eigen scootmobiel tot aan de gate rijden. Daar wordt de scootmobiel ingenomen door het grondpersoneel en in het ruim geplaatst. Vergeet niet om losse onderdelen (zoals een mandje of een kussen) mee te nemen in de cabine om schade of verlies te voorkomen.
          </p>
          <div className="bg-primary-50 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-primary-800 mb-3">Checklist voor vertrek:</h3>
            <ul className="list-none space-y-3">
              <li>✓ Bevestig een label met uw contactgegevens aan de scootmobiel.</li>
              <li>✓ Neem de gebruiksaanwijzing mee (voor het ontkoppelen van de accu).</li>
              <li>✓ Controleer of uw reisverzekering schade aan hulpmiddelen dekt.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-primary-800 mb-6">Hulp van Vliegveld Assistentie</h2>
          <p className="mb-4">
            Zodra u uw scootmobiel bij de gate afgeeft, heeft u vervangend vervoer nodig naar uw vliegtuigstoel. Vraag daarom altijd <strong>medische assistentie</strong> aan. Zij helpen u bij het instappen en zorgen dat er op de bestemming weer een rolstoel of uw eigen scootmobiel voor u klaarstaat.
          </p>

          <div className="bg-primary-900 text-white p-8 rounded-2xl shadow-xl mt-12">
            <h2 className="text-2xl font-bold mb-4">Zorgeloos reizen met uw scootmobiel?</h2>
            <p className="mb-6">
              Ziet u op tegen de logistiek van het reizen met een scootmobiel? Vliegklaar neemt de zorg uit handen. Onze reisbegeleiders helpen u bij het inchecken, de security en zorgen dat uw scootmobiel veilig mee gaat.
            </p>
            <Link href="/contact" className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              Ontdek onze begeleidingsmogelijkheden
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
