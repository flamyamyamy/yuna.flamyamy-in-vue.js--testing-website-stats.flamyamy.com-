export const commandData = [
  {
    title: 'Anime & Manga Database',
    emoji: '⛩️',
    icon: 'anime',
    description:
      'A powerful gateway into the world of Japanese animation and manga. Retrieve structured information, detailed summaries, and character insights instantly.',
    commands: [
      {
        name: '/anime <title>',
        text:
          'Retrieves a comprehensive overview of any anime title, including release status, episode count, studio information, genres, ratings, and a spoiler-free synopsis designed for quick understanding.'
      },
      {
        name: '/character <name>',
        text:
          'Displays in-depth character profiles from anime and manga, including background lore, affiliations, personality traits, and high-resolution images sourced from verified databases.'
      },
      {
        name: '/manga <title>',
        text:
          'Provides detailed information about manga series including publication status, chapter progression, author details, volume breakdowns, and narrative summaries.'
      }
    ]
  },

  {
    title: 'User Utilities',
    emoji: '👤',
    icon: 'user',
    description:
      'Advanced user inspection tools designed to give clear insights into Discord profiles, activity, and identity data across the server.',
    commands: [
      {
        name: '/userinfo [user]',
        text:
          'Displays a complete profile overview including account creation date, server join history, roles, permissions, and unique Discord identifiers.'
      },
      {
        name: '/avatar [user]',
        text:
          'Fetches the highest-resolution version of a user avatar, optimized for preview or download.'
      },
      {
        name: '/banner [user]',
        text:
          'Extracts the user profile banner in full resolution, including animated banners where available.'
      }
    ]
  }
]