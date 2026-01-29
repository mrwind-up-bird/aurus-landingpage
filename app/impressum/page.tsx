import Link from 'next/link';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-voice-bg text-slate-50">
      {/* Navigation */}
      <nav className="border-b border-voice-border glass-strong sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/aurus-logo-app.png" alt="Aurus Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
            <span className="font-bold text-lg sm:text-xl tracking-tight">AURUS</span>
          </Link>
          <Link href="/" className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors">
            ← Zurück
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">Impressum</h1>

        <div className="prose prose-invert prose-slate max-w-none space-y-6 sm:space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Angaben gemäß § 5 TMG</h2>
            <div className="text-slate-300 leading-relaxed">
              <p className="mb-2">Oliver Baer</p>
              <p className="mb-2">Feldstrasse 26</p>
              <p className="mb-2">21335 Lüneburg</p>
              <p className="mb-2">Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Kontakt</h2>
            <div className="text-slate-300 leading-relaxed">
              <p className="mb-2">Telefon: +49 170 230 5888</p>
              <p className="mb-2">E-Mail: oliver.baer@gmail.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="text-slate-300 leading-relaxed">
              <p className="mb-2">Oliver Baer</p>
              <p className="mb-2">Feldstrasse 26</p>
              <p className="mb-2">21335 Lüneburg</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">EU-Streitschlichtung</h2>
            <p className="text-slate-300 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p className="text-slate-300 leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Haftung für Inhalte</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Haftung für Links</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Urheberrecht</h2>
            <p className="text-slate-300 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
