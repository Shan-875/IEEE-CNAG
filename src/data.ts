export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  category: "officer" | "member" | "advisor";
  title: string;
  affiliation: string;
  ieeeGrade: string;
  year?: string;
  domains: string[];
  bio?: string;
  email?: string;
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
  { to: "/consultants", label: "Find Consultant" },
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

export const executiveCommittee: CommitteeMember[] = [
  {
    id: "suhair",
    name: "Er. A. Suhair",
    role: "Chair",
    category: "officer",
    title: "Chair, IEEE CNAG Kerala Section",
    affiliation: "Former Chief Engineer, KSEB | Senior Power & Energy Consultant",
    ieeeGrade: "Senior Member, IEEE",
    year: "2024–2025",
    initials: "AS",
    accentColor: "from-blue-600 to-cyan-500",
    domains: ["Power Systems", "Grid Reliability", "Substation Automation", "Energy Audit"],
    bio: "Distinguished power systems leader with over 3 decades of spearheading power transmission, grid modernization, and electrical safety standards across Kerala's energy landscape.",
    email: "suhair.ieee@gmail.com",
    linkedin: "https://www.linkedin.com/in/a-suhair",
  },
  {
    id: "alex-james",
    name: "Dr. Alex James",
    role: "Vice-Chair",
    category: "officer",
    title: "Vice-Chair, IEEE CNAG Kerala Section",
    affiliation: "Dean of Academic & Research, Digital University Kerala (DUK)",
    ieeeGrade: "Fellow IET, Senior Member IEEE",
    year: "2024–2025",
    initials: "AJ",
    accentColor: "from-sky-600 to-indigo-600",
    domains: ["AI Hardware", "Neuromorphic VLSI", "Edge Intelligence", "Semiconductor Systems"],
    bio: "Internationally recognized researcher and consultant in neuromorphic engineering, analog AI circuits, and next-generation brain-inspired semiconductor architectures.",
    email: "alex.james@ieee.org",
    linkedin: "https://www.linkedin.com/in/alexjamesprof",
  },
  {
    id: "kishan-kartha",
    name: "Er. Kishan Kartha",
    role: "Secretary",
    category: "officer",
    title: "Secretary, IEEE CNAG Kerala Section",
    affiliation: "Industrial Automation & Digital Systems Consultant",
    ieeeGrade: "Senior Member, IEEE",
    year: "2024–2025",
    initials: "KK",
    accentColor: "from-cyan-600 to-blue-700",
    domains: ["Industrial IoT", "SCADA Architecture", "Process Optimization", "Industry 4.0"],
    bio: "Consultant specializing in industrial control systems, telemetry, sensor networks, and operational technology modernization for manufacturing enterprises.",
    email: "kishankartha@ieee.org",
    linkedin: "https://www.linkedin.com/in/kishankartha",
  },
  {
    id: "akhil-manikandan",
    name: "Er. Akhil Manikandan",
    role: "Treasurer",
    category: "officer",
    title: "Treasurer, IEEE CNAG Kerala Section",
    affiliation: "Energy Transition & ESG Strategy Consultant",
    ieeeGrade: "Member, IEEE",
    year: "2024–2025",
    initials: "AM",
    accentColor: "from-blue-700 to-teal-600",
    domains: ["Green Energy", "ESG Frameworks", "Solar Engineering", "MSME Decarbonization"],
    bio: "Advisory specialist in clean energy project feasibility, carbon footprint accounting, and helping regional enterprises establish sustainable ESG reporting frameworks.",
    email: "akhil.manikandan@ieee.org",
    linkedin: "https://www.linkedin.com/in/akhil-manikandan",
  },
  {
    id: "damodaran",
    name: "Prof. V. K. Damodaran",
    role: "Senior Advisor",
    category: "advisor",
    title: "Distinguished Mentor & Senior Advisor",
    affiliation: "International Energy & Environmental Consultant | Former Director, EMC Kerala",
    ieeeGrade: "Life Senior Member, IEEE",
    year: "2024–2025",
    initials: "VKD",
    accentColor: "from-amber-600 to-yellow-600",
    domains: ["Energy Policy", "Clean Tech Governance", "Rural Electrification", "UN SDG Advisory"],
    bio: "Eminent international energy consultant with United Nations advisory experience, leading national energy conservation policies and sustainable environmental initiatives.",
    email: "vkd.energy@ieee.org",
  },
  {
    id: "narayanan",
    name: "Er. A. M. Narayanan",
    role: "Immediate Past Chair",
    category: "advisor",
    title: "Immediate Past Chair & Mentor",
    affiliation: "Senior Consultant, Energy Management & Institutional Policy",
    ieeeGrade: "Life Senior Member, IEEE",
    year: "2024–2025",
    initials: "AMN",
    accentColor: "from-blue-800 to-sky-700",
    domains: ["Energy Conservation", "Power Sector Reform", "Strategic Planning"],
    bio: "Senior energy sector advisor who steered CNAG-KS during its foundational period, advocating for consultant welfare, industry engagement, and regulatory compliance.",
    email: "am.narayanan@ieee.org",
  },
  {
    id: "mcm-nair",
    name: "Er. M. C. M. Nair",
    role: "Execom Member",
    category: "member",
    title: "Executive Committee Member",
    affiliation: "Veteran Telecom & Critical Infrastructure Consultant",
    ieeeGrade: "Senior Member, IEEE",
    year: "2024–2025",
    initials: "MN",
    accentColor: "from-slate-700 to-blue-900",
    domains: ["Telecom Infrastructure", "Fiber Optics", "Network Resiliency"],
    bio: "Expert consultant in high-capacity communication links, emergency communication systems, and telecommunications infrastructure development.",
    email: "mcm.nair@ieee.org",
  },
  {
    id: "sarada",
    name: "Er. Sarada Jaikrishnan",
    role: "Execom Member",
    category: "member",
    title: "Executive Committee Member",
    affiliation: "Senior Systems Engineering Consultant | Former Chair, IEEE Kerala Section",
    ieeeGrade: "Senior Member, IEEE",
    year: "2024–2025",
    initials: "SJ",
    accentColor: "from-indigo-700 to-blue-600",
    domains: ["Systems Engineering", "Software Quality Assurance", "Engineering Leadership"],
    bio: "Trailblazing engineering leader and consultant with deep expertise in mission-critical software systems, quality assurance standards, and organizational mentoring.",
    email: "sarada.j@ieee.org",
  },
  {
    id: "psc-nair",
    name: "Dr. P. S. Chandramohanan Nair",
    role: "Execom Member",
    category: "member",
    title: "Executive Committee Member",
    affiliation: "Professor & Consultant, Power Quality & High Voltage Engineering",
    ieeeGrade: "Senior Member, IEEE",
    year: "2024–2025",
    initials: "PCN",
    accentColor: "from-blue-600 to-teal-500",
    domains: ["Power Quality", "Harmonics Mitigation", "High Voltage Diagnostics"],
    bio: "Academic and industry consultant specializing in industrial power quality mitigation, harmonics analysis, and high voltage equipment testing protocols.",
    email: "psc.nair@ieee.org",
  },
  {
    id: "venugopal",
    name: "Er. K. R. Venugopal",
    role: "Execom Member",
    category: "member",
    title: "Executive Committee Member",
    affiliation: "Industrial Project Management & Techno-Commercial Consultant",
    ieeeGrade: "Senior Member, IEEE",
    year: "2024–2025",
    initials: "KRV",
    accentColor: "from-cyan-700 to-blue-800",
    domains: ["PMO Governance", "Techno-Commercial Audits", "Risk Mitigation"],
    bio: "Senior project management consultant guiding public and private mega-projects through rigorous feasibility evaluations, procurement, and risk mitigation.",
    email: "kr.venugopal@ieee.org",
  },
  {
    id: "bijuna",
    name: "Dr. Bijuna Kunju",
    role: "Execom Member",
    category: "member",
    title: "Executive Committee Member",
    affiliation: "Professor & Consultant, Biomedical Instrumentation & Signal Processing",
    ieeeGrade: "Senior Member, IEEE",
    year: "2024–2025",
    initials: "BK",
    accentColor: "from-teal-600 to-cyan-600",
    domains: ["Biomedical Instrumentation", "Medical Signal Analysis", "Healthcare Tech"],
    bio: "Consultant advising medical tech manufacturers on diagnostic instrumentation, ISO standards compliance, and clinical signal processing algorithms.",
    email: "bijuna.k@ieee.org",
  },
  {
    id: "mini",
    name: "Dr. Mini Ulanat",
    role: "Execom Member",
    category: "member",
    title: "Executive Committee Member",
    affiliation: "Consultant & Researcher, Cybersecurity & Cloud Architecture",
    ieeeGrade: "Senior Member, IEEE",
    year: "2024–2025",
    initials: "MU",
    accentColor: "from-sky-700 to-indigo-700",
    domains: ["Cybersecurity", "Cloud Architecture", "Data Privacy & Governance"],
    bio: "Specialist consultant in enterprise zero-trust architectures, data protection compliance, and securing digital transformation pathways for educational and corporate entities.",
    email: "mini.ulanat@ieee.org",
  },
];

export const officeBearers = executiveCommittee.filter((m) => m.category === "officer");
export const seniorAdvisors = executiveCommittee.filter((m) => m.category === "advisor");
export const generalExecomMembers = executiveCommittee.filter((m) => m.category === "member");
export const execomMembers = executiveCommittee.filter((m) => m.category === "member" || m.category === "advisor");

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

