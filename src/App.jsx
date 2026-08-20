import './App.css'

const specimens = [
  {
    id: '01',
    name: 'Understory',
    place: 'Forest',
    note: 'Douglas fir and sword fern hold the light three feet above the ground; everything below moves slower.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M16 4 L9 14 H13 L8 21 H14 V28 M16 4 L23 14 H19 L24 21 H18 V28" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: '02',
    name: 'Confluence',
    place: 'River',
    note: "Two branches of the Wenatchee meet at a gravel bar scattered with cottonwood leaves, always slightly cold.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 12c4 0 4 4 8 4s4-4 8-4 4 4 8 4" strokeLinecap="round" />
        <path d="M3 20c4 0 4 4 8 4s4-4 8-4 4 4 8 4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: '03',
    name: 'Talus',
    place: 'Mountain',
    note: "Above 2,100 meters the trail gives up. What remains is broken granite and wind finding gaps in a jacket.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M2 24 L11 10 L16 17 L20 12 L30 24 Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: '04',
    name: 'Tideline',
    place: 'Coast',
    note: 'Barnacles mark the high-water line in a band eleven centimeters wide; below it, everything breathes salt.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="16" cy="9" r="4" />
        <path d="M2 22c3.5 0 3.5 3 7 3s3.5-3 7-3 3.5 3 7 3 3.5-3 7-3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: '05',
    name: 'Windrow',
    place: 'Meadow',
    note: 'Timothy grass and lupine lean the same direction after a week of southwest wind, then slowly stand back up.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M8 28c0-10 3-14 1-20M16 28c0-11 4-15 1-22M24 28c0-10 3-14 1-20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: '06',
    name: 'Permafrost',
    place: 'Tundra',
    note: "The topsoil is fourteen centimeters deep before it turns to ice that hasn't thawed since the last glaciation.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M16 3v26M5 9l22 14M27 9L5 23" strokeLinecap="round" />
      </svg>
    ),
  },
]

function App() {
  return (
    <>
      <header className="masthead">
        <span className="wordmark">Field Notes</span>
        <span className="volume">Terrain &amp; Growth, Vol. I</span>
      </header>

      <section className="hero">
        <svg className="contour" viewBox="0 0 400 300" aria-hidden="true">
          <path d="M-20 250 C 60 200, 140 280, 220 220 S 380 180, 420 230" />
          <path d="M-20 200 C 60 150, 140 230, 220 170 S 380 130, 420 180" />
          <path d="M-20 150 C 60 100, 140 180, 220 120 S 380 80, 420 130" />
        </svg>
        <h1>
          A ledger of
          <br />
          <em>wild things</em>
        </h1>
        <p className="lede">
          Six terrains, logged in the field between April and November — a
          minimal index of what grows, erodes, and holds still long enough to
          be counted.
        </p>
      </section>

      <section className="ledger" aria-label="Specimen index">
        {specimens.map((s, i) => (
          <article
            className="row"
            key={s.id}
            style={{ '--delay': `${i * 70}ms` }}
          >
            <span className="num">{s.id}</span>
            <div className="body">
              <h2>
                {s.name} <span className="place">— {s.place}</span>
              </h2>
              <p>{s.note}</p>
            </div>
            <span className="icon">{s.icon}</span>
          </article>
        ))}
      </section>

      <section className="quote">
        <p>
          Nothing here is finished. The moss is still deciding what to cover,
          and the river hasn&rsquo;t picked a bank.
        </p>
        <span className="attribution">
          — field log, entry 07, Ridgeline Basin
        </span>
      </section>

      <footer className="colophon">
        <span>Field Notes — logged by hand, six terrains, one ledger.</span>
        <span>47.6°N, cataloguing continues</span>
      </footer>
    </>
  )
}

export default App
