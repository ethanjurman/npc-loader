const CharacterComponent = ({
  name,
  size,
  race,
  description = "",
  wants = "--",
  lengths = "--",
  armorClass,
  hitPoints,
  speed,
  proficiency,
  str = 10,
  dex = 10,
  con = 10,
  int = 10,
  wis = 10,
  cha = 10,
  skills,
  damageResistances = "none",
  damageImmunities = "none",
  senses = "none",
  languages = "Common",
  challenge,
  featuresArray = [],
  actionsArray = [],
}) => {
  const characterDiv = document.createElement("div");
  const abilityScoreMod = (mod) => Math.floor((mod - 10) / 2);
  const abilityScoreModSymbol = (mod) => (mod < 10 ? "" : "+");

  const html = `
  <div class="character-details">
    <span class="name-header">${name}</span>
    <span class="name-sub-header">${size} ${race}</span><br />
    <hr />
    <span class="name-sub-header"><b>What do they want?</b> ${wants}</span><br />
    <span class="name-sub-header"><b>What lengths will they go?</b> ${lengths}</span><br />
    <hr />
    <span class="char-details"><b>Armor Class</b> ${armorClass}</span>
    <span class="char-details"><b>Hit Points</b> ${hitPoints}</span>
    <span class="char-details"><b>Speed</b> ${speed}</span>
    <span class="char-details"><b>Proficiency</b> +${proficiency}</span>
    <hr />
    <div class="ability-scores">
      <div class="ability-score"><b>STR</b><br />
        ${str} (${abilityScoreModSymbol(str)}${abilityScoreMod(str)})
      </div>
      <div class="ability-score"><b>DEX</b><br />
        ${dex} (${abilityScoreModSymbol(dex)}${abilityScoreMod(dex)})
      </div>
      <div class="ability-score"><b>CON</b><br />
        ${con} (${abilityScoreModSymbol(con)}${abilityScoreMod(con)})
      </div>
      <div class="ability-score"><b>INT</b><br />
        ${int} (${abilityScoreModSymbol(int)}${abilityScoreMod(int)})
      </div>
      <div class="ability-score"><b>WIS</b><br />
        ${wis} (${abilityScoreModSymbol(wis)}${abilityScoreMod(wis)})
      </div>
      <div class="ability-score"><b>CHA</b><br />
        ${cha} (${abilityScoreModSymbol(cha)}${abilityScoreMod(cha)})
      </div>
    </div>
    <hr />
    ${skills ? `<span class="char-details"><b>Skills</b> ${skills}</span>` : ``}
    ${
      damageResistances
        ? `<span class="char-details"><b>Damage Resistances </b> ${damageResistances}</span>`
        : ""
    }
    ${
      damageImmunities
        ? `<span class="char-details"><b>Damage Immunities</b> ${damageImmunities}</span>`
        : ""
    }
    ${skills ? `<span class="char-details"><b>Skills</b> ${skills}</span>` : ``}
    ${senses ? `<span class="char-details"><b>Senses</b> ${senses}</span>` : ``}
    ${
      languages
        ? `<span class="char-details"><b>Languages</b> ${languages}</span>`
        : ``
    }
    ${
      challenge
        ? `<span class="char-details"><b>Challenge</b> ${challenge}</span>`
        : ``
    }
    <hr />
    ${description ? `<span class="name-sub-header">${description}</span>` : ""}
    <hr />
    ${featuresArray
      .map(({ featureName, featureDescription }) => {
        return `
        <div class="skill"><b>${
          featureName ? featureName + " " : ""
        }</b>${featureDescription}
      `;
      })
      .join("")}
    <hr />
    ${actionsArray
      .map(({ actionName, actionDescription }) => {
        return `
        <div class="skill"><b>${
          actionName ? actionName + " " : ""
        }</b>${actionDescription}
      `;
      })
      .join("")}
  </div>
  `;

  characterDiv.innerHTML = html;

  return characterDiv;
};
