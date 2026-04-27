import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Schengen regels 2026: Wat verandert er voor reizende ouderen? | Vliegklaar',
  description: 'Bereid u voor op de nieuwe Schengen regels in 2026. Lees alles over EES, ETIAS en wat dit betekent voor senioren die buiten Europa willen reizen.',
};

export default function Schengen2026Page() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-primary-600 font-medium mb-4">
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>•</span>
            <span>27 april 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
            Schengen regels 2026: Wat u moet weten als reizende senior
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            De manier waarop we binnen en buiten Europa reizen verandert in 2026 aanzienlijk. Voor ouderen kunnen deze nieuwe technologische systemen vragen oproepen. Vliegklaar legt uit wat de belangrijkste wijzigingen zijn.
          </p>
        </header>

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?w=1200&q=80"
            alt="Vliegtuig boven Europa"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-primary-800">De komst van EES en ETIAS</h2>
          <p>
            In 2026 zijn het Entry/Exit System (EES) en het European Travel Information and Authorisation System (ETIAS) volledig operationeel. Hoewel deze systemen bedoeld zijn om de veiligheid te vergroten en grensprocessen te versnellen, betekenen ze voor de reiziger een extra voorbereiding.
          </p>

          <h3 className="text-xl font-bold text-primary-700 mt-8">1. Het Entry/Exit Systeem (EES)</h3>
          <p>
            Het EES vervangt het handmatig afstempelen van paspoorten bij de buitengrenzen van de Schengenzone. In plaats daarvan worden biometrische gegevens (zoals vingerafdrukken en gezichtsscans) geregistreerd bij de eerste keer dat u de grens passeert.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Wat betekent dit?</strong> Bij uw eerste reis naar een land buiten de EU in 2026 moet u rekening houden met iets langere wachttijden bij de paspoortcontrole voor de registratie.</li>
            <li><strong>Begeleiding:</strong> Vliegklaar begeleiders helpen u bij deze digitale kiosken op het vliegveld, zodat u precies weet wat u moet doen.</li>
          </ul>

          <h3 className="text-xl font-bold text-primary-700 mt-8">2. ETIAS: Reistoestemming voor niet-EU landen</h3>
          <p>
            Reist u naar een land buiten de Europese Unie dat voorheen visumvrij was? Dan is de kans groot dat u een ETIAS-reistoestemming nodig heeft. Dit is vergelijkbaar met de ESTA voor de Verenigde Staten.
          </p>
          <p>
            Deze aanvraag verloopt volledig online. Voor senioren die minder handig zijn met computers of digitale formulieren, kan dit een drempel vormen. Het is belangrijk om deze aanvraag minimaal enkele weken voor vertrek te regelen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12">Tips voor een zorgeloze reis in 2026</h2>
          <p>
            Ondanks de nieuwe regels blijft reizen fantastisch. Met een goede voorbereiding merkt u er weinig van:
          </p>
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong>Check uw paspoort:</strong> Zorg dat uw paspoort nog minimaal 6 maanden geldig is bij vertrek.</li>
            <li><strong>Vraag hulp bij digitale formulieren:</strong> Laat kinderen, kleinkinderen of een professional van Vliegklaar helpen bij het invullen van ETIAS-gegevens.</li>
            <li><strong>Reis buiten de spits:</strong> De nieuwe systemen kunnen in het begin voor wat opstoppingen zorgen op drukke dagen.</li>
          </ol>

          <div className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500 my-12">
            <h4 className="text-lg font-bold text-primary-900 mb-2">Hulp nodig bij de nieuwe regels?</h4>
            <p className="mb-4">
              Ziet u op tegen de biometrische controles of de digitale aanvragen voor uw reis in 2026? Onze reisbegeleiders zijn volledig op de hoogte van de nieuwste Schengen regels en ondersteunen u stap voor stap.
            </p>
            <Link href="/contact" className="text-primary-700 font-bold hover:underline">
              Neem contact op voor advies op maat &rarr;
            </Link>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic">
            Disclaimer: De informatie in dit artikel is gebaseerd op de op dat moment bekende regelgeving voor 2026. Controleer altijd de actuele status bij de officiële instanties voor vertrek.
          </p>
        </footer>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">Zorgeloos op reis, ook in 2026</h2>
          <p className="text-xl text-gray-700 mb-8">
            Wij maken reizen weer leuk en bereikbaar, ongeacht de nieuwe technologische regels.
          </p>
          <Link
            href="/diensten"
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors"
          >
            Bekijk onze diensten
          </Link>
        </div>
      </section>
    </main>
  );
}
