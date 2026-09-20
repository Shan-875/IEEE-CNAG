export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  category: "officer" | "member" | "advisor";
  tier?: "professional" | "student";
  title: string;
  affiliation: string;
  ieeeGrade: string;
  year?: string;
  domains: string[];
  bio?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  accentColor?: string;
  initials: string;
  image?: string;
}

export const ieeeLinks = [
  { label: "IEEE.org", href: "https://www.ieee.org/" },
  { label: "IEEE Kerala Section", href: "https://ieeekerala.org/" },
  { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/" },
  { label: "IEEE Standards", href: "https://standards.ieee.org/" },
  { label: "IEEE Spectrum", href: "https://spectrum.ieee.org/" },
  { label: "IEEE Collabratec", href: "https://ieee-collabratec.ieee.org/" },
];

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/execom", label: "Executive Committee" },
  { to: "/consultants", label: "Find a Consultant" },
  { to: "/events", label: "ConsulTalks & Events" },
  { to: "/resources", label: "Resources" },
];

export const mission =
  "The IEEE Kerala Consultants Network Affinity Group is dedicated to cultivating an authoritative, collaborative ecosystem for engineering professionals and independent consultants. Through regular technical exchanges, high-level seminars, and mentoring roundtables, our mission is to serve as a premier networking nexus, advancing technical excellence, ethical consulting methodologies, and entrepreneurial leadership across Kerala’s engineering horizon.";

export const vision =
  "To be the benchmark community for professional engineering consultants in Region 10, empowering practitioners with emerging technology insights, ESG frameworks, digital transformation capabilities, and strategic industry-academia linkages that serve public good and accelerate societal prosperity.";

export const aboutLead =
  "The IEEE Kerala Section Consultants Network Affinity Group (CNAG-KS) unites certified IEEE professionals and seasoned industry consultants who deliver specialized technical counsel to enterprises, government bodies, and startups across Kerala and beyond.";

export const publicServices = [
  {
    title: "Curated Expert Roster",
    body: "An accredited registry of seasoned practitioners across power systems, embedded electronics, enterprise software, industrial automation, and ESG sustainability compliance.",
  },
  {
    title: "Enterprise & Startup Advisory",
    body: "Independent, vendor-neutral technical counsel for MSMEs, emerging startups, and large enterprises seeking high-stakes architecture reviews, patents, and system feasibility assessments.",
  },
  {
    title: "Techno-Commercial Incubation",
    body: "Comprehensive project design review, lifecycle performance management, and policy compliance guidance grounded in IEEE international standards and world-class engineering ethics.",
  },
];

export const audiences = [
  {
    kicker: "01",
    badge: "Aspiring Consultants",
    title: "Students & Young Professionals",
    body: "Bridge classroom theory with high-impact industry consulting. Connect with veteran mentors, participate in case studies, and launch your independent advisory trajectory.",
  },
  {
    kicker: "02",
    badge: "Practicing Engineers",
    title: "Industry Professionals",
    body: "Scale your technical practice. Network with distinguished peers across Kerala Section, engage in peer-reviewed problem solving, and unlock high-value consultancy opportunities.",
  },
  {
    kicker: "03",
    badge: "Senior Advisors",
    title: "Independent Consultants",
    body: "Gain institutional credibility through IEEE CNAG. Share thought leadership via ConsulTalks, access IEEE standards repositories, and mentor the next echelon of consultants.",
  },
];

export const domains = [
  "Power & Grid Systems",
  "Embedded & VLSI Design",
  "Industrial IoT & Automation",
  "Renewable Energy & Biogas",
  "ESG & Decarbonization",
  "Net-Zero Built Environment",
  "Enterprise Cloud & Cybersecurity",
  "Biomedical & Healthcare Tech",
  "Project Management & PMO",
  "Software & Solution Architecture",
  "Telecom & Optical Networks",
  "High Voltage & Power Quality",
];

export const professionalExecom: CommitteeMember[] = [
  {
    id: "cm-varughese",
    name: "Er. C. M. Varughese",
    role: "Chair",
    category: "officer",
    tier: "professional",
    title: "Chair, IEEE CNAG Kerala Section",
    affiliation: "Senior Engineering Consultant & Industry Advisor",
    ieeeGrade: "Senior Member, IEEE",
    year: "2026–2027",
    initials: "CMV",
    image: `${import.meta.env.BASE_URL}execom/cm-varughese.jpg`,
    accentColor: "from-blue-700 to-indigo-600",
    domains: ["Engineering Consultancy", "Industrial Advisory", "Project Governance", "Section Leadership"],
    bio: "Chair of IEEE CNAG Kerala Section for the 2026–2027 term, spearheading regional engineering consultancy, industry-academic alliances, and expert advisory programs.",
    email: "cm.varughese@ieee.org",
    linkedin: "https://www.linkedin.com/in/cm-varughese",
  },
  {
    id: "dr-ajith-gopi",
    name: "Dr. Ajith Gopi",
    role: "Vice Chair",
    category: "officer",
    tier: "professional",
    title: "Vice Chair, IEEE CNAG Kerala Section",
    affiliation: "Senior Renewable Energy Consultant & Research Specialist",
    ieeeGrade: "Senior Member, IEEE",
    year: "2026–2027",
    initials: "AG",
    image: `${import.meta.env.BASE_URL}execom/dr-ajith-gopi.jpg`,
    accentColor: "from-sky-700 to-teal-600",
    domains: ["Renewable Energy", "Solar Engineering", "Clean Tech Advisory", "Energy Transition"],
    bio: "Vice Chair of IEEE CNAG Kerala Section, leading clean technology consultancy frameworks, renewable energy policy initiatives, and consultant development.",
    email: "ajith.gopi@ieee.org",
    linkedin: "https://www.linkedin.com/in/ajith-gopi",
  },
  {
    id: "muhammed-haseem",
    name: "Muhammed Haseem",
    role: "Secretary",
    category: "officer",
    tier: "professional",
    title: "Secretary, IEEE CNAG Kerala Section",
    affiliation: "Engineering Consultant & Operations Specialist",
    ieeeGrade: "Member, IEEE",
    year: "2026–2027",
    initials: "MH",
    image: `${import.meta.env.BASE_URL}execom/muhammed-haseem.jpg`,
    accentColor: "from-blue-600 to-cyan-600",
    domains: ["Engineering Management", "Technical Operations", "Institutional Governance", "Industry Liaison"],
    bio: "Secretary of IEEE CNAG Kerala Section, overseeing affinity group operations, secretarial reporting, industry partnerships, and member services.",
    email: "muhammed.haseem@ieee.org",
    linkedin: "https://www.linkedin.com/in/muhammed-haseem",
  },
  {
    id: "ak-shuhair",
    name: "Er. A. K. Shuhair",
    role: "Advisor",
    category: "advisor",
    tier: "professional",
    title: "Distinguished Advisor, IEEE CNAG Kerala Section",
    affiliation: "Former Chief Engineer, KSEB | Senior Power & Energy Consultant",
    ieeeGrade: "Senior Member, IEEE",
    year: "2026–2027",
    initials: "AKS",
    accentColor: "from-amber-600 to-yellow-600",
    domains: ["Power Systems", "Grid Reliability", "Energy Policy", "Substation Automation"],
    bio: "Distinguished power systems leader with over 3 decades of spearheading power transmission, grid modernization, and electrical safety standards across Kerala's energy landscape.",
    email: "ak.shuhair@ieee.org",
    linkedin: "https://www.linkedin.com/in/a-suhair",
  },
];

export const studentExecom: CommitteeMember[] = [
  {
    id: "shan-varghese",
    name: "Shan V Varghese",
    role: "Webmaster & IT Coordinator",
    category: "member",
    tier: "student",
    title: "Webmaster & IT Coordinator, IEEE CNAG Kerala Section",
    affiliation: "Full-Stack Developer & Cloud Systems Specialist",
    ieeeGrade: "Member, IEEE",
    year: "2026–2027",
    initials: "SV",
    image: `${import.meta.env.BASE_URL}execom/shan-v-varghese.jpg`,
    accentColor: "from-blue-600 to-indigo-600",
    domains: ["Web Architecture", "Cloud Infrastructure", "System Automation", "Full-Stack Engineering"],
    bio: "Webmaster and IT Coordinator for IEEE CNAG Kerala Section, spearheading the design, deployment, and digital modernization of CNAG web platforms and technical infrastructure.",
    email: "shanvvarghese875@gmail.com",
    phone: "+91 97449 20027",
    linkedin: "https://www.linkedin.com/in/shan-v-varghese-354b57334/",
  },
  {
    id: "saaya-saleesh",
    name: "Saaya Saleesh",
    role: "Documentation Coordinator",
    category: "member",
    tier: "student",
    title: "Documentation Coordinator, IEEE CNAG Kerala Section",
    affiliation: "Technical Documentation & Process Governance Specialist",
    ieeeGrade: "Member, IEEE",
    year: "2026–2027",
    initials: "SS",
    image: `${import.meta.env.BASE_URL}execom/saaya-saleesh.jpg?v=2`,
    accentColor: "from-teal-600 to-cyan-600",
    domains: ["Technical Documentation", "Process Governance", "Executive Reporting", "Records Management"],
    bio: "Documentation Coordinator for IEEE CNAG Kerala Section, responsible for official records management, executive reporting, meeting proceedings, and technical documentation workflows.",
    email: "saayyasaleesh@gmail.com",
    phone: "+91 95396 36953",
    linkedin: "https://www.linkedin.com/in/saaya-saleesh",
  },
  {
    id: "aryananda-k",
    name: "Aryananda K",
    role: "Content Coordinator",
    category: "member",
    tier: "student",
    title: "Content Coordinator, IEEE CNAG Kerala Section",
    affiliation: "Digital Content Strategist & Communications Specialist",
    ieeeGrade: "Member, IEEE",
    year: "2026–2027",
    initials: "AK",
    image: `${import.meta.env.BASE_URL}execom/aryananda-k.jpg`,
    accentColor: "from-amber-600 to-rose-600",
    domains: ["Content Strategy", "Digital Communications", "Editorial Direction", "Technical Writing"],
    bio: "Content Coordinator for IEEE CNAG Kerala Section, orchestrating communications strategy, editorial writeups, newsletters, and promotional outreach for consulting programs.",
    email: "aryanandaknair21@gmail.com",
    phone: "+91 94467 75320",
    linkedin: "https://www.linkedin.com/in/aryananda-k-108646411",
  },
  {
    id: "devashis",
    name: "Devashis",
    role: "Membership & Helpdesk Coordinator",
    category: "member",
    tier: "student",
    title: "Membership & Helpdesk Coordinator, IEEE CNAG Kerala Section",
    affiliation: "Community Operations & Member Relations Specialist",
    ieeeGrade: "Member, IEEE",
    year: "2026–2027",
    initials: "D",
    image: `${import.meta.env.BASE_URL}execom/devashis.jpg`,
    accentColor: "from-purple-600 to-blue-600",
    domains: ["Membership Development", "Helpdesk Operations", "Member Onboarding", "Community Engagement"],
    bio: "Membership & Helpdesk Coordinator for IEEE CNAG Kerala Section, managing member queries, consultant onboarding, helpdesk operations, and community engagement.",
    email: "dev.ashi279@gmail.com",
    phone: "+91 73569 26042",
    linkedin: "https://www.linkedin.com/in/devashis-s-b67ab8360",
  },
  {
    id: "hawin-sojan",
    name: "Hawin Sojan",
    role: "Event Coordinator",
    category: "member",
    tier: "student",
    title: "Event Coordinator, IEEE CNAG Kerala Section",
    affiliation: "Technical Events Manager & Program Coordinator",
    ieeeGrade: "Member, IEEE",
    year: "2026–2027",
    initials: "HS",
    image: `${import.meta.env.BASE_URL}execom/hawin-sojan.jpg`,
    accentColor: "from-indigo-600 to-sky-600",
    domains: ["Event Management", "ConsulTalks Logistics", "Program Operations", "Technical Masterclasses"],
    bio: "Event Coordinator for IEEE CNAG Kerala Section, leading the planning, speaker curation, and execution of flagship ConsulTalks sessions, technical conferences, and workshops.",
    email: "hawinsojan.tech@gmail.com",
    phone: "+91 86376 24537",
    linkedin: "https://www.linkedin.com/in/hawinsojan",
  },
  {
    id: "ks-kalidasan",
    name: "K. S. Kalidasan",
    role: "Social Media Coordinator",
    category: "member",
    tier: "student",
    title: "Social Media Coordinator, IEEE CNAG Kerala Section",
    affiliation: "Digital Outreach & Social Media Specialist",
    ieeeGrade: "Student Member, IEEE",
    year: "2026–2027",
    initials: "KSK",
    accentColor: "from-rose-600 to-orange-600",
    domains: ["Social Media Strategy", "Community Outreach", "Digital Campaigns", "Brand Engagement"],
    bio: "Social Media Coordinator for IEEE CNAG Kerala Section, managing social media channels, interactive engagement campaigns, and digital branding for affinity group initiatives.",
    email: "kalidasan.ks@ieee.org",
    linkedin: "https://www.linkedin.com/in/ks-kalidasan",
  },
];

export const executiveCommittee: CommitteeMember[] = [
  ...professionalExecom,
  ...studentExecom,
];

export const officeBearers = professionalExecom.filter((m) => m.category === "officer");
export const seniorAdvisors = professionalExecom.filter((m) => m.category === "advisor");
export const generalExecomMembers = studentExecom;
export const execomMembers = executiveCommittee;

export const events = [
  {
    id: "consultalks-sustainable",
    title: "ConsulTalks: Sustainable Engineering Consultancy",
    date: "Flagship Series",
    category: "ConsulTalks",
    tag: "Flagship",
    badge: "Keynote Series",
    image: "https://r10.ieee.org/kerala-cn/wp-content/uploads/sites/116/Poster1--768x994.jpg",
    summary:
      "A flagship talk series examining how independent engineering consultants build resilient, high-impact practices that endure ethically, commercially, and environmentally.",
    highlights: ["Ethical Practice Charters", "Commercial Contract Structuring", "Client Risk Mitigation"],
  },
  {
    id: "roadmap-consultancy",
    title: "Roadmap to Professional Consultancy",
    date: "Career & Practice",
    category: "Career",
    tag: "Professional Growth",
    badge: "Masterclass",
    image: "https://r10.ieee.org/kerala-cn/wp-content/uploads/sites/116/Poster2-768x614.png",
    summary:
      "A structured pathway for IEEE members transitioning into independent practice — covering proposal bidding, intellectual property, and client engagement.",
    highlights: ["First Engagement Playbook", "Pricing Strategy", "IEEE Liability Guidelines"],
  },
  {
    id: "scaling-msme-esg",
    title: "Scaling MSMEs with ESG & Sustainability Reporting",
    date: "Industry Session",
    category: "Industry",
    tag: "ESG & Policy",
    badge: "Industry Round",
    image: "https://r10.ieee.org/kerala-cn/wp-content/uploads/sites/116/cnag001-768x768.jpg",
    summary:
      "How engineering consultants guide Kerala enterprises to achieve sustainable growth while conforming to rigorous national and global ESG disclosure requirements.",
    highlights: ["Carbon Accounting", "BRSR Frameworks", "Supply Chain Auditing"],
  },
  {
    id: "green-netzero-buildings",
    title: "Engineering Green & Net-Zero Energy Buildings",
    date: "Built Environment",
    category: "Built Environment",
    tag: "Clean Tech",
    badge: "Technical",
    image: "https://r10.ieee.org/kerala-cn/wp-content/uploads/sites/116/cnag2020-3-768x768.jpg",
    summary:
      "Technical deep-dive on high-performance envelope design, smart HVAC optimization, and energy simulation tools required for zero-emission infrastructure.",
    highlights: ["ECBC Code Compliance", "BIM & Energy Modelling", "Microgrid Integration"],
  },
  {
    id: "green-energy-biogas",
    title: "New Horizons in Green Energy: Biogas & Biochar",
    date: "Energy Transition",
    category: "Energy",
    tag: "Renewables",
    badge: "Symposium",
    image: "https://r10.ieee.org/kerala-cn/wp-content/uploads/sites/116/IMG-20210727-WA0008-768x768.jpg",
    summary:
      "Techno-commercial viability of advanced waste-to-energy biogas digesters and agricultural biochar production for decentralised power generation.",
    highlights: ["Biogas Scrubbing & Bottling", "Decentralized Micro-generation", "Carbon Offset Models"],
  },
  {
    id: "cnag-community-roundtable",
    title: "CNAG Kerala Practice Exchange & Networking",
    date: "Community Session",
    category: "Network",
    tag: "Networking",
    badge: "Roundtable",
    image: "https://r10.ieee.org/kerala-cn/wp-content/uploads/sites/116/cnag2020-1-768x768.jpg",
    summary:
      "Peer exchange roundtable connecting independent practitioners with student affinity groups to explore collaborative tender bidding and advisory syndicates.",
    highlights: ["Multi-disciplinary Syndicates", "Mentorship Circles", "Public Tender Insights"],
  },
];

export const consultants = [
  {
    id: "power-energy",
    name: "Power Systems & Energy Transition",
    domain: "Energy",
    focus: "Grid stability, renewable microgrids, biogas power, substation design, and utility tariff consulting.",
    status: "Active Roster",
    leads: "Er. A. Suhair & Team",
    tags: ["Grid Modernization", "Solar PV", "Power Quality", "Energy Audit"],
  },
  {
    id: "embedded-vlsi",
    name: "Embedded Systems & AI Hardware",
    domain: "Electronics",
    focus: "Neuromorphic chip design, edge AI acceleration, FPGA prototyping, and hardware security verification.",
    status: "Active Roster",
    leads: "Dr. Alex James & Team",
    tags: ["VLSI", "Edge AI", "IoT Hardware", "Analog Circuits"],
  },
  {
    id: "automation-iiot",
    name: "Industrial IoT & Smart Automation",
    domain: "Automation",
    focus: "SCADA systems, process telemetry, PLC programming, predictive maintenance, and Industry 4.0 integration.",
    status: "Active Roster",
    leads: "Er. Kishan Kartha & Team",
    tags: ["SCADA", "Industrial IoT", "Automation", "Sensors"],
  },
  {
    id: "sustainability-esg",
    name: "Sustainability & ESG Advisory",
    domain: "ESG",
    focus: "MSME decarbonization roadmaps, ESG materiality assessments, carbon credit verifications, and BRSR filings.",
    status: "Active Roster",
    leads: "Er. Akhil Manikandan & Team",
    tags: ["ESG Reporting", "Carbon Footprint", "Net-Zero", "BRSR Compliance"],
  },
  {
    id: "software-cloud",
    name: "Cloud Architecture & Cybersecurity",
    domain: "Software",
    focus: "Zero-trust architectures, cloud migration feasibility, SOC governance, and systems resilience testing.",
    status: "Active Roster",
    leads: "Dr. Mini Ulanat & Team",
    tags: ["Cloud Security", "Enterprise Systems", "ISO 27001", "DevSecOps"],
  },
  {
    id: "biomedical-tech",
    name: "Biomedical & Healthcare Technology",
    domain: "Healthcare",
    focus: "Medical instrumentation review, ISO 13485 certification advisory, biosignal acquisition, and device validation.",
    status: "Active Roster",
    leads: "Dr. Bijuna Kunju & Team",
    tags: ["Medical Devices", "Biosignals", "ISO 13485", "Clinical Tech"],
  },
  {
    id: "built-environment",
    name: "Net-Zero Built Environment",
    domain: "Buildings",
    focus: "Green building certification, ECBC compliance, computational energy modelling, and smart lighting design.",
    status: "Active Roster",
    leads: "Prof. V. K. Damodaran & Team",
    tags: ["Green Buildings", "Energy Simulation", "HVAC Efficiency", "LEED/GRIHA"],
  },
  {
    id: "pmo-governance",
    name: "Project Management Office (PMO)",
    domain: "Management",
    focus: "Techno-commercial project audits, contract administration, lifecycle risk governance, and tender preparation.",
    status: "Active Roster",
    leads: "Er. K. R. Venugopal & Team",
    tags: ["PMO", "Feasibility Studies", "Tender Evaluation", "Risk Governance"],
  },
];

export const resources = [
  {
    title: "IEEE Kerala Section Official Portal",
    href: "https://ieeekerala.org/",
    category: "Section",
    note: "Parent section hub — affinity groups, technical chapters, and official announcements.",
  },
  {
    title: "IEEE-USA Consultants Network (AICN)",
    href: "https://ieeeusa.org/careers/consultants/",
    category: "Global Practice",
    note: "Global consultant directories, practice management guidelines, standard agreements, and ethical frameworks.",
  },
  {
    title: "IEEE Collabratec Consulting Community",
    href: "https://ieee-collabratec.ieee.org/",
    category: "Collaboration",
    note: "Global professional network, mentorship circles, peer discussions, and multi-disciplinary syndicate formation.",
  },
  {
    title: "IEEE Xplore Digital Library",
    href: "https://ieeexplore.ieee.org/",
    category: "Research",
    note: "Over 5 million peer-reviewed technical publications and international standards powering technical advisory.",
  },
  {
    title: "IEEE Standards Association",
    href: "https://standards.ieee.org/",
    category: "Standards",
    note: "Global benchmarks for electrical safety, telecom, cybersecurity, software engineering, and clean energy.",
  },
  {
    title: "IEEE Kerala Affinity Groups Network",
    href: "https://ieeekerala.org/affinity-groups/",
    category: "Section",
    note: "Collaborative ecosystem alongside Women in Engineering (WIE), Young Professionals (YP), SIGHT, and Life Members.",
  },
];

