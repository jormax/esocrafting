var enchantLevelArray = [ "1", "5", "10", "15", "20", "25", "30", "35", "40", "CP10", "CP30", "CP50", "CP70", "CP100", "CP150", "CP160"];

var enchantPotency = [
    {
      "Name": "Jora",
      "Potency": "1",
      "Gear Level": "1",
      "Translation": "Develop",
      "Glyph": "Trifling",
      "Cost": 30,
      "Type": "Additive"
    },
    {
      "Name": "Porade",
      "Potency": "1+",
      "Gear Level": "5",
      "Translation": "Add",
      "Glyph": "Inferior",
      "Cost": 42,
      "Type": "Additive"
    },
    {
      "Name": "Jera",
      "Potency": "2",
      "Gear Level": "10",
      "Translation": "Increase",
      "Glyph": "Petty",
      "Cost": 51,
      "Type": "Additive"
    },
    {
      "Name": "Jejora",
      "Potency": "2+",
      "Gear Level": "15",
      "Translation": "Raise",
      "Glyph": "Slight",
      "Cost": 54,
      "Type": "Additive"
    },
    {
      "Name": "Odra",
      "Potency": "3",
      "Gear Level": "20",
      "Translation": "Gain",
      "Glyph": "Minor",
      "Cost": 60,
      "Type": "Additive"
    },
    {
      "Name": "Pojora",
      "Potency": "3+",
      "Gear Level": "25",
      "Translation": "Supplement",
      "Glyph": "Lesser",
      "Cost": 66,
      "Type": "Additive"
    },
    {
      "Name": "Edora",
      "Potency": "4",
      "Gear Level": "30",
      "Translation": "Boost",
      "Glyph": "Moderate",
      "Cost": 72,
      "Type": "Additive"
    },
    {
      "Name": "Jaera",
      "Potency": "4+",
      "Gear Level": "35",
      "Translation": "Advance",
      "Glyph": "Average",
      "Cost": 78,
      "Type": "Additive"
    },
    {
      "Name": "Pora",
      "Potency": "5",
      "Gear Level": "40",
      "Translation": "Augment",
      "Glyph": "Strong",
      "Cost": 84,
      "Type": "Additive"
    },
    {
      "Name": "Denara",
      "Potency": "5+",
      "Gear Level": "CP10",
      "Translation": "Strengthen",
      "Glyph": "Major",
      "Cost": 87,
      "Type": "Additive"
    },
    {
      "Name": "Rera",
      "Potency": "6",
      "Gear Level": "CP30",
      "Translation": "Exaggerate",
      "Glyph": "Greater",
      "Cost": 93,
      "Type": "Additive"
    },
    {
      "Name": "Derado",
      "Potency": "7",
      "Gear Level": "CP50",
      "Translation": "Empower",
      "Glyph": "Grand",
      "Cost": 96,
      "Type": "Additive"
    },
    {
      "Name": "Rekura",
      "Potency": "8",
      "Gear Level": "CP70",
      "Translation": "Magnify",
      "Glyph": "Splendid",
      "Cost": 99,
      "Type": "Additive"
    },
    {
      "Name": "Kura",
      "Potency": "9",
      "Gear Level": "CP100",
      "Translation": "Intensify",
      "Glyph": "Monumental",
      "Cost": 105,
      "Type": "Additive"
    },
    {
      "Name": "Rejera",
      "Potency": "10",
      "Gear Level": "CP150",
      "Translation": "Amplify",
      "Glyph": "Superb",
      "Cost": 111,
      "Type": "Additive"
    },
    {
      "Name": "Repora",
      "Potency": "10+",
      "Gear Level": "CP160",
      "Translation": "Reinforce",
      "Glyph": "Truly Superb",
      "Cost": 2508,
      "Type": "Additive"
    },
    {
      "Name": "Jode",
      "Potency": "1",
      "Gear Level": "1",
      "Translation": "Reduce",
      "Glyph": "Trifling",
      "Cost": 30,
      "Type": "Subtractive"
    },
    {
      "Name": "Notade",
      "Potency": "1+",
      "Gear Level": "5",
      "Translation": "Subtract",
      "Glyph": "Inferior",
      "Cost": 42,
      "Type": "Subtractive"
    },
    {
      "Name": "Ode",
      "Potency": "2",
      "Gear Level": "10",
      "Translation": "Shrink",
      "Glyph": "Petty",
      "Cost": 51,
      "Type": "Subtractive"
    },
    {
      "Name": "Tade",
      "Potency": "2+",
      "Gear Level": "15",
      "Translation": "Decrease",
      "Glyph": "Slight",
      "Cost": 54,
      "Type": "Subtractive"
    },
    {
      "Name": "Jayde",
      "Potency": "3",
      "Gear Level": "20",
      "Translation": "Deduct",
      "Glyph": "Minor",
      "Cost": 60,
      "Type": "Subtractive"
    },
    {
      "Name": "Edode",
      "Potency": "3+",
      "Gear Level": "25",
      "Translation": "Lower",
      "Glyph": "Lesser",
      "Cost": 66,
      "Type": "Subtractive"
    },
    {
      "Name": "Pojode",
      "Potency": "4",
      "Gear Level": "30",
      "Translation": "Diminish",
      "Glyph": "Moderate",
      "Cost": 72,
      "Type": "Subtractive"
    },
    {
      "Name": "Rekude",
      "Potency": "4+",
      "Gear Level": "35",
      "Translation": "Weaken",
      "Glyph": "Average",
      "Cost": 78,
      "Type": "Subtractive"
    },
    {
      "Name": "Hade",
      "Potency": "5",
      "Gear Level": "40",
      "Translation": "Lessen",
      "Glyph": "Strong",
      "Cost": 84,
      "Type": "Subtractive"
    },
    {
      "Name": "Idode",
      "Potency": "5+",
      "Gear Level": "CP10",
      "Translation": "Impair",
      "Glyph": "Major",
      "Cost": 87,
      "Type": "Subtractive"
    },
    {
      "Name": "Pode",
      "Potency": "6",
      "Gear Level": "CP30",
      "Translation": "Remove",
      "Glyph": "Greater",
      "Cost": 93,
      "Type": "Subtractive"
    },
    {
      "Name": "Kedeko",
      "Potency": "7",
      "Gear Level": "CP50",
      "Translation": "Drain",
      "Glyph": "Grand",
      "Cost": 96,
      "Type": "Subtractive"
    },
    {
      "Name": "Rede",
      "Potency": "8",
      "Gear Level": "CP70",
      "Translation": "Deprive",
      "Glyph": "Splendid",
      "Cost": 99,
      "Type": "Subtractive"
    },
    {
      "Name": "Kude",
      "Potency": "9",
      "Gear Level": "CP100",
      "Translation": "Negate",
      "Glyph": "Monumental",
      "Cost": 105,
      "Type": "Subtractive"
    },
    {
      "Name": "Jehade",
      "Potency": "10",
      "Gear Level": "CP150",
      "Translation": "Divest",
      "Glyph": "Superb",
      "Cost": 111,
      "Type": "Subtractive"
    },
    {
      "Name": "Itade",
      "Potency": "10+",
      "Gear Level": "CP160",
      "Translation": "Plunder",
      "Glyph": "Truly Superb",
      "Cost": 2508,
      "Type": "Subtractive"
    }
];
  
var enchantEssence = [
  {
    "Name": "Dekeipa",
    "Translation": "Frost",
    "Potency Type": "Additive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Frost",
    "Glyph Short Name": "寒霜Frost",
    "Effect": "Deals X Frost Damage"
  },
  {
    "Name": "Dekeipa",
    "Translation": "Frost",
    "Potency Type": "Subtractive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Frost Resist",
    "Glyph Short Name": "寒霜抗性Frost Resist",
    "Effect": "Adds X Frost Resistance"
  },
  {
    "Name": "Deni",
    "Translation": "Stamina",
    "Potency Type": "Additive",
    "Item Type": "Armor",
    "Glyph": "Glyph of Stamina",
    "Glyph Short Name": "耐力Stamina",
    "Effect": "Adds X Max Stamina"
  },
  {
    "Name": "Deni",
    "Translation": "Stamina",
    "Potency Type": "Subtractive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Absorb Stamina",
    "Glyph Short Name": "吸取耐力Absorb Stamina",
    "Effect": "Deals X Magic Damage and recovers Y Stamina"
  },
  {
    "Name": "Denima",
    "Translation": "Stamina",
    "Potency Type": "Additive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Stamina Recovery",
    "Glyph Short Name": "耐力回復Stamina Recovery",
    "Effect": "Adds X Stamina Recovery"
  },
  {
    "Name": "Denima",
    "Translation": "Stamina",
    "Potency Type": "Subtractive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Reduce Feat Cost",
    "Glyph Short Name": "降低武藝消耗Reduce Feat Cost",
    "Effect": "Reduce Stamina cost of abilities by X"
  },
  {
    "Name": "Deteri",
    "Translation": "Armor",
    "Potency Type": "Additive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Hardening",
    "Glyph Short Name": "硬化Hardening",
    "Effect": "Grants a X point Damage Shield for Y seconds"
  },
  {
    "Name": "Deteri",
    "Translation": "Armor",
    "Potency Type": "Subtractive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Crushing",
    "Glyph Short Name": "粉碎Crushing",
    "Effect": "Reduce targets Armor by X for Y seconds"
  },
  {
    "Name": "Hakeijo",
    "Translation": "Prism",
    "Potency Type": "Additive",
    "Item Type": "Armor",
    "Glyph": "Glyph of Prismatic Defense",
    "Glyph Short Name": "稜鏡防禦Prismatic Defense",
    "Effect": "Adds X Max Health/Magicka/Stamina"
  },
  {
    "Name": "Hakeijo",
    "Translation": "Prism",
    "Potency Type": "Subtractive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Prismatic Onslaught",
    "Glyph Short Name": "稜鏡猛攻Prismatic Onslaught",
    "Effect": "Deals X Magic Damage to Undead and Daedra"
  },
  {
    "Name": "Haoko",
    "Translation": "Disease",
    "Potency Type": "Additive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Foulness",
    "Glyph Short Name": "骯髒Foulness",
    "Effect": "Deals X Disease Damage"
  },
  {
    "Name": "Haoko",
    "Translation": "Disease",
    "Potency Type": "Subtractive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Disease Resist",
    "Glyph Short Name": "疾病抗性Disease Resist",
    "Effect": "Adds X Disease Resistance"
  },
  {
    "Name": "Indeko",
    "Translation": "Prismatic Regen",
    "Potency Type": "Additive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Prismatic Recovery",
    "Glyph Short Name": "稜鏡回復Prismatic Recovery",
    "Effect": "Adds X Health/Magicka/Stamina Recovery"
  },
  {
    "Name": "Indeko",
    "Translation": "Prismatic Regen",
    "Potency Type": "Subtractive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Reduce Skill Cost",
    "Glyph Short Name": "降低技能消耗Reduce Skill Cost",
    "Effect": "Reduce Health/Magicka/Stamina cost of abilities by X"
  },
  {
    "Name": "Kaderi",
    "Translation": "Shield",
    "Potency Type": "Additive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Bashing",
    "Glyph Short Name": "猛擊Bashing",
    "Effect": "Increase bash damage by X"
  },
  {
    "Name": "Kaderi",
    "Translation": "Shield",
    "Potency Type": "Subtractive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Bracing",
    "Glyph Short Name": "支撐Bracing",
    "Effect": "Reduce cost of Blocking by X"
  },
  {
    "Name": "Kuoko",
    "Translation": "Poison",
    "Potency Type": "Additive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Poison",
    "Glyph Short Name": "毒素Poison",
    "Effect": "Deals X Poison Damage"
  },
  {
    "Name": "Kuoko",
    "Translation": "Poison",
    "Potency Type": "Subtractive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Poison Resist",
    "Glyph Short Name": "毒素抗性Poison Resist",
    "Effect": "Adds X Poison Resistance"
  },
  {
    "Name": "Makderi",
    "Translation": "Spell Harm",
    "Potency Type": "Additive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Increase Magical Harm",
    "Glyph Short Name": "提高魔法損害Increase Magical Harm",
    "Effect": "Adds X Spell Damage"
  },
  {
    "Name": "Makderi",
    "Translation": "Spell Harm",
    "Potency Type": "Subtractive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Decrease Spell Harm",
    "Glyph Short Name": "減少法術損害Decrease Spell Harm",
    "Effect": "Adds X Spell Resistance"
  },
  {
    "Name": "Makko",
    "Translation": "Magicka",
    "Potency Type": "Additive",
    "Item Type": "Armor",
    "Glyph": "Glyph of Magicka",
    "Glyph Short Name": "魔力Magicka",
    "Effect": "Adds X Max Magicka"
  },
  {
    "Name": "Makko",
    "Translation": "Magicka",
    "Potency Type": "Subtractive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Absorb Magicka",
    "Glyph Short Name": "吸取魔法Absorb Magicka",
    "Effect": "Deals X Magic Damage and recovers Y Magicka"
  },
  {
    "Name": "Makkoma",
    "Translation": "Magicka Regen",
    "Potency Type": "Additive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Magicka Recovery",
    "Glyph Short Name": "魔力回復Magicka Recovery",
    "Effect": "Adds X Magicka Recovery"
  },
  {
    "Name": "Makkoma",
    "Translation": "Magicka Regen",
    "Potency Type": "Subtractive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Reduce Spell Cost",
    "Glyph Short Name": "降低法術消耗Reduce Spell Cost",
    "Effect": "Reduce Magicka cost of Spells by X"
  },
  {
    "Name": "Meip",
    "Translation": "Shock",
    "Potency Type": "Additive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Shock",
    "Glyph Short Name": "電擊Shock",
    "Effect": "Deals X Shock Damage"
  },
  {
    "Name": "Meip",
    "Translation": "Shock",
    "Potency Type": "Subtractive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Shock Resist",
    "Glyph Short Name": "電擊抗性Shock Resist",
    "Effect": "Adds X Shock Resistance"
  },
  {
    "Name": "Oko",
    "Translation": "Health",
    "Potency Type": "Additive",
    "Item Type": "Armor",
    "Glyph": "Glyph of Health",
    "Glyph Short Name": "生命Health",
    "Effect": "Adds X Max Health"
  },
  {
    "Name": "Oko",
    "Translation": "Health",
    "Potency Type": "Subtractive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Absorb Health",
    "Glyph Short Name": "吸取生命Absorb Health",
    "Effect": "Deals X Magic Damage and recovers Y Health"
  },
  {
    "Name": "Okoma",
    "Translation": "Health Regen",
    "Potency Type": "Additive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Health Recovery",
    "Glyph Short Name": "生命回復Health Recovery",
    "Effect": "Adds X Health Recovery"
  },
  {
    "Name": "Okoma",
    "Translation": "Health Regen",
    "Potency Type": "Subtractive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Decrease Health",
    "Glyph Short Name": "削減生命Decrease Health",
    "Effect": "Deals X unresistable damage"
  },
  {
    "Name": "Okori",
    "Translation": "Power",
    "Potency Type": "Additive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Weapon Damage",
    "Glyph Short Name": "武器傷害Weapon Damage",
    "Effect": "Increase your Weapon and Spell damage by X for Y seconds"
  },
  {
    "Name": "Okori",
    "Translation": "Power",
    "Potency Type": "Subtractive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Weakening",
    "Glyph Short Name": "削弱Weakening",
    "Effect": "Reduce target Weapon and Spell damage by X for Y seconds"
  },
  {
    "Name": "Oru",
    "Translation": "Alchemist",
    "Potency Type": "Additive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Potion Boost",
    "Glyph Short Name": "藥水提升Potion Boost",
    "Effect": "Increase Potion effect by X"
  },
  {
    "Name": "Oru",
    "Translation": "Alchemist",
    "Potency Type": "Subtractive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Potion Speed",
    "Glyph Short Name": "藥水速度Potion Speed",
    "Effect": "Reduce the cooldown of Potions below this item's level by X seconds"
  },
  {
    "Name": "Rakeipa",
    "Translation": "Fire",
    "Potency Type": "Additive",
    "Item Type": "Weapon",
    "Glyph": "Glyph of Flame",
    "Glyph Short Name": "火焰Flame",
    "Effect": "Deals X Fire Damage"
  },
  {
    "Name": "Rakeipa",
    "Translation": "Fire",
    "Potency Type": "Subtractive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Flame Resist",
    "Glyph Short Name": "火焰抗性Flame Resist",
    "Effect": "Adds X Fire Resistance"
  },
  {
    "Name": "Taderi",
    "Translation": "Physical Harm",
    "Potency Type": "Additive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Increase Physical Harm",
    "Glyph Short Name": "提高物理損害Increase Physical Harm",
    "Effect": "Adds X Weapon Damage"
  },
  {
    "Name": "Taderi",
    "Translation": "Physical Harm",
    "Potency Type": "Subtractive",
    "Item Type": "Jewelry",
    "Glyph": "Glyph of Decrease Physical Harm",
    "Glyph Short Name": "降低物理損害Decrease Physical Harm",
    "Effect": "Adds X Armor"
  }
];

var enchantAspect = [
  {
    "Name": "Ta",
    "Lvl": 1,
    "Translation": "Base",
    "Effect": "Produces Base quality items",
    "Improvement":"普通"
  },
  {
    "Name": "Jejota",
    "Lvl": 1,
    "Translation": "Fine",
    "Effect": "Produces Fine quality items",
    "Improvement":"優秀"
  },
  {
    "Name": "Denata",
    "Lvl": 2,
    "Translation": "Superior",
    "Effect": "Produces Superior quality items",
    "Improvement":"上乘"
  },
  {
    "Name": "Rekuta",
    "Lvl": 3,
    "Translation": "Artifact",
    "Effect": "Produces Epic quality items",
    "Improvement":"史詩"
  },
  {
    "Name": "Kuta",
    "Lvl": 4,
    "Translation": "Legendary",
    "Effect": "Produces Legendary quality items",
    "Improvement":"傳說"
  }
];
  