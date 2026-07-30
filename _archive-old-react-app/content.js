// ---------------------------------------------------------------------------
// All site copy lives here. Edit freely — components just read from this file.
// ---------------------------------------------------------------------------

export const profile = {
  displayName: 'Lesley Liu',
  fullName: 'Shijia (Lesley) Liu',
  role: 'Architecture Student',
  location: 'Melbourne, Australia',
  email: 'liushijia0227@163.com',
  phone: '+61 0411 490 491',
  statusLine: 'Open to internships & graduate opportunities',
  eyebrow: 'Architecture Portfolio',
  tagline:
    "Master of Architecture candidate exploring speculative and narrative-driven design, from vertical urbanism to exhibition-scale storytelling.",
  bio:
    "I'm a Master of Architecture candidate at the University of Melbourne, interested in how architecture can carry narrative — from speculative skyscraper proposals to exhibition-scale installations. My work has been recognised in international competitions including eVolo Magazine and the AIA Dallas Ken Roberts Memorial Delineation Competition, and I'm currently looking to bring that thinking into practice.",
}

export const education = [
  {
    degree: 'Master of Architecture (MArch)',
    school: 'University of Melbourne',
    period: '2024 – 2027 (Expected)',
    tag: 'Current',
  },
  {
    degree: 'Bachelor of Architecture',
    school: 'Tianjin Chengjian University / Cracow University of Technology',
    period: 'Completed',
    tag: '',
  },
]

export const skills = ['Rhino', 'Grasshopper', 'AutoCAD', 'Revit', 'ArcGIS', 'Blender']

// Sorted most recent first.
export const awards = [
  {
    date: '2024.03',
    title: 'Silver Award',
    detail: 'Exhibition of Architectural Design in Developing Countries',
  },
  {
    date: '2023.10',
    title: 'Finalist',
    detail: 'AIA Dallas Ken Roberts Memorial Delineation Competition',
  },
  {
    date: '2023.05',
    title: 'Honorable Achievement',
    detail:
      'Ocean Fiction — Youth Future Pioneer Series Exhibition, 4th Hainan International Culture Creativity Week, Lingshui',
  },
  {
    date: '2023.04',
    title: 'Honorable Mention',
    detail: 'Skyscraper Competition, eVolo Magazine',
  },
]

// Placeholder project set drawn from the award list above — swap in real
// project names, imagery, and write-ups once you have them.
export const projects = [
  {
    id: '01',
    title: 'Vertical Ocean',
    category: 'Skyscraper Competition',
    year: '2023',
    desc: 'Honorable Mention, eVolo Skyscraper Competition — a speculative high-rise proposal reimagining vertical urbanism.',
    color: 'linear-gradient(160deg, #3b3a35, #8a8578)',
  },
  {
    id: '02',
    title: 'Ocean Fiction',
    category: 'Exhibition',
    year: '2023',
    desc: 'Youth Future Pioneer Series — 4th Hainan International Culture Creativity Week, Lingshui.',
    color: 'linear-gradient(160deg, #5c4a3a, #c9a878)',
  },
  {
    id: '03',
    title: 'Delineation Study',
    category: 'Drawing Competition',
    year: '2023',
    desc: 'Finalist, AIA Dallas Ken Roberts Memorial Delineation Competition.',
    color: 'linear-gradient(160deg, #2e3a36, #6f9188)',
  },
  {
    id: '04',
    title: 'Developing Grounds',
    category: 'Exhibition',
    year: '2024',
    desc: 'Silver Award, Exhibition of Architectural Design in Developing Countries.',
    color: 'linear-gradient(160deg, #4a3b4d, #a988a3)',
  },
]

export const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]
