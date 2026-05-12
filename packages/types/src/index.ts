export type NavigationLink = {
  label: string
  href: string
}

export type FeatureCard = {
  title: string
  description: string
  detail: string
}

export type RoadmapMilestone = {
  title: string
  summary: string
  status: 'now' | 'next' | 'later'
}

export type DashboardMetric = {
  label: string
  value: string
  change: string
}

export type ApiHealthResponse = {
  status: 'ok'
  service: 'api'
  timestamp: string
  version: string
}