import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig vliegen met zuurstof: Tips voor senioren | Vliegklaar',
  description: 'Wilt u vliegen met zuurstof? Lees onze praktische gids voor senioren over regels, voorbereiding en vliegveld-assistentie bij Vliegklaar.',
};

export default function VliegenMetZuurstofPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Veilig vliegen met zuurstof: Tips voor senioren
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Afhankelijk zijn van extra zuurstof hoeft uw reisplannen niet in de weg te staan. Met de juiste voorbereiding kunt u veilig en comfortabel de wereld blijven ontdekken.
          </p>
        </header>

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&q=80"
            alt="Zuurstofvoorziening in het vliegtuig"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Vliegen met longproblemen zoals COPD of een andere aandoening waarvoor u extra zuurstof nodig heeft, vraagt om een extra portie planning. Luchtvaartmaatschappijen hebben strikte regels voor het meenemen van eigen apparatuur of het gebruik van boordzuurstof. Bij Vliegklaar helpen we senioren regelmatig bij dit soort complexe logistieke uitdagingen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">1. Medische verklaring (MEDIF)</h2>
          <p>
            De belangrijkste stap is het regelen van een medische verklaring van uw behandelend arts. Luchtvaartmaatschappijen gebruiken vaak het <strong>MEDIF-formulier</strong>. Hierop staat hoeveel zuurstof u nodig heeft (liters per minuut) en of u dit continu of alleen tijdens de vlucht nodig heeft. Zorg dat dit formulier ruim voor vertrek is goedgekeurd door de medische dienst van de airline.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. POC of Boordzuurstof?</h2>
          <p>
            Er zijn grofweg twee opties als u wilt vliegen met zuurstof:
          </p>
          <ul>
            <li><strong>Draagbare Zuurstofconcentrator (POC):</strong> Veel moderne apparaten zijn goedgekeurd door de FAA en airlines. U bent dan onafhankelijk, maar moet wel voldoende batterijcapaciteit meenemen (vaak 150% van de vluchttijd).</li>
            <li><strong>Zuurstof van de maatschappij:</strong> Sommige airlines bieden tegen betaling zelf zuurstof aan boord. Dit moet u echter altijd vooraf reserveren en is niet op alle vluchten beschikbaar.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Logistiek op de luchthaven</h2>
          <p>
            Op een grote luchthaven zoals <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline">Schiphol</Link> kunnen de afstanden tot de gate enorm zijn. Inspanning verhoogt de behoefte aan zuurstof. Daarom is het essentieel om luchthavenassistentie aan te vragen. Een begeleider van Vliegklaar kan u hierbij ondersteunen, zodat u rustig in een rolstoel of elektrisch wagentje naar de gate wordt gebracht.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Tips voor tijdens de vlucht</h2>
          <p className="text-gray-700 mb-8">
            De luchtdruk in de cabine is lager dan op zeeniveau, waardoor er minder zuurstof in de lucht zit. Zelfs als u thuis niet altijd zuurstof nodig heeft, kan dit in de lucht wel nodig zijn (de zogenaamde &apos;fit-to-fly&apos; test kan dit uitwijzen). Drink voldoende water, vermijd alcohol en blijf rustig ademhalen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Hoe Vliegklaar u ondersteunt</h2>
          <p>
            Ziet u op tegen het papierwerk of de angst dat uw batterij leegraakt? Onze <Link href="/reisbegeleiding-ouderen" className="text-primary-600 hover:underline">reisbegeleiders voor ouderen</Link> nemen de regie over. Wij controleren de formulieren, zorgen voor assistentie bij de security en blijven de hele reis bij u om te monitoren of alles naar wens verloopt.
          </p>
        </div>

        <footer className="mt-16 p-8 bg-primary-50 rounded-2xl border border-primary-100 text-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Zorgeloos vliegen met medische behoeften?</h3>
          <p className="text-gray-700 mb-8">
            Wij hebben ervaring met het begeleiden van reizen waarbij extra zorg of zuurstof nodig is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors"
            >
              Vraag advies aan
            </Link>
            <a
              href="tel:0618769492"
              className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors"
            >
              Bel: 06-18769492
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
