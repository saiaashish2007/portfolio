export type Link = { label: string; href: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  problem: string;
  built: string[];
  highlights: { value: string; label: string }[];
  stack: { group: string; items: string[] }[];
  links: Link[];
  demoLogin?: { user: string; password: string };
};

export const profile = {
  name: 'Sai Bharadwaj',
  school: 'Computer Science · University of Illinois Urbana-Champaign',
  graduation: 'Expected May 2028',
  headline: 'Software engineer focused on applied AI and full-stack development.',
  about: [
    'I am a Computer Science student at the University of Illinois Urbana-Champaign. I build end-to-end software, from data pipelines and model integrations to the interfaces people use, with a focus on voice agents, retrieval systems, and LLM orchestration.',
    'My recent projects span healthcare, legal services, and financial markets. I am currently seeking software engineering and AI/ML internship opportunities.',
  ],
  email: 'saiaashishb@gmail.com',
  github: 'https://github.com/saiaashish2007',
  linkedin: 'https://www.linkedin.com/in/sai-bharadwaj-0b3531277/',
  resume: '/Sai_Bharadwaj_Resume.pdf',
};

export const projects: Project[] = [
  {
    slug: 'cadence',
    name: 'Cadence',
    tagline: 'Voice and message banking for anyone whose speech is at risk.',
    summary:
      'Cadence records people saying the everyday phrases they will need while they can still speak, then uses those recordings to speak for them later — and helps caregivers understand speech that has become hard to follow.',
    problem:
      'About 5,000 Americans are diagnosed with ALS each year and more than 12,000 with laryngeal cancer; stroke, Parkinson’s, MS, and brain injury add many more. Voice banking exists but is badly under-used: patients hear about it too late, and it asks them to read hundreds of arbitrary sentences alone at a computer. Cadence compresses it into one twenty-minute guided session that is useful the same day.',
    built: [
      'A guided banking session over a curated 30-phrase everyday deck that still reaches 100% English phoneme coverage, tracked live in ARPAbet as each take is transcribed.',
      '“Speak for me”: someone asks a question and the patient’s own recorded voice answers. Retrieval is semantic, because “Are you in pain?” shares no words with “I’m in pain.”',
      'A caregiver decoder for slurred speech that returns the likely meaning with a confidence level, plus a confirmation loop that charts each confirmed meaning so the next caregiver benefits.',
      'Every patient, recording, care plan, and confirmation stored as FHIR resources, with audio persisted as Binary so playback works from any serverless instance.',
      'A stateless architecture with client-owned sessions, autosave, and cross-device recovery, after in-memory state failed under Vercel’s serverless model.',
    ],
    highlights: [
      { value: '<10 ms', label: 'phrase retrieval' },
      { value: '100%', label: 'phoneme coverage from 30 phrases' },
      { value: '6', label: 'FHIR resource types charted' },
    ],
    stack: [
      { group: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'] },
      { group: 'AI & speech', items: ['Deepgram STT/TTS', 'Anthropic Claude', 'Moss semantic search'] },
      { group: 'Health data', items: ['Medplum (FHIR)', 'Stedi 270/271 eligibility'] },
      { group: 'Infra', items: ['Vercel serverless'] },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/saiaashish2007/Cadence' },
      { label: 'Live app', href: 'https://cadence-delta-wheat.vercel.app' },
      { label: 'Demo video', href: 'https://youtu.be/Ybc9i6t9J2g' },
    ],
    demoLogin: { user: 'user123', password: 'medplum' },
  },
  {
    slug: 'firstcall',
    name: 'FirstCall',
    tagline: 'An AI voice agent that answers a law firm’s calls and qualifies the case.',
    summary:
      'FirstCall picks up every inbound call to a personal-injury firm, runs the intake conversation, checks the statute of limitations mid-call, and hands the firm a structured, prioritized case file when the caller hangs up.',
    problem:
      'Roughly 60% of law firms are effectively unreachable by phone, and in personal injury a single missed call can be a five-figure case going to the next firm on the list. FirstCall replaces voicemail and callback lag with an agent that captures the client at the moment they are ready to talk.',
    built: [
      'An all-NVIDIA voice pipeline — Parakeet speech-to-text, Nemotron-3-Super reasoning, Magpie text-to-speech — orchestrated with Pipecat over Twilio.',
      'Four tools the model calls mid-conversation: statute-of-limitations lookup (AWS Bedrock RAG), injury severity classification, attorney routing, and ending the call.',
      'A self-improving evaluation loop: every real call is scored by Cekura against intake-quality metrics, and failures automatically patch the agent’s prompt.',
      'A resampling stage bridging Twilio’s 8 kHz audio to the 16 kHz Parakeet requires, which otherwise fails silently with empty transcripts.',
      'A firm-facing console for calls, live tool telemetry, and evaluation scores, backed by a Supabase and S3 post-call pipeline.',
    ],
    highlights: [
      { value: '6-stage', label: 'intake flow' },
      { value: '4', label: 'function-calling tools' },
      { value: 'Auto', label: 'prompt patching from evals' },
    ],
    stack: [
      { group: 'Voice & AI', items: ['Pipecat', 'NVIDIA Parakeet', 'Nemotron-3-Super', 'Magpie TTS', 'Cekura'] },
      { group: 'Backend', items: ['Python', 'FastAPI', 'Twilio', 'AWS Bedrock', 'Supabase', 'S3'] },
      { group: 'Frontend', items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'] },
      { group: 'Infra', items: ['Docker', 'Pipecat Cloud', 'Vercel'] },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/akhimass/FirstCall' },
      { label: 'Live console', href: 'https://firstcalllaw.vercel.app' },
      {
        label: 'Demo video',
        href: 'https://drive.google.com/file/d/1pRKLgKda2NIlZOYrchRQGOnWfBh1sJxI/view?usp=sharing',
      },
    ],
    demoLogin: { user: 'hartley@firstcall.app', password: 'hartley123' },
  },
  {
    slug: 'vetcomply',
    name: 'VetComply',
    tagline: 'Regulatory entity resolution for private-equity-backed veterinary roll-ups.',
    summary:
      'VetComply takes the messy provider and clinic rosters that pile up after a veterinary acquisition and resolves them into canonical identities, exposed through an API, MCP tools for AI agents, and a human review console.',
    problem:
      'When a roll-up acquires dozens of clinics, the same veterinarian or location shows up under different spellings, license numbers, and DEA registrations across systems. Compliance work — DEA renewals, controlled-substance inventories, state licensing — breaks down when nobody can say which records are the same entity.',
    built: [
      'A marketing site and a full interactive product demo in one Next.js app, separated with route groups.',
      'A roster job flow: upload a CSV, then track fuzzy entity resolution as it runs.',
      'A review queue where a human confirms or rejects each proposed match, with an explanation of why it was proposed.',
      'An entity explorer for canonical providers and clinics, plus a developer panel for API keys, MCP configuration, and request logs.',
      'A catalog of the regulatory filings the platform targets (DEA 224a, biennial inventory, DEA 106), marking which an agent can prepare and which need human sign-off.',
    ],
    highlights: [
      { value: 'API + MCP', label: 'agent-native interface' },
      { value: '5', label: 'interactive demo surfaces' },
      { value: 'Human', label: 'review on every match' },
    ],
    stack: [
      { group: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Lucide'] },
      { group: 'Product', items: ['Entity resolution', 'Model Context Protocol (MCP)'] },
      { group: 'Infra', items: ['Vercel'] },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/saiaashish2007/Personal-Projects/tree/main/vetcomply' },
      { label: 'Live site', href: 'https://personal-projects-vert-ten.vercel.app' },
      { label: 'Interactive demo', href: 'https://personal-projects-vert-ten.vercel.app/demo' },
    ],
  },
  {
    slug: 'order-book-engine',
    name: 'Limit Order Book Prediction Engine',
    tagline: 'Short-horizon price direction prediction from live crypto order books.',
    summary:
      'An end-to-end system that ingests live Level 2 order book snapshots from Coinbase and Binance, engineers microstructure features, and predicts whether the mid-price moves up, down, or stays flat over the next few ticks.',
    problem:
      'Most short-term price models look only at trade prices. The order book — who is waiting to buy and sell, and how much — carries information about the next move before it shows up in the price. The challenge is turning a noisy, fast-moving book into features a model can learn from without leaking the future into training.',
    built: [
      'Live Level 2 ingestion from exchange APIs, with a synthetic order book generator for offline development and tests.',
      'Microstructure features: queue imbalance, microprice, spread dynamics, and order flow toxicity.',
      'Direction labels over a configurable horizon with strictly time-ordered train/test splits to prevent lookahead leakage.',
      'A baseline scikit-learn classifier and a DeepLOB-style convolutional model in PyTorch for comparison.',
      'A low-latency REST inference service and a Streamlit trading terminal with real-time depth charts and prediction cards.',
    ],
    highlights: [
      { value: 'L2', label: 'live order book depth' },
      { value: '2', label: 'models: baseline + DeepLOB' },
      { value: '3-class', label: 'up / flat / down' },
    ],
    stack: [
      { group: 'Modeling', items: ['Python', 'PyTorch', 'scikit-learn', 'NumPy', 'pandas'] },
      { group: 'Data', items: ['Coinbase API', 'Binance API'] },
      { group: 'Interface', items: ['Streamlit', 'Plotly', 'REST inference service'] },
      { group: 'Quality', items: ['pytest'] },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/saiaashish2007/Personal-Projects' }],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
