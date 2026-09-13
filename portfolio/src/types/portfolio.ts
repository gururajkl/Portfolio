export type StackGroup = { title: string; items: string[] }

export type Education = {
  qualification: string
  institution: string
  period: string
  detail: string
}

export type Project = {
  title: string
  organization: string
  period: string
  description: string
  contribution: string
  stack: string[]
  href?: string
}

export type PersonalProject = {
  title: string
  description: string
  stack: string[]
  href: string
  linkLabel: 'Live demo' | 'Source code' | 'Archived deployment'
}