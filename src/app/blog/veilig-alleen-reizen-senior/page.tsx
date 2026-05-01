import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Veilig Alleen Reizen als Senior: Tips & Advies | Vliegklaar',
  description: 'Wilt u als senior alleen op reis maar vindt u het spannend? Lees onze praktische tips over veiligheid, voorbereiding en begeleiding voor een zorgeloze vakantie.',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li className="text-gray-300">/</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li className="text-gray-300">/</li>
          <li className="text-gray-700">Veilig alleen reizen als senior</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Veilig alleen reizen als senior: Zo gaat u met een gerust hart op pad</h1>
      
      <p className="text-lg mb-6">
        Steeds meer senioren kiezen ervoor om alleen de wereld te ontdekken. Of het nu gaat om een bezoek aan familie in het buitenland of een langgekoesterde droomreis, alleen reizen biedt een enorme vrijheid. Toch kan de drempel hoog zijn. In dit artikel delen we praktische tips om veilig en zelfverzekerd op reis te gaan.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Een goede voorbereiding is het halve werk</h2>
      <p className="mb-4">
        Zorg dat u uw documenten op orde heeft. Scan uw paspoort, verzekeringspolis en boekingsbevestigingen en mail deze naar uzelf. Laat ook een kopie achter bij familie of vrienden in Nederland. Zo zijn belangrijke gegevens bij verlies altijd opvraagbaar.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Kies voor gemak bij aankomst</h2>
      <p className="mb-4">
        De aankomst op een vreemd vliegveld is vaak het meest stressvolle moment. Boek vooraf een transfer naar uw hotel. Zo hoeft u na de landing niet te zoeken naar een taxi of uit te zoeken hoe het openbaar vervoer werkt met zware koffers.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Blijf bereikbaar</h2>
      <p className="mb-4">
        Zorg voor een goed opgeladen telefoon en een internationale bundel. Er zijn handige apps zoals WhatsApp om contact te houden met het thuisfront. Overweeg ook een powerbank mee te nemen, zodat u nooit met een lege batterij komt te staan tijdens een lange reisdag.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Luister naar uw lichaam</h2>
      <p className="mb-4">
        Alleen reizen betekent dat u uw eigen tempo kunt bepalen. Plan niet elke dag vol, maar neem rustmomenten. Een middagdutje of een rustige ochtend met een boek zorgt ervoor dat u de rest van de dag meer energie heeft om te genieten.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Gebruik vliegveldassistentie</h2>
      <p className="mb-4">
        Wist u dat u op bijna elk vliegveld hulp kunt krijgen bij het overstappen of het vervoeren van bagage? Dit is niet alleen voor mensen in een rolstoel, maar voor iedereen die slecht ter been is of de weg niet goed kan vinden. Vraag dit bij het boeken van uw ticket alvast aan.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Overweeg reisbegeleiding op maat</h2>
      <p className="mb-4">
        Vindt u de vliegreis zelf het lastigst, maar wilt u op de bestemming wel zelfstandig zijn? Vliegklaar biedt de mogelijkheid voor begeleiding van deur tot deur. Een professionele begeleider helpt u door de douane, bij de gate en brengt u naar uw hotel, waarna uw vakantie echt kan beginnen.
      </p>

      <div className="bg-blue-50 p-6 rounded-lg mt-12">
        <h3 className="text-xl font-bold mb-2">Wilt u niet langer alleen vliegen?</h3>
        <p>
          Onze begeleiders maken het mogelijk om ook op hoge leeftijd veilig en comfortabel te vliegen naar elke bestemming. Of u nu naar <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-blue-600 hover:underline">Amsterdam Schiphol</Link> moet of een verre reis plant, wij staan voor u klaar.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Veilig alleen reizen als senior: Tips & Advies",
            "description": "Gids voor senioren die alleen op reis gaan, met focus op veiligheid, voorbereiding en het gebruik van reisbegeleiding.",
            "author": {
              "@type": "Organization",
              "name": "Vliegklaar"
            },
            "datePublished": "2026-05-01"
          })
        }}
      />
    </article>
  );
}