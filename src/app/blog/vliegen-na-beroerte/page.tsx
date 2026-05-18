import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is vliegen veilig na een beroerte? Advies voor senioren | Vliegklaar',
  description: 'Wanneer mag je weer vliegen na een beroerte (TIA of CVA)? Lees alles over de herstelperiode, Fit to Fly verklaring en veilig reizen met begeleiding.',
};

export default function VliegenNaBeroertePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hoe lang moet ik wachten met vliegen na een beroerte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De meeste luchtvaartmaatschappijen hanteren een wachttijd van 10 tot 14 dagen na een TIA of een lichte beroerte. Na een ernstig CVA kan dit oplopen tot 3 tot 6 maanden. Overleg altijd met uw neuroloog voor een persoonlijk advies."
        }
      },
      {
        "@type": "Question",
        "name": "Heb ik een Fit to Fly verklaring nodig na een beroerte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, na een neurologische gebeurtenis zoals een beroerte vragen luchtvaartmaatschappijen vrijwel altijd om een medische Fit to Fly verklaring van uw behandelend arts om de veiligheid tijdens de vlucht te waarborgen."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de grootste risico's van vliegen na een beroerte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De lagere luchtdruk en lagere zuurstofconcentratie in de cabine kunnen een risico vormen. Ook de verhoogde kans op trombose door langdurig stilzitten is een belangrijk aandachtspunt."
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
            Vliegen na een beroerte: Alles wat u moet weten
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Een beroerte (TIA of CVA) is een ingrijpende gebeurtenis. Het is logisch dat u zich afvraagt of en wanneer het weer veilig is om het vliegtuig in te stappen. In dit artikel bespreken we de belangrijkste richtlijnen en tips voor senioren.
          </p>
        </header>

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1505751172676-4eac21754a69?w=1200&q=80"
            alt="Senior die herstelt en weer plannen maakt"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Reizen is voor veel senioren een manier om te genieten van hun vrijheid. Na een beroerte kan die vrijheid tijdelijk beperkt lijken. Gelukkig is <strong>vliegen na een beroerte</strong> in veel gevallen weer mogelijk, mits er voldoende tijd is genomen voor herstel en de juiste voorzorgsmaatregelen zijn getroffen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Wanneer mag u weer vliegen?</h2>
          <p>
            De termijn waarop u weer mag vliegen hangt sterk af van de ernst van de beroerte en de snelheid van uw herstel. 
          </p>
          <ul>
            <li><strong>TIA (Transient Ischemic Attack):</strong> Meestal wordt geadviseerd om minimaal 10 tot 14 dagen te wachten.</li>
            <li><strong>CVA (Cerebrovasculair Accident):</strong> Bij een zwaardere beroerte hanteren artsen vaak een periode van minimaal 4 weken tot enkele maanden.</li>
          </ul>
          <p>
            Het belangrijkste is dat de neuroloog vaststelt dat uw situatie stabiel is en dat het risico op een herhaling minimaal is.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Medische verklaring: Fit to Fly</h2>
          <p>
            Luchtvaartmaatschappijen hebben een zorgplicht. Daarom vragen zij bij recente medische incidenten om een <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-voor-vliegen" className="text-primary-600 hover:underline">Fit to Fly verklaring</Link>. Dit document, ondertekend door uw arts, bevestigt dat u fysiek in staat bent om de vliegreis te maken zonder extra risico voor uw gezondheid.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Aandachtspunten tijdens de vlucht</h2>
          <p>
            Als u groen licht heeft gekregen, zijn er een aantal zaken waar u tijdens de reis op kunt letten:
          </p>
          <ul>
            <li><strong>Hydratatie:</strong> Drink voldoende water. De lucht in de cabine is droog.</li>
            <li><strong>Beweging:</strong> Ter voorkoming van trombose is het belangrijk om regelmatig even te lopen of beenoefeningen te doen. Het gebruik van <Link href="/blog/vliegen-met-compressiekousen" className="text-primary-600 hover:underline">compressiekousen</Link> kan ook helpen.</li>
            <li><strong>Medicatie:</strong> Zorg dat u uw <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">medicijnen</Link> (zoals bloedverdunners) in uw handbagage heeft en volg uw schema strikt.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Reisbegeleiding voor extra rust</h2>
          <p>
            Zelfs als u medisch gezien mag vliegen, kan de stress van een luchthaven (inchecken, security, grote afstanden) een zware wissel op u trekken. <Link href="/" className="text-primary-600 hover:underline">Reisbegeleiding voor senioren</Link> biedt hier uitkomst. Onze begeleiders regelen <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie</Link> en blijven gedurende de hele reis aan uw zijde, zodat u zich volledig kunt focussen op uw herstel en plezier.
          </p>
        </div>

        <footer className="mt-16 p-8 bg-primary-50 rounded-2xl border border-primary-100">
          <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">Wilt u veilig op reis na uw herstel?</h3>
          <p className="text-gray-700 mb-8 text-center">
            Vliegklaar helpt senioren in heel Nederland, van <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline">Amsterdam</Link> tot <Link href="/reisbegeleiding-ouderen-rotterdam" className="text-primary-600 hover:underline">Rotterdam</Link>, om weer zorgeloos de wereld te verkennen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
            >
              Vrijblijvend advies aanvragen
            </Link>
            <a
              href="tel:0618769492"
              className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors text-center"
            >
              Bel: 06-18769492
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
