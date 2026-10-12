// =====================================================================
//  ΟΛΑ ΤΑ ΚΕΙΜΕΝΑ ΤΟΥ SITE ΕΙΝΑΙ ΕΔΩ
//  Αλλάζεις μόνο ό,τι είναι μέσα σε εισαγωγικά '...'.
//  Αν το κείμενο έχει απόστροφο (π.χ. I'm), γράψ' το με \' → I\'m
//  Μην σβήσεις κόμματα, αγκύλες [ ] και άγκιστρα { }.
//  Επίπεδα skills: 1, 2 ή 3.  Γλώσσες: ποσοστό μπάρας 0-100.
// =====================================================================

window.CONTENT = {

  // ---- Πάνω μέρος σελίδας ----
  name: 'Ioanna Theodoridou',
  role: 'Business Application Analyst · Athens',
  intro: 'Welcome to my room. Everything in it says something about me, so tap an object to take a closer look.',

  // ---- Πίνακας στον τοίχο ----
  about: {
    label: 'About me', kicker: 'The portrait', title: 'Hi, I\'m Ioanna', sub: 'Business Application Analyst',
    lead: 'I help Greek public sector organisations move their finance and accounting work onto modern ERP software.',
    paragraphs: [
      'My background mixes sales support, operations and data work. The common thread is understanding how people actually work and then making the software fit them. I translate business needs for developers, configure systems and train the people who use them every day.',
      'I studied computer science at AUEB and I am now studying Business Administration at the Hellenic Open University.'
    ],
    facts: [
      ['Based in', 'Nea Smirni, Athens'],
      ['Now at', 'Unisystems'],
      ['Languages', 'Greek, English, French']
    ]
  },

  // ---- Laptop ----
  current: {
    label: 'Current role', kicker: 'May 2025 – present', title: 'Business Application Analyst', sub: 'Unisystems',
    bullets: [
      ['ERP implementation.', 'Deploying in-house ERP solutions for Greek public sector organisations, focused on Financial Management, Invoicing and Accounting modules.'],
      ['Requirements analysis.', 'Acting as the bridge between end users and the development team, turning finance and accounting workflows into functional requirements.'],
      ['System configuration.', 'Customising and parametrising modules to fit each client\'s workflows and legal requirements.'],
      ['Training and support.', 'Running training sessions for public employees in finance and administration, and providing functional support so the system gets adopted.'],
      ['Process improvement.', 'Analysing existing processes and proposing digital improvements for public services.']
    ]
  },

  // ---- Συρτάρια ----   [ρόλος, εταιρεία, ημερομηνίες, περιγραφή]
  past: {
    label: 'Earlier roles', kicker: 'The drawers', title: 'Earlier roles', sub: 'Six roles across tech, retail, health and events',
    entries: [
      ['Sales Support Associate', 'Wolt', 'Dec 2023 – May 2025', 'Onboarded venues and supported new city launches, trained partners on Wolt\'s tools, and kept menus and product lists accurate with bulk CSV updates.'],
      ['Office Administrator', 'Leroy Merlin Greece & Cyprus', 'Nov 2022 – Dec 2023', 'Travel, accommodation and office inventory. Travel cost analysis in Looker, HR onboarding support, company events and first-line IT support.'],
      ['Dental Supply Specialist', 'Odontemporiki Kallitheas', 'May 2022 – Nov 2022', 'Daily communication with suppliers across Greece for ISO-based orders, and stock accuracy across active SKUs.'],
      ['Event Planning Assistant / Game Supervisor', 'Air Game', 'Dec 2018 – Dec 2023', 'Coordinated games and activities at large events for children, adults and companies.'],
      ['Administrative Assistant', 'Dialogos Speech Therapy & Special Therapies Center', 'Sep 2020 – Mar 2021', 'Appointments, office procedures, supplies and supplier research.'],
      ['Front Desk Receptionist', 'Planet Fitness and More', 'Sep 2019 – Sep 2020', '']
    ]
  },

  // ---- Βιβλιοθήκη ----   [πτυχίο, ίδρυμα, ημερομηνίες, περιγραφή]
  education: {
    label: 'Education', kicker: 'The bookshelf', title: 'Education', sub: 'Business, computer science and software development',
    entries: [
      ['B.Sc. Business Administration', 'Hellenic Open University', 'Oct 2026 – present', ''],
      ['Software Development', 'Zone01 Athens', '2024', 'Full scholarship, awarded as a high performer in the selection process.'],
      ['Computer Science', 'Athens University of Economics and Business', '2017 – 2022', 'Two years of coursework toward a B.Sc.: data structures, databases and object-oriented programming.']
    ]
  },

  // ---- Κύπελλο ----
  award: {
    label: 'Award', kicker: 'April 2024', title: 'Makeathon 2024 finalist', sub: 'UniAI · NOVA Challenge',
    badge: 'Finalist',
    paragraphs: ['Built an AI-powered knowledge retrieval tool using natural language processing and keyword matching.']
  },

  // ---- Πίνακας με post-it ----   [δεξιότητα, επίπεδο 1-3]
  skills: {
    label: 'Skills', kicker: 'The pinboard', title: 'Skills', sub: 'Rated on a three-point scale',
    groups: [
      { title: 'Ways of working', items: [
        ['Communication', 3], ['Problem solving', 3], ['Time management', 3], ['Teamwork', 3],
        ['Adaptability', 2], ['Proactivity', 2], ['Constructive feedback', 2], ['Negotiation', 2]
      ]},
      { title: 'Tools and tech', items: [
        ['G-Suite / MS Office', 3], ['IT / user support', 2], ['Go', 2], ['Java / Python', 1], ['Data analysis / Looker', 1]
      ]}
    ]
  },

  // ---- Υδρόγειος ----   [γλώσσα, ποσοστό μπάρας, επίπεδο (προαιρετικό, π.χ. 'C2')]
  languages: {
    label: 'Languages', kicker: 'The globe', title: 'Languages', sub: '',
    items: [
      ['Greek', 96, ''],
      ['English', 88, ''],
      ['French', 50, '']
    ]
  },

  // ---- Κέντημα ----
  dance: {
    label: 'Folk dance', kicker: 'Folk dancer', title: 'Choropaideia', sub: 'Greek traditional dance',
    paragraphs: ['Learning, preserving and sharing Greek cultural heritage through traditional dance. The embroidery on the wall is a nod to the costumes.']
  },

  // ---- Σκυλάκι ----
  volunteer: {
    label: 'Volunteering', kicker: 'Volunteer', title: 'Dog\'s Voice', sub: 'Protection of stray animals',
    paragraphs: ['I volunteer with Dog\'s Voice, an organisation that protects stray animals.']
  },

  // ---- Φυτό ----
  mentor: {
    label: 'Mentoring', kicker: 'Student mentor', title: 'Unique Minds', sub: 'Academic orientation for teens',
    paragraphs: ['I mentor teenagers through academic orientation, helping them think through their next steps in education.']
  },

  // ---- Κάμερα ----
  video: {
    label: 'Video', kicker: 'Amateur video creator', title: 'Behind the camera', sub: 'CapCut',
    paragraphs: ['I create and edit video content in CapCut, with a focus on storytelling and modern visual effects.']
  },

  // ---- Παπούτσια ----
  running: {
    label: 'Running', kicker: 'Runner', title: 'Long runs, big goals', sub: '',
    paragraphs: ['Long runs with friends at the Stavros Niarchos Park. Next goal: the Athens Half Marathon in March 2027.']
  },

  // ---- Πόρτα ----   (άφησε κενό '' ό,τι δεν θες να φαίνεται)
  contact: {
    label: 'Contact', kicker: 'The door is open', title: 'Say hi', sub: 'Happy to talk about ERP, analysis or project work',
    email: 'theodoridouioanna@hotmail.com',
    phone: '',
    linkedinName: 'Ioanna Theodoridou',
    linkedinUrl: '',          // π.χ. 'https://www.linkedin.com/in/...'
    location: 'Nea Smirni, Athens, Greece'
  }
};
