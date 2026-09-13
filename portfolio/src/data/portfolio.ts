import type { Education, PersonalProject, Project, StackGroup } from '../types/portfolio'

export const profile = {
  name: 'Gururaj KL',
  role: 'Full Stack Developer',
  location: 'Bengaluru, Karnataka, India',
  email: 'gururajragavendra7@gmail.com',
  introduction:
    'I am a results-driven Full stack developer with 4+ years of experience building robust, scalable applications across healthcare, printing, and public transport domains.',
  currentFocus:
    'I currently contribute to Olympus at Siemens Healthineers, building maintainable WPF interfaces with MVVM and developing ASP.NET and Entity Framework services for Radiopharma inventory operations.',
  resumeHref: '/Gururaj-KL-Resume.pdf',
}

export const socialLinks = [
  { platform: 'GitHub', handle: '@gururajkl', href: 'https://github.com/gururajkl' },
  { platform: 'LinkedIn', handle: 'gururaj-kl', href: 'https://www.linkedin.com/in/gururaj-kl-33363b188/' },
  { platform: 'Facebook', handle: 'gururaj.ragavendra', href: 'https://www.facebook.com/gururaj.ragavendra' },
  { platform: 'Instagram', handle: '@gururajstagram', href: 'https://www.instagram.com/gururajstagram/' },
]

export const stackGroups: StackGroup[] = [
  { title: 'Applications', items: ['WPF', 'ASP.NET Core', 'ASP.NET', '.NET MAUI', 'Angular'] },
  { title: 'Languages & Data', items: ['C#', 'JavaScript', 'TypeScript', 'SQL Server', 'Oracle SQL', 'PSSQL'] },
  { title: 'Cloud & DevOps', items: ['Azure', 'Docker', 'Kubernetes'] },
  { title: 'AI & Cloud Services', items: ['Semantic Kernel', 'Azure OpenAI', 'Azure AI Search', 'Azure Blob Storage'] },
  { title: 'Engineering', items: ['MVVM', 'Entity Framework', 'Git', 'Jira', 'SourceTree'] },
  { title: 'Tools', items: ['Visual Studio', 'Visual Studio Code', 'Postman', 'Figma'] },
]

export const education: Education[] = [
  {
    qualification: 'BE in Computer Science and Engineering',
    institution: 'Sri Rajarajeswari College of Engineering',
    period: '2018 — 2022',
    detail: 'Graduated with an 8.58 CGPA.',
  },
  {
    qualification: 'PUC — PCMCs',
    institution: 'Sree Lakshmi PU College',
    period: '2017 — 2018',
    detail: 'Completed with 91%.',
  },
]

export const projects: Project[] = [
  {
    title: 'Olympus',
    organization: 'Siemens Healthineers · Senior Software Engineer',
    period: 'Jul 2026 — Present',
    description:
      'An inventory management application supporting Radiopharma business operations in a healthcare software environment.',
    contribution:
      'Developing maintainable desktop interfaces with WPF and MVVM, alongside ASP.NET and Entity Framework functionality and data access for reliable operational workflows.',
    stack: ['WPF', 'MVVM', 'ASP.NET', 'Entity Framework'],
  },
  {
    title: 'Honeywell PrintSet 6',
    organization: 'Sasken Technologies Limited · Full Stack .NET Developer',
    period: 'Apr 2024 — Jul 2026',
    description:
      'Greenfield printer configuration and management software for Honeywell printers, spanning desktop and cross-platform application development.',
    contribution:
      'Contributed across frontend and backend development and integrated context-aware AI capabilities using Azure OpenAI models, search, and blob storage.',
    stack: ['WPF', '.NET MAUI', 'Semantic Kernel', 'Azure OpenAI', 'Azure AI Search', 'Azure Blob Storage'],
  },
  {
    title: 'Kontron AFC',
    organization: 'Sasken Technologies Limited',
    period: 'Jan 2024 — Apr 2024',
    description:
      'A contactless smart-card fare collection platform for public transport, covering products, sales, passenger accounts, releases, validators, and automatic vending machines.',
    contribution:
      'Contributed to optimizing system efficiency to improve the passenger and operator experience across the fare collection workflow.',
    stack: ['.NET', 'Public Transport', 'Smart Card Systems'],
  },
  {
    title: 'Track Machine Connected Smart ALC',
    organization: 'Sasken Technologies Limited · Full Stack .NET Developer',
    period: 'Aug 2022 — Dec 2023',
    description:
      'A connected track-machine application built to support Smart ALC workflows through a responsive desktop experience and distributed backend services.',
    contribution:
      'Implemented new end-to-end features across the WPF client and ASP.NET Core services, investigated defects, and delivered fixes across application, messaging, and data layers.',
    stack: ['WPF', 'ASP.NET Core', 'Akka.NET', 'SQL Server', 'Apache Kafka', 'Docker'],
  },
]

export const personalProjects: PersonalProject[] = [
  {
    title: '2048',
    description:
      'A browser implementation of the classic sliding-tile puzzle, built around score tracking and the familiar goal of reaching the 2048 tile.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    href: 'https://gururajkl.github.io/2048/',
    linkLabel: 'Live demo',
  },
  {
    title: 'SMABYGJ',
    description:
      'A personal full-stack web application developed with the MongoDB, Express, React, and Node.js stack.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    href: 'https://smabygj.herokuapp.com/',
    linkLabel: 'Archived deployment',
  },
  {
    title: 'Pen',
    description:
      'A browser-based drawing tool with brush controls, colors, canvas reset, undo, upload, and download actions.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    href: 'https://gururajkl.github.io/pen/',
    linkLabel: 'Live demo',
  },
  {
    title: 'MangoFusion',
    description:
      'A full-stack food-ordering platform with menu browsing, carts, checkout, order management, authentication, and role-based administration.',
    stack: ['React', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'JWT', 'Redux Toolkit'],
    href: 'https://github.com/gururajkl/MangoFusion',
    linkLabel: 'Source code',
  },
]