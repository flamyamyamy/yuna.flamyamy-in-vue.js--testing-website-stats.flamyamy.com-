export const commandData = [
  {
    title: 'Anime & Manga Database',
    emoji: '⛩️',
    description: 'Access detailed info from the world of Japanese media.',
    commands: [
      { name: '/anime <title>', text: 'Shows a complete overview of an anime, including status, episodes, and a synopsis.' },
      { name: '/character <name>', text: 'Find information and high-quality images of your favorite anime characters.' },
      { name: '/manga <title>', text: 'Displays details about manga volumes, chapters, and the publishing story.' }
    ]
  },
  {
    title: 'User Utilities',
    emoji: '👤',
    description: 'Get insights into server members.',
    commands: [
      { name: '/userinfo [user]', text: 'View join dates, roles, permissions, and unique Discord IDs.' },
      { name: '/avatar [user]', text: 'Fetch the full resolution profile picture of a specific user.' },
      { name: '/banner [user]', text: "Extract and display a user's profile banner in its original size." }
    ]
  },
  {
    title: 'Leveling & Experience',
    emoji: '📊',
    description: 'Track your activity and compete with friends.',
    commands: [
      { name: '/rank', text: 'Displays your personal rank card with current level and XP progress.' },
      { name: '/leaderboard', text: 'View the top 10 most active members on the current server.' },
      { name: '/level-setup', text: '<strong>(Admin Only)</strong> Set up XP multipliers and level-up announcement channels.' }
    ]
  },
  {
    title: 'Inspiration & Quotes',
    emoji: '📜',
    description: 'Get inspired by random quotes.',
    commands: [
      { name: '/quote', text: 'Brings you a random quote from famous authors or historical figures.' }
    ]
  },
  {
    title: 'Social Fun',
    emoji: '🎮',
    description: 'Interactive features to engage with the community.',
    commands: [
      { name: '/ship <user1> <user2>', text: 'Calculates the love compatibility percentage between two users.' },
      { name: '/react <user>', text: 'Sends a stylish ping with a specific anime reaction image to a friend.' }
    ]
  },
  {
    title: 'Social Reactions',
    emoji: '💖',
    description: 'Express yourself using animated GIF commands.',
    commands: [
      { name: '/react <action> @user', text: 'Choose from a wide variety of actions (e.g., hug, pat, slap, kiss) to interact with other users. Just type the command followed by the action and tag a user.' }
    ]
  }
]