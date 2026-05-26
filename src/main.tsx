import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Check,
  Copy,
  Database,
  FileJson,
  FolderKanban,
  KeyRound,
  Library,
  Lock,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Tags,
  Users,
  Workflow,
} from "lucide-react";
import "./styles.css";

const logoUrl = `${import.meta.env.BASE_URL}app-logo.png`;
const heroScreenshotUrl = `${import.meta.env.BASE_URL}hero-promptcreator-current.png`;
const fullViewScreenshotUrl = `${import.meta.env.BASE_URL}app-full-view.png`;
const licenseUrl = "https://bm1964-25.github.io/Landing-Tafel-Kontakt/";

const legalLinks = [
  { label: "Impressum", href: "https://www.built-smart-hub.com/impressum" },
  { label: "Datenschutz", href: "https://www.built-smart-hub.com/datenschutz" },
  { label: "AGB", href: "https://www.built-smart-hub.com/agb" },
  { label: "Widerrufsbelehrung", href: "https://www.built-smart-hub.com/widerrufsbelehrung" },
];

const features = [
  {
    icon: Library,
    title: "Prompt-Bibliothek und Werkstatt",
    text: "Erfasse, verbessere und entwickle Prompts an einem zentralen lokalen Ort weiter.",
  },
  {
    icon: Sparkles,
    title: "Prompt-Optimierung",
    text: "Mache aus spontanen Eingaben präzisere Zielprompts für verlässlichere KI-Ergebnisse.",
  },
  {
    icon: Workflow,
    title: "Klare Masterstruktur",
    text: "Baue Prompts mit Rolle, Ziel, Kontext, Aufgabe, Ausgabeformat und Qualitätsanforderungen auf.",
  },
  {
    icon: BrainCircuit,
    title: "Kompakt und Premium",
    text: "Nutze schnelle kompakte Prompts oder eine vollständige Struktur für anspruchsvollere Aufgaben.",
  },
  {
    icon: FolderKanban,
    title: "Tabs und Kategorien",
    text: "Ordne deine Bibliothek nach Projekten, Einsatzbereichen oder persönlichen Arbeitsbereichen.",
  },
  {
    icon: Search,
    title: "Schnelle Suche",
    text: "Finde Inhalte über Titel, Beschreibung, Prompt-Text, optimierte Ausgabe und Tags wieder.",
  },
  {
    icon: Star,
    title: "Varianten weiterentwickeln",
    text: "Dupliziere gute Prompts, markiere Favoriten und entwickle erfolgreiche Vorlagen gezielt weiter.",
  },
  {
    icon: Copy,
    title: "Direkt kopieren",
    text: "Übernimm die optimierte Fassung mit einem Klick in dein bevorzugtes KI-Tool.",
  },
  {
    icon: FileJson,
    title: "JSON Export und Import",
    text: "Sichere deine Bibliothek lokal und stelle sie bei Bedarf in einem Browser wieder her.",
  },
  {
    icon: Tags,
    title: "Titel und Metadaten",
    text: "Ergänze Titel, Beschreibung, Kategorie und Tags, damit Prompts später leichter auffindbar bleiben.",
  },
  {
    icon: Database,
    title: "Lokaler Arbeitsbereich",
    text: "Speichere Prompts, Tabs, Kategorien und Einstellungen lokal in deinem eigenen Browser-Arbeitsbereich.",
  },
  {
    icon: ShieldCheck,
    title: "Lokale oder KI-Optimierung",
    text: "Wähle zwischen lokaler Regeloptimierung und Anthropic-Anbindung mit eigenem API-Key.",
  },
];

const audiences = [
  "Selbstständige & Privatpersonen",
  "Berater",
  "Agenturen",
  "Marketing-Teams",
  "Entwickler",
  "Unternehmen mit wiederkehrender KI-Arbeit",
];

const useCases = [
  "Marketingtexte",
  "LinkedIn-Posts",
  "Newsletter",
  "Strategie- und Analyseaufgaben",
  "Rechercheprompts",
  "Coding und Automatisierung",
  "Wiederkehrende Kundenprojekte",
  "Interne KI-Standards",
];

const licenseBadges = [
  "12 Monate Laufzeit",
  "3 Tage testen",
  "1 Nutzerzugriff",
];

const licenseTerms = [
  ["Verlängerung", "Automatisch um 12 Monate"],
  ["Kündigung", "1 Monat vor Ablauf"],
  ["Zahlung", "Sicherer Online-Zahlung"],
];

const faqs = [
  {
    question: "Welchen Nutzen bietet SMART PromptCreator?",
    answer:
      "SMART PromptCreator hilft dir, gute Prompts strukturiert aufzubauen, gezielt zu verbessern und dauerhaft wiederzuverwenden. Statt erfolgreiche Eingaben in Chatverläufen oder Notizen zu verlieren, sammelst du sie in einer lokalen Bibliothek und entwickelst daraus professionelle Vorlagen für wiederkehrende KI-Aufgaben.",
  },
  {
    question: "Welche Vorteile habe ich im Arbeitsalltag?",
    answer:
      "Du arbeitest schneller, behältst den Überblick über bewährte Prompts und kannst Vorlagen gezielt weiterentwickeln. Kategorien, Tags, Favoriten, Suche und Varianten helfen dabei, gute Prompt-Arbeit nicht jedes Mal neu beginnen zu müssen.",
  },
  {
    question: "Kann ich Prompts strukturiert aufbauen?",
    answer:
      "Ja. Prompts können mit Rolle, Ziel, Kontext, Aufgabe, Ausgabeformat und Qualitätsanforderungen aufgebaut werden. Zusätzlich kannst du zwischen einer kompakten Variante und einer vollständigen Premium-Struktur für anspruchsvollere Aufgaben arbeiten.",
  },
  {
    question: "Können Varianten dargestellt und verglichen werden?",
    answer:
      "Ja. SMART PromptCreator kann eine kompakte Variante für schnelle Ergebnisse und eine Premium-Variante mit vollständiger Masterstruktur darstellen. Dadurch kannst du unterschiedliche Prompt-Fassungen vergleichen, weiter verbessern und die passendste Ausgabe übernehmen.",
  },
  {
    question: "Wie wird die App geöffnet?",
    answer:
      "Die App wird nach dem Download über den mitgelieferten Starter geöffnet. Sie läuft lokal auf deinem Gerät und wird anschließend im Browser angezeigt.",
  },
  {
    question: "Gibt es eine Windows- und macOS-Version?",
    answer:
      "Ja. Die App kann auf Windows und macOS lokal im Browser genutzt werden. Dafür gibt es passende Starter für das jeweilige System.",
  },
  {
    question: "Werden Daten in der Cloud gespeichert?",
    answer:
      "Nein. Deine Inhalte werden lokal auf deinem Gerät bzw. im lokalen Browser-Speicher gespeichert. Es gibt keine automatische zentrale Cloud-Datenbank und keine automatische Synchronisierung zwischen Nutzern.",
  },
  {
    question: "Kann ich Daten exportieren?",
    answer:
      "Ja. Du kannst deine lokale Prompt-Bibliothek als JSON exportieren und später wieder importieren, z. B. zur Sicherung oder zur Übertragung auf ein anderes Gerät.",
  },
  {
    question: "Gibt es KI-Funktionen?",
    answer:
      "Ja. SMART PromptCreator unterstützt beim Optimieren von Prompts und kann passende Strukturen, Titel, Beschreibungen, Kategorien und Tags vorschlagen. Für KI-gestützte Funktionen wird ein eigener API-Key benötigt.",
  },
  {
    question: "Warum brauche ich einen Anthropic API-Key?",
    answer:
      "Die KI-Funktionen laufen über die Anthropic API. Dafür wird ein eigener Anthropic API-Key benötigt. Ein normales Claude-Abo, z. B. Claude Pro, ist dafür nicht ausreichend. Für API-Nutzung können zusätzliche Kosten nach Anthropic-Abrechnung entstehen. Inhalte werden nur für die jeweilige KI-Anfrage an den Anbieter übertragen.",
  },
  {
    question: "Kann ich ohne KI-Anbindung arbeiten?",
    answer:
      "Ja. Du kannst deine Bibliothek lokal nutzen und Prompts manuell strukturieren, speichern, suchen, favorisieren und per JSON sichern. Die KI-Optimierung ist eine zusätzliche Funktion, wenn du einen eigenen Anthropic API-Key hinterlegst.",
  },
  {
    question: "Gibt es eine kostenlose Testphase?",
    answer:
      "Ja, sofern dieses Modell aktiviert ist. Die App kann dann für einen begrenzten Zeitraum mit vollem Funktionsumfang getestet werden.",
  },
  {
    question: "Brauche ich ein Nutzerkonto?",
    answer:
      "Für Testphase, Kauf und Lizenzprüfung kann ein Nutzerkonto erforderlich sein. Die gespeicherten Inhalte der App bleiben davon getrennt lokal auf deinem Gerät.",
  },
  {
    question: "Wie funktioniert die Lizenz?",
    answer:
      "Du erhältst eine Jahreslizenz für 12 Monate. Sie verlängert sich automatisch um weitere 12 Monate, sofern sie nicht spätestens 1 Monat vor Ablauf gekündigt wird.",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Hero />
      <Problem />
      <FeatureGrid />
      <FullView />
      <LocalWorkspace />
      <License />
      <UseCases />
      <Audience />
      <FAQ />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[680px] overflow-hidden border-b border-ink/10 bg-[#07110f] text-white">
      <div className="absolute inset-0">
        <img src={heroScreenshotUrl} alt="" className="h-full w-full object-cover object-left-top opacity-72" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03100d] via-[#07110f]/88 to-[#07110f]/18" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03100d]/95 via-[#03100d]/68 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03100d]/74 via-transparent to-[#03100d]/20" />
      </div>
      <div className="relative border-b border-ink/10 bg-[#f8f6f1]/95 shadow-[0_18px_60px_rgba(2,8,19,0.18)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-normal text-ink">
            <img src={logoUrl} alt="" className="h-9 w-9 rounded-lg shadow-sm" />
            <span>SMART PromptCreator</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-graphite/70 md:flex">
            <a href="#features" className="hover:text-ink">Funktionen</a>
            <a href="#local" className="hover:text-ink">Konto</a>
            <a href="#license" className="hover:text-ink">Lizenz</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </nav>
          <a className="hidden h-11 items-center gap-2 rounded-lg bg-ink px-5 text-sm font-semibold text-white transition hover:bg-ink/88 sm:inline-flex" href={licenseUrl}>
            Lizenz sichern
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="relative mx-auto flex min-h-[604px] max-w-7xl flex-col px-5 pb-6 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center py-12 lg:py-14">
          <div className="max-w-4xl">
            <p className="eyebrow text-[#A0F5E8]">Browserbasierte Prompt-Produktivitäts-App</p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-sm text-white/78 backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#A0F5E8]" />
              Lokale Prompt-Bibliothek und Prompt-Werkstatt
            </p>
            <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
              SMART PromptCreator
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              Aus spontanen KI-Eingaben werden professionelle, wiederverwendbare Prompts. Erfasse Ideen strukturiert, optimiere sie gezielt und behalte deine besten Vorlagen lokal im Griff.
            </p>
            <div className="mt-9 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
              <a className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-ink transition hover:bg-[#f4f1eb]" href={licenseUrl}>
                Jetzt kaufen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/[0.06] px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.12]" href="#features">
                Funktionen ansehen
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[
                ["Lokal gespeichert", "Prompts bleiben im Browser"],
                ["Klar strukturiert", "Rolle, Ziel, Kontext und Format"],
                ["Wiederverwendbar", "Varianten ableiten und kopieren"],
              ].map(([title, text]) => (
                <div className="rounded-lg border border-white/10 bg-white/[0.07] p-4 text-center backdrop-blur" key={title}>
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-white">
                    <Check className="h-4 w-4 text-[#A0F5E8]" />
                    {title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/64">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="section">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="eyebrow">Problem und Nutzen</p>
          <h2 className="section-title">Gute Prompts sind Arbeitskapital. Ohne System gehen sie zu schnell verloren.</h2>
        </div>
        <div className="grid gap-4 text-lg leading-8 text-graphite/75">
          <p>
            Wer regelmäßig mit KI arbeitet, entwickelt wertvolle Rollen, Abläufe, Qualitätsanforderungen und Ausgabeformate. In Chatverläufen, Notizen oder einzelnen Dokumenten werden diese Bausteine aber schwer wiederzufinden.
          </p>
          <p>
            SMART PromptCreator bringt deine Prompt-Arbeit in eine ruhige Bibliothek und Werkstatt: lokal gespeichert, sauber kategorisiert, suchbar, optimierbar und bereit für den nächsten professionellen Einsatz.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section id="features" className="section bg-white/45">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Funktionen</p>
          <h2 className="section-title">Alles, was eine fokussierte Prompt-Werkstatt im Browser braucht.</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.title}>
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#e3f1ed] text-[#256f63]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-normal">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-graphite/70">{feature.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FullView() {
  return (
    <section className="section bg-[#f5f3ed]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow">Gesamtansicht</p>
            <h2 className="section-title">Eine Arbeitsfläche für Bibliothek, Werkstatt und Variantenvergleich.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/75">
              Die komplette Ansicht zeigt, wie SMART PromptCreator Promptsammlung, Strukturierung, KI-Optimierung und Ergebnisübernahme in einem ruhigen Browser-Arbeitsbereich verbindet.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Bibliothek", "Prompts, Kategorien, Tabs und Status bleiben sichtbar."],
              ["Werkstatt", "Ziel, Kontext, Metadaten und Eingabe werden strukturiert bearbeitet."],
              ["Varianten", "Kompakt und Premium lassen sich direkt vergleichen und übernehmen."],
            ].map(([title, text]) => (
              <div className="rounded-lg border border-ink/10 bg-white/78 p-4 shadow-sm" key={title}>
                <p className="font-semibold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-graphite/70">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-[0_26px_80px_rgba(2,8,19,0.13)]">
          <img
            src={fullViewScreenshotUrl}
            alt="SMART PromptCreator Gesamtansicht mit Prompt-Bibliothek, Prompt-Werkstatt, Variantenvergleich und optimierter Ausgabe"
            className="block w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function LocalWorkspace() {
  return (
    <section id="local" className="section">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="eyebrow">Nutzung und eigener Arbeitsbereich</p>
          <h2 className="section-title">Browser öffnen, Prompt-Werkstatt nutzen, Daten lokal behalten.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite/75">
            SMART PromptCreator ist als browserbasierte App gedacht. Deine Inhalte liegen lokal im Browser und können über JSON gesichert oder übertragen werden. Für die Optimierung kannst du zwischen lokaler Regeloptimierung und Anthropic-Anbindung mit eigenem API-Key wählen.
          </p>
        </div>
        <div className="grid gap-3">
          {[
            [Database, "Lokaler Speicher", "IndexedDB im Browser für Prompts, Tabs, Kategorien und Einstellungen."],
            [Lock, "Getrennte Inhalte", "Andere Nutzer haben keinen Zugriff auf deine lokale Bibliothek."],
            [FileJson, "Export und Import", "JSON-Sicherungen ermöglichen Backups und Wechsel zwischen Browsern."],
            [KeyRound, "Eigener API-Key", "Anthropic-Funktionen werden mit deinem eigenen lokal gespeicherten API-Key genutzt."],
          ].map(([Icon, title, text]) => (
            <div className="rounded-lg border border-ink/10 bg-white/70 p-5 shadow-sm" key={String(title)}>
              <div className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-mist text-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{String(title)}</h3>
                  <p className="mt-1 text-sm leading-6 text-graphite/70">{String(text)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function License() {
  return (
    <section id="license" className="section bg-[#071a2d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <p className="text-base font-semibold tracking-normal text-white/66">Lizenzmodell</p>
          <h2 className="mt-3 max-w-2xl text-5xl font-semibold leading-[1.05] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Eine professionelle Jahreslizenz für systematische Prompt-Arbeit.
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-white/68">
            Für Anwender, Berater, Agenturen und Teams, die Prompts regelmäßig entwickeln, optimieren und als lokale Arbeitsbibliothek dauerhaft wiederverwenden möchten.
          </p>
          <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-white/88">
            Pro Lizenz ist ein persönlicher Nutzerzugriff vorgesehen. Mehrere Lizenzen bedeuten mehrere getrennte Nutzerzugriffe, keinen gemeinsamen Cloud-Arbeitsbereich.
          </p>
        </div>
        <div className="rounded-lg border border-white/20 bg-[#354763] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase text-white/68">Professional</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-normal sm:text-4xl">Jahreslizenz</h3>
            </div>
            <BadgeCheck className="h-9 w-9 text-[#A0F5E8]" />
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap items-end gap-x-5 gap-y-2">
              <p className="text-7xl font-semibold leading-none tracking-normal text-white sm:text-8xl">99 €</p>
              <p className="pb-3 text-lg font-semibold text-white/86">pro Jahr zzgl. 19% MwSt.</p>
            </div>
            <p className="mt-3 text-base font-semibold leading-7 text-white/78">
              117,81 € inkl. MwSt.
              <br />
              Entspricht 8,25 € netto / 9,82 € brutto pro Monat
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {licenseBadges.map((badge) => (
              <div className="rounded-full border border-white/14 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white/92" key={badge}>
                {badge}
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {licenseTerms.map(([label, text]) => (
              <div className="rounded-lg bg-[#223754] p-4 text-center" key={label}>
                <p className="text-sm font-semibold uppercase text-[#A0F5E8]">{label}</p>
                <p className="mt-2 text-base font-semibold leading-6 text-white">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-[#A0F5E8]/16 bg-[#456078] p-5 text-center">
            <p className="text-sm font-semibold uppercase text-[#A0F5E8]">KI-Nutzung</p>
            <p className="mt-2 text-base font-semibold text-white">Lokale Optimierung oder eigener Anthropic API-Key</p>
          </div>

          <a className="mt-8 inline-flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-white px-5 text-base font-semibold text-ink transition hover:bg-[#f4f1eb]" href={licenseUrl}>
            Lizenz sichern
            <ArrowRight className="h-5 w-5" />
          </a>

          <p className="mt-5 text-center text-sm font-semibold text-white/62">
            Jahreslizenz | sichere Zahlung | persönlicher Nutzerzugriff
          </p>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="section bg-white/45">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="eyebrow">Einsatzbereiche</p>
          <h2 className="section-title">Für wiederkehrende KI-Aufgaben, die Qualität und Struktur brauchen.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite/75">
            SMART PromptCreator eignet sich für Aufgaben, bei denen gute Prompts nicht einmalig entstehen, sondern systematisch weiterentwickelt und erneut eingesetzt werden.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {useCases.map((useCase) => (
            <div className="flex items-center gap-3 rounded-lg border border-ink/10 bg-white/80 p-4 text-sm font-semibold shadow-sm" key={useCase}>
              <Tags className="h-5 w-5 text-blue" />
              {useCase}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Zielgruppe</p>
          <h2 className="section-title">Für alle, die Prompts nicht immer wieder neu erfinden wollen.</h2>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div className="flex items-center gap-3 rounded-lg border border-ink/10 bg-white/70 p-4 text-sm font-semibold shadow-sm" key={audience}>
              <Users className="h-5 w-5 text-blue" />
              {audience}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section bg-white/45">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Wichtige Fragen zur Nutzung.</h2>
        </div>
        <div className="mt-10 grid gap-3">
          {faqs.map((item) => (
            <details className="group rounded-lg border border-ink/10 bg-white/80 p-5 shadow-sm" key={item.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                <span>{item.question}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-blue/25 bg-mist/70 text-blue transition group-open:border-blue/45 group-open:bg-mist">
                  <Plus className="h-4 w-4 transition group-open:rotate-45" />
                </span>
              </summary>
              <p className="mt-4 leading-7 text-graphite/72">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-center sm:px-6 md:grid-cols-[1fr_auto] md:items-center md:text-left lg:px-8">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-start">
          <img src={logoUrl} alt="" className="h-11 w-11 rounded-lg shadow-sm" />
          <div>
            <p className="font-semibold">SMART PromptCreator</p>
            <p className="mt-1 text-sm text-graphite/62">Professionelle Prompt-Bibliothek für klare KI-Arbeit.</p>
          </div>
        </div>
        <div className="text-sm text-graphite/68 md:text-right">
          <p>© 2026 SmartBuilt-AI · Powered by BuiltSmart Hub - Bernhard Metzger</p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-2 gap-y-2 md:justify-end">
            {legalLinks.map((link, index) => (
              <span className="inline-flex items-center gap-2" key={link.label}>
                {index > 0 && <span aria-hidden="true">|</span>}
                <a className="hover:text-ink" href={link.href}>
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const rootElement = document.getElementById("root")! as HTMLElement & {
  reactRoot?: ReturnType<typeof ReactDOM.createRoot>;
};
const root = rootElement.reactRoot ?? ReactDOM.createRoot(rootElement);
rootElement.reactRoot = root;

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
