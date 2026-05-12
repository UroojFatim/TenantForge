import { Badge, Button, Card, Container, SectionHeading } from '@bizpilothub/ui'
import type { DashboardMetric, FeatureCard, NavigationLink, RoadmapMilestone } from '@bizpilothub/types'
import { normalizeUrl } from '@bizpilothub/utils'

const navigationLinks: NavigationLink[] = [
  { label: 'Foundation', href: '#foundation' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Roadmap', href: '#roadmap' },
]

const featureCards: FeatureCard[] = [
  {
    title: 'Monorepo first',
    description: 'Apps and shared packages live together with npm workspaces and Turbo orchestration.',
    detail: 'Keep app code, shared primitives, and repo tooling aligned without duplicated setup.',
  },
  {
    title: 'TypeScript everywhere',
    description: 'Both apps and shared packages use shared TypeScript presets from the start.',
    detail: 'Add future modules with fewer integration surprises and clearer boundaries.',
  },
  {
    title: 'Docker ready',
    description: 'Development Dockerfiles and Compose are in place for web, API, and MongoDB.',
    detail: 'Use the same workspace structure locally and later when the deployment path is added.',
  },
  {
    title: 'Shared foundations',
    description: 'UI, types, utilities, lint, and tsconfig packages are ready for reuse.',
    detail: 'New features can grow from stable primitives instead of adding one-off app code.',
  },
]

const roadmap: RoadmapMilestone[] = [
  {
    title: 'Authentication',
    summary: 'Add the first auth provider and session flow after the foundation is stable.',
    status: 'next',
  },
  {
    title: 'MongoDB integration',
    summary: 'Wire the data layer and repository boundaries when the schema direction is decided.',
    status: 'next',
  },
  {
    title: 'Organizations and RBAC',
    summary: 'Introduce tenancy, memberships, and permissions on top of the shared app shell.',
    status: 'later',
  },
  {
    title: 'Deployment hardening',
    summary: 'Add production build, environment, and runtime concerns once the app surfaces settle.',
    status: 'later',
  },
]

const dashboardMetrics: DashboardMetric[] = [
  { label: 'Workspaces', value: '1', change: 'Starter structure only' },
  { label: 'Shared packages', value: '5', change: 'UI, types, utils, config' },
  { label: 'Infra targets', value: '3', change: 'Web, API, MongoDB' },
]

const apiBaseUrl = normalizeUrl(import.meta.env.VITE_API_URL, 'http://localhost:4000')

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Container className="topbar__inner">
            <a className="brand" href="#top" aria-label="BizPilotHub home">
            <span className="brand__mark">BP</span>
            <span className="brand__copy">
              <strong>BizPilotHub</strong>
              <span>Monorepo foundation</span>
            </span>
          </a>

          <nav className="topbar__nav" aria-label="Primary">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </Container>
      </header>

      <main id="top">
        <section className="hero">
          <Container className="hero__grid">
            <div className="hero__copy">
              <Badge tone="accent">Foundation only</Badge>
              <h1>BizPilotHub is now structured for the long run.</h1>
              <p>
                This repo now starts with npm workspaces, Turbo, shared TypeScript presets,
                reusable packages, and Docker scaffolding so the next features can land cleanly.
              </p>
              <div className="hero__actions">
                <Button href="#roadmap">See the roadmap</Button>
                <Button href="#dashboard" variant="secondary">
                  Open the dashboard shell
                </Button>
              </div>
              <dl className="hero__facts" id="foundation">
                <div>
                  <dt>Web API target</dt>
                  <dd>{apiBaseUrl}</dd>
                </div>
                <div>
                  <dt>Build system</dt>
                  <dd>Vite + Turbo</dd>
                </div>
                <div>
                  <dt>Backend runtime</dt>
                  <dd>Express + TypeScript</dd>
                </div>
              </dl>
            </div>

            <Card className="hero__status-panel">
              <div className="hero__status-header">
                <Badge tone="success">Ready for next work</Badge>
                <span>BizPilotHub workspace state</span>
              </div>
              <div className="hero__status-grid">
                {dashboardMetrics.map((metric) => (
                  <article key={metric.label} className="metric-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    <small>{metric.change}</small>
                  </article>
                ))}
              </div>
              <div className="hero__status-footer">
                <p>Auth and MongoDB are intentionally not wired yet.</p>
                <p>That work can start on top of this structure without a rewrite.</p>
              </div>
            </Card>
          </Container>
        </section>

        <section className="section section--features">
          <Container>
            <SectionHeading
              eyebrow="Workspace foundation"
              title="The repository now has a durable shape."
              description="Shared packages and app boundaries are in place so the next product work can be added without reshuffling the repo again."
            />

            <div className="feature-grid">
              {featureCards.map((feature) => (
                <Card key={feature.title} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <span>{feature.detail}</span>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="section section--dashboard" id="dashboard">
          <Container>
            <SectionHeading
              eyebrow="Placeholder app shell"
              title="A dashboard frame is ready for the future product surface."
              description="This is only a starter shell right now. It gives you a clean landing area for authenticated app flows, tenant views, and later modules."
            />

            <div className="dashboard-shell">
              <Card className="dashboard-shell__sidebar">
                <Badge tone="warning">Draft</Badge>
                <h3>BizPilotHub dashboard</h3>
                <p>Reserved space for navigation, workspace context, and future product modules.</p>
                <ul>
                  <li>Overview</li>
                  <li>Organizations</li>
                  <li>Members</li>
                  <li>Settings</li>
                </ul>
              </Card>

              <div className="dashboard-shell__content">
                <Card className="dashboard-shell__panel dashboard-shell__panel--wide">
                  <div className="dashboard-shell__panel-header">
                    <div>
                      <Badge>Workspace overview</Badge>
                      <h3>Placeholder metrics</h3>
                    </div>
                    <Button href="#roadmap" variant="ghost">
                      Continue planning
                    </Button>
                  </div>

                  <div className="dashboard-shell__panel-grid">
                    {dashboardMetrics.map((metric) => (
                      <article key={metric.label} className="panel-metric">
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                        <p>{metric.change}</p>
                      </article>
                    ))}
                  </div>
                </Card>

                <Card className="dashboard-shell__panel dashboard-shell__panel--stacked">
                  <Badge tone="accent">Upcoming work</Badge>
                  <h3>Ready for auth and tenant scaffolding</h3>
                  <p>
                    The structure is intentionally thin so future modules can own their own data,
                    routes, and feature boundaries.
                  </p>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <section className="section" id="roadmap">
          <Container>
            <SectionHeading
              eyebrow="Roadmap"
              title="The next implementation phases are clearly separated from the foundation."
              description="The codebase is ready for the future work you outlined, but those features are not implemented yet."
            />

            <div className="roadmap-list">
              {roadmap.map((item) => (
                <Card key={item.title} className="roadmap-card">
                  <div className="roadmap-card__header">
                    <h3>{item.title}</h3>
                    <Badge tone={item.status === 'now' ? 'success' : item.status === 'next' ? 'accent' : 'neutral'}>
                      {item.status}
                    </Badge>
                  </div>
                  <p>{item.summary}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <footer className="footer">
        <Container className="footer__inner">
          <p>BizPilotHub monorepo foundation.</p>
          <p>Built for long-term expansion, not for placeholder auth or database shortcuts.</p>
        </Container>
      </footer>
    </div>
  )
}

export default App