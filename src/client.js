// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("hello world :o yooo!!!");

$("#History").click(function(){
  window.location = "/njco/history.html"
});

$("#Records").click(function(){
  window.location = "/njco/records.html"
});

$("#Rulebook").click(function(){
  window.open("https://njcorulebook.onrender.com/", "_blank");
});

$("#Recaps").click(function(){
  window.location = "/njco/draftrecaps.html"
});

$("#HOF").click(function(){
  window.open("https://statmano.github.io/njco-hof/", "_blank");
});

const managers = [
  {
    name: "SOB",
    wins: 187,
    losses: 138,
    ties: 0,
    conf: 5,
    playoffs: 11,
    champGames: 7,
    titles: 3
  },
  {
    name: "Tony",
    wins: 182,
    losses: 142,
    ties: 1,
    conf: 7,
    playoffs: 11,
    champGames: 3,
    titles: 2
  },
  {
    name: "Kevin",
    wins: 15,
    losses: 13,
    ties: 0,
    conf: 1,
    playoffs: 1,
    champGames: 1,
    titles: 0
  },
  {
    name: "Schteve",
    wins: 13,
    losses: 15,
    ties: 0,
    conf: 0,
    playoffs: 0,
    champGames: 0,
    titles: 0
  },
  {
    name: "Travis",
    wins: 143,
    losses: 182,
    ties: 0,
    conf: 2,
    playoffs: 6,
    champGames: 1,
    titles: 1
  },
  {
    name: "Greg",
    wins: 108,
    losses: 102,
    ties: 0,
    conf: 4,
    playoffs: 7,
    champGames: 5,
    titles: 4
  },
  {
    name: "Tommy C",
    wins: 112,
    losses: 98,
    ties: 0,
    conf: 5,
    playoffs: 8,
    champGames: 6,
    titles: 3
  },
  {
    name: "Jack",
    wins: 78,
    losses: 76,
    ties: 0,
    conf: 2,
    playoffs: 3,
    champGames: 1,
    titles: 0
  },
  {
    name: "Cerca",
    wins: 76,
    losses: 50,
    ties: 0,
    conf: 4,
    playoffs: 4,
    champGames: 0,
    titles: 0
  },
  {
    name: "Tyler",
    wins: 58,
    losses: 68,
    ties: 0,
    conf: 0,
    playoffs: 0,
    champGames: 0,
    titles: 0
  },
  {
    name: "Sean L",
    wins: 58,
    losses: 54,
    ties: 0,
    conf: 3,
    playoffs: 3,
    champGames: 2,
    titles: 0
  },
  {
    name: "Seph",
    wins: 43,
    losses: 55,
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
