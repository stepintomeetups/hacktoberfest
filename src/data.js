module.exports = {
  maintainers: {
    BeardOfDoom: {
      name: 'Vécsi Ádám',
      email: 'vecsi96@gmail.com',
      github: 'https://github.com/BeardOfDoom/',
      linkedin: 'https://www.linkedin.com/in/%C3%A1d%C3%A1m-v%C3%A9csi-74a315b3/',
      image: 'https://avatars1.githubusercontent.com/u/10923698?s=460&u=a5ba4cba611483c9f4c44ef449b00095053c5101&v=4',
    },
    VGeorgee: {
      name: 'Vereb György',
      email: 'verebgeorge@gmail.com',
      github: 'https://github.com/vgeorgee',
      linkedin: 'https://www.linkedin.com/in/gy%C3%B6rgy-vereb-bbaa90193/',
      image: 'https://avatars3.githubusercontent.com/u/32582193?s=460&v=4',
    },
    lajoskvcs: {
      name: 'Kovács Lajos',
      email: 'lajos.kovacs@chree.io',
      github: 'https://github.com/lajoskvcs',
      linkedin: 'https://www.linkedin.com/in/lajoskvcs/',
      image: 'https://avatars0.githubusercontent.com/u/15230676?s=460&u=1ac1907df5d0adcb32f751ee889952f8fe3f452a&v=4',
    },
    battila7: {
      name: 'Bagossy Attila',
      email: 'bagossyattila@outlook.com',
      github: 'https://github.com/battila7/',
      linkedin: 'https://www.linkedin.com/in/attila-bagossy/',
      image: 'https://avatars0.githubusercontent.com/u/11032092?s=460&u=313979e5b06ac5c5c0a5c890950922ef862fad0a&v=4',
    },
  },
  repositories: [
    {
      owner: 'cryptid-org',
      project: 'cryptid-native',
      description:
        'A CryptID egy olyan kriptográfiai könyvtár, mely újszerű titkosítási és aláírási protokollokat valósít meg. Mindezt feltörekvő technológiákra alapozva teszi, mint a WebAssembly és a WebAssembly System Interface.',
      maintainers: ['BeardOfDoom', 'battila7'],
      topics: ['Kriptográfia', 'WebAssembly', 'C'],
      issues: [
        {
          number: '27',
          title: 'Windows Build',
          description:
            'A könyvtár platformfüggő részeinek portolása Windows-ra, majd a fordítás és futtatás Windows-on.',
          level: 2,
        },
      ],
    },
    {
      owner: 'cryptid-org',
      project: 'crpytid-js',
      description:
        'A cryptid-native C nyelven készült, és elsősorban WebAssemblyt céloz. Ezt a WebAssembly modult csomagolja be a cryptid-js, lehetővé téve a modul kényelmes felhasználását böngészőben és szerver-oldalon egyaránt.',
      maintainers: ['BeardOfDoom', 'battila7'],
      topics: ['Kriptográfia', 'JavaScript'],
      issues: [
        {
          number: '6',
          title: 'Migrate to pnpm',
          description:
            'A könyvtár jelenleg az npm package managert használja. Ugyanerre a feladatra egy jobb alternatíva a pnpm. A feladat egy gyors migráció npm-ről pnpm-re.',
          level: 1,
        },
        {
          number: '7',
          title: 'Introduce eslint and prettier',
          description:
            'Konfiguráljuk be a kódbázis lintelését és formázását az eslint és a prettier alkalmazások segítségével.',
          level: 1,
        },
        {
          number: '8',
          title: 'Introduce commit message linting',
          description:
            'Nemcsak kódot lehet lintelni, hanem akár git commit üzeneteket is. Ebben az issue-ban a feladat a conventional commits specifikációnak megfelelő lintelés konfigurálása.',
          level: 1,
        },
        {
          number: '9',
          title: 'GitHub Actions workflow on push',
          description:
            'Megalapozandó a cryptid-js Continuous Integration pipeline-ját, készítsünk egy olyan GitHub Actions workflow-t, mely lefuttatja a lintelést minden egyes master push vagy PR alkalmával.',
          level: 1,
        },
      ],
    },
    {
      owner: 'chreeio',
      project: 'fastify-status',
      description: 'Version és healthcheck információkat kiszolgáló plugin a Fastify Node.js HTTP keretrendszerhez.',
      maintainers: ['lajoskvcs', 'battila7'],
      topics: ['HTTP', 'Fastify', 'Node.js', 'TypeScript'],
      issues: [
        {
          number: '1',
          title: 'Deploy to npmjs.com',
          description:
            'Készíteni kell egy olyan GitHub Actions jobot, mely a kipakolja a könyvtárat tartalmazó npm csomagot npmjs.com-ra.',
          level: 1,
        },
        {
          number: '2',
          title: 'Configurable unavailable handler',
          description:
            'Ha a fastify-status által kezelt szolgáltatás FAILING státuszra vált, akkor a könyvtár automatikusan 503 SERVICE UNAVAILABLE választ küld minden lekérdezésre. A feladat részeként ezt a viselkedést kell konfigurálhatóvá tenni.',
          level: 1,
        },
        {
          number: '3',
          title: 'Detailed and friendly README',
          description:
            'A fastify-status sebtiben készült, mint apró belsős utility csomag. Emiatt nem sok dokumentáció áll rendelkezésre hozzá. Készíteni kell tehát egy szép, informatív README-t, mely eligazítja a látogatókat és felhasználókat.',
          level: 2,
        },
      ],
    },
    {
      owner: 'sokuteihq',
      project: 'sokutei',
      description: '',
      maintainers: ['VGeorgee', 'battila7'],
      topics: [],
      issues: [
        {
          number: '1',
          title: '',
          description: '',
          level: 1,
        },
      ],
    },
  ],
}
