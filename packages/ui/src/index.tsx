import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes } from 'react'
import { joinClassNames } from '@bizpilothub/utils'

type ContainerProps = HTMLAttributes<HTMLDivElement>

type CardProps = HTMLAttributes<HTMLDivElement>

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: 'neutral' | 'accent' | 'success' | 'warning'
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string
    variant?: 'primary' | 'secondary' | 'ghost'
  }

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow: string
  title: string
  description: string
}

export function Container({ className, ...props }: ContainerProps) {
  return <div className={joinClassNames('bp-container', className)} {...props} />
}

export function Card({ className, ...props }: CardProps) {
  return <div className={joinClassNames('bp-card', className)} {...props} />
}

export function Badge({ className, tone = 'neutral', ...props }: BadgeProps) {
  return (
    <span
      className={joinClassNames('bp-badge', `bp-badge--${tone}`, className)}
      {...props}
    />
  )
}

export function Button({ href, className, children, variant = 'primary', ...props }: ButtonProps) {
  const classes = joinClassNames('bp-button', `bp-button--${variant}`, className)

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}

export function SectionHeading({ className, eyebrow, title, description, ...props }: SectionHeadingProps) {
  return (
    <div className={joinClassNames('bp-section-heading', className)} {...props}>
      <Badge tone="accent" className="bp-section-heading__eyebrow">
        {eyebrow}
      </Badge>
      <h2 className="bp-section-heading__title">{title}</h2>
      <p className="bp-section-heading__description">{description}</p>
    </div>
  )
}

export type { BadgeProps, ButtonProps, CardProps, ContainerProps, SectionHeadingProps }