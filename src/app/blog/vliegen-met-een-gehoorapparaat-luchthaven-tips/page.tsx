import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een gehoorapparaat: Tips voor op de luchthaven | Vliegklaar',
  description: 'Handige tips voor senioren die vliegen met een gehoorapparaat. Alles over security checks, communicatie op de luchthaven en assistentie.',
};

export default function GehoorapparaatLuchthavenTipsPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een gehoorapparaat: Tips voor op de luchthaven
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Reizen met een gehoorapparaat kan op een drukke luchthaven voor extra uitdagingen zorgen. 
            Met de juiste voorbereiding en kennis over de procedures verloopt uw reis soepel en zorgeloos.
          </p>
        </header>

        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl mb-12">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80"
            alt="Communicatie op de luchthaven"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-primary-800">Security check en uw gehoorapparaat</h2>
          <p>
            Een van de meest gestelde vragen is: moet mijn gehoorapparaat uit bij de security? Het antwoord is nee. 
            U kunt uw gehoorapparaten gewoon inhouden tijdens de controle. De apparatuur van de beveiliging 
            beschadigt uw hoortoestel niet. Het is wel verstandig om de beveiligingsbeambte vooraf even te laten weten 
            dat u een hoortoestel draagt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">Communicatie bij de gate</h2>
          <p>
            Luchthavens zijn lawaaierige plekken. Omroepen over gate-wijzigingen of vertragingen kunnen lastig te verstaan zijn. 
            Meld u bij de incheckbalie of de gate-medewerker en geef aan dat u slechthorend bent. Zij kunnen u dan 
            persoonlijk informeren als er belangrijke wijzigingen zijn.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-10 border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Onze 3 Gouden Tips:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Reservebatterijen:</strong> Neem altijd extra batterijen of uw oplader mee in uw handbagage.</li>
              <li><strong>Reinigingsset:</strong> De lucht in het vliegtuig is droog, wat kan zorgen voor meer oorsmeer. Houd uw setje bij de hand.</li>
              <li><strong>Vliegveld assistentie:</strong> Schroom niet om assistentie aan te vragen. Dit kan ook voor slechthorenden zeer prettig zijn bij het navigeren.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-primary-800">Vliegveld assistentie aanvragen</h2>
          <p>
            Wist u dat u ook assistentie kunt aanvragen als u &quot;alleen&quot; slechthorend bent? Dit helpt u om 
            begeleiding te krijgen door de drukke terminal, zodat u geen belangrijke informatie mist. 
            U kunt dit tot 48 uur voor vertrek regelen bij uw luchtvaartmaatschappij. 
            Lees meer over hoe u <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie aanvraagt</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">Begeleid reizen met Vliegklaar</h2>
          <p>
            Vindt u de drukte op de luchthaven spannend vanwege uw gehoor? Onze reisbegeleiders zijn gewend om 
            te communiceren met senioren die een gehoorapparaat dragen. Wij blijven bij u, luisteren mee naar de omroepen 
            en regelen de communicatie met het personeel. Zo hoeft u geen enkel detail van uw reis te missen.
          </p>
          <p>
            Bekijk ook onze algemene pagina over <Link href="/blog/vliegen-met-gehoorapparaat-tips" className="text-primary-600 hover:underline">reizen met een gehoorapparaat</Link> voor meer tips aan boord.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-primary-900 text-white p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">Zorgeloos vliegen met persoonlijke begeleiding?</h3>
            <p className="text-lg mb-8 opacity-90">
              Wij helpen u graag om veilig en comfortabel op uw bestemming te komen, inclusief alle ondersteuning op de luchthaven.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-primary-900 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors"
            >
              Vraag een vrijblijvend gesprek aan
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}