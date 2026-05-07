export const commandData = [
  {
    title: 'Confessions',
    emoji: '🤫',
    description: 'Foster an anonymous environment where your community members can share thoughts, secrets, or stories without judgment. Our confession system includes robust encryption and moderation tools to keep your server safe while maintaining user privacy.',
    commands: [
      { 
        name: '/confess', 
        text: 'Submit an anonymous confession to the designated channel. Your identity is fully hidden from other users, allowing for true freedom of expression within the server guidelines.' 
      },
      { 
        name: '/reply', 
        text: 'Anonymously respond to a specific confession. This creates a threaded-style interaction where users can offer advice or support without revealing their profiles.' 
      },
      { 
        name: '/confessionsban', 
        text: 'Administrative tool to revoke a user\'s access to the confession system. Essential for preventing trolls from abusing the anonymity feature.' 
      },
      { 
        name: '/review', 
        text: 'Opens the moderation queue for pending confessions. Staff members can approve or deny submissions before they become public to ensure quality control.' 
      }
    ]
  },
  {
    title: 'Fun & Social',
    emoji: '🎮',
    description: 'Boost server engagement with a variety of interactive social commands. From relationship simulators to automated media fetching, these tools are designed to keep the chat active and entertaining for everyone.',
    commands: [
      { 
        name: '/ship <user1> <user2>', 
        text: 'Calculate the compatibility between two users using our unique algorithm. Generates a visual percentage and a custom relationship status message for the pair.' 
      },
      { 
        name: '/cat', 
        text: 'Instantly fetches a high-resolution, adorable feline image or GIF. Perfect for brightening up the mood in any text channel with random cuteness.' 
      },
      { 
        name: '/search', 
        text: 'A powerful internal search engine that allows users to find specific funny content, memes, or previous interactions within the bot\'s library.' 
      },
      { 
        name: '/react <action> <user>', 
        text: 'Forces the bot to add specific emotional reactions to a message, helping to highlight important community moments or inside jokes.' 
      }
    ]
  },
  {
    title: 'Information Systems',
    emoji: 'ℹ️',
    description: 'Access deep insights from external databases and internal server metrics. This module integrates with major APIs to provide real-time data about users, media, and server health.',
    commands: [
      { 
        name: '/anime <title>', 
        text: 'Query the global database for exhaustive details including studio history, airing dates, sequels, and community ratings. Includes spoiler-free synopses.' 
      },
      { 
        name: '/userinfo <user>', 
        text: 'Displays a comprehensive technical profile of a member, including account age, server join dates, permission flags, and unique Discord identifiers.' 
      },
      { 
        name: '/serverinfo <invite>', 
        text: 'Generates a snapshot of the current server status, showing member counts, boost levels, security settings, and owner information in a clean embed.' 
      },
      { 
        name: '/manga <title>', 
        text: 'Search for manga titles to retrieve publication status, chapter counts, and author bibliographies. Perfect for tracking your reading progress.' 
      }
    ]
  },
  {
    title: 'Leveling & Economy',
    emoji: '🏆',
    description: 'Gamify your server experience by rewarding active participation. Our leveling system tracks text and voice activity to grant XP and prestigious roles automatically.',
    commands: [
      { 
        name: '/rank', 
        text: 'Displays your current progress card, showing your level, total XP, and the remaining experience points required to reach the next milestone.' 
      },
      { 
        name: '/leaderboard', 
        text: 'Showcases the most active members of the community. Compete for the top spot and see how you stack up against the server\'s veterans.' 
      },
      { 
        name: '/set-level-role <level> <role>', 
        text: 'Configure automatic role rewards. When a user reaches a specific level, the bot will automatically assign them a new role to show their status.' 
      }
    ]
  },
  {
    title: 'Moderation & Security',
    emoji: '🛡️',
    description: 'Provide your staff team with the power to maintain order. These commands are built for speed and reliability, ensuring that rule-breakers are handled efficiently.',
    commands: [
      { 
        name: '/premium', 
        text: 'Access the subscription management panel to unlock advanced features like custom branding and priority support for your server.' 
      },
      { 
        name: '/vote', 
        text: 'Generates a link to vote for the bot on listing sites. Voting often grants users special rewards or temporary access to premium features.' 
      }
    ]
  }
];