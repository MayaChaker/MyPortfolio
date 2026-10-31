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
    slug: "luxury-drive",
    title: "Luxury Drive Studio",
    kind: "Car showcase",
    summary: "A car catalogue with collection pages, a page for every model, a 3D viewer, a monthly cost calculator and a concierge request form.",
    points: [
      "The chosen car is carried into the contact form",
      "3D viewer built on the Sketchfab Viewer API",
    ],
    stack: ["React", "React Router", "Vite", "CSS Modules"],
    focus: ["frontend"],
    cover: "/projects/luxury-drive/home.webp",
    liveLink: "https://bmw-mayas-projects-d5aa530e.vercel.app/",
    repoLink: "https://github.com/MayaChaker/bmw-luxury-drive-studio",
    stats: [
      ["9", "routes"],
      ["3D", "model viewer"],
    ],
    overview: [
      "A learning project: a premium car showcase built with React and Vite. It covers the catalogue, collection pages, model details, an interactive 3D studio, a budget calculator and a private concierge form.",
    ],
    note: "BMW and related marks belong to Bayerische Motoren Werke AG. The project isn't affiliated with them.",
    gallery: [],
    features: [
      {
        title: "What's in it",
        items: [
          "Catalogue split into new models, luxury and best-selling collections.",
          "A series comparison table that becomes cards on a phone.",
          "3D studio with full camera rotation and exterior colour controls.",
          "Budget calculator: down payment, term and APR to an estimated monthly cost.",
          "Keyboard-friendly controls and labelled form fields.",
        ],
      },
    ],
    architecture: [
      "React 19 with React Router 7 and Vite. Every page reads from one car data file. Styles are CSS Modules plus shared global CSS, and a script in the repo converts the images to WebP.",
    ],
    decisions: [
      ["The model follows you to the form", "The selected car is passed into the concierge form, so the customer never retypes what they were looking at."],
    ],
    code: [
      ["Car data", "src/data/bmwCars.js"],
      ["3D studio and calculator", "src/pages/ExperienceStudio.jsx"],
      ["Contact form logic", "src/hooks/useContactForm.js"],
    ],
  },
];

export const getProject = (slug) => projects.find((project) => project.slug === slug);
