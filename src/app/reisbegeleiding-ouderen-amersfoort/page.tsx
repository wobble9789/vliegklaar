import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Amersfoort | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Amersfoort. Wij helpen u veilig en comfortabel op reis vanaf uw voordeur in Amersfoort.',
};

export default function AmersfoortSEOPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Reisbegeleiding voor ouderen in Amersfoort
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Bent u woonachtig in de regio Amersfoort en droomt u van een vakantie of familiebezoek, maar vindt u de reis zelf lastig? 
                Vliegklaar biedt professionele reisbegeleiding voor senioren in Amersfoort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Amersfoort: 06-18769492
                </a>
                <Link
                  href="/contact"
                  className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors text-center"
                >
                  Stuur een bericht
                </Link>
              </div>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1543731068-7e0f5beff43a?w=800&q=80"
                alt="Amersfoort"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Zorgeloos reizen vanuit de Keistad</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot bestemming</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Amersfoort, Vathorst of Leusden en begeleiden u gedurende de gehele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Ervaren Reisbegeleiders</h3>
              <p className="text-gray-600">
                Onze begeleiders hebben ruime ervaring in het ondersteunen van ouderen bij vliegreizen en treinreizen.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk Zorg</h3>
              <p className="text-gray-600">
                Iedere reiziger is uniek. Wij passen onze begeleiding aan op uw specifieke wensen en mobiliteit.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Rust en Veiligheid</h3>
              <p className="text-gray-600">
                Geen stress bij de douane of gate-wijzigingen. Wij houden het overzicht terwijl u ontspant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Amersfoort</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u weer onbezorgd de wereld ontdekken of uw familie in het buitenland bezoeken? Bel ons voor een kennismaking.
          </p>
          <a
            href="tel:0618769492"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-2xl px-12 py-6 rounded-2xl shadow-xl transition-all hover:scale-105"
          >
            06-18769492
          </a>
        </div>
      </section>
    </main>
  );
}
