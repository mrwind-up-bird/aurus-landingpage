import Link from 'next/link';

export default function Datenschutz() {
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">Datenschutzerklärung</h1>

        <div className="prose prose-invert prose-slate max-w-none space-y-6 sm:space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Allgemeine Hinweise</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-bold mb-3 text-white">Datenerfassung auf dieser Website</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              können Sie dem Abschnitt &ldquo;Hinweis zur Verantwortlichen Stelle&rdquo; in dieser Datenschutzerklärung entnehmen.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
              Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer
              Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
              (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <p className="text-slate-300 leading-relaxed">
              <strong className="text-white">Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
              Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Hosting</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h3 className="text-xl font-bold mb-3 text-white">Externes Hosting</h3>
            <p className="text-slate-300 leading-relaxed">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
              werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
              und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-xl font-bold mb-3 text-white">Datenschutz</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
              dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-bold mb-3 text-white">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="text-slate-300 leading-relaxed mb-4">
              <p className="mb-2">Oliver Baer</p>
              <p className="mb-2">Feldstrasse 26</p>
              <p className="mb-2">21335 Lüneburg</p>
              <p className="mb-2">Telefon: +49 170 230 5888</p>
              <p className="mb-2">E-Mail: oliver.baer@gmail.com</p>
            </div>

            <h3 className="text-xl font-bold mb-3 text-white">Speicherdauer</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
              werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
              personenbezogenen Daten haben.
            </p>

            <h3 className="text-xl font-bold mb-3 text-white">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-slate-300 leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
              bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-bold mb-3 text-white">Server-Log-Dateien</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-
              Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung
              dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website –
              hierzu müssen die Server-Log-Files erfasst werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Aurus Desktop-Anwendung</h2>

            <h3 className="text-xl font-bold mb-3 text-white">Privacy by Design</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Die Aurus Desktop-Anwendung wurde mit dem Grundsatz &quot;Privacy by Design&quot; entwickelt:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
              <li><strong className="text-white">Keine Datenspeicherung auf unseren Servern:</strong> Aurus speichert keine Audiodaten oder Transkripte auf externen Servern.</li>
              <li><strong className="text-white">Lokale Verarbeitung:</strong> Alle Daten werden lokal auf Ihrem Gerät verarbeitet.</li>
              <li><strong className="text-white">API-Keys:</strong> Ihre API-Keys für OpenAI, Anthropic oder Deepgram werden sicher in Ihrer System-Keychain gespeichert.</li>
              <li><strong className="text-white">Verschlüsselte Übertragung:</strong> Die Kommunikation mit den KI-Diensten erfolgt ausschließlich verschlüsselt über HTTPS.</li>
              <li><strong className="text-white">Keine Telemetrie:</strong> Aurus sendet keine Nutzungsdaten oder Analysen an uns.</li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              Sie behalten jederzeit die volle Kontrolle über Ihre Daten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Ihre Rechte</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
              <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
