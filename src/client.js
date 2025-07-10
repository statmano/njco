// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("hello world :o yooo");

$("#History").click(function(){
  window.location = "/history.html"
});

$("#Records").click(function(){
  window.location = "/records.html"
});

$("#Rulebook").click(function(){
  window.location = "https://njcorulebook.onrender.com/", "_blank");
});

$("#Recaps").click(function(){
  window.location = "/draftrecaps.html"
});

$("#HOF").click(function(){
  window.open("https://statmano.github.io/njco-hof/", "_blank");
});

const managers = [
  {
    name: "SOB",
    wins: 180,
    losses: 131,
    ties: 0,
    conf: 5,
    playoffs: 11,
    champGames: 7,
    titles: 3
  },
  {
    name: "Tony",
    wins: 178,
    losses: 132,
    ties: 1,
    conf: 7,
    playoffs: 11,
    champGames: 3,
    titles: 2
  },
  {
    name: "Kevin",
    wins: 9,
    losses: 5,
    ties: 0,
    conf: 1,
    playoffs: 1,
    champGames: 1,
    titles: 0
  },
  {
    name: "Schteve",
    wins: 6,
    losses: 8,
    ties: 0,
    conf: 0,
    playoffs: 0,
    champGames: 0,
    titles: 0
  },
  {
    name: "Travis",
    wins: 133,
    losses: 178,
    ties: 0,
    conf: 1,
    playoffs: 5,
    champGames: 0,
    titles: 0
  },
  {
    name: "Greg",
    wins: 100,
    losses: 96,
    ties: 0,
    conf: 3,
    playoffs: 6,
    champGames: 4,
    titles: 4
  },
  {
    name: "Tommy C",
    wins: 103,
    losses: 93,
    ties: 0,
    conf: 5,
    playoffs: 7,
    champGames: 6,
    titles: 3
  },
  {
    name: "Jack",
    wins: 70,
    losses: 70,
    ties: 0,
    conf: 2,
    playoffs: 3,
    champGames: 1,
    titles: 0
  },
  {
    name: "Cerca",
    wins: 66,
    losses: 46,
    ties: 0,
    conf: 3,
    playoffs: 3,
    champGames: 0,
    titles: 0
  },
  {
    name: "Tyler",
    wins: 52,
    losses: 60,
    ties: 0,
    conf: 0,
    playoffs: 0,
    champGames: 0,
    titles: 0
  },
  {
    name: "Sean L",
    wins: 54,
    losses: 44,
    ties: 0,
    conf: 3,
    playoffs: 3,
    champGames: 2,
    titles: 0
  },
  {
    name: "Seph",
    wins: 38,
    losses: 46,
    ties: 0,
    conf: 1,
    playoffs: 1,
    champGames: 0,
    titles: 0
  },
];

var winpct;

managers.sort(function(a,b){
  return b.wins - a.wins;
})

$(function() {
  for (var i = 0; i < managers.length; i++){
    winpct = (managers[i].wins + .5 * managers[i].ties)/(managers[i].wins + managers[i].losses + managers[i].ties);
  $(".records-table").append('<div class="table-data">' + managers[i].name + '</div><div class="table-data">' + managers[i].wins + '-' + managers[i].losses + '-' + managers[i].ties + '</div><div class="table-data">' + winpct.toFixed(3) + '</div><div class="table-data">' + managers[i].conf + '</div><div class="table-data">' + managers[i].playoffs + '</div><div class="table-data">' + managers[i].champGames + '</div><div class="table-data">' + managers[i].titles + '</div>');
  }
});

/* Jeff's history
{
    name: "Jeff",
    wins: 143,
    losses: 124,
    ties: 2,
    conf: 3,
    playoffs: 8,
    champGames: 4,
    titles: 3
  }
  */
