// GEO Global Ecosystem Atlas

// Realm Palettes

var realm_names = [
  'No data',
  'Terrestrial',
  'Subterranean',
  'Subterranean-Freshwater',
  'Subterranean-Marine',
  'Terrestrial-Freshwater',
  'Freshwater',
  'Freshwater-Marine',
  'Marine',
  'Marine-Terrestrial',
  'Marine-Freshwater-Terrestrial']

var realm_values = [0,1,2,3,4,5,6,7,8,9,10]

var realm_palette = { // 10 Realms
  palette: [  // the Realm colour palette
    'FFFFFF', // 0 =  No data
    '3F8E33', // 1 =  Terrestrial
    'CE8E34', // 2 =  Subterranean
    'D55B41', // 3 = Subterranean-Freshwater
    'ABAA37', // 4 = Subterranean-Marine
    '2F675C', // 5 = Terrestrial-Freshwater
    '4EACB0', // 6 = Freshwater
    '853E90', // 7 = Freshwater-Marine
    '2860C4', // 8 = Marine
    '484992', // 9 = Marine-Terrestrial
    'BF3250', // 10 = Marine-Freshwater-Terrestrial
    ], 
  min: 0, max: 10 // 10 potential values for realm
};   

// Biome Palettes

var biome_names = [
  'No Data',
  'T1 Tropical-subtropical forests biome',
  'T2 Temperate-boreal forests and woodlands biome',
  'T3 Shrublands and shrubby woodlands biome',
  'T4 Savannas and grasslands biome',
  'T5 Deserts and semi-deserts biome',
  'T6 Polar/alpine (cryogenic) biome',
  'T7 Intensive land-use biome',
  'S1 Subterranean lithic biome',
  'S2 Anthropogenic subterranean voids biome',
  'SF1 Subterranean freshwaters biome',
  'SF2 Anthropogenic subterranean freshwaters biome',
  'SM1 Subterranean tidal biome',
  'TF1 Palustrine wetlands biome',
  'F1 Rivers and streams biome',
  'F2 Lakes biome',
  'F3 Artificial wetlands biome',
  'FM1 Semi-confined transitional waters biome',
  'M1 Marine shelf biome',
  'M2 Pelagic ocean waters biome',
  'M3 Deep sea floors biome',
  'M4 Anthropogenic marine biome',
  'MT1 Shorelines biome',
  'MT2 Supralittoral coastal biome',
  'MT3 Anthropogenic shorelines biome',
  'MFT1 Brackish tidal biome'
  ]


var biome_values = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]


var biome_palette = { // 25 Biomes
  palette: [  // the Biome colour palette
    'ffffff', // 0 =  No data
    '008452', // 1 =  T1
    '007767', // 2 =  T2
    '00686F', // 3 =  T3
    'FFC01C', // 4 =  T4
    'DFB664', // 5 =  T5
    'D7D7D7', // 6 =  T6
    'EA1394', // 7 =  T7
    'A08F26', // 8 =  S1
    '728B2C', // 9 =  S2
    'EAA694', // 10 = SF1
    'FFC2FF', // 11 = SF2
    '81A23B', // 12 = SM1
    '629A8E', // 13 = TF1
    '17C2B6', // 14 = F1
    '1AC5D9', // 15 = F2
    '6BCE81', // 16 = F3
    'B00079', // 17 = FM1
    '6460C0', // 18 = M1
    '8860BA', // 19 = M2
    '055869', // 20 = M3
    'B766AB', // 21 = M4
    '6B68B5', // 22 = MT1
    '8E89DA', // 23 = MT2
    'B3ACFF', // 24 = MT3
    'D1888E', // 25 = MFT1
    ], 
  min: 0, max: 25 // 
};


// EFG Palettes

var efg_values = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170]

var efg_names = [
  "No data",
  "T1.1 Tropical/Subtropical lowland rainforests",
  "T1.2 Tropical/Subtropical dry forests and thickets",
  "T1.3 Tropical/Subtropical montane rainforests",
  "T1.4 Tropical heath forests",
  "place-holder",
  "place-holder",
  "T2.1 Boreal and temperate high montane forests and woodlands",
  "T2.2 Deciduous temperate forests",
  "T2.3",
  "T2.4",
  "T2.5",
  "T2.6",
  "place-holder",
  "place-holder",
  "place-holder",
  "T3.1",
  "T3.2",
  "T3.3",
  "T3.4",
  "place-holder",
  "place-holder",
  "T4.1",
  "T4.2 Pyric tussock savannas",
  "T4.3",
  "T4.4",
  "T4.5",
  "place-holder",
  "place-holder",
  "place-holder",
  "T5.1",
  "T5.2",
  "T5.3",
  "T5.4",
  "T5.5",
  "place-holder",
  "place-holder",
  "place-holder",
  "T6.1 Ice sheets, glaciers and perennial snowfields",
  "T6.2 Polar/alpine cliffs, screes, outcrops and lava flows (or 0CCCCB)",
  "T6.3 Polar tundra and deserts",
  "T6.4",
  "T6.5 Tropical alpine grasslands and herbfields",
  "place-holder",
  "place-holder",
  "place-holder",
  "T7.1 Annual croplands",
  "T7.2 Sown pastures and fields",
  "T7.3 Plantations",
  "T7.4 Urban and industrial ecosystems",
  "T7.5",
  "place-holder",
  "place-holder",
  "place-holder",
  "S1.1",
  "S1.2",
  "place-holder",
  "S2.1",
  "place-holder",
  "SF1.1",
  "SF1.2",
  "place-holder",
  "SF2.1",
  "SF2.2",
  "place-holder",
  "SM1.1",
  "SM1.2",
  "SM1.3",
  "place-holder",
  "place-holder",
  "TF1.1",
  "TF1.2",
  "TF1.3",
  "TF1.4",
  "TF1.5",
  "TF1.6",
  "TF1.7",
  "place-holder",
  "place-holder",
  "place-holder",
  "place-holder",
  "F1.1",
  "F1.2",
  "F1.3",
  "F1.4",
  "F1.5",
  "F1.6",
  "F1.7",
  "place-holder",
  "place-holder",
  "place-holder",
  "place-holder",
  "F2.1",
  "F2.2",
  "F2.3",
  "F2.4",
  "F2.5",
  "F2.6",
  "F2.7",
  "F2.8",
  "F2.9",
  "F2.10",
  "place-holder",
  "place-holder",
  "place-holder",
  "place-holder",
  "place-holder",
  "F3.1",
  "F3.2",
  "F3.3 Rice paddies",
  "F3.4",
  "F3.5",
  "place-holder",
  "place-holder",
  "place-holder",
  "FM1.1",
  "FM1.2",
  "FM1.3",
  "place-holder",
  "place-holder",
  "M1.1 Seagrass meadows",
  "M1.2",
  "M1.3",
  "M1.4",
  "M1.5",
  "M1.6",
  "M1.7",
  "M1.8",
  "M1.9",
  "M1.10",
  "place-holder",
  "place-holder",
  "place-holder",
  "place-holder",
  "place-holder",
  "M2.1",
  "M2.2",
  "M2.3",
  "M2.4",
  "M2.5",
  "place-holder",
  "place-holder",
  "place-holder",
  "M3.1",
  "M3.2",
  "M3.3",
  "M3.4",
  "M3.5",
  "M3.6",
  "M3.7",
  "place-holder",
  "place-holder",
  "place-holder",
  "place-holder",
  "M4.1",
  "M4.2",
  "place-holder",
  "MT1.1",
  "MT1.2",
  "MT1.3",
  "MT1.4",
  "place-holder",
  "place-holder",
  "MT2.1",
  "MT2.2",
  "place-holder",
  "MT3.1 Artificial shorelines",
  "place-holder",
  "MFT1.1 Coastal river deltas",
  "MFT1.2 Intertidal forests and shrublands",
  "MFT1.3 Coastal saltmarshes and reedbeds"
];


var efg_palette = { // 110 EFGs
  palette: [  // the EFG colour palette
    'ffffff', // 0 =  No data 
    '32A06B', // 1 =  T1.1 Tropical/Subtropical lowland rainforests
    '52BC85', // 2 =  T1.2 Tropical/Subtropical dry forests and thickets
    '6FD9A1', // 3 =  T1.3 Tropical/Subtropical montane rainforests
    '8DF7BD', // 4 =  T1.4 Tropical heath forests
    'ffffff', // 5 =  place-holder
    'ffffff', // 6 =  place-holder
    '006051', // 7 =  T2.1 Boreal and temperate high montane forests and woodlands
    '329483', // 8 =  T2.2 Deciduous temperate forests
    '54B2A0', // 9 =  T2.3
    '73D1BE', // 10 = T2.4
    '92F0DD', // 11 = T2.5
    'BBF0E5', // 12 = T2.6
    'ffffff', // 13 = place-holder
    'ffffff', // 14 = place-holder
    'ffffff', // 15 = place-holder
    '34878E', // 16 = T3.1
    '57A7AE', // 17 = T3.2
    '78C8CF', // 18 = T3.3
    '9AEAF1', // 19 = T3.4
    'ffffff', // 20 = place-holder
    'ffffff', // 21 = place-holder
    'FFD21C', // 22 = T4.1
    'FFA134', // 23 = T4.2 Pyric tussock savannas
    'FF9110', // 24 = T4.3
    'FF6B00', // 25 = T4.4
    'D36E00', // 26 = T4.5
    'ffffff', // 27 = place-holder
    'ffffff', // 28 = place-holder
    'ffffff', // 29 = place-holder
    'FFD279', // 30 = T5.1
    'EEC471', // 31 = T5.2
    'B38E3E', // 32 = T5.3
    '886716', // 33 = T5.4
    '5E4300', // 34 = T5.5
    'ffffff', // 35 = place-holder
    'ffffff', // 36 = place-holder
    'ffffff', // 37 = place-holder    
    'DBDBDB', // 38 = T6.1 Ice sheets, glaciers and perennial snowfields
    'C7C7C7', // 39 = T6.2 Polar/alpine cliffs, screes, outcrops and lava flows (or 0CCCCB)
    'B8B8B8', // 40 = T6.3 Polar tundra and deserts
    'A8A8A8', // 41 = T6.4
    '949494', // 42 = T6.5 Tropical alpine grasslands and herbfields
    'ffffff', // 43 = place-holder
    'ffffff', // 44 = place-holder
    'ffffff', // 45 = place-holder
    'FF14A1', // 46 = T7.1 Annual croplands 
    'CA0079', // 47 = T7.2 Sown pastures and fields
    'AA005F', // 48 = T7.3 Plantations
    '8B0047', // 49 = T7.4 Urban and industrial ecosystems
    '6C0030', // 50 = T7.5
    'ffffff', // 51 = place-holder
    'ffffff', // 52 = place-holder
    'ffffff', // 53 = place-holder    
    'C0AC14', // 54 = S1.1
    'F2D918', // 55 = S1.2
    'ffffff', // 56 = place-holder
    '9DBF3D', // 57 = S2.1
    'ffffff', // 58 = place-holder
    'D49686', // 59 = SF1.1
    'FFB5A1', // 60 = SF1.2
    'ffffff', // 61 = place-holder
    'FB9DC4', // 62 = SF2.1
    'C67E8C', // 63 = SF2.2
    'ffffff', // 64 = place-holder
    '569B49', // 65 = SM1.1
    '008767', // 66 = SM1.2
    '006E79', // 67 = SM1.3
    'ffffff', // 68 = place-holder
    'ffffff', // 69 = place-holder 
    '73B898', // 70 = TF1.1
    '8EE3BB', // 71 = TF1.2 
    '9FFFD3', // 72 = TF1.3
    '93D699', // 73 = TF1.4
    'AFD6B3', // 74 = TF1.5
    'C1F195', // 75 = TF1.6
    'DFF1CF', // 76 = TF1.7
    'ffffff', // 77 = place-holder
    'ffffff', // 78 = place-holder
    'ffffff', // 79 = place-holder
    'ffffff', // 80 = place-holder
    'C4FFBE', // 81 = F1.1
    'ABF5A3', // 82 = F1.2
    '7EE5AA', // 83 = F1.3 
    '51D4B1', // 84 = F1.4
    '47BA9B', // 85 = F1.5
    '3A9C82', // 86 = F1.6
    '2D7763', // 87 = F1.7
    'ffffff', // 88 = place-holder
    'ffffff', // 89 = place-holder
    'ffffff', // 90 = place-holder
    'ffffff', // 91 = place-holder
    'D6FBFF', // 92 = F2.1
    'B8F8FF', // 93 = F2.2
    '85F3FF', // 94 = F2.3
    '42ECFF', // 95 = F2.4
    '1CD8ED', // 96 = F2.5
    '19BED1', // 97 = F2.6
    '009DB1', // 98 = F2.7
    '007A8A', // 99 = F2.8
    '005C6B', // 100 = F2.9
    '004252', // 101 = F2.10
    'ffffff', // 102 = place-holder
    'ffffff', // 103 = place-holder
    'ffffff', // 104 = place-holder
    'ffffff', // 105 = place-holder
    'ffffff', // 106 = place-holder
    'C4FFBE', // 107 = F3.1
    'ABF5A3', // 108 = F3.2
    '90DAA0', // 109 = F3.3 Rice paddies
    '51D4B1', // 110 = F3.4
    '47BA9B', // 111 = F3.5
    'ffffff', // 112 = place-holder
    'ffffff', // 113 = place-holder
    'ffffff', // 114 = place-holder
    'D43A99', // 115 = FM1.1
    'F960BA', // 116 = FM1.2
    'FF83DC', // 117 = FM1.3
    'ffffff', // 118 = place-holder
    'ffffff', // 119 = place-holder
    'F1EBFF', // 120 = M1.1 Seagrass meadows
    'E9E0FF', // 121 = M1.2
    'E0D3FF', // 122 = M1.3
    'C0B5FF', // 123 = M1.4
    'A197FE', // 124 = M1.5
    '897CFE', // 125 = M1.6
    '6F66EE', // 126 = M1.7
    '5E56D1', // 127 = M1.8
    '5653A6', // 128 = M1.9
    '3C3973', // 129 = M1.10
    'ffffff', // 130 = place-holder
    'ffffff', // 131 = place-holder
    'ffffff', // 132 = place-holder
    'ffffff', // 133 = place-holder     
    'ffffff', // 134 = place-holder
    'CEA8FE', // 135 = M2.1
    'B781FA', // 136 = M2.2
    'A474E0', // 137 = M2.3
    '9569CC', // 138 = M2.4
    '704F99', // 139 = M2.5
    'ffffff', // 140 = place-holder
    'ffffff', // 141 = place-holder
    'ffffff', // 142 = place-holder
    '1B7693', // 143 = M3.1
    '2192B5', // 144 = M3.2
    '27AED8', // 145 = M3.3
    '52BEE0', // 146 = M3.4
    '9CDAED', // 147 = M3.5
    'A8EAFF', // 148 = M3.6
    'DBF7FF', // 149 = M3.7
    'ffffff', // 150 = place-holder
    'ffffff', // 151 = place-holder
    'ffffff', // 152 = place-holder
    'ffffff', // 153 = place-holder
    '994A8E', // 154 = M4.1
    '7B2E72', // 155 = M4.2
    'ffffff', // 156 = place-holder
    '8782D2', // 157 = MT1.1
    'A49EF0', // 158 = MT1.2
    'C2BAFF', // 159 = MT1.3
    'E0D7FF', // 160 = MT1.4
    'ffffff', // 161 = place-holder
    'ffffff', // 162 = place-holder
    '726BDA', // 163 = MT2.1
    '5651A6', // 164 = MT2.2
    'ffffff', // 165 = place-holder     
    'CEC9FF', // 166 = MT3.1 Artificial shorelines
    'ffffff', // 167 = place-holder
    'AC676D', // 168 = MFT1.1 Coastal river deltas
    '89474E', // 169 = MFT1.2 Intertidal forests and shrublands
    '672931', // 170 = MFT1.3 Coastal saltmarshes and reedbeds
  ],
  min: 0, max: 170 // 8-bit raster
};

var standalone_efgs = [
  "S1.1 Aerobic caves",
  "S1.2 Endolithic systems",
  "S2.1 Anthropogenic subterranean voids",
  "SF1.1 Underground streams and pools",
  "SF1.2 Groundwater ecosystems",
  "SF2.1 Water pipes and subterranean canals",
  "SF2.2 Flooded mines and other voids",
  "SM1.1 Anchialine caves",
  "SM1.2 Anchialine pools",
  "SM1.3 Sea caves",
  "F2.10 Subglacial lakes",
  "M2.1 Epipelagic ocean waters",
  "M2.2 Mesopelagic ocean water",
  "M2.3 Bathypelagic ocean waters",
  "M2.4 Abyssopelagic ocean waters",
  "M2.5 Sea ice",
  "M4.1 Submerged artificial structures",
  "M4.2 Marine aquafarms"
  ]

// Data Mask Palette
var data_mask_palette = {palette: 
  ['483C46', // Mauve Shadow
  '3C6E71', // Stormy Teal
  '70AE6E' //Sage Green 
  ], 
  min:0, 
  max:2
}; 
var data_mask_classes = [
  "No data", 
  "Valid data", 
  "Cross reference to GET not possible"
  ];
var data_mask_values = [0,1,2];

// Continuous
var plasma_cols = ['0d0887', '3d049b', '6903a5','8d0fa1','ae2891','cb4679','df6363','f0844c','faa638', 'fbcc27','f0f921'];
var viridis_cols = ['440154','414487','2a788e','22a884','7ad151','fde725'];

exports = {
  realm_palette: realm_palette,
  realm_names: realm_names,
  realm_values: realm_values,
  biome_palette: biome_palette,
  efg_palette: efg_palette,
  efg_names: efg_names,
  efg_values: efg_values,
  standalone_efgs: standalone_efgs, 
  data_mask_palette: data_mask_palette,
  data_mask_classes: data_mask_classes,
  data_mask_values:data_mask_values,
  plasma_cols: plasma_cols,
  viridis_cols: viridis_cols
}
 

