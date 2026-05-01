import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een gehoorapparaat: Tips voor een zorgeloze vlucht | Vliegklaar',
  description: 'Gaat u vliegen met een gehoorapparaat? Lees hier alles over security checks, drukverschillen en handige tips voor in het vliegtuig.',
};

export default function GehoorapparaatBlog() {
  return (
    <article className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium mb-6 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Vliegen met een gehoorapparaat: Tips voor een zorgeloze vlucht
          </h1>
          <div className="flex items-center text-gray-500 text-sm mb-8">
            <span>1 mei 2026</span>
            <span className="mx-2">•</span>
            <span>5 min leestijd</span>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&q=80"
              alt="Oudere man met gehoorapparaat lachend"
              fill
              className="object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Vliegen is voor velen een spannende ervaring, maar als u een gehoorapparaat draagt, kunnen er extra vragen naar boven komen. Moet het apparaat uit bij de security? Wat doet de luchtdruk met mijn gehoor? In dit artikel geven we praktische tips zodat u met een gerust hart het vliegtuig in stapt.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Bij de security op het vliegveld</h2>
          <p>
            Een van de meest gestelde vragen is of het gehoorapparaat af moet tijdens de veiligheidscontrole. Het korte antwoord is: <strong>nee</strong>. Moderne gehoorapparaten verstoren de metaaldetectoren of bodyscan niet. Het is echter wel verstandig om de beveiligingsbeambte even te informeren dat u een gehoorapparaat draagt. Zo voorkomt u misverstanden als u eventueel extra gefouilleerd moet worden.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tijdens de vlucht: Luchtdruk en geluid</h2>
          <p>
            Tijdens het stijgen en dalen verandert de luchtdruk in de cabine. Veel mensen ervaren dan &apos;dichte oren&apos;. Als u een gehoorapparaat draagt, kunt u dit gewoon inhouden. Sterker nog, het helpt u om de mededelingen van de bemanning goed te blijven volgen.
          </p>
          <ul>
            <li><strong>Volume aanpassen:</strong> Het constante geruis van de motoren kan vermoeiend zijn. Veel moderne apparaten hebben een speciale stand voor achtergrondruis. Experimenteer hiermee tijdens de vlucht.</li>
            <li><strong>Batterijen:</strong> Door de droge lucht in het vliegtuig kunnen batterijen iets sneller leeggaan dan normaal. Zorg altijd voor een extra setje in uw handbagage.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Handige meeneemlijst</h2>
          <p>
            Een goede voorbereiding is het halve werk. Zorg dat u de volgende zaken binnen handbereik heeft in uw handbagage:
          </p>
          <ul>
            <li>Extra batterijen of uw oplader (als u oplaadbare apparaten heeft).</li>
            <li>Een droogetui of reinigingssetje.</li>
            <li>Een internationaal garantiebewijs of informatie over uw audicien.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Hoe Vliegklaar u ondersteunt</h2>
          <p>
            Ziet u op tegen de drukte en de communicatie op de luchthaven? Onze reisbegeleiders zijn getraind om rekening te houden met slechthorendheid. Wij kunnen de communicatie met het grondpersoneel overnemen, zorgen dat u belangrijke omroepen niet mist en begeleiden u rustig door het hele proces.
          </p>

          <p className="mt-8">
            Wilt u meer weten over hoe wij uw vliegreis comfortabeler kunnen maken? Neem contact met ons op voor de mogelijkheden van persoonlijke reisbegeleiding.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-primary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Zorgeloos vliegen?</h3>
            <p className="text-gray-700 mb-6">
              Vliegklaar biedt persoonlijke reisbegeleiding die aansluit bij uw behoeften. Wij zorgen dat u niets mist en ontspannen op uw bestemming aankomt.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Ontdek onze begeleiding
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
