export const funEmojis = [
  "🚀", // Rocket
  "🪐", // Ringed Planet
  "🌌", // Milky Way
  "🌠", // Shooting Star
  "🌟", // Glowing Star
  "✨", // Sparkles (Starlight)
  "🛸", // Flying Saucer
  "👩‍🚀", // Astronaut
  "👨‍🚀", // Astronaut
  "🌍", // Earth Globe Europe-Africa
  "🌎", // Earth Globe Americas
  "🌏", // Earth Globe Asia-Australia
  "🌕", // Full Moon
  "🌖", // Waning Gibbous Moon
  "🌗", // Last Quarter Moon
  "🌘", // Waning Crescent Moon
  "🌑", // New Moon
  "🌒", // Waxing Crescent Moon
  "🌓", // First Quarter Moon
  "🌔", // Waxing Gibbous Moon
  "🌙", // Crescent Moon
  "💫", // Dizzy (Galaxy-Like)
  "⭐", // Star
  "☀️", // Sun
  "🔥", // Fire (Stellar Activity)
  "🌈", // Rainbow (Space Phenomenon)
  "☄️", // Comet
  "🛰", // Satellite
  "🔭", // Telescope
  "🪐", // Ringed Planet (Duplicate for Variety)
  "🌌", // Milky Way (Duplicate for Variety)
  "👾", // Alien Monster
  "👽", // Alien
  "🛸", // UFO (Duplicate for Variety)
  "🛰", // Satellite (Duplicate for Variety)
  "🚀", // Rocket (Duplicate for Variety)
  "🌠", // Shooting Star (Duplicate for Variety)
  "✨", // Sparkles (Duplicate for Variety)
  "🛸", // UFO (Another duplicate for variety)
];

export const getRandomEmoji = () => {
  return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};
