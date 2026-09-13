# Gururaj KL Portfolio

A single-page React and TypeScript portfolio with responsive editorial styling, accessible Motion animations, resume-based experience, social profiles, and a downloadable resume.

## Local development

```bash
npm install
npm run dev
```

## Profile content

Edit `src/data/portfolio.ts` to maintain profile details, technology groups, education, projects, and social links.

The downloadable resume is served from:

```text
public/Gururaj-KL-Resume.pdf
```

Replace that file whenever a new resume is published while preserving the filename so existing download links continue to work.

## Contact links

The contact section links directly to GitHub, LinkedIn, Facebook, and Instagram. Update their URLs and display handles in the `socialLinks` array in `src/data/portfolio.ts`. The site has no contact form, mail server, or server-side API.

## Quality checks

```bash
npm run lint
npm run build
```

Before deployment, verify the resume download, keyboard navigation, reduced-motion behavior, responsive layouts, and external social links.
