/* Nordic Spas – inställningar för Smartsvar-chatten (kräver widget.js v4.2 eller senare, ingen ändring i widget.js).
   Looken kommer från nordicspas.no: djupt nordiskt blått, knappblått, isturkost vatten och snövit bakgrund,
   Open Sans som på hemsidan och slogan «En dråpe hverdagsluksus» i kursiv Lora.
   Medan chatten tänker bubblar ett spabad och ångan stiger (thinking: 'art').
   När svaret kommer sprider sig en ring på vattnet där badet stod, en sista ångpuff stiger,
   och orden klarnar fram ur imman. Allt stängs av för besökare som har valt minskad rörelse. */
(function () {
  // Kursivtypsnittet till sloganen laddas i sidan, eftersom typsnitt inte kan laddas inne i chattens slutna ruta.
  if (document.querySelector('link[data-ns-font]')) return;
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.setAttribute('data-ns-font', '1');
  f.href = 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,500;1,600&display=swap';
  document.head.appendChild(f);
})();

(function () {
  // Scrollen i chatten: sajter med "smooth scroll" (till exempel Framer med Lenis) fångar mushjulet och svepen på hela sidan,
  // så att chatten inte går att scrolla. Chattens ruta märks därför som undantag, och hjulet och svepen stannar i chatten.
  var tries = 0;
  (function hook() {
    var host = document.getElementById('smartsvar-chat');
    if (!host) { if (tries++ < 200) setTimeout(hook, 100); return; }
    if (host.getAttribute('data-ns-scroll')) return;
    host.setAttribute('data-ns-scroll', '1');
    host.setAttribute('data-lenis-prevent', '');
    host.setAttribute('data-lenis-prevent-wheel', '');
    host.setAttribute('data-lenis-prevent-touch', '');
    ['wheel', 'touchstart', 'touchmove'].forEach(function (t) {
      host.addEventListener(t, function (e) { e.stopPropagation(); }, { passive: true });
    });
  })();
})();

window.SMARTSVAR = {
  name: 'Nordic Spas',
  voiceflow: { projectID: '6acf2802e4fdcb6aacb6b238', versionID: 'production' },
  language: 'no',
  phone: '962 00 003',

  colors: { primary: '#0D5A94', accent: '#1E75C6' },
  fonts: { display: 'Open Sans', body: 'Open Sans', weight: 700 },
  shape: 'soft',

  // Symbolen i headern, popupen och chattknappen: en vattendroppe med vågor ("En dråpe hverdagsluksus").
  symbol: 'icon',
  iconSvg: '<svg viewBox="0 0 32 32">' +
    '<path d="M16 3.4C16 3.4 7.4 13.5 7.4 19.6a8.6 8.6 0 0 0 17.2 0C24.6 13.5 16 3.4 16 3.4z" fill="#1E75C6"/>' +
    '<path d="M16 3.4C16 3.4 7.4 13.5 7.4 19.6a8.6 8.6 0 0 0 17.2 0c0-.6-.1-1.2-.2-1.8-1.6 4.6-5 7.6-9.2 7.6-3.6 0-6.4-2.4-7.4-5.4z" fill="#0D5A94" opacity=".55"/>' +
    '<path d="M10.8 19.8c1.75-1.45 3.5-1.45 5.25 0s3.5 1.45 5.25 0" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>' +
    '<path d="M12.2 23.2c1.3-1.05 2.6-1.05 3.9 0s2.6 1.05 3.9 0" fill="none" stroke="#9BE7E6" stroke-width="1.4" stroke-linecap="round"/>' +
    '<path d="M12.4 15.6c.7-2 1.8-3.8 2.8-5.2" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity=".6"/></svg>',

  headline: 'Velkommen!',
  tagline: '»En dråpe hverdagsluksus.«',
  opening: 'Spør meg om spabad, badstuer, priser, levering eller service. Jeg svarer på svensk og engelsk også.',
  suggestions: ['Hvilket spabad passer for oss?', 'Hva koster levering?', 'Jeg trenger service'],
  placeholder: 'Skriv spørsmålet ditt…',
  launcherText: 'Spør oss',
  launcherSub: 'AI-assistent · svarer med en gang',
  launcherMark: true,

  // EU:s AI-förordning: besökaren ska veta att hen pratar med en AI. Står under namnet och i foten.
  status: 'AI-assistent · svarer med en gang',
  aiNotice: 'Du chatter med en AI, som kan ta feil.',

  // Bara chatt: ingen röst, ingen mikrofon och ingen uppläsning.
  voice: false,
  teaser: 'Hei! Drømmer du om eget spabad? Jeg hjelper deg å finne det som passer.',
  // Alla småtexter på norska (widget.js har svenska som standard).
  texts: {
    ai: 'AI-assistent', input: 'Skriv spørsmålet ditt', headline: 'Hvordan kan vi hjelpe deg?',
    reset: 'Start på nytt', minimize: 'Minimer', send: 'Send', close: 'Lukk', retry: 'Prøv igjen',
    failed: 'Svaret kom ikke frem.', callUs: 'Ring oss gjerne på {phone}.', today: 'I dag', poweredBy: 'Levert av',
    prev: 'Forrige', next: 'Neste', chatWith: 'Chat med {name}',
    talk: 'Snakk', listening: 'Lytter', talkHint: 'Du kan også snakke i stedet for å skrive', listeningPh: 'Lytter… si spørsmålet ditt',
    speaking: 'Stopp', readOn: 'Les opp svarene', readOff: 'Slutt å lese opp svarene',
    micBlocked: 'Mikrofonen er blokkert. Tillat den for denne siden i nettleseren og prøv igjen, eller skriv spørsmålet ditt.',
    micBlockedIOS: 'Mikrofonen er blokkert. Gå til Innstillinger → Safari → Mikrofon og velg Tillat (i Chrome: Innstillinger → Chrome → Mikrofon), last inn siden på nytt og prøv igjen.',
    micDictation: 'Tale krever at diktering er slått på i telefonen: Innstillinger → Generelt → Tastatur → Diktering. Du kan også trykke på mikrofonen på tastaturet.',
    micNone: 'Finner ingen mikrofon. Sjekk at ingen annen app bruker den, og prøv igjen.',
    micNet: 'Talegjenkjenningen svarer ikke akkurat nå. Prøv igjen om litt, eller skriv spørsmålet ditt.',
    micOther: 'Talen kunne ikke startes i denne nettleseren. Skriv gjerne spørsmålet ditt i stedet.',
    micNoSpeech: 'Jeg hørte ingenting. Trykk på Snakk og prøv igjen.'
  },

  // Medan chatten tänker: ett spabad som bubblar, med ringar på vattnet och ånga som stiger.
  thinking: 'art',
  thinkingSvg: '<svg viewBox="0 0 80 52">' +
    '<defs>' +
      '<linearGradient id="nsWater" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A9ECEA"/><stop offset="1" stop-color="#3AAFC4"/></linearGradient>' +
      '<linearGradient id="nsBody" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2B3742"/><stop offset=".5" stop-color="#4C5B69"/><stop offset="1" stop-color="#2B3742"/></linearGradient>' +
    '</defs>' +
    // Skuggan och badet
    '<ellipse cx="40" cy="48" rx="27" ry="2.6" fill="#0D5A94" opacity=".13"/>' +
    '<path d="M11 33 L14.2 44.4 Q40 51.6 65.8 44.4 L69 33 Z" fill="url(#nsBody)"/>' +
    '<path d="M13.2 40.6 Q40 47.6 66.8 40.6" fill="none" stroke="#fff" stroke-width=".6" opacity=".14"/>' +
    '<ellipse cx="40" cy="33" rx="29" ry="8.6" fill="#EEF3F6"/>' +
    '<ellipse cx="40" cy="33.5" rx="25.6" ry="6.7" fill="#C6D3DC"/>' +
    '<ellipse cx="40" cy="34" rx="24.4" ry="6" fill="url(#nsWater)"/>' +
    // Ljuset som glider över vattnet
    '<ellipse cx="33" cy="32.4" rx="6" ry=".9" fill="#fff" opacity=".4">' +
      '<animate attributeName="cx" values="30;48;30" dur="5s" repeatCount="indefinite"/>' +
      '<animate attributeName="opacity" values=".2;.6;.2" dur="5s" repeatCount="indefinite"/></ellipse>' +
    // Ringar på vattnet
    '<ellipse cx="45" cy="34" rx="0" ry="0" fill="none" stroke="#fff" stroke-width=".7">' +
      '<animate attributeName="rx" values="0;7" dur="2.2s" repeatCount="indefinite"/>' +
      '<animate attributeName="ry" values="0;1.8" dur="2.2s" repeatCount="indefinite"/>' +
      '<animate attributeName="opacity" values=".9;0" dur="2.2s" repeatCount="indefinite"/></ellipse>' +
    '<ellipse cx="32" cy="35" rx="0" ry="0" fill="none" stroke="#fff" stroke-width=".7">' +
      '<animate attributeName="rx" values="0;6" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/>' +
      '<animate attributeName="ry" values="0;1.6" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/>' +
      '<animate attributeName="opacity" values=".8;0" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/></ellipse>' +
    // Bubblorna
    '<g fill="#fff">' +
      '<circle cx="27" r="0"><animate attributeName="r" values="0;1.4;1.6;0" keyTimes="0;.6;.85;1" dur="1.5s" repeatCount="indefinite"/><animate attributeName="cy" values="37;34;33.4" dur="1.5s" repeatCount="indefinite"/></circle>' +
      '<circle cx="33" r="0"><animate attributeName="r" values="0;1.1;1.3;0" keyTimes="0;.6;.85;1" dur="1.2s" begin="-.5s" repeatCount="indefinite"/><animate attributeName="cy" values="38;35;34.4" dur="1.2s" begin="-.5s" repeatCount="indefinite"/></circle>' +
      '<circle cx="38.5" r="0"><animate attributeName="r" values="0;1.6;1.8;0" keyTimes="0;.6;.85;1" dur="1.8s" begin="-1.1s" repeatCount="indefinite"/><animate attributeName="cy" values="38.6;35.2;34.4" dur="1.8s" begin="-1.1s" repeatCount="indefinite"/></circle>' +
      '<circle cx="44" r="0"><animate attributeName="r" values="0;1.2;1.4;0" keyTimes="0;.6;.85;1" dur="1.35s" begin="-.2s" repeatCount="indefinite"/><animate attributeName="cy" values="37.6;34.6;34" dur="1.35s" begin="-.2s" repeatCount="indefinite"/></circle>' +
      '<circle cx="49.5" r="0"><animate attributeName="r" values="0;1.5;1.7;0" keyTimes="0;.6;.85;1" dur="1.65s" begin="-.9s" repeatCount="indefinite"/><animate attributeName="cy" values="37;34;33.4" dur="1.65s" begin="-.9s" repeatCount="indefinite"/></circle>' +
      '<circle cx="54" r="0"><animate attributeName="r" values="0;1;1.2;0" keyTimes="0;.6;.85;1" dur="1.25s" begin="-.7s" repeatCount="indefinite"/><animate attributeName="cy" values="36.4;34;33.6" dur="1.25s" begin="-.7s" repeatCount="indefinite"/></circle>' +
      '<circle cx="36" r="0"><animate attributeName="r" values="0;.9;1;0" keyTimes="0;.6;.85;1" dur="1s" begin="-.3s" repeatCount="indefinite"/><animate attributeName="cy" values="36;34.2;33.8" dur="1s" begin="-.3s" repeatCount="indefinite"/></circle>' +
    '</g>' +
    // Ångan: tre slingor som stiger, svajar och löses upp, var och en med en mjuk dimma runt sig
    '<g fill="none" stroke-linecap="round">' +
      '<g transform="translate(31 27)">' +
        '<path d="M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9" stroke="#D6E2EA" stroke-width="4.2" opacity="0">' +
          '<animate attributeName="d" values="M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9;M0 0c2.6-3-2.6-6 0-9s-2.6-6 0-9;M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9" dur="3.2s" repeatCount="indefinite"/>' +
          '<animateTransform attributeName="transform" type="translate" values="0 3;0 -5" dur="3.2s" repeatCount="indefinite"/>' +
          '<animate attributeName="opacity" values="0;.22;0" dur="3.2s" repeatCount="indefinite"/></path>' +
        '<path d="M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9" stroke="#A9BFCF" stroke-width="2" opacity="0">' +
          '<animate attributeName="d" values="M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9;M0 0c2.6-3-2.6-6 0-9s-2.6-6 0-9;M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9" dur="3.2s" repeatCount="indefinite"/>' +
          '<animateTransform attributeName="transform" type="translate" values="0 3;0 -5" dur="3.2s" repeatCount="indefinite"/>' +
          '<animate attributeName="opacity" values="0;.85;0" dur="3.2s" repeatCount="indefinite"/></path>' +
      '</g>' +
      '<g transform="translate(40 26)">' +
        '<path d="M0 0c2.6-3-2.6-6 0-9s-2.6-6 0-9" stroke="#D6E2EA" stroke-width="4.2" opacity="0">' +
          '<animate attributeName="d" values="M0 0c2.6-3-2.6-6 0-9s-2.6-6 0-9;M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9;M0 0c2.6-3-2.6-6 0-9s-2.6-6 0-9" dur="3.6s" begin="-1.2s" repeatCount="indefinite"/>' +
          '<animateTransform attributeName="transform" type="translate" values="0 3;0 -6" dur="3.6s" begin="-1.2s" repeatCount="indefinite"/>' +
          '<animate attributeName="opacity" values="0;.22;0" dur="3.6s" begin="-1.2s" repeatCount="indefinite"/></path>' +
        '<path d="M0 0c2.6-3-2.6-6 0-9s-2.6-6 0-9" stroke="#A9BFCF" stroke-width="2" opacity="0">' +
          '<animate attributeName="d" values="M0 0c2.6-3-2.6-6 0-9s-2.6-6 0-9;M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9;M0 0c2.6-3-2.6-6 0-9s-2.6-6 0-9" dur="3.6s" begin="-1.2s" repeatCount="indefinite"/>' +
          '<animateTransform attributeName="transform" type="translate" values="0 3;0 -6" dur="3.6s" begin="-1.2s" repeatCount="indefinite"/>' +
          '<animate attributeName="opacity" values="0;.85;0" dur="3.6s" begin="-1.2s" repeatCount="indefinite"/></path>' +
      '</g>' +
      '<g transform="translate(49 27)">' +
        '<path d="M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9" stroke="#D6E2EA" stroke-width="4.2" opacity="0">' +
          '<animate attributeName="d" values="M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9;M0 0c2.6-3-2.6-6 0-9s-2.6-6 0-9;M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9" dur="3.4s" begin="-2.3s" repeatCount="indefinite"/>' +
          '<animateTransform attributeName="transform" type="translate" values="0 3;0 -5" dur="3.4s" begin="-2.3s" repeatCount="indefinite"/>' +
          '<animate attributeName="opacity" values="0;.22;0" dur="3.4s" begin="-2.3s" repeatCount="indefinite"/></path>' +
        '<path d="M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9" stroke="#A9BFCF" stroke-width="2" opacity="0">' +
          '<animate attributeName="d" values="M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9;M0 0c2.6-3-2.6-6 0-9s-2.6-6 0-9;M0 0c-2.6-3 2.6-6 0-9s2.6-6 0-9" dur="3.4s" begin="-2.3s" repeatCount="indefinite"/>' +
          '<animateTransform attributeName="transform" type="translate" values="0 3;0 -5" dur="3.4s" begin="-2.3s" repeatCount="indefinite"/>' +
          '<animate attributeName="opacity" values="0;.85;0" dur="3.4s" begin="-2.3s" repeatCount="indefinite"/></path>' +
      '</g>' +
    '</g></svg>',

  // Detaljerna från hemsidan: snövit botten, isturkos glöd, nordiskt blått och sloganen i kursiv.
  css: [
    '.w{--base:#F7FAFC!important;--glow1:#CDEFF1!important;--glow1-0:rgba(205,239,241,0)!important;--glow2:#E2EDF8!important;--glow2-0:rgba(226,237,248,0)!important;',
    '--paper2:#EBF2F7!important;--line:#DCE6EE!important;--muted:#5E6B77!important}',
    // Lite bredare panel på datorn och en större, mjukare glöd överst, som norrsken över snö
    // Fast storlek: panelen är lika bred och hög före och under samtalet, och rullisten tar ingen bredd från texten när den dyker upp
    '.w[data-m=desktop] .panel{width:min(440px,calc(var(--vw) - 32px));min-width:min(440px,calc(var(--vw) - 32px));max-width:min(440px,calc(var(--vw) - 32px))}',
    '.scroll{scrollbar-gutter:stable}',
    // Knappen "Start på nytt" syns alltid i headern, också innan man har skrivit något
    '.w:not(.has) .rs{display:grid!important}',
    '.panel::before{height:560px;opacity:max(var(--glow,1),.6)}',
    // Lite större text
    '.tx,.op{font-size:16px}',
    '.me{font-size:16px}',
    'textarea{font-size:16px}',
    '.chips button{font-size:14.5px}',
    '.name{color:#0D5A94;letter-spacing:.01em}',
    '.hl{color:#0D5A94;letter-spacing:-.005em}',
    '.tg{font-family:"Lora",Georgia,serif;font-style:italic;font-weight:500;font-size:19px;line-height:1.3;color:#1E75C6;max-width:290px}',
    // Besökarens bubblor: från djupt blått till knappblått, som hemsidans knappar
    '.me{background-image:linear-gradient(135deg,#0B4F84 0%,#1E75C6 100%)}',
    '.chips button{background:#fff;color:#0D5A94;box-shadow:inset 0 0 0 1px rgba(30,117,198,.28)}',
    '.chips button:hover{background:#EEF5FB}',
    '.card .cbtn{background:#fff;box-shadow:inset 0 0 0 1px rgba(30,117,198,.28)}',
    '.teaser{background:#F7FAFC}',
    '.teaser .chips button{background:#fff}',
    // Chattknappen: droppen på en snövit platta i den blå knappen, med en tunn isturkos ring
    '.launch{height:60px;padding:0 24px 0 11px;gap:12px;background-image:linear-gradient(135deg,#0B4F84 0%,#1E75C6 100%)}',
    '.launch .av{width:42px!important;height:42px!important;margin-left:0!important;background:#fff!important;box-shadow:0 0 0 2px #9BE7E6,0 2px 6px rgba(0,0,0,.18)!important}',
    '.launch .lt1{font-weight:700;font-size:16px;letter-spacing:.01em}',
    '.w[data-m=mobile] .launch{width:64px;height:64px;padding:0}',
    '.w[data-m=mobile] .launch .av{width:50px!important;height:50px!important}',
    '.foot{font-size:11.5px}',
    // Medan chatten tänker: badet får plats, och "Tenker" skimrar i isblått
    '.think{gap:10px}',
    '.think .art{width:76px;height:50px}',
    '.w[data-m=mobile] .think .art{width:68px;height:45px}',
    '.shim{font-family:"Lora",Georgia,serif;font-style:italic;font-size:17px;font-weight:500;color:#5D7A90;',
    'background:linear-gradient(90deg,#5D7A90 0%,#5D7A90 40%,#BFE9EE 50%,#5D7A90 60%,#5D7A90 100%);background-size:250% 100%;-webkit-background-clip:text;background-clip:text}',
    // När svaret kommer: en ring sprider sig på vattnet där badet stod, en sista ångpuff stiger,
    // och orden klarnar fram ur imman i samma takt som chatten skriver (600 ms per ord).
    '.bot{position:relative;isolation:isolate}',
    '.bot:has(.tb)::before{content:"";position:absolute;z-index:-1;left:38px;top:26px;width:170px;height:44px;margin:-22px 0 0 -85px;border-radius:50%;',
    'border:1.5px solid rgba(58,175,196,.5);box-shadow:0 0 14px rgba(58,175,196,.18),inset 0 0 10px rgba(58,175,196,.12);pointer-events:none;opacity:0;animation:nsRing 1.25s cubic-bezier(.2,.7,.3,1) both}',
    '.bot:has(.tb)::after{content:"";position:absolute;z-index:-1;left:12px;top:-4px;width:56px;height:48px;border-radius:50%;',
    'background:radial-gradient(closest-side,rgba(190,208,221,.8),rgba(190,208,221,0));filter:blur(5px);pointer-events:none;opacity:0;animation:nsMist 1.6s ease-out both}',
    '@keyframes nsRing{0%{opacity:0;transform:scale(.12)}18%{opacity:.95}100%{opacity:0;transform:scale(1)}}',
    '@keyframes nsMist{0%{opacity:0;transform:translateY(10px) scale(.55)}25%{opacity:.9}100%{opacity:0;transform:translateY(-30px) scale(1.4)}}',
    '.wd{animation:nsWord .6s ease-out both}',
    '@keyframes nsWord{0%{opacity:0;filter:blur(3px)}100%{opacity:1;filter:blur(0)}}',
    // Minskad rörelse: inget bad, ingen ring och ingen imma, bara "Tenker" och vanlig intoning
    '@media (prefers-reduced-motion:reduce){.think .art,.bot:has(.tb)::before,.bot:has(.tb)::after{display:none}.wd{animation:fade .3s ease-out both}}'
  ].join('')
};
