import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een hulphond of huisdier: Tips voor Senioren | Vliegklaar',
  description: 'Wilt u vliegen met een hulphond of uw trouwe viervoeter? Lees onze praktische gids over regels, voorbereiding en assistentie voor senioren.',
};

export default function HulphondHuisdierPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Vliegen met een hulphond of huisdier als senior
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Voor veel senioren is hun hond of kat een onmisbaar maatje. Of het nu gaat om een gecertificeerde hulphond die u ondersteunt bij uw mobiliteit of een huisdier dat u graag meeneemt naar uw vakantieadres: een goede voorbereiding is het halve werk.
              </p>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80"
                alt="Senior met hond op reis"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-primary">
          <h2>Het verschil tussen een hulphond en een huisdier</h2>
          <p>
            Het is belangrijk om direct het onderscheid te maken. Een <strong>gecertificeerde hulphond</strong> (zoals een blindengeleidehond of een assistentiehond voor mensen met een lichamelijke beperking) mag bijna altijd gratis mee in de cabine, ongeacht de grootte.
          </p>
          <p>
            Een <strong>huisdier</strong> (zoals uw trouwe gezelschapshond) valt onder andere regels. Afhankelijk van de luchtvaartmaatschappij en het gewicht van de hond mag deze in de cabine (vaak tot 8 kg inclusief tas) of moet deze in een speciale kennel in het verwarmde vrachtruim.
          </p>

          <div className="bg-primary-50 p-6 rounded-xl my-8">
            <h3 className="mt-0 text-primary-800">Wist u dat?</h3>
            <p className="mb-0 text-gray-700">
              U hulphonden minimaal 48 uur van tevoren moet aanmelden bij de luchtvaartmaatschappij. Wij raden echter aan om dit direct bij de boeking te doen om teleurstellingen te voorkomen.
            </p>
          </div>

          <h2>Checklist voor vliegen met uw viervoeter</h2>
          <ul>
            <li><strong>Europees paspoort voor gezelschapsdieren:</strong> Verplicht voor reizen binnen de EU.</li>
            <li><strong>Chip en rabiës-vaccinatie:</strong> Uw dier moet gechipt zijn en de vaccinatie moet vaak minimaal 21 dagen voor vertrek zijn toegediend.</li>
            <li><strong>Gezondheidsverklaring:</strong> Sommige landen buiten de EU eisen een recente verklaring van de dierenarts.</li>
            <li><strong>De juiste kennel:</strong> Voor het vrachtruim moet de kennel voldoen aan IATA-eisen. Uw hond moet erin kunnen staan, omdraaien en liggen.</li>
          </ul>

          <h2>Tips voor een ontspannen vlucht</h2>
          <p>
            Reizen kan stressvol zijn voor een dier. Laat uw hond ruim van tevoren wennen aan de reisbench of tas. Geef geen zware maaltijd vlak voor de vlucht, maar zorg wel voor voldoende drinkwater (er zijn speciale drinkbakjes voor in kennels).
          </p>
          <p>
            Voor senioren met een hulphond: informeer bij de luchthaven (zoals Schiphol) naar de speciale uitlaatplaatsen achter de security. Zo kan uw hond nog even zijn behoefte doen vlak voor u aan boord gaat.
          </p>

          <div className="not-prose mt-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Hulp nodig bij uw reis?</h2>
            <p className="text-gray-600 mb-8">
              Ziet u op tegen de administratie of de logistiek van het reizen met uw hond? Vliegklaar biedt persoonlijke reisbegeleiding. Wij helpen u niet alleen met uw koffers, maar zorgen ook dat de reis voor u en uw viervoeter vlekkeloos verloopt.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors">
                Neem contact op
              </Link>
              <Link href="/reisbegeleiding-ouderen" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-primary-50 transition-colors">
                Ontdek onze diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Mag mijn hulphond gratis mee?</h3>
              <p className="text-gray-600">Ja, officieel erkende hulphonden reizen bij vrijwel alle maatschappijen gratis mee in de cabine. U moet wel de nodige certificaten kunnen overleggen.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Mag een emotionele steunhond (ESAN) ook mee?</h3>
              <p className="text-gray-600">De regels voor emotionele steunhonden zijn de afgelopen jaren aangescherpt. Veel Europese maatschappijen accepteren ze niet meer als hulphond, waardoor ze als gewoon huisdier (in een tas of kennel) moeten reizen.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Hoe zit het met de veiligheid in het vrachtruim?</h3>
              <p className="text-gray-600">Het vrachtruim waar dieren verblijven is verwarmd en staat onder druk, net als de cabine. De bemanning weet dat er levende dieren aan boord zijn en houdt hier rekening mee.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
