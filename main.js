function createTableRow(data, rank) {
  const skills = [
    "掘削",
    "釣り",
    "農業",
    "採掘",
    "伐採",
    "弓術",
    "斧術",
    "剣術",
    "調教",
    "格闘",
    "アクロバット",
    "醸造",
    "修理",
  ];
  const rowTemplate = document.getElementById("tableTemplate");
  const skillTemplate = document.getElementById("skillTemplate");
  const out = rowTemplate.content.cloneNode(true);

  out.querySelectorAll("div.p")[0].textContent = rank;
  out.querySelectorAll("div.p")[1].textContent = data["level"];
  out.querySelectorAll("div.p")[2].textContent = data["mcid"];
  out.querySelectorAll("div.p")[3].textContent = data["uuid"];

  for (let i in skills) {
    const skillElement = skillTemplate.content.cloneNode(true);
    skillElement.querySelector(".skill-name").textContent = skills[i];
    skillElement.querySelector(
      ".skill-level"
    ).textContent = `Lv.${data["skill"][i]["level"]}`;
    skillElement.querySelector(
      ".skill-rank"
    ).textContent = `#${data["skill"][i]["rank"]}`;
    out.querySelector(".player-data").appendChild(skillElement);
  }
  return out;
}

window.onload = () => {
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i in data) {
      document.getElementById("leaderboard").appendChild(createTableRow(data[i], i))
    }
  })
}