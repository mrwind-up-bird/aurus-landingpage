import React from 'react';
import {
  Mic, Zap, Shield, Rocket, MessageSquare,
  Code, Brain, Languages, Target, ChevronDown, Sparkles,
  Download, Apple, Monitor
} from 'lucide-react';
import Navigation from './components/Navigation';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <header className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/aurus-hero-background.png"
            alt="Aurus Hero Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-voice-bg/40 via-voice-bg/60 to-voice-bg" />
        </div>
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-voice-primary/30 bg-voice-primary/10 text-voice-primary text-[10px] sm:text-xs font-bold mb-6 sm:mb-8 animate-fade-in">
            <Sparkles size={12} className="sm:w-3.5 sm:h-3.5" /> TAURI V2 + NEXT.JS 14 POWERED
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold mb-6 sm:mb-8 tracking-tighter leading-[1.1] px-4">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              SPEAK • SHAPE • SHIP
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-5xl text-slate-400 font-normal tracking-normal block mt-2">
              Von Stimme zu Klarheit
            </span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Hör auf zu tippen. Aurus ist dein nativer Desktop-Begleiter, der via{' '}
            <kbd className="bg-voice-surface px-2 py-1 rounded text-xs sm:text-sm border border-voice-border whitespace-nowrap">
              Cmd+Shift+V
            </kbd>{' '}
            zuhört und sofort handelt.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <a
              href="#download"
              className="group relative bg-white text-slate-950 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:scale-105 active:scale-95 transition-all text-center touch-manipulation"
            >
              Jetzt kostenlos starten
              <span className="absolute inset-0 rounded-2xl bg-white/20 blur-xl group-hover:blur-2xl transition-all -z-10" />
            </a>
          </div>
        </div>
      </header>

      {/* Feature Grid */}
      <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 bg-voice-surface/30">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
              <Zap size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Zero Latency</h3>
            <p className="text-slate-400 leading-relaxed text-sm">Dank Rust-Backend und Deepgram Nova-2 wird deine Sprache fast ohne Verzögerung transkribiert.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
              <Shield size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Privacy by Design</h3>
            <p className="text-slate-400 leading-relaxed text-sm">Deine API-Keys liegen sicher in deinem System-Keychain. Keine Datenspeicherung auf unseren Servern.</p>
          </div>
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
              <Rocket size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Native Performance</h3>
            <p className="text-slate-400 leading-relaxed text-sm">Kein schwerfälliger Browser-Tab. Aurus lebt als leichtgewichtige Tauri-App direkt auf deinem Desktop.</p>
          </div>
        </div>
      </section>

      {/* Agents Showcase */}
      <section id="agents" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">Wähle deinen Experten</h2>
            <p className="text-slate-400 text-base sm:text-lg px-4">Aurus nutzt spezialisierte KI-Agenten für maximale Präzision.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Action Items", desc: "Extrahiert Aufgaben und Deadlines sofort in strukturierte Listen.", icon: <Target />, color: "text-blue-400" },
              { title: "Tone Shifter", desc: "Verwandelt loses Gerede in professionelle Business-Mails oder lockere Slack-Texte.", icon: <MessageSquare />, color: "text-yellow-400" },
              { title: "Dev-Log", desc: "Dokumentiere deine Coding-Sessions. Erstellt Commits und Jira-Tickets.", icon: <Code />, color: "text-green-400" },
              { title: "Brain Dump", desc: "Chaos im Kopf? Aurus sortiert deine Gedanken nach Relevanz und Priorität.", icon: <Brain />, color: "text-purple-400" },
              { title: "Translator", desc: "Echtzeit-Übersetzung in 12 Sprachen mit perfekter Grammatik.", icon: <Languages />, color: "text-pink-400" },
              { title: "Letter for myself", desc: "Dein Voice-Journal. Reflektiere den Tag und erhalte KI-gestützte Insights.", icon: <Mic />, color: "text-indigo-400" }
            ].map((agent, i) => (
              <div key={i} className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass hover:border-voice-primary/50 transition-all active:scale-95 sm:hover:-translate-y-2 touch-manipulation">
                <div className={`${agent.color} mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(agent.icon as React.ReactElement, { size: 28, className: "sm:w-8 sm:h-8" })}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{agent.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3 sm:mb-4">{agent.desc}</p>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-slate-600">Powered by GPT-4o / Claude</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-16 sm:py-24 px-4 sm:px-6 bg-voice-primary/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 italic px-4">The Future is Voice.</h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-strong shadow-2xl">
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-voice-primary rounded-full animate-pulse flex-shrink-0" />
                  <span>Multi-Sprecher Erkennung</span>
                </h4>
                <p className="text-slate-400 text-sm sm:text-base">Aurus wird bald unterscheiden können, wer in einem Meeting spricht. Perfekt für automatische Protokolle.</p>
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
                   <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-voice-secondary rounded-full animate-pulse flex-shrink-0" />
                   <span>Tool-Integrationen</span>
                </h4>
                <p className="text-slate-400 text-sm sm:text-base">Direkter Sync deiner Action Items zu Notion, Jira, Slack und Google Calendar.</p>
              </div>
            </div>
            <div className="text-center px-4">
              <p className="text-voice-primary font-mono text-xs sm:text-sm">COMING SOON: Eigene Voice-Clones für personalisierten Output</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center underline decoration-voice-primary underline-offset-8 px-4">
            Häufige Fragen
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <details className="group border-b border-white/10 pb-4 sm:pb-6 cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-base sm:text-lg list-none py-2 touch-manipulation">
                <span className="pr-4">Wie sicher ist Aurus?</span>
                <ChevronDown className="group-open:rotate-180 transition-transform flex-shrink-0 w-5 h-5" />
              </summary>
              <p className="mt-3 sm:mt-4 text-slate-400 text-sm leading-relaxed pr-8">
                Extrem sicher. Aurus speichert keine Audiodaten. Die Transkription erfolgt verschlüsselt, und deine API-Keys bleiben lokal in deiner Keychain. Du behältst die volle Kontrolle über deine Daten.
              </p>
            </details>
            <details className="group border-b border-white/10 pb-4 sm:pb-6 cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-base sm:text-lg list-none py-2 touch-manipulation">
                <span className="pr-4">Benötige ich eigene API-Keys?</span>
                <ChevronDown className="group-open:rotate-180 transition-transform flex-shrink-0 w-5 h-5" />
              </summary>
              <p className="mt-3 sm:mt-4 text-slate-400 text-sm leading-relaxed pr-8">
                Ja, für maximale Flexibilität nutzt du deine eigenen OpenAI, Anthropic oder Deepgram Keys. So zahlst du nur das, was du wirklich verbrauchst.
              </p>
            </details>
            <details className="group border-b border-white/10 pb-4 sm:pb-6 cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-base sm:text-lg list-none py-2 touch-manipulation">
                <span className="pr-4">Läuft die App auch im Hintergrund?</span>
                <ChevronDown className="group-open:rotate-180 transition-transform flex-shrink-0 w-5 h-5" />
              </summary>
              <p className="mt-3 sm:mt-4 text-slate-400 text-sm leading-relaxed pr-8">
                Aurus ist eine native App, die im Hintergrund wartet. Sobald du deinen Shortcut drückst, ist sie sofort hellwach und einsatzbereit.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-voice-primary/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">Wähle deine Plattform</h2>
            <p className="text-slate-400 text-base sm:text-lg px-4">Aurus v1.0.0 läuft nativ auf allen gängigen Betriebssystemen.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* macOS */}
            <a
              href="https://github.com/mrwind-up-bird/ai-voiceagent/releases/tag/v1.0.0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass hover:border-voice-primary/50 transition-all active:scale-95 sm:hover:-translate-y-2 touch-manipulation"
            >
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Apple size={32} className="sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">macOS</h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">Intel & Apple Silicon</p>
                  <div className="flex items-center justify-center gap-2 text-voice-primary font-semibold text-xs sm:text-sm">
                    <Download size={14} className="sm:w-4 sm:h-4" />
                    <span>DMG / PKG</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-voice-primary/0 group-hover:bg-voice-primary/5 transition-all -z-10" />
            </a>

            {/* Windows */}
            <a
              href="https://github.com/mrwind-up-bird/ai-voiceagent/releases/tag/v1.0.0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass hover:border-blue-500/50 transition-all active:scale-95 sm:hover:-translate-y-2 touch-manipulation"
            >
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Monitor size={32} className="sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Windows</h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">Windows 10/11</p>
                  <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold text-xs sm:text-sm">
                    <Download size={14} className="sm:w-4 sm:h-4" />
                    <span>MSI / EXE</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-blue-500/0 group-hover:bg-blue-500/5 transition-all -z-10" />
            </a>

            {/* Linux */}
            <a
              href="https://github.com/mrwind-up-bird/ai-voiceagent/releases/tag/v1.0.0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass hover:border-yellow-500/50 transition-all active:scale-95 sm:hover:-translate-y-2 touch-manipulation sm:col-span-2 md:col-span-1"
            >
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.84-.41 1.719-.41 2.642 0 .753.145 1.487.428 2.196.283.71.697 1.351 1.238 1.924.54.573 1.213 1.029 2.01 1.368.798.34 1.67.51 2.616.51.946 0 1.818-.17 2.616-.51.797-.34 1.47-.795 2.01-1.368.54-.573.955-1.214 1.238-1.924.283-.71.428-1.443.428-2.196 0-.923-.132-1.802-.41-2.642-.589-1.77-1.831-3.47-2.715-4.521-.75-1.067-.975-1.928-1.05-3.02-.066-1.491 1.055-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021zm-2.48 14.51c.878 0 1.59.712 1.59 1.59s-.712 1.59-1.59 1.59-1.59-.712-1.59-1.59.712-1.59 1.59-1.59zm4.96 0c.878 0 1.59.712 1.59 1.59s-.712 1.59-1.59 1.59-1.59-.712-1.59-1.59.712-1.59 1.59-1.59z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Linux</h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">Ubuntu, Debian & mehr</p>
                  <div className="flex items-center justify-center gap-2 text-yellow-400 font-semibold text-xs sm:text-sm">
                    <Download size={14} className="sm:w-4 sm:h-4" />
                    <span>DEB / AppImage</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-yellow-500/0 group-hover:bg-yellow-500/5 transition-all -z-10" />
            </a>
          </div>
          <div className="text-center mt-8 sm:mt-12 px-4">
            <p className="text-slate-500 text-sm">
              Benötigst du Hilfe bei der Installation?{' '}
              <a href="#faq" className="text-voice-primary hover:text-voice-secondary underline">Schau in die FAQ</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 border-t border-voice-border bg-voice-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Column 1: Logo & Brand */}
            <div className="space-y-4 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-3">
                <img src="/images/aurus-logo-app.png" alt="Aurus Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex-shrink-0" />
                <div>
                  <div className="font-bold text-lg sm:text-xl tracking-tight">AURUS</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Speak • Shape • Ship</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Von Stimme zu Klarheit. Dein nativer Desktop-KI-Assistent für macOS, Windows und Linux.
              </p>
            </div>

            {/* Column 2: Legal */}
            <div>
              <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 text-slate-300">Rechtliches</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm">
                <li>
                  <a href="/impressum" className="text-slate-400 hover:text-white transition-colors touch-manipulation inline-block py-1">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="/datenschutz" className="text-slate-400 hover:text-white transition-colors touch-manipulation inline-block py-1">
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Navigation */}
            <div>
              <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 text-slate-300">Navigation</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm">
                <li>
                  <a href="#features" className="text-slate-400 hover:text-white transition-colors touch-manipulation inline-block py-1">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#agents" className="text-slate-400 hover:text-white transition-colors touch-manipulation inline-block py-1">
                    KI-Agenten
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="text-slate-400 hover:text-white transition-colors touch-manipulation inline-block py-1">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-slate-400 hover:text-white transition-colors touch-manipulation inline-block py-1">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#download" className="text-slate-400 hover:text-white transition-colors touch-manipulation inline-block py-1">
                    Download
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 border-t border-white/5 text-center">
            <p className="text-slate-500 text-xs sm:text-sm px-4">
              © 2025 Aurus Voice Intelligence. Built with Passion and Rust.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}