const characters = [
  // The Judge
  {
    name: "The Judge",
    wants: "JUSTICE / FASHION / MONEY",
    lengths: "anything besides tarnishing his name (or good looks)",
    description: "Loves Bahamut",
    size: "medium",
    race: "high elf",
    armorClass: "13",
    hitPoints: "21 (6d8 -6)",
    proficiency: 4,
    speed: "30 ft.",
    str: 10,
    dex: 14,
    con: 8,
    int: 15,
    wis: 13,
    cha: 15,
    skills:
      "Perception +3, Deception +4, Persuasion +4, History +4, Insight +3",
    senses: "60ft, passive Perception 15",
    languages:
      "Speaks Common, Elvish and one extra (anything other than undercommon)",
    challenge: "1/4 (50XP)",
    featuresArray: [
      {
        featureName: "Fey Ancestry",
        featureDescription:
          "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
      },
      {
        featureName: "Keen Senses",
        featureDescription: "proficiency in the Perception skill",
      },
      {
        featureName: "Noble Family",
        featureDescription:
          "Born with a silver spoon he is a member of a influent house. He is usually surrounded by guards or servants of trust. A crime against him will certanly draw the houses attention and probably the government itself.",
      },
    ],
    actionsArray: [],
  },
  // Victoria Vainheart
  {
    name: "Victoria Vainheart",
    size: "",
    race: "Elf Vampire Queen",
    description: "[00]",
  },
  // Gurrok Blackmaul
  {
    name: "Gurrok Blackmaul",
    size: "large",
    race: "The Half-Giant Blacksmith",
    description: "[01]",
  },
  // Morgan Starfare
  {
    name: "Morgan Starfare",
    wants: "Follows victoria blindly as zombie slave",
    lengths: "flesh and bone",
    description:
      "[02] ... **CRIME:** Brought destruction to Darksteel (when attempting to save Victoria). Finding Victoria on the edge of the tundra, cold and alone, he decided to bring her shelter in the village. He left (to trade with a boat nearby), and when he came back he found the village destroyed, and Victoria offering him the chance to survive and let their memories live on in him.",
    size: "medium",
    race: "human skeleton",
    armorClass: "12 (Padded)",
    hitPoints: "45 (6d8 +18)",
    proficiency: 2,
    speed: "30 ft.",
    str: 15,
    dex: 12,
    con: 17,
    int: 9,
    wis: 9,
    cha: 4,
    skills: "Nature -1 Animal Handling +1",
    senses: "Darkvision 60ft (18m / 12sqr)",
    languages:
      "Speaks Common, Elvish and one extra (anything other than undercommon)",
    challenge: "1/2 (100XP)",
    featuresArray: [
      {
        featureName: "Keen Senses",
        featureDescription: "proficiency in the Perception skill",
      },
      {
        featureName: "Tool Proficiency",
        featureDescription: "is proficient with Vehicles (land).",
      },
    ],
    actionsArray: [
      {
        actionName: "Multiattack.",
        actionDescription:
          "makes two weapon melee attacks or two ranged attacks",
      },
      {
        actionName: "Knife.",
        actionDescription:
          "1d4 + 3, piercing - Finesse, Light, Thrown (range 20/60)",
      },
    ],
  },
  // Rita Bloodmage
  {
    name: "Rita Bloodmage",
    size: "",
    race: "Tiefling Sorceress Masochist",
    description: "[03][08][09]",
  },
  // Elric Quinsaber
  {
    name: "Elric Quinsaber",
    size: "",
    race: "Vampire Knight",
    description: "[04]",
  },
  // Guards
  {
    name: "Guard",
    size: "medium",
    armorClass: "12 (Leather)",
    hitPoints: "32 (5d8 +10)",
    speed: "30 ft",
    proficiency: 2,
    senses: "Darkvision 60ft (18m / 12sqr)",
    str: 17,
    dex: 13,
    con: 15,
    int: 8,
    wis: 12,
    cha: 10,
    skills: "Intimidation +2 Perception +3 Persuasion +2",
    challenge: "1/2 (100 XP)",
    featuresArray: [
      {
        featureName: "Relentless Endurance",
        featureDescription:
          "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.",
      },
    ],
    actionsArray: [
      {
        actionName: "Multiattack.",
        actionDescription:
          "The Militia makes two weapon melee attacks or two ranged attacks.",
      },
      {
        actionName: "Javelin.",
        actionDescription:
          "Melee Weapon Attack +5 to hit, range 30/120ft, one target. Hit: 6 (1d6 +3 ) piercing damage.",
      },
      {
        actionName: "Dagger.",
        actionDescription:
          "Melee Weapon Attack +5 to hit, range 20/60ft, one target. Hit: 5 (1d4 +3 ) piercing damage.",
      },
    ],
  },
  // Cassandra Moonstone
  {
    name: "Cassandra Moonstone",
    wants: "Her people free from the threat of extinction",
    lengths: "Using her divinity for Victoria",
    description:
      "[05] Cassandra Moonstone is a witch with powerful divination magics. She works for the Queen to ensure her reign is everlasting. In exchange, her coven is kept safe (at least, the Queen has promised such exchange). She wants to be free of the Queens plot, so she’s entrusting the heroes for their help.",
    size: "medium",
    race: "half-elf",
    armorClass: "13 (with mage armor)",
    hitPoints: "40 (9d6 +9)",
    speed: "30 ft.",
    proficiency: 4,
    str: 9,
    dex: 11,
    con: 13,
    int: 15,
    wis: 12,
    cha: 16,
    skills: "Insight +6, Religion +3, Medicine +6, Persuasion +6",
    senses: "60ft (18m / 12sqr), ",
    languages: "Speaks Common, Elvish",
    challenge: "5 (1800 XP)",
    featuresArray: [
      {
        featureName: "Fey Ancestry",
        featureDescription:
          "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
      },
      {
        featureName: "Keen Senses",
        featureDescription: "proficiency in the Perception skill",
      },
      {
        featureName: "Spellcasting.",
        featureDescription:
          "is an 9th-level wizard. Its spellcasting ability is Intelligence (spell save DC 14, to hit with spell attacks +6)",
      },
      {
        featureDescription:
          "Cantrips (at will): Ray of Frost, Guidance, Chill Touch, True Strike,",
      },
      {
        featureDescription:
          "1st level (4 slots): Silent Image, Comprehend Language, Detect Evil and Good, Identify,",
      },
      {
        featureDescription:
          "2nd level (3 slots): See Invisibility, Locate Object, Augury,",
      },
      {
        featureDescription: "3rd level (3 slots): Clairvoyance,",
      },
      {
        featureDescription: "4th level (3 slots): Divination, Arcane Eye,",
      },
      {
        featureDescription:
          "5th level (1 slots): Scrying, Contact Other Plane, Legend Lore,",
      },
    ],
    actionsArray: [
      {
        actionName: "Quarterstaff",
        actionDescription:
          "Melee Weapon Attack +3 to hit, reach 5 ft, one target. Hit: 2 (1d6 -1 ) bludgeoning damage.",
      },
    ],
  },
  // Billie Tailskin
  {
    name: "Billie Tailskin",
    wants:
      "to be left alone, and not be found out as a werewolf by her familiy",
    lengths:
      "hiding victims, she sees the murders as accidents and not fully responsible (but still guilty)",
    description:
      "**CRIME:** Murder of the prince (she believes she was locked up that night, but she's unsure) Billie is a fair-skinned young female whose tough but frightened. Billie rides with you all to Darksteel. She's a \"human\" character, roughly 20-23 in age. She rushes out of the carriage to be killed by her collar in the tundra.",
    size: "medium",
    race: "human (werewolf)",
    armorClass: "11 (12)",
    hitPoints: "33 (6d8 + 6)",
    proficiency: 2,
    speed: "30 ft. (40 ft.)",
    str: 15,
    dex: 12,
    con: 10,
    int: 8,
    wis: 10,
    cha: 11,
    skills: "Perception +4, stealth +3",
    damageImmunities:
      "bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons.",
    senses: "passive Perception 14",
    languages: "Common (Can't speak in wolf form)",
    challenge: "2 (450 XP)",
    featuresArray: [
      {
        featureName: "Shapechanger",
        featureDescription:
          "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equpiment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
      },
      {
        featureName: "Keen Hearing and Smell",
        featureDescription:
          "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      },
    ],
    actionsArray: [],
  },
  // Gill Fanghide
  {
    name: "Gill Fanghide",
    size: "Small",
    race: "Gnome Merchant",
  },
  // Stru Silverhand
  {
    name: "Stru Silverhand",
    size: "medium",
    race: "human",
  },
  // Razlik Rhinestone
  {
    name: "Razlik Rhinestone",
    size: "medium",
    race: "human bard",
  },
  // Suzie Tidehollow
  {
    name: "Suzie Tidehollow",
    size: "medium",
    race: "half-elf gambler",
  },
  {
    name: "Sam Tidehollow",
    size: "medium",
    race: "human gambler",
  },
  // Magmin
  {
    name: "Magmin",
    wants: "cause mischief / a good meal",
    lengths: "super lazy (except when causing mischief for a good laugh)",
    size: "tiny",
    race: "elemental",
    armorClass: "14 (Natural Armor)",
    hitPoints: "9 (2d6 + 2)",
    speed: "30 ft.",
    proficiency: 2,
    str: 7,
    dex: 15,
    con: 12,
    int: 8,
    wis: 11,
    cha: 10,
    skills: "",
    damageResistances:
      "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    damageImmunities: "Fire",
    senses: "Darkvision 60 ft., Passive Perception 10",
    languages: "Common, Ignan",
    challenge: "1/2 (100 XP)",
    featuresArray: [
      {
        featureName: "Death Burst.",
        featureDescription:
          "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited.",
      },
      {
        featureName: "Ignited Illumination.",
        featureDescription:
          "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 feet.",
      },
    ],
    actionsArray: [
      {
        actionName: "Touch.",
        actionDescription:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns.",
      },
    ],
  },
];
