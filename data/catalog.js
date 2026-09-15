// HBO resilient catalog.
// YouTube Movies/DRM listings are intentionally forbidden because they cannot
// be relied upon in third-party embeds. Only ordinary full-length distributor
// uploads with family-safe programming are eligible.
window.HERMIT_CATALOG = [
  { id:"HBO-SAFE-001", title:"Daddy Daughter Trip", year:2025, collection:"Family Comedy Premiere", runtimeSeconds:5795, videoId:"fIhM9MiEN50", source:"Movie Central", networkChannel:"HBO", contentClass:"Family", cleared:true },
  { id:"HBO-SAFE-002", title:"Mayberry Man", year:2022, collection:"Small-Town Comedy", runtimeSeconds:5927, videoId:"a_AwfI9TPY8", source:"EncourageTV", networkChannel:"HBO", contentClass:"Family", cleared:true },
  { id:"HBO-SAFE-003", title:"Accidental Family", year:2021, collection:"Romantic Comedy", runtimeSeconds:5672, videoId:"XH63ZMpgsAk", source:"Movie Central", networkChannel:"HBO", contentClass:"Family", cleared:true },
  { id:"HBO-SAFE-004", title:"Pretty Outrageous", year:2017, collection:"Teen Comedy", runtimeSeconds:4542, videoId:"wbzh-m3cCmc", source:"Family Central", networkChannel:"HBO", contentClass:"Family", cleared:true },
  { id:"HBO-SAFE-005", title:"Opposite Day", year:2009, collection:"Family Movie Night", runtimeSeconds:4856, videoId:"M18tKPAGlJ4", source:"Girls Night In Movies", networkChannel:"HBO", contentClass:"Family", cleared:true },
  { id:"HBO-SAFE-006", title:"Stinky Summer", year:2025, collection:"Summer Adventure", runtimeSeconds:5415, videoId:"Gxa3gWpVPes", source:"Family Central", networkChannel:"HBO", contentClass:"Family", cleared:true },
  { id:"HBO-SAFE-007", title:"Cleaver Family Reunion", year:2013, collection:"Family Reunion Comedy", runtimeSeconds:5445, videoId:"r7urqvC_avI", source:"Movie Central", networkChannel:"HBO", contentClass:"Family", cleared:true }
].map(movie => ({ ...movie, posterUrl:"" }));

window.INFINITY_CHANNEL = {
  id:"HBO",
  sourcePolicy:"No YouTube Movies DRM IDs, R-rated movies, age-restricted videos, trailers, promos or short clips.",
  schedulePolicy:"Only ordinary full-length distributor uploads may enter the live rotation."
};

window.HERMIT_COMMERCIALS = [
  { id:"AD-001", title:"HBO intermission", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-002", title:"Tonight on HBO", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-003", title:"Now showing", durationSeconds:60, videoId:"", cleared:true }
];

(function syncInfinityChannels(){
  if (document.querySelector('script[data-infinity-channels]')) return;
  const script = document.createElement('script');
  script.src = 'https://www-infinity4.github.io/TNT/channels.js?v=20260915-live1';
  script.dataset.infinityChannels = '1';
  document.head.appendChild(script);
})();
