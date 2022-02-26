const characters = [
  // The Judge
  {
    name: "The Judge",
    sections: [
      {
        cssStyle: "font-style: italic;",
        "": "the high elf",
      },
      {
        Wants: "JUSTICE / FASHION / MONEY",
        Lengths: "anything besides tarnishing his name (or good looks)",
        Description: "Loves Bahamut",
      },
      {
        cssStyle: "color: #b13026;",
        "Armor Class": 13,
        "Hit Points": "21 (6d8 -6)",
        Speed: "30ft",
        Proficiency: "+4",
      },
      {
        abilityScores: { str: 10, dex: 14, con: 8, int: 15, wis: 13, cha: 15 },
      },
      {
        Skills:
          "Perception +3, Deception +4, Persuasion +4, History +4, Insight +3",
        Senses: "60ft darkvision, passive Perception 15",
        Languages:
          "Common, Elvish and one extra (anything other than undercommon)",
        CR: "1/4 (50XP)",
      },
      {
        cssStyle: "color: #b13026;",
        "Fey Ancestry":
          "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
        "Keen Senses": "Proficiency in the Perception skill",
        "Noble Family":
          "Born with a silver spoon he is a member of a influent house. He is usually surrounded by guards or servants of trust. A crime against him will certanly draw the houses attention and probably the government itself.",
      },
    ],
  },
  // Victoria Vainheart
  {
    name: "Victoria Vainheart",
    sections: [
      {
        cssStyle: "font-style: italic;",
        "": "Elf Vampire Queen",
      },
      {
        Wants: "",
        Lengths: "",
        Crime:
          "Being a vampire (or in her words, the curse of endless existence)",
        Description:
          "[00] Victoria is a dark-skinned vampire usually dressed in elegant red dresses. After being exiled from a Vampire Castle in the East (Family Reddawn), Victoria Vainheart crossed The Endless Tundra to be welcomed by a family of the village. After being found out a vampire by the village, and then branded with Holy Water, she murdered all of the villages inhabitants. She found the mine nearby and decided to take descend (”It looked so warm”) but found The Blacksmith instead.",
      },
    ],
  },
  // Gurrok Blackmaul
  {
    name: "Gurrok Blackmaul",
    sections: [
      {
        cssStyle: "font-style: italic;",
        "": "(large) The Half-Giant Blacksmith",
      },
      {
        Wants: "",
        Lengths: "",
        Crime: "Sabotaging the mine to cull the weak miners",
        Description:
          "[01] Gurrok is a Dwarf with giants blood and is close to 7 feet tall, but built like a Dwarf (lots of muscle). After meeting the Queen, worked towards building a utopia for her in the mines and sharing her curse (he also became a vampire). Despite his endless work his love is never returned. However Rita Bloodstorm enjoys his company immensely...",
      },
    ],
  },
  // Morgan Starfare
  {
    name: "Morgan Starfare",
    sections: [
      {
        cssStyle: "font-style: italic;",
        "": "human skeleton",
      },
      {
        Wants:
          "Pretty mindless, but closer to Victoria will follow her command (Int Sav)",
        Lengths: "Anything??",
        Crime:
          "Brought destruction to Darksteel (when attempting to save Victoria).",
        Description:
          "[02] Finding Victoria on the edge of the tundra, cold and alone, he decided to bring her shelter in the village. He left (to trade with a boat nearby), and when he came back he found the village destroyed, and Victoria offering him the chance to survive and let their memories live on in him.",
      },
      {
        cssStyle: "color: #b13026;",
        "Armor Class": "12 (Padded)",
        "Hit Points": "45 (6d8 +18)",
        Speed: "30ft",
        Proficiency: "+2",
      },
      {
        abilityScores: { str: 15, dex: 12, con: 17, int: 9, wis: 9, cha: 4 },
      },
      {
        Skills: "Nature -1, Animal Handling +1",
        Senses: "60ft darkvision",
        Languages: "Common, Elvish",
        CR: "1/2 (100XP)",
      },
      {
        "Keen Senses": "Proficiency in the Perception skill.",
        "Tool Proficiency": "Is proficient with Vehicles (land)",
      },
      {
        Multiattack: "Makes two weapon melee attacks or two ranged attacks",
        Knife: "1d4 + 3, piercing - Finesse, Light, Thrown (range 20/60)",
      },
    ],
  },
  // Rita Bloodmage
  {
    name: "Rita Bloodmage",
    sections: [
      {
        "": "Tiefling Sorceress Masochist",
        Description:
          "[03][08][09] Rita Bloodstorm is a crazed sorcerer who was once infatuated with Victoria’s lust for vengeance, but has since found her tedious and boring. She is usually seen wearing a white smiling mask, and overly flashy attire from foreign regions. Upon meeting Victoria and Gurrok, she had a short lovers spurt with Gurrok.",
      },
    ],
  },
  // Elric Quinsaber
  {
    name: "Elric Quinsaber",
    sections: [
      {
        "": "Vampire Knight",
        Description: "[04]",
      },
    ],
  },
  // Guards
  {
    name: "Guard",
    sections: [
      {
        cssStyle: "font-style: italic;",
        "": "medium",
      },
      {
        cssStyle: "color: #b13026;",
        "Armor Class": "12 (Leather)",
        "Hit Points": "32 (5d8 +10)",
        Speed: "30ft",
        Proficiency: "+2",
      },
      {
        abilityScores: { str: 17, dex: 13, con: 15, int: 8, wis: 12, cha: 10 },
      },
      {
        Skills: "Intimidation +2 Perception +3 Persuasion +2",
        Senses: "Darkvision 60ft",
        Languages: "Common, Orc",
        CR: "1/2 (100 XP)",
      },
      {
        "Relentless Endurance":
          "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.",
      },
      {
        Multiattack:
          "The Militia makes two weapon melee attacks or two ranged attacks.",
        Javelin:
          "Melee Weapon Attack +5 to hit, range 30/120ft, one target. Hit: 6 (1d6 +3 ) piercing damage.",
        Dagger:
          "Melee Weapon Attack +5 to hit, range 20/60ft, one target. Hit: 5 (1d4 +3 ) piercing damage.",
      },
    ],
  },
  // Cassandra Moonstone
  {
    name: "Cassandra Moonstone",
    sections: [
      { "": "half-elf" },
      {
        wants: "Her people free from the threat of extinction",
        lengths: "Using her divinity for Victoria",
        description:
          "[05] Cassandra Moonstone is a witch with powerful divination magics. She works for the Queen to ensure her reign is everlasting. In exchange, her coven is kept safe (at least, the Queen has promised such exchange). She wants to be free of the Queens plot, so she’s entrusting the heroes for their help.",
      },
      {
        cssStyle: "color: #b13026;",
        "Armor Class": "13 (with mage armor)",
        "Hit Points": "40 (9d6 +9)",
        Speed: "30 ft.",
        Proficiency: "+4",
      },
      {
        abilityScores: { str: 9, dex: 11, con: 13, int: 15, wis: 12, cha: 16 },
      },
      {
        Skills: "Insight +6, Religion +3, Medicine +6, Persuasion +6",
        Senses: "60ft (18m / 12sqr), ",
        Languages: "Speaks Common, Elvish",
        CR: "5 (1800 XP)",
      },
      {
        "Fey Ancestry":
          "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
        "Keen Senses": "proficiency in the Perception skill",
        Spellcasting:
          "is an 9th-level wizard. Its spellcasting ability is Intelligence (spell save DC 14, to hit with spell attacks +6)",
        "Cantrips (at will)":
          "Ray of Frost, Guidance, Chill Touch, True Strike",
        "1st level (4 slots)":
          "Silent Image, Comprehend Language, Detect Evil and Good, Identify",
        "2nd level (3 slots)": "See Invisibility, Locate Object, Augury",
        "3rd level (3 slots)": "Clairvoyance",
        "4th level (3 slots)": "Divination, Arcane Eye",
        "5th level (1 slots)": "Scrying, Contact Other Plane, Legend Lore",
      },
      {
        Quarterstaff:
          "Melee Weapon Attack +3 to hit, reach 5 ft, one target. Hit: 2 (1d6 -1 ) bludgeoning damage.",
      },
    ],
  },
  // Billie Tailskin
  {
    name: "Billie Tailskin",
    sections: [
      {
        cssStyle: "font-style: italic;",
        "": "human (werewolf / acolyte / something)",
      },
      {
        Wants:
          "to be left alone, and not be found out as a werewolf by her familiy",
        Lengths:
          "hiding victims, she sees the murders as accidents and not fully responsible (but still guilty)",
        Crime:
          "Murder of her family (she claims that she was at the town temple when she fainted at dawn, and woke up at home in her kins blood)",
        Description:
          "Billie is a fair-skinned young female whose tough but frightened. Billie rides with you all to Darksteel. Roughly 20-23 in age. She rushes out of the carriage to be killed by her collar in the tundra.",
      },
      {
        cssStyle: "color: #b13026;",
        "Armor Class": "12",
        "Hit Points": "33 (6d8 + 6)",
        Speed: "30ft",
        Proficiency: "+2",
      },
      {
        abilityScores: { str: 15, dex: 12, con: 10, int: 8, wis: 10, cha: 11 },
      },
      {
        Skills: "Perception +4, stealth +3",
        "Damage Immunities (?)":
          "bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons.",
        Senses: "passive Perception 14",
        Languages: "Common",
        CR: "2 (450 XP)",
      },
      {
        Shapechanger:
          "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equpiment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
        "Keen Hearing and Smell":
          "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      },
    ],
  },
  // Gill Fanghide
  {
    name: "Gill Fanghide",
    sections: [
      {
        cssStyle: "font-style: italic;",
        "": "Small Gnome Merchant",
      },
    ],
  },
  // Stru Silverhand
  {
    name: "Stru Silverhand",
    sections: [
      {
        cssStyle: "font-style: italic;",
        "": "Human",
      },
    ],
  },
  // Razlik Rhinestone
  {
    name: "Razlik Rhinestone",
    sections: [
      {
        cssStyle: "font-style: italic;",
        "": "Human Bard",
      },
    ],
  },
  // Suzie Tidehollow
  {
    name: "Suzie Tidehollow",
    sections: [
      {
        cssStyle: "font-style: italic;",
        "": "Half-Elf Gambler",
      },
    ],
  },
  {
    name: "Sam Tidehollow",
    sections: [
      {
        cssStyle: "font-style: italic;",
        "": "Human Gambler",
      },
    ],
  },
  // Magmin
  {
    name: "Magmin",
    sections: [
      {
        cssStyle: "font-style: italic;",
        "": "tiny elemental",
      },
      {
        Wants: "cause mischief / a good meal / territorial",
        Lengths: "super lazy (except when causing mischief for a good laugh)",
      },
      {
        cssStyle: "color: #b13026;",
        "Armor Class": 14,
        "Hit Points": "9 (2d6 + 2)",
        Speed: "30ft",
        Proficiency: "+2",
      },
      { abilityScores: { str: 7, dex: 15, con: 12, int: 8, wis: 11, cha: 10 } },
      {
        "Damage Resistances":
          "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
        "Damage Immunities": "Fire",
        Senses: "Darkvision 60 ft., Passive Perception 10",
        Languages: "Common, Ignan",
        CR: "1/2 (100 XP)",
      },
      {
        "Death Burst":
          "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited.",
        "Ignited Illumination":
          "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 feet.",
      },
      {
        Touch:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns.",
      },
    ],
  },
];
