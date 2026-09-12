// HBO's modern rotation. Sources are current full-length YouTube Movies or
// established distributor uploads that reported playable embedding when added.
// Availability is rechecked in the player and failed sources are replaced.
window.HERMIT_CATALOG = [
  { id:"HBO-001", title:"Serenity", year:2005, collection:"Space Epic", runtimeSeconds:7140, videoId:"WPXS9UtDmyQ", source:"YouTube Movies", networkChannel:"HBO", cleared:true },
  { id:"HBO-002", title:"Mean Girls", year:2004, collection:"Modern Comedy Classic", runtimeSeconds:5820, videoId:"HPkDFc8hq5c", source:"YouTube Movies", networkChannel:"HBO", cleared:true },
  { id:"HBO-003", title:"Honest Thief", year:2020, collection:"Prime-Time Action", runtimeSeconds:5940, videoId:"BqluXcZ9RyU", source:"YouTube Movies", networkChannel:"HBO", cleared:true },
  { id:"HBO-004", title:"World Trade Center", year:2006, collection:"Prestige Drama", runtimeSeconds:7740, videoId:"KVk4ATEGb8Q", source:"YouTube Movies", networkChannel:"HBO", cleared:true },
  { id:"HBO-005", title:"Skyline", year:2010, collection:"Science-Fiction Event", runtimeSeconds:5640, videoId:"DXf-NpZuCZ8", source:"YouTube Movies", networkChannel:"HBO", cleared:true },
  { id:"HBO-006", title:"Blitz", year:2011, collection:"After-Hours Action", runtimeSeconds:5820, videoId:"EMvIgNcej-w", source:"YouTube Movies", networkChannel:"HBO", cleared:true },
  { id:"HBO-007", title:"Alone", year:2020, collection:"Survival Thriller", runtimeSeconds:5880, videoId:"69C1s6oMs64", source:"YouTube Movies", networkChannel:"HBO", cleared:true },
  { id:"HBO-008", title:"Beyond a Reasonable Doubt", year:2009, collection:"Courtroom Thriller", runtimeSeconds:6360, videoId:"L9AQELWJkFA", source:"YouTube Movies", networkChannel:"HBO", cleared:true },
  { id:"HBO-009", title:"Are You Here", year:2013, collection:"Comedy Drama", runtimeSeconds:6840, videoId:"6f2YlLBqclo", source:"YouTube Movies", networkChannel:"HBO", cleared:true },
  { id:"HBO-010", title:"Mad Families", year:2017, collection:"Weekend Comedy", runtimeSeconds:5400, videoId:"8jyuUeCiWEk", source:"YouTube Movies", networkChannel:"HBO", cleared:true },
  { id:"HBO-011", title:"The Fanatic", year:2019, collection:"Midnight Thriller", runtimeSeconds:5280, videoId:"9YcPkigDdqw", source:"Quiver Distribution", networkChannel:"HBO", cleared:true },
  { id:"HBO-012", title:"Bromates", year:2022, collection:"Late-Night Comedy", runtimeSeconds:5820, videoId:"MTjKBwIhJ20", source:"Quiver Distribution", networkChannel:"HBO", cleared:true },
  { id:"HBO-013", title:"The Presence", year:2010, collection:"Supernatural Sunday", runtimeSeconds:6097, videoId:"PsuWXuhy2VU", source:"Movie Central", networkChannel:"HBO", cleared:true },
  { id:"HBO-014", title:"Monsters of Man", year:2020, collection:"Future Shock", runtimeSeconds:7920, videoId:"VZQmj6bH5cY", source:"Movie Central", networkChannel:"HBO", cleared:true }
].map(movie => ({ ...movie, posterUrl:"" }));

window.INFINITY_CHANNEL = {
  id:"HBO",
  era:"2000-2026",
  schedulePolicy:"No title or YouTube video ID may air on another Infinity channel on the same station date."
};

// Add sponsor video IDs here. Blank IDs display synchronized station cards.
window.HERMIT_COMMERCIALS = [
  { id:"AD-001", title:"HBO intermission", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-002", title:"Tonight on HBO", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-003", title:"Now showing", durationSeconds:60, videoId:"", cleared:true }
];

// Shared Infinity channel registry keeps every active channel hamburger in sync.
(function syncInfinityChannels(){
  if (document.querySelector('script[data-infinity-channels]')) return;
  const script = document.createElement('script');
  script.src = 'https://www-infinity4.github.io/TNT/channels.js';
  script.dataset.infinityChannels = '1';
  document.head.appendChild(script);
})();
