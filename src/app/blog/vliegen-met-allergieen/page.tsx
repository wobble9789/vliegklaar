import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met allergieën: Tips voor senioren | Vliegklaar',
  description: 'Reizen met een voedselallergie of medicijnallergie? Ontdek hoe u zich voorbereid op een veilige vlucht met onze praktische tips voor senioren.',
};

export default function AllergieBlogPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met allergieën: Zo reist u zorgeloos als senior
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Of het nu gaat om een ernstige pinda-allergie, hooikoorts of een allergie voor medicijnen: vliegen met een allergie vraagt om een goede voorbereiding. In dit artikel leest u hoe u veilig op uw bestemming aankomt.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-primary prose-lg">
          <Image 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" 
            alt="Medische zorg en voorbereiding" 
            width={800} 
            height={400} 
            className="rounded-2xl shadow-lg mb-10"
          />

          <h2>1. Informeer de luchtvaartmaatschappij vooraf</h2>
          <p>
            Heeft u een ernstige voedselallergie? Geef dit dan direct door bij het boeken van uw ticket, maar uiterlijk 48 uur voor vertrek. De meeste maatschappijen kunnen rekening houden met speciale maaltijden of zelfs een &apos;bufferzone&apos; rond uw stoel creëren waarbij geen pinda&apos;s worden geserveerd.
          </p>

          <h2>2. Neem uw EpiPen mee in de handbagage</h2>
          <p>
            Als u een adrenaline-auto-injector (zoals een EpiPen) gebruikt, moet u deze <strong>altijd</strong> in uw handbagage bewaren. Zorg voor een doktersverklaring in het Engels waarin staat waarom u deze bij u moet dragen. Dit voorkomt problemen bij de securitycheck op luchthavens zoals <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 underline">Schiphol</Link>.
          </p>

          <h2>3. Maak uw zitplek schoon</h2>
          <p>
            Voor mensen met een contactallergie is het verstandig om bij het instappen het tafeltje, de armleuningen en het schermpje af te nemen met desinfecterende doekjes. Resten van allergenen kunnen urenlang aanwezig blijven op oppervlakken.
          </p>

          <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 my-10">
            <h3 className="mt-0">Extra veiligheid nodig?</h3>
            <p>
              Onze reisbegeleiders begrijpen de risico&apos;s van ernstige allergieën. Wij kunnen helpen bij het communiceren met het boordpersoneel en zorgen dat u uw medicatie altijd binnen handbereik heeft.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors no-underline">
              Ontdek onze begeleiding
            </Link>
          </div>

          <h2>4. Medicijnallergie en het Medisch Paspoort</h2>
          <p>
            Bent u allergisch voor bepaalde medicijnen (zoals antibiotica of NSAID&apos;s)? Zorg dat dit duidelijk vermeld staat in uw Europees Medisch Paspoort. Mocht u tijdens de reis onwel worden en medische hulp nodig hebben, dan weten artsen ter plaatse direct wat zij u <em>niet</em> mogen geven. Lees meer hierover in onze blog over <Link href="/blog/medisch-paspoort-vliegen-senioren" className="text-primary-600 underline text-primary-600">het medisch paspoort</Link>.
          </p>

          <h2>5. Hooikoorts en droge lucht</h2>
          <p>
            De droge lucht in de cabine kan allergische reacties aan de luchtwegen verergeren. Neem neusspray (zoutoplossing) of oogdruppels mee om de slijmvliezen vochtig te houden. Let op: deze vallen onder de vloeistoffenregels, tenzij u een medische verklaring heeft.
          </p>

          <p>
            Wilt u meer tips over gezondheid tijdens de reis? Bekijk dan ook onze <Link href="/blog/checklist-senioren-vliegen" className="text-primary-600 underline">checklist voor vliegende senioren</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
