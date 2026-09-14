// Unique seed bucket 3/8 for HBO.
// Control Phi's movie source farm expands this channel toward 96 distinct,
// profile-matched full movies. The seed IDs are never shared with another
// movie-channel seed catalog.
(function(){
  "use strict";

  const rows = [
    ["Opposite Day",4856,"M18tKPAGlJ4","Girls Night In Movies"],
    ["Stinky Summer",5415,"Gxa3gWpVPes","Family Central"],
    ["Space Dogs: Adventures to the Moon",4547,"rnl9rrARyNc","Family Central"],
    ["Albert: Up, Up and Away!",4821,"orI0kGFOncY","Shout! Studios"],
    ["Super Bear",5113,"G_Frl_QRVqs","Family Central"],
    ["Dino King: Journey to Fire Mountain",5653,"1w0CUvjRAqc","Family Central"],
    ["Island of Lost Girls",6116,"vBM107TcfVU","Family Central"],
    ["Hearts & Horses",3919,"hmpKtzVF4-E","EncourageTV"],
    ["The Ground Beneath Our Feet",5375,"tCEItdHHkws","EncourageTV"],
    ["Touched by Grace",5735,"5FFoURg1Y6o","Christian Movies"],
    ["Meant to Be",5967,"KIAxYLg8rBo","Pinnacle Peak"],
    ["A Family Lost",5252,"VRITJKBXABI","Movie Central"],
    ["A Monster in Paris",5392,"MdMhe5BEw_w","Shout! Studios"],
    ["A Plumm Summer",6134,"TZR9exgWiJQ","Shout! Studios"],
    ["The Fairy Princess and the Unicorn",4833,"LlP7Zd0gBgI","Shout! Studios"],
    ["Asterix: The Mansion of the Gods",5123,"tgSOI0DwpoE","Shout! Studios"],
    ["Asterix: The Secret of the Magic Potion",4890,"H57O9gyNrM0","Shout! Studios"]
  ];

  window.HERMIT_CATALOG=rows.map(function(row,index){return{id:"HBO-SEED-"+String(index+1).padStart(3,"0"),title:row[0],year:null,collection:"Premium Drama / Crime Seed",runtimeSeconds:row[1],videoId:row[2],source:row[3],networkChannel:"HBO",contentClass:"Seed Feature",rating:"Unrated",cleared:true,posterUrl:""};});
  window.INFINITY_CHANNEL={id:"HBO",sourcePolicy:"Unique static seed bucket 3/8. Runtime catalog expansion comes from HBO's own Control Phi source profile.",schedulePolicy:"Seven-day no-repeat scheduler. Missing inventory stays empty until unique sources are harvested; it never wraps the seed list."};
  window.HERMIT_COMMERCIALS=[{id:"AD-001",title:"HBO intermission",durationSeconds:60,videoId:"",cleared:true}];
})();
