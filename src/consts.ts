import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Lux_',
  description:
    'Blog about web development, programming, CTF and more.',
  href: 'https://lux.pixelserver.fr',
  author: 'Lux_',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'CTF',
  },
  {
    href: '/write_up',
    label: 'Write up',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/luxinenglish',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/lux_in_french',
    label: 'Twitter',
  },
  {
    href: 'mailto:j.brochard@pixelserver.fr',
    label: 'Email',
  },
  {
    href: 'https://portfolio.pixelserver.fr',
    label: 'Website',
  }
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  Discord: './assets/icons/discord.svg',
}
