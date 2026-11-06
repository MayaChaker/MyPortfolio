// Every fact here comes from the project's README or source code. Keep it that way.
// `focus` decides which projects come first for ?role=frontend / ?role=backend.
// `video` (optional): path to a short walkthrough in /public, shown on the case study page.
export const projects = [
  {
    slug: "veloura",
    title: "Veloura",
    kind: "Beauty e-commerce store",
    summary: "Shoppers pick a product and a shade, pay cash on delivery and follow their order. The owner runs orders, prices and stock from an admin area.",
    points: [
      "Orders priced on the server, stock taken in the same transaction",
      "166 tests: unit, integration and end-to-end, run in CI",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Better Auth", "Zod", "Jest", "Playwright"],
    focus: ["fullstack", "frontend", "backend"],
    cover: "/projects/veloura/home.webp",
    liveLink: "https://veloura-beauty-store.vercel.app/",
    repoLink: "https://github.com/MayaChaker/veloura-beauty",
    stats: [
      ["166", "automated tests"],
      ["13", "database models"],
      ["59", "products, 31 brands"],
      ["Strict", "TypeScript"],
    ],
    overview: [
      "Veloura is a multi-brand beauty store. Shoppers browse makeup, skincare, fragrance and haircare, choose a shade, check out with cash on delivery and follow their order. An admin area runs the shop: orders to ship, revenue, prices and stock.",
      "It started as a Create React App project. I moved it to Next.js and strict TypeScript in phases, then added PostgreSQL, accounts and the admin side.",
    ],
    gallery: [
      ["shop", "Shop. Filters live in the URL, so a view can be shared or refreshed."],
      ["product", "Product page. Each shade has its own stock."],
      ["checkout", "Checkout in three steps, with a pin on the map for delivery."],
      ["admin-overview", "Admin overview: orders to ship, revenue, low stock, best sellers."],
      ["admin-order", "One order in the admin, with the cash to collect."],
    ].map(([name, caption]) => ({ src: `/projects/veloura/${name}.webp`, caption })),
    mobile: { src: "/projects/veloura/mobile-home.webp", caption: "The store on a phone." },
    features: [
      {
        title: "For shoppers",
        items: [
          "Filters, sorting and pages, kept in the URL.",
          "Shades with their own stock; the bag follows the chosen shade.",
          "Promo code, free-delivery threshold and a delivery pin on an OpenStreetMap map.",
          "Email or Google sign-in. A guest's wishlist is merged in on sign-in, and guests can still check out.",
        ],
      },
      {
        title: "For the admin",
        items: [
          "Revenue, orders, average order, low stock and best sellers for 7, 30 or 90 days.",
          "Orders by status, search by reference, name or phone. Placed → Shipped → Delivered; cancelling puts the stock back.",
          "Prices, an optional crossed-out \"was\" price, and stock per product or shade.",
        ],
      },
    ],
    architecture: [
      "Store pages are pre-rendered from the database and rebuilt when the admin changes a product, so they stay fast. Admin and account pages render per request, behind a session check.",
      "Checkout sends only product ids, shades and quantities. The server validates them with Zod, prices the order from the database and saves it while taking stock, in one transaction.",
      "Business rules (pricing, order status, dashboard maths) are plain functions in src/domain, tested without a database or a browser.",
    ],
    decisions: [
      ["Money is whole cents", "Prices are stored and calculated as integers. A typed price like 19.99 is read digit by digit, never multiplied as a float."],
      ["No overselling, no lost updates", "Every write that depends on the current value is conditional: stock ≥ quantity when ordering, the current status when the admin moves an order, the loaded stock when the admin saves a product. If something changed in between, nothing is written."],
      ["Orders keep a snapshot", "Names and prices are copied into the order, so editing a product never rewrites past orders, and best sellers are counted at the prices actually paid."],
      ["Rate limits in Postgres", "Vercel runs several server instances, so a counter in memory would only see part of the traffic. Counting is one INSERT … ON CONFLICT statement, so concurrent requests can't both read the old count."],
      ["The admin is invisible", "A customer who opens an admin URL gets the store's normal 404. The role is read from the database on every request, so revoking it works at once."],
    ],
    testing: "Jest and React Testing Library cover pricing, order status, validation, access checks, the checkout journey and the admin forms. Integration tests run against a real Postgres: two shoppers buying the last item, a refused order rolling back, ten concurrent requests against a limit of five. Playwright drives a real browser through the built site, including with JavaScript turned off. CI runs formatting, lint, the type check, all three suites and a production build on every push.",
    code: [
      ["Placing an order in one transaction", "src/server/orders/placeOrder.ts"],
      ["Pricing from the database", "src/server/orders/priceOrder.ts"],
      ["Order status moves", "src/domain/orders/status.ts"],
      ["Money as whole cents", "src/lib/money.ts"],
      ["Rate limiting in Postgres", "src/server/rateLimit.ts"],
    ],
    next: [
      "A real payment provider behind the existing checkout steps.",
      "A verified email domain, so confirmation emails reach every shopper, and a forgot-password email with it.",
    ],
  },
  {
    slug: "smartcare",
    title: "SmartCare",
    kind: "Hospital management system",
    summary: "A public website and four portals: patients, doctors, front desk and administration. Each role sees only its own tools, and the server enforces the same rules.",
    points: [
      "Booking saved with row locks, so no slot is taken twice",
      "102 backend tests against a real MySQL database",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "Sequelize", "JWT", "Tailwind CSS"],
    focus: ["backend", "fullstack"],
    cover: "/projects/smartcare/doctor-today.webp",
    liveLink: "https://smart-care-hms.vercel.app/",
    repoLink: "https://github.com/MayaChaker/SmartCare-HMS",
    stats: [
      ["4", "role portals"],
      ["102", "backend tests"],
      ["6", "database models"],
      ["Nightly", "demo data reset"],
    ],
    overview: [
      "SmartCare follows how a real visit works: a patient books a time inside the doctor's working hours, the front desk checks them in, the doctor starts and completes the visit and writes the note, and the administration follows the numbers.",
      "I built it from an empty folder: planned the architecture, designed the database, built the React app and the Express API, and deployed it on Vercel, Render and TiDB Cloud.",
    ],
    demo: {
      note: "Open the login page and pick a role, or sign in with one of these. The API runs on a free tier, so the first request can take up to a minute.",
      loginLink: "https://smart-care-hms.vercel.app/login",
      password: "SmartCareDemo",
      accounts: [
        ["Patient", "demo.patient"],
        ["Doctor", "dr.karim.mansour"],
        ["Front desk", "demo.reception"],
        ["Administration", "demo.admin"],
      ],
    },
    gallery: [
      ["patient-book", "Booking: doctors by department, with their next free times and fees."],
      ["reception-desk", "Front desk board: every working doctor as a column, arrivals and the waiting room."],
      ["admin-overview", "Administration: visits per day and per department, no-show rate, average wait."],
      ["home", "The public website."],
    ].map(([name, caption]) => ({ src: `/projects/smartcare/${name}.webp`, caption })),
    mobile: { src: "/projects/smartcare/patient-phone.webp", caption: "Patient portal on a phone." },
    features: [
      {
        title: "Patients",
        items: [
          "Book by department, seeing each doctor's next free times and fee.",
          "Move or cancel visits, read visit notes and prescriptions.",
          "Activate their file with a one-time code and keep their health details up to date.",
        ],
      },
      {
        title: "Doctors",
        items: [
          "Today's list, the waiting room with waiting minutes, and the next patient.",
          "Visit notes: symptoms, examination, diagnosis, treatment, prescriptions, follow-up.",
          "Weekly schedule and a chart for each patient.",
        ],
      },
      {
        title: "Front desk",
        items: [
          "A board with every working doctor as a column.",
          "Check-in, no-shows, and booking, moving or cancelling for patients.",
          "Open a new file with a name, mobile and date of birth.",
        ],
      },
      {
        title: "Administration",
        items: [
          "Visits, no-show rate, average wait and visit length for 7 or 30 days.",
          "An activity log of who did what and when.",
          "Doctors and staff accounts, with a temporary password changed at first sign-in.",
        ],
      },
    ],
    architecture: [
      "A React app (Vite, React Router, Tailwind) on Vercel talks to an Express 5 API on Render, backed by MySQL through Sequelize.",
      "Every route checks the token and the role on the server; hiding a button is never the only protection. The user is reloaded on each request, so a deleted account or a changed role takes effect immediately.",
    ],
    decisions: [
      ["Visit status is a state machine", "Scheduled → checked in → in progress → completed. The front desk checks in, only the doctor starts and completes, and a no-show can only be marked after the visit's time."],
      ["No double booking", "The doctor's and the patient's rows stay locked while the slot is checked and the visit saved. I tested it with two requests sent at the same moment."],
      ["Medical history is never deleted", "A visit is cancelled, not removed, and an account that has visits can't be deleted."],
      ["Patients own their file", "The front desk opens it with three fields. The patient activates it with a one-time code, stored hashed and valid for 14 days, and fills in the rest."],
      ["Hospital time, not server time", "Dates and \"today\" follow Beirut time, wherever the server runs."],
    ],
    testing: "102 backend tests on Node's test runner, against a real MySQL database: access per role, booking conflicts, status moves, uploads and sign-in hardening. GitHub Actions runs them on every pull request, and a scheduled workflow resets the demo data every night.",
    code: [
      ["Booking with row locks", "backend/utils/bookingConflicts.js"],
      ["Visit status rules", "backend/utils/appointmentStatus.js"],
      ["Token and role checks", "backend/middlewares/auth.js"],
      ["Business rule tests", "backend/tests/rules.test.js"],
    ],
  },
  {
    slug: "rami-lea",
    title: "Rami & Lea",
    kind: "Digital wedding invitation",
    summary: "A wedding invitation that opens like a real envelope. Each guest gets a private link with their name, language, seats and the events they are invited to.",
    points: [
      "One data file per invitation, so a new one needs no new code",
      "English and Arabic, chosen per guest, with a WhatsApp preview",
    ],
    stack: ["Next.js", "React", "TypeScript", "CSS Modules", "Canvas"],
    focus: ["frontend"],
    phones: [
      { src: "/projects/rami-lea/envelope.webp", alt: "The sealed envelope on a phone" },
      { src: "/projects/rami-lea/hero.webp", alt: "The opening scene with the couple's video" },
      { src: "/projects/rami-lea/rsvp.webp", alt: "The reply card" },
    ],
    liveLink: "https://rami-lea.vercel.app/i/rami-lea/haddad-7x2k",
    repoLink: "https://github.com/MayaChaker/rami-lea-invite",
    stats: [
      ["2", "languages"],
      ["9", "page scenes"],
    ],
    overview: [
      "A demo invitation with sample names, and still in progress. Guests open it from a link, tap the seal on the envelope, and move through the couple's video, the letter, a countdown, the event details, the reply and the practical notes.",
      "I built it alone, and designed it so it can grow: the content lives in data files, not in the components.",
    ],
    phoneScreens: [
      ["letter", "The letter, naming both families."],
      ["details", "The event details, opened with a tap."],
      ["notes", "Good to know: dress code and gift details."],
      ["photos", "A QR code to the shared photo album."],
    ].map(([name, caption]) => ({ src: `/projects/rami-lea/${name}.webp`, caption })),
    gallery: [],
    features: [
      {
        title: "For guests",
        items: [
          "A tap-to-open envelope, with a skip button.",
          "Their own name, language, seats and events.",
          "Event details with a map link, a reply form, and a QR code to the photo album.",
          "Optional gift details that copy with one tap.",
        ],
      },
      {
        title: "For each new invitation",
        items: [
          "A new data file instead of new code.",
          "Optional sections, such as gifts and the album, disappear when left out.",
          "A WhatsApp preview in the guest's language.",
          "Guest pages are hidden from search engines.",
        ],
      },
    ],
    architecture: [
      "Next.js pre-builds one page per guest from the data file, at /i/[slug]/[token]. The unguessable token in the link decides which guest's name, language and seats are shown.",
      "The envelope and lace are drawn on canvas, and the animation respects the reduced-motion setting.",
    ],
    decisions: [
      ["Content in data files", "Names, dates, media and guests live in one file per invitation, so the same components can serve every new event."],
      ["A link per guest", "Guests open the invitation directly from WhatsApp with no sign-in, so the link itself identifies them and the page is asked to stay out of search results."],
    ],
    code: [
      ["The envelope", "src/components/envelope/Envelope.tsx"],
      ["Finding the invitation and guest", "src/lib/getInvitation.ts"],
      ["One invitation's data", "src/data/invitations/rami-lea.ts"],
      ["The WhatsApp preview image", "src/app/i/[slug]/[token]/opengraph-image.tsx"],
    ],
    next: [
      "Save replies to a database, so the hosts can follow them in a dashboard. For now a reply stays in the guest's browser.",
    ],
  },
];

export const getProject = (slug) => projects.find((project) => project.slug === slug);
