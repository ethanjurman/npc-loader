const CharacterComponent = ({ name, sections = [] }) => {
  const characterDiv = document.createElement("div");
  const abilityScoreMod = (mod) => Math.floor((mod - 10) / 2);
  const abilityScoreModSymbol = (mod) => (mod < 10 ? "" : "+");

  const html = `
  <div class="character-details">
    <span class="name-header">${name}</span>
    ${sections
      .map((section) => {
        const { cssStyle, abilityScores, ...sectionItems } = section;
        if (abilityScores) {
          const { str, dex, con, int, wis, cha } = abilityScores;
          return `<div class="ability-scores">
              <div class="ability-score">
                <b>STR</b>
                <br />${str} (${abilityScoreModSymbol(str)}${abilityScoreMod(
            str
          )})
              </div>
              <div class="ability-score">
                <b>DEX</b>
                <br />${dex} (${abilityScoreModSymbol(dex)}${abilityScoreMod(
            dex
          )})
              </div>
              <div class="ability-score">
                <b>CON</b>
                <br />${con} (${abilityScoreModSymbol(con)}${abilityScoreMod(
            con
          )})
              </div>
              <div class="ability-score">
                <b>INT</b>
                <br />${int} (${abilityScoreModSymbol(int)}${abilityScoreMod(
            int
          )})
              </div>
              <div class="ability-score">
                <b>WIS</b>
                <br />${wis} (${abilityScoreModSymbol(wis)}${abilityScoreMod(
            wis
          )})
              </div>
              <div class="ability-score">
                <b>CHA</b>
                <br />${cha} (${abilityScoreModSymbol(cha)}${abilityScoreMod(
            cha
          )})
              </div>
            </div>`;
        }
        return Object.entries(sectionItems)
          .map(([key, value]) => {
            return `
            <div style="${cssStyle}">
              <b>${key ? `${key} ` : ""}</b><span>${value}</span>
            </div>
          `;
          })
          .join("");
      })
      .join("<hr />")}
    
  </div>
  `;

  characterDiv.innerHTML = html;

  return characterDiv;
};
