import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vliegangst bij Ouderen: Tips voor een Ontspannen Vlucht | Vliegklaar',
  description: 'Heeft u of uw naaste last van vliegangst op latere leeftijd? Ontdek praktische tips en hoe persoonlijke reisbegeleiding kan helpen bij een zorgeloze vliegreis.',
};

export default function VliegangstOuderenPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="mb-8">
        <Link href="/blog" className="text-blue-600 hover:underline">← Terug naar overzicht</Link>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Vliegangst bij Ouderen: Tips voor een Ontspannen Vlucht</h1>
        <p className="text-xl text-gray-600">Angst om te vliegen kan op elke leeftijd ontstaan, maar bij ouderen spelen vaak specifieke factoren mee. Hoe gaat u hiermee om?</p>
      </header>

      <div className="prose prose-blue max-w-none text-gray-800 leading-relaxed">
        <p>
          Vliegangst is een veelvoorkomend verschijnsel. Hoewel veel mensen denken dat het iets is waar je 'overheen groeit', 
          kan het juist op latere leeftijd de kop opsteken of verergeren. Dit kan komen door een toegenomen gevoel van kwetsbaarheid, 
          minder controle over de omgeving, of simpelweg omdat men minder vaak reist dan voorheen.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Waarom vliegangst toeneemt bij ouderen</h2>
        <p>
          Bij senioren is vliegangst vaak niet alleen de angst voor het neerstorten. Het is vaak een optelsom van factoren:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Gezondheidszorgen:</strong> Wat als ik onwel word boven de oceaan?</li>
          <li><strong>Overprikkeling:</strong> De drukte en chaos op vliegvelden als Schiphol kunnen overweldigend zijn.</li>
          <li><strong>Mobiliteit:</strong> De angst om niet snel genoeg te kunnen bewegen bij een eventuele evacuatie.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5 Tips tegen vliegangst voor senioren</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Bereid u fysiek voor:</strong> Zorg voor een goede nachtrust en vermijd cafeïne vlak voor de vlucht. Een stabiele bloedsuikerspiegel helpt om rustiger te blijven.
          </li>
          <li>
            <strong>Kies de juiste stoel:</strong> Voor veel mensen met vliegangst helpt een stoel bij de vleugel (waar de minste beweging voelbaar is) of juist aan het gangpad voor een gevoel van vrijheid.
          </li>
          <li>
            <strong>Informeer de bemanning:</strong> Stewardessen zijn getraind om mensen met vliegangst gerust te stellen. Een kort gesprekje bij het instappen kan wonderen doen.
          </li>
          <li>
            <strong>Afleiding is key:</strong> Neem een luisterboek, kruiswoordpuzzels of rustige muziek mee. Focus op iets anders dan het geluid van de motoren.
          </li>
          <li>
            <strong>Reis niet alleen:</strong> De aanwezigheid van een vertrouwd persoon of een professionele reisbegeleider kan de angst drastisch verminderen.
          </li>
        </ol>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-10">
          <h3 className="text-xl font-bold mb-2 text-blue-900">Hulp nodig bij uw vliegreis?</h3>
          <p className="text-blue-800 mb-4">
            Vliegklaar is gespecialiseerd in het begeleiden van ouderen tijdens hun vliegreis. Onze begeleiders bieden rust, 
            overzicht en medische back-up, zodat u zich volledig kunt ontspannen.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
            Vrijblijvend advies aanvragen
          </Link>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Professionele begeleiding</h2>
        <p>
          Soms is een goed gesprek of een ontspanningsoefening niet genoeg. In dat geval kan <Link href="/reisbegeleiding-ouderen" className="text-blue-600 hover:underline">reisbegeleiding voor ouderen</Link> 
          de uitkomst bieden. Een medisch geschoolde begeleider die van deur tot deur met u meereist, neemt alle logistieke 
          zorgen en onzekerheden weg. Dit geeft een enorm gevoel van veiligheid, wat de vliegangst vaak direct reduceert.
        </p>
      </div>
    </article>
  );
}
