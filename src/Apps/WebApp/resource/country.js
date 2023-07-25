const countries = JSON.parse(`[
    {
        "name": "Afghanistan",
        "emoji": "🇦🇫",
        "code": "+93",
        "image": "/image/countries/Afghanistan_+93.png"
    },
    {
        "name": "Albania",
        "emoji": "🇦🇱",
        "code": "+355",
        "image": "/image/countries/Albania_+355.png"
    },
    {
        "name": "Algeria",
        "emoji": "🇩🇿",
        "code": "+213",
        "image": "/image/countries/Algeria_+213.png"
    },
    {
        "name": "American Samoa",
        "emoji": "🇦🇸",
        "code": "+1684",
        "image": "/image/countries/American_Samoa_+1684.png"
    },
    {
        "name": "Andorra",
        "emoji": "🇦🇩",
        "code": "+376",
        "image": "/image/countries/Andorra_+376.png"
    },
    {
        "name": "Angola",
        "emoji": "🇦🇴",
        "code": "+244",
        "image": "/image/countries/Angola_+244.png"
    },
    {
        "name": "Anguilla",
        "emoji": "🇦🇮",
        "code": "+1264",
        "image": "/image/countries/Anguilla_+1264.png"
    },
    {
        "name": "Anonymous Numbers",
        "emoji": "🇫",
        "code": "+888",
        "image": "/image/countries/Anonymous_Numbers_+888.png"
    },
    {
        "name": "Antigua & Barbuda",
        "emoji": "🇦🇬",
        "code": "+1268",
        "image": "/image/countries/Antigua_&_Barbuda_+1268.png"
    },
    {
        "name": "Argentina",
        "emoji": "🇦🇷",
        "code": "+54",
        "image": "/image/countries/Argentina_+54.png"
    },
    {
        "name": "Armenia",
        "emoji": "🇦🇲",
        "code": "+374",
        "image": "/image/countries/Armenia_+374.png"
    },
    {
        "name": "Aruba",
        "emoji": "🇦🇼",
        "code": "+297",
        "image": "/image/countries/Aruba_+297.png"
    },
    {
        "name": "Australia",
        "emoji": "🇦🇺",
        "code": "+61",
        "image": "/image/countries/Australia_+61.png"
    },
    {
        "name": "Austria",
        "emoji": "🇦🇹",
        "code": "+43",
        "image": "/image/countries/Austria_+43.png"
    },
    {
        "name": "Azerbaijan",
        "emoji": "🇦🇿",
        "code": "+994",
        "image": "/image/countries/Azerbaijan_+994.png"
    },
    {
        "name": "Bahamas",
        "emoji": "🇧🇸",
        "code": "+1242",
        "image": "/image/countries/Bahamas_+1242.png"
    },
    {
        "name": "Bahrain",
        "emoji": "🇧🇭",
        "code": "+973",
        "image": "/image/countries/Bahrain_+973.png"
    },
    {
        "name": "Bangladesh",
        "emoji": "🇧🇩",
        "code": "+880",
        "image": "/image/countries/Bangladesh_+880.png"
    },
    {
        "name": "Barbados",
        "emoji": "🇧🇧",
        "code": "+1246",
        "image": "/image/countries/Barbados_+1246.png"
    },
    {
        "name": "Belarus",
        "emoji": "🇧🇾",
        "code": "+375",
        "image": "/image/countries/Belarus_+375.png"
    },
    {
        "name": "Belgium",
        "emoji": "🇧🇪",
        "code": "+32",
        "image": "/image/countries/Belgium_+32.png"
    },
    {
        "name": "Belize",
        "emoji": "🇧🇿",
        "code": "+501",
        "image": "/image/countries/Belize_+501.png"
    },
    {
        "name": "Benin",
        "emoji": "🇧🇯",
        "code": "+229",
        "image": "/image/countries/Benin_+229.png"
    },
    {
        "name": "Bermuda",
        "emoji": "🇧🇲",
        "code": "+1441",
        "image": "/image/countries/Bermuda_+1441.png"
    },
    {
        "name": "Bhutan",
        "emoji": "🇧🇹",
        "code": "+975",
        "image": "/image/countries/Bhutan_+975.png"
    },
    {
        "name": "Bolivia",
        "emoji": "🇧🇴",
        "code": "+591",
        "image": "/image/countries/Bolivia_+591.png"
    },
    {
        "name": "Bonaire, Sint Eustatius & Saba",
        "emoji": "🇧🇶",
        "code": "+599",
        "image": "/image/countries/Bonaire,_Sint_Eustatius_&_Saba_+599.png"
    },
    {
        "name": "Bosnia & Herzegovina",
        "emoji": "🇧🇦",
        "code": "+387",
        "image": "/image/countries/Bosnia_&_Herzegovina_+387.png"
    },
    {
        "name": "Botswana",
        "emoji": "🇧🇼",
        "code": "+267",
        "image": "/image/countries/Botswana_+267.png"
    },
    {
        "name": "Brazil",
        "emoji": "🇧🇷",
        "code": "+55",
        "image": "/image/countries/Brazil_+55.png"
    },
    {
        "name": "British Virgin Islands",
        "emoji": "🇻🇬",
        "code": "+1284",
        "image": "/image/countries/British_Virgin_Islands_+1284.png"
    },
    {
        "name": "Brunei Darussalam",
        "emoji": "🇧🇳",
        "code": "+673",
        "image": "/image/countries/Brunei_Darussalam_+673.png"
    },
    {
        "name": "Bulgaria",
        "emoji": "🇧🇬",
        "code": "+359",
        "image": "/image/countries/Bulgaria_+359.png"
    },
    {
        "name": "Burkina Faso",
        "emoji": "🇧🇫",
        "code": "+226",
        "image": "/image/countries/Burkina_Faso_+226.png"
    },
    {
        "name": "Burundi",
        "emoji": "🇧🇮",
        "code": "+257",
        "image": "/image/countries/Burundi_+257.png"
    },
    {
        "name": "Cambodia",
        "emoji": "🇰🇭",
        "code": "+855",
        "image": "/image/countries/Cambodia_+855.png"
    },
    {
        "name": "Cameroon",
        "emoji": "🇨🇲",
        "code": "+237",
        "image": "/image/countries/Cameroon_+237.png"
    },
    {
        "name": "Canada",
        "emoji": "🇨🇦",
        "code": "+1",
        "image": "/image/countries/Canada_+1.png"
    },
    {
        "name": "Cape Verde",
        "emoji": "🇨🇻",
        "code": "+238",
        "image": "/image/countries/Cape_Verde_+238.png"
    },
    {
        "name": "Cayman Islands",
        "emoji": "🇰🇾",
        "code": "+1345",
        "image": "/image/countries/Cayman_Islands_+1345.png"
    },
    {
        "name": "Central African Rep.",
        "emoji": "🇨🇫",
        "code": "+236",
        "image": "/image/countries/Central_African_Rep._+236.png"
    },
    {
        "name": "Chad",
        "emoji": "🇹🇩",
        "code": "+235",
        "image": "/image/countries/Chad_+235.png"
    },
    {
        "name": "Chile",
        "emoji": "🇨🇱",
        "code": "+56",
        "image": "/image/countries/Chile_+56.png"
    },
    {
        "name": "China",
        "emoji": "🇨🇳",
        "code": "+86",
        "image": "/image/countries/China_+86.png"
    },
    {
        "name": "Colombia",
        "emoji": "🇨🇴",
        "code": "+57",
        "image": "/image/countries/Colombia_+57.png"
    },
    {
        "name": "Comoros",
        "emoji": "🇰🇲",
        "code": "+269",
        "image": "/image/countries/Comoros_+269.png"
    },
    {
        "name": "Congo (Dem. Rep.)",
        "emoji": "🇨🇩",
        "code": "+243",
        "image": "/image/countries/Congo_(Dem._Rep.)_+243.png"
    },
    {
        "name": "Congo (Rep.)",
        "emoji": "🇨🇬",
        "code": "+242",
        "image": "/image/countries/Congo_(Rep.)_+242.png"
    },
    {
        "name": "Cook Islands",
        "emoji": "🇨🇰",
        "code": "+682",
        "image": "/image/countries/Cook_Islands_+682.png"
    },
    {
        "name": "Costa Rica",
        "emoji": "🇨🇷",
        "code": "+506",
        "image": "/image/countries/Costa_Rica_+506.png"
    },
    {
        "name": "Côte d'Ivoire",
        "emoji": "🇨🇮",
        "code": "+225",
        "image": "/image/countries/CÃ´te_d'Ivoire_+225.png"
    },
    {
        "name": "Croatia",
        "emoji": "🇭🇷",
        "code": "+385",
        "image": "/image/countries/Croatia_+385.png"
    },
    {
        "name": "Cuba",
        "emoji": "🇨🇺",
        "code": "+53",
        "image": "/image/countries/Cuba_+53.png"
    },
    {
        "name": "Curaçao",
        "emoji": "🇨🇼",
        "code": "+599",
        "image": "/image/countries/CuraÃ§ao_+599.png"
    },
    {
        "name": "Cyprus",
        "emoji": "🇨🇾",
        "code": "+357",
        "image": "/image/countries/Cyprus_+357.png"
    },
    {
        "name": "Czech Republic",
        "emoji": "🇨🇿",
        "code": "+420",
        "image": "/image/countries/Czech_Republic_+420.png"
    },
    {
        "name": "Denmark",
        "emoji": "🇩🇰",
        "code": "+45",
        "image": "/image/countries/Denmark_+45.png"
    },
    {
        "name": "Diego Garcia",
        "emoji": "🇮🇴",
        "code": "+246",
        "image": "/image/countries/Diego_Garcia_+246.png"
    },
    {
        "name": "Djibouti",
        "emoji": "🇩🇯",
        "code": "+253",
        "image": "/image/countries/Djibouti_+253.png"
    },
    {
        "name": "Dominica",
        "emoji": "🇩🇲",
        "code": "+1767",
        "image": "/image/countries/Dominica_+1767.png"
    },
    {
        "name": "Dominican Rep.",
        "emoji": "🇩🇴",
        "code": "+1809",
        "image": "/image/countries/Dominican_Rep._+1809.png"
    },
    {
        "name": "Dominican Rep.",
        "emoji": "🇩🇴",
        "code": "+1829",
        "image": "/image/countries/Dominican_Rep._+1829.png"
    },
    {
        "name": "Dominican Rep.",
        "emoji": "🇩🇴",
        "code": "+1849",
        "image": "/image/countries/Dominican_Rep._+1849.png"
    },
    {
        "name": "Ecuador",
        "emoji": "🇪🇨",
        "code": "+593",
        "image": "/image/countries/Ecuador_+593.png"
    },
    {
        "name": "Egypt",
        "emoji": "🇪🇬",
        "code": "+20",
        "image": "/image/countries/Egypt_+20.png"
    },
    {
        "name": "El Salvador",
        "emoji": "🇸🇻",
        "code": "+503",
        "image": "/image/countries/El_Salvador_+503.png"
    },
    {
        "name": "Equatorial Guinea",
        "emoji": "🇬🇶",
        "code": "+240",
        "image": "/image/countries/Equatorial_Guinea_+240.png"
    },
    {
        "name": "Eritrea",
        "emoji": "🇪🇷",
        "code": "+291",
        "image": "/image/countries/Eritrea_+291.png"
    },
    {
        "name": "Estonia",
        "emoji": "🇪🇪",
        "code": "+372",
        "image": "/image/countries/Estonia_+372.png"
    },
    {
        "name": "Eswatini",
        "emoji": "🇸🇿",
        "code": "+268",
        "image": "/image/countries/Eswatini_+268.png"
    },
    {
        "name": "Ethiopia",
        "emoji": "🇪🇹",
        "code": "+251",
        "image": "/image/countries/Ethiopia_+251.png"
    },
    {
        "name": "Falkland Islands",
        "emoji": "🇫🇰",
        "code": "+500",
        "image": "/image/countries/Falkland_Islands_+500.png"
    },
    {
        "name": "Faroe Islands",
        "emoji": "🇫🇴",
        "code": "+298",
        "image": "/image/countries/Faroe_Islands_+298.png"
    },
    {
        "name": "Fiji",
        "emoji": "🇫🇯",
        "code": "+679",
        "image": "/image/countries/Fiji_+679.png"
    },
    {
        "name": "Finland",
        "emoji": "🇫🇮",
        "code": "+358",
        "image": "/image/countries/Finland_+358.png"
    },
    {
        "name": "France",
        "emoji": "🇫🇷",
        "code": "+33",
        "image": "/image/countries/France_+33.png"
    },
    {
        "name": "French Guiana",
        "emoji": "🇬🇫",
        "code": "+594",
        "image": "/image/countries/French_Guiana_+594.png"
    },
    {
        "name": "French Polynesia",
        "emoji": "🇵🇫",
        "code": "+689",
        "image": "/image/countries/French_Polynesia_+689.png"
    },
    {
        "name": "Gabon",
        "emoji": "🇬🇦",
        "code": "+241",
        "image": "/image/countries/Gabon_+241.png"
    },
    {
        "name": "Gambia",
        "emoji": "🇬🇲",
        "code": "+220",
        "image": "/image/countries/Gambia_+220.png"
    },
    {
        "name": "Georgia",
        "emoji": "🇬🇪",
        "code": "+995",
        "image": "/image/countries/Georgia_+995.png"
    },
    {
        "name": "Germany",
        "emoji": "🇩🇪",
        "code": "+49",
        "image": "/image/countries/Germany_+49.png"
    },
    {
        "name": "Ghana",
        "emoji": "🇬🇭",
        "code": "+233",
        "image": "/image/countries/Ghana_+233.png"
    },
    {
        "name": "Gibraltar",
        "emoji": "🇬🇮",
        "code": "+350",
        "image": "/image/countries/Gibraltar_+350.png"
    },
    {
        "name": "Greece",
        "emoji": "🇬🇷",
        "code": "+30",
        "image": "/image/countries/Greece_+30.png"
    },
    {
        "name": "Greenland",
        "emoji": "🇬🇱",
        "code": "+299",
        "image": "/image/countries/Greenland_+299.png"
    },
    {
        "name": "Grenada",
        "emoji": "🇬🇩",
        "code": "+1473",
        "image": "/image/countries/Grenada_+1473.png"
    },
    {
        "name": "Guadeloupe",
        "emoji": "🇬🇵",
        "code": "+590",
        "image": "/image/countries/Guadeloupe_+590.png"
    },
    {
        "name": "Guam",
        "emoji": "🇬🇺",
        "code": "+1671",
        "image": "/image/countries/Guam_+1671.png"
    },
    {
        "name": "Guatemala",
        "emoji": "🇬🇹",
        "code": "+502",
        "image": "/image/countries/Guatemala_+502.png"
    },
    {
        "name": "Guinea",
        "emoji": "🇬🇳",
        "code": "+224",
        "image": "/image/countries/Guinea_+224.png"
    },
    {
        "name": "Guinea-Bissau",
        "emoji": "🇬🇼",
        "code": "+245",
        "image": "/image/countries/Guinea-Bissau_+245.png"
    },
    {
        "name": "Guyana",
        "emoji": "🇬🇾",
        "code": "+592",
        "image": "/image/countries/Guyana_+592.png"
    },
    {
        "name": "Haiti",
        "emoji": "🇭🇹",
        "code": "+509",
        "image": "/image/countries/Haiti_+509.png"
    },
    {
        "name": "Honduras",
        "emoji": "🇭🇳",
        "code": "+504",
        "image": "/image/countries/Honduras_+504.png"
    },
    {
        "name": "Hong Kong",
        "emoji": "🇭🇰",
        "code": "+852",
        "image": "/image/countries/Hong_Kong_+852.png"
    },
    {
        "name": "Hungary",
        "emoji": "🇭🇺",
        "code": "+36",
        "image": "/image/countries/Hungary_+36.png"
    },
    {
        "name": "Iceland",
        "emoji": "🇮🇸",
        "code": "+354",
        "image": "/image/countries/Iceland_+354.png"
    },
    {
        "name": "India",
        "emoji": "🇮🇳",
        "code": "+91",
        "image": "/image/countries/India_+91.png"
    },
    {
        "name": "Indonesia",
        "emoji": "🇮🇩",
        "code": "+62",
        "image": "/image/countries/Indonesia_+62.png"
    },
    {
        "name": "Iran",
        "emoji": "🇮🇷",
        "code": "+98",
        "image": "/image/countries/Iran_+98.png"
    },
    {
        "name": "Iraq",
        "emoji": "🇮🇶",
        "code": "+964",
        "image": "/image/countries/Iraq_+964.png"
    },
    {
        "name": "Ireland",
        "emoji": "🇮🇪",
        "code": "+353",
        "image": "/image/countries/Ireland_+353.png"
    },
    {
        "name": "Israel",
        "emoji": "🇮🇱",
        "code": "+972",
        "image": "/image/countries/Israel_+972.png"
    },
    {
        "name": "Italy",
        "emoji": "🇮🇹",
        "code": "+39",
        "image": "/image/countries/Italy_+39.png"
    },
    {
        "name": "Jamaica",
        "emoji": "🇯🇲",
        "code": "+1876",
        "image": "/image/countries/Jamaica_+1876.png"
    },
    {
        "name": "Japan",
        "emoji": "🇯🇵",
        "code": "+81",
        "image": "/image/countries/Japan_+81.png"
    },
    {
        "name": "Jordan",
        "emoji": "🇯🇴",
        "code": "+962",
        "image": "/image/countries/Jordan_+962.png"
    },
    {
        "name": "Kazakhstan",
        "emoji": "🇰🇿",
        "code": "+7",
        "image": "/image/countries/Kazakhstan_+7.png"
    },
    {
        "name": "Kenya",
        "emoji": "🇰🇪",
        "code": "+254",
        "image": "/image/countries/Kenya_+254.png"
    },
    {
        "name": "Kiribati",
        "emoji": "🇰🇮",
        "code": "+686",
        "image": "/image/countries/Kiribati_+686.png"
    },
    {
        "name": "Kosovo",
        "emoji": "🇽🇰",
        "code": "+383",
        "image": "/image/countries/Kosovo_+383.png"
    },
    {
        "name": "Kuwait",
        "emoji": "🇰🇼",
        "code": "+965",
        "image": "/image/countries/Kuwait_+965.png"
    },
    {
        "name": "Kyrgyzstan",
        "emoji": "🇰🇬",
        "code": "+996",
        "image": "/image/countries/Kyrgyzstan_+996.png"
    },
    {
        "name": "Laos",
        "emoji": "🇱🇦",
        "code": "+856",
        "image": "/image/countries/Laos_+856.png"
    },
    {
        "name": "Latvia",
        "emoji": "🇱🇻",
        "code": "+371",
        "image": "/image/countries/Latvia_+371.png"
    },
    {
        "name": "Lebanon",
        "emoji": "🇱🇧",
        "code": "+961",
        "image": "/image/countries/Lebanon_+961.png"
    },
    {
        "name": "Lesotho",
        "emoji": "🇱🇸",
        "code": "+266",
        "image": "/image/countries/Lesotho_+266.png"
    },
    {
        "name": "Liberia",
        "emoji": "🇱🇷",
        "code": "+231",
        "image": "/image/countries/Liberia_+231.png"
    },
    {
        "name": "Libya",
        "emoji": "🇱🇾",
        "code": "+218",
        "image": "/image/countries/Libya_+218.png"
    },
    {
        "name": "Liechtenstein",
        "emoji": "🇱🇮",
        "code": "+423",
        "image": "/image/countries/Liechtenstein_+423.png"
    },
    {
        "name": "Lithuania",
        "emoji": "🇱🇹",
        "code": "+370",
        "image": "/image/countries/Lithuania_+370.png"
    },
    {
        "name": "Luxembourg",
        "emoji": "🇱🇺",
        "code": "+352",
        "image": "/image/countries/Luxembourg_+352.png"
    },
    {
        "name": "Macau",
        "emoji": "🇲🇴",
        "code": "+853",
        "image": "/image/countries/Macau_+853.png"
    },
    {
        "name": "Madagascar",
        "emoji": "🇲🇬",
        "code": "+261",
        "image": "/image/countries/Madagascar_+261.png"
    },
    {
        "name": "Malawi",
        "emoji": "🇲🇼",
        "code": "+265",
        "image": "/image/countries/Malawi_+265.png"
    },
    {
        "name": "Malaysia",
        "emoji": "🇲🇾",
        "code": "+60",
        "image": "/image/countries/Malaysia_+60.png"
    },
    {
        "name": "Maldives",
        "emoji": "🇲🇻",
        "code": "+960",
        "image": "/image/countries/Maldives_+960.png"
    },
    {
        "name": "Mali",
        "emoji": "🇲🇱",
        "code": "+223",
        "image": "/image/countries/Mali_+223.png"
    },
    {
        "name": "Malta",
        "emoji": "🇲🇹",
        "code": "+356",
        "image": "/image/countries/Malta_+356.png"
    },
    {
        "name": "Marshall Islands",
        "emoji": "🇲🇭",
        "code": "+692",
        "image": "/image/countries/Marshall_Islands_+692.png"
    },
    {
        "name": "Martinique",
        "emoji": "🇲🇶",
        "code": "+596",
        "image": "/image/countries/Martinique_+596.png"
    },
    {
        "name": "Mauritania",
        "emoji": "🇲🇷",
        "code": "+222",
        "image": "/image/countries/Mauritania_+222.png"
    },
    {
        "name": "Mauritius",
        "emoji": "🇲🇺",
        "code": "+230",
        "image": "/image/countries/Mauritius_+230.png"
    },
    {
        "name": "Mexico",
        "emoji": "🇲🇽",
        "code": "+52",
        "image": "/image/countries/Mexico_+52.png"
    },
    {
        "name": "Micronesia",
        "emoji": "🇫🇲",
        "code": "+691",
        "image": "/image/countries/Micronesia_+691.png"
    },
    {
        "name": "Moldova",
        "emoji": "🇲🇩",
        "code": "+373",
        "image": "/image/countries/Moldova_+373.png"
    },
    {
        "name": "Monaco",
        "emoji": "🇲🇨",
        "code": "+377",
        "image": "/image/countries/Monaco_+377.png"
    },
    {
        "name": "Mongolia",
        "emoji": "🇲🇳",
        "code": "+976",
        "image": "/image/countries/Mongolia_+976.png"
    },
    {
        "name": "Montenegro",
        "emoji": "🇲🇪",
        "code": "+382",
        "image": "/image/countries/Montenegro_+382.png"
    },
    {
        "name": "Montserrat",
        "emoji": "🇲🇸",
        "code": "+1664",
        "image": "/image/countries/Montserrat_+1664.png"
    },
    {
        "name": "Morocco",
        "emoji": "🇲🇦",
        "code": "+212",
        "image": "/image/countries/Morocco_+212.png"
    },
    {
        "name": "Mozambique",
        "emoji": "🇲🇿",
        "code": "+258",
        "image": "/image/countries/Mozambique_+258.png"
    },
    {
        "name": "Myanmar",
        "emoji": "🇲🇲",
        "code": "+95",
        "image": "/image/countries/Myanmar_+95.png"
    },
    {
        "name": "Namibia",
        "emoji": "🇳🇦",
        "code": "+264",
        "image": "/image/countries/Namibia_+264.png"
    },
    {
        "name": "Nauru",
        "emoji": "🇳🇷",
        "code": "+674",
        "image": "/image/countries/Nauru_+674.png"
    },
    {
        "name": "Nepal",
        "emoji": "🇳🇵",
        "code": "+977",
        "image": "/image/countries/Nepal_+977.png"
    },
    {
        "name": "Netherlands",
        "emoji": "🇳🇱",
        "code": "+31",
        "image": "/image/countries/Netherlands_+31.png"
    },
    {
        "name": "New Caledonia",
        "emoji": "🇳🇨",
        "code": "+687",
        "image": "/image/countries/New_Caledonia_+687.png"
    },
    {
        "name": "New Zealand",
        "emoji": "🇳🇿",
        "code": "+64",
        "image": "/image/countries/New_Zealand_+64.png"
    },
    {
        "name": "Nicaragua",
        "emoji": "🇳🇮",
        "code": "+505",
        "image": "/image/countries/Nicaragua_+505.png"
    },
    {
        "name": "Niger",
        "emoji": "🇳🇪",
        "code": "+227",
        "image": "/image/countries/Niger_+227.png"
    },
    {
        "name": "Nigeria",
        "emoji": "🇳🇬",
        "code": "+234",
        "image": "/image/countries/Nigeria_+234.png"
    },
    {
        "name": "Niue",
        "emoji": "🇳🇺",
        "code": "+683",
        "image": "/image/countries/Niue_+683.png"
    },
    {
        "name": "Norfolk Island",
        "emoji": "🇳🇫",
        "code": "+672",
        "image": "/image/countries/Norfolk_Island_+672.png"
    },
    {
        "name": "North Korea",
        "emoji": "🇰🇵",
        "code": "+850",
        "image": "/image/countries/North_Korea_+850.png"
    },
    {
        "name": "North Macedonia",
        "emoji": "🇲🇰",
        "code": "+389",
        "image": "/image/countries/North_Macedonia_+389.png"
    },
    {
        "name": "Northern Mariana Islands",
        "emoji": "🇲🇵",
        "code": "+1670",
        "image": "/image/countries/Northern_Mariana_Islands_+1670.png"
    },
    {
        "name": "Norway",
        "emoji": "🇳🇴",
        "code": "+47",
        "image": "/image/countries/Norway_+47.png"
    },
    {
        "name": "Oman",
        "emoji": "🇴🇲",
        "code": "+968",
        "image": "/image/countries/Oman_+968.png"
    },
    {
        "name": "Pakistan",
        "emoji": "🇵🇰",
        "code": "+92",
        "image": "/image/countries/Pakistan_+92.png"
    },
    {
        "name": "Palau",
        "emoji": "🇵🇼",
        "code": "+680",
        "image": "/image/countries/Palau_+680.png"
    },
    {
        "name": "Palestine",
        "emoji": "🇵🇸",
        "code": "+970",
        "image": "/image/countries/Palestine_+970.png"
    },
    {
        "name": "Panama",
        "emoji": "🇵🇦",
        "code": "+507",
        "image": "/image/countries/Panama_+507.png"
    },
    {
        "name": "Papua New Guinea",
        "emoji": "🇵🇬",
        "code": "+675",
        "image": "/image/countries/Papua_New_Guinea_+675.png"
    },
    {
        "name": "Paraguay",
        "emoji": "🇵🇾",
        "code": "+595",
        "image": "/image/countries/Paraguay_+595.png"
    },
    {
        "name": "Peru",
        "emoji": "🇵🇪",
        "code": "+51",
        "image": "/image/countries/Peru_+51.png"
    },
    {
        "name": "Philippines",
        "emoji": "🇵🇭",
        "code": "+63",
        "image": "/image/countries/Philippines_+63.png"
    },
    {
        "name": "Poland",
        "emoji": "🇵🇱",
        "code": "+48",
        "image": "/image/countries/Poland_+48.png"
    },
    {
        "name": "Portugal",
        "emoji": "🇵🇹",
        "code": "+351",
        "image": "/image/countries/Portugal_+351.png"
    },
    {
        "name": "Puerto Rico",
        "emoji": "🇵🇷",
        "code": "+1787",
        "image": "/image/countries/Puerto_Rico_+1787.png"
    },
    {
        "name": "Puerto Rico",
        "emoji": "🇵🇷",
        "code": "+1939",
        "image": "/image/countries/Puerto_Rico_+1939.png"
    },
    {
        "name": "Qatar",
        "emoji": "🇶🇦",
        "code": "+974",
        "image": "/image/countries/Qatar_+974.png"
    },
    {
        "name": "Réunion",
        "emoji": "🇷🇪",
        "code": "+262",
        "image": "/image/countries/Réunion_+262.png"
    },
    {
        "name": "Romania",
        "emoji": "🇷🇴",
        "code": "+40",
        "image": "/image/countries/Romania_+40.png"
    },
    {
        "name": "Russian Federation",
        "emoji": "🇷🇺",
        "code": "+7",
        "image": "/image/countries/Russian_Federation_+7.png"
    },
    {
        "name": "Rwanda",
        "emoji": "🇷🇼",
        "code": "+250",
        "image": "/image/countries/Rwanda_+250.png"
    },
    {
        "name": "Saint Helena",
        "emoji": "🇸🇭",
        "code": "+247",
        "image": "/image/countries/Saint_Helena_+247.png"
    },
    {
        "name": "Saint Helena",
        "emoji": "🇸🇭",
        "code": "+290",
        "image": "/image/countries/Saint_Helena_+290.png"
    },
    {
        "name": "Saint Kitts & Nevis",
        "emoji": "🇰🇳",
        "code": "+1869",
        "image": "/image/countries/Saint_Kitts_&_Nevis_+1869.png"
    },
    {
        "name": "Saint Lucia",
        "emoji": "🇱🇨",
        "code": "+1758",
        "image": "/image/countries/Saint_Lucia_+1758.png"
    },
    {
        "name": "Saint Pierre & Miquelon",
        "emoji": "🇵🇲",
        "code": "+508",
        "image": "/image/countries/Saint_Pierre_&_Miquelon_+508.png"
    },
    {
        "name": "Saint Vincent & the Grenadines",
        "emoji": "🇻🇨",
        "code": "+1784",
        "image": "/image/countries/Saint_Vincent_&_the_Grenadines_+1784.png"
    },
    {
        "name": "Samoa",
        "emoji": "🇼🇸",
        "code": "+685",
        "image": "/image/countries/Samoa_+685.png"
    },
    {
        "name": "San Marino",
        "emoji": "🇸🇲",
        "code": "+378",
        "image": "/image/countries/San_Marino_+378.png"
    },
    {
        "name": "São Tomé & Príncipe",
        "emoji": "🇸🇹",
        "code": "+239",
        "image": "/image/countries/São_Tomé_&_Príncipe_+239.png"
    },
    {
        "name": "Saudi Arabia",
        "emoji": "🇸🇦",
        "code": "+966",
        "image": "/image/countries/Saudi_Arabia_+966.png"
    },
    {
        "name": "Senegal",
        "emoji": "🇸🇳",
        "code": "+221",
        "image": "/image/countries/Senegal_+221.png"
    },
    {
        "name": "Serbia",
        "emoji": "🇷🇸",
        "code": "+381",
        "image": "/image/countries/Serbia_+381.png"
    },
    {
        "name": "Seychelles",
        "emoji": "🇸🇨",
        "code": "+248",
        "image": "/image/countries/Seychelles_+248.png"
    },
    {
        "name": "Sierra Leone",
        "emoji": "🇸🇱",
        "code": "+232",
        "image": "/image/countries/Sierra_Leone_+232.png"
    },
    {
        "name": "Singapore",
        "emoji": "🇸🇬",
        "code": "+65",
        "image": "/image/countries/Singapore_+65.png"
    },
    {
        "name": "Sint Maarten",
        "emoji": "🇸🇽",
        "code": "+1721",
        "image": "/image/countries/Sint_Maarten_+1721.png"
    },
    {
        "name": "Slovakia",
        "emoji": "🇸🇰",
        "code": "+421",
        "image": "/image/countries/Slovakia_+421.png"
    },
    {
        "name": "Slovenia",
        "emoji": "🇸🇮",
        "code": "+386",
        "image": "/image/countries/Slovenia_+386.png"
    },
    {
        "name": "Solomon Islands",
        "emoji": "🇸🇧",
        "code": "+677",
        "image": "/image/countries/Solomon_Islands_+677.png"
    },
    {
        "name": "Somalia",
        "emoji": "🇸🇴",
        "code": "+252",
        "image": "/image/countries/Somalia_+252.png"
    },
    {
        "name": "South Africa",
        "emoji": "🇿🇦",
        "code": "+27",
        "image": "/image/countries/South_Africa_+27.png"
    },
    {
        "name": "South Korea",
        "emoji": "🇰🇷",
        "code": "+82",
        "image": "/image/countries/South_Korea_+82.png"
    },
    {
        "name": "South Sudan",
        "emoji": "🇸🇸",
        "code": "+211",
        "image": "/image/countries/South_Sudan_+211.png"
    },
    {
        "name": "Spain",
        "emoji": "🇪🇸",
        "code": "+34",
        "image": "/image/countries/Spain_+34.png"
    },
    {
        "name": "Sri Lanka",
        "emoji": "🇱🇰",
        "code": "+94",
        "image": "/image/countries/Sri_Lanka_+94.png"
    },
    {
        "name": "Sudan",
        "emoji": "🇸🇩",
        "code": "+249",
        "image": "/image/countries/Sudan_+249.png"
    },
    {
        "name": "Suriname",
        "emoji": "🇸🇷",
        "code": "+597",
        "image": "/image/countries/Suriname_+597.png"
    },
    {
        "name": "Sweden",
        "emoji": "🇸🇪",
        "code": "+46",
        "image": "/image/countries/Sweden_+46.png"
    },
    {
        "name": "Switzerland",
        "emoji": "🇨🇭",
        "code": "+41",
        "image": "/image/countries/Switzerland_+41.png"
    },
    {
        "name": "Syria",
        "emoji": "🇸🇾",
        "code": "+963",
        "image": "/image/countries/Syria_+963.png"
    },
    {
        "name": "Taiwan",
        "emoji": "🇹🇼",
        "code": "+886",
        "image": "/image/countries/Taiwan_+886.png"
    },
    {
        "name": "Tajikistan",
        "emoji": "🇹🇯",
        "code": "+992",
        "image": "/image/countries/Tajikistan_+992.png"
    },
    {
        "name": "Tanzania",
        "emoji": "🇹🇿",
        "code": "+255",
        "image": "/image/countries/Tanzania_+255.png"
    },
    {
        "name": "Thailand",
        "emoji": "🇹🇭",
        "code": "+66",
        "image": "/image/countries/Thailand_+66.png"
    },
    {
        "name": "Timor-Leste",
        "emoji": "🇹🇱",
        "code": "+670",
        "image": "/image/countries/Timor-Leste_+670.png"
    },
    {
        "name": "Togo",
        "emoji": "🇹🇬",
        "code": "+228",
        "image": "/image/countries/Togo_+228.png"
    },
    {
        "name": "Tokelau",
        "emoji": "🇹🇰",
        "code": "+690",
        "image": "/image/countries/Tokelau_+690.png"
    },
    {
        "name": "Tonga",
        "emoji": "🇹🇴",
        "code": "+676",
        "image": "/image/countries/Tonga_+676.png"
    },
    {
        "name": "Trinidad & Tobago",
        "emoji": "🇹🇹",
        "code": "+1868",
        "image": "/image/countries/Trinidad_&_Tobago_+1868.png"
    },
    {
        "name": "Tunisia",
        "emoji": "🇹🇳",
        "code": "+216",
        "image": "/image/countries/Tunisia_+216.png"
    },
    {
        "name": "Turkey",
        "emoji": "🇹🇷",
        "code": "+90",
        "image": "/image/countries/Turkey_+90.png"
    },
    {
        "name": "Turkmenistan",
        "emoji": "🇹🇲",
        "code": "+993",
        "image": "/image/countries/Turkmenistan_+993.png"
    },
    {
        "name": "Turks & Caicos Islands",
        "emoji": "🇹🇨",
        "code": "+1649",
        "image": "/image/countries/Turks_&_Caicos_Islands_+1649.png"
    },
    {
        "name": "Tuvalu",
        "emoji": "🇹🇻",
        "code": "+688",
        "image": "/image/countries/Tuvalu_+688.png"
    },
    {
        "name": "Uganda",
        "emoji": "🇺🇬",
        "code": "+256",
        "image": "/image/countries/Uganda_+256.png"
    },
    {
        "name": "Ukraine",
        "emoji": "🇺🇦",
        "code": "+380",
        "image": "/image/countries/Ukraine_+380.png"
    },
    {
        "name": "United Arab Emirates",
        "emoji": "🇦🇪",
        "code": "+971",
        "image": "/image/countries/United_Arab_Emirates_+971.png"
    },
    {
        "name": "United Kingdom",
        "emoji": "🇬🇧",
        "code": "+44",
        "image": "/image/countries/United_Kingdom_+44.png"
    },
    {
        "name": "Uruguay",
        "emoji": "🇺🇾",
        "code": "+598",
        "image": "/image/countries/Uruguay_+598.png"
    },
    {
        "name": "US Virgin Islands",
        "emoji": "🇻🇮",
        "code": "+1340",
        "image": "/image/countries/US_Virgin_Islands_+1340.png"
    },
    {
        "name": "USA",
        "emoji": "🇺🇸",
        "code": "+1",
        "image": "/image/countries/USA_+1.png"
    },
    {
        "name": "Uzbekistan",
        "emoji": "🇺🇿",
        "code": "+998",
        "image": "/image/countries/Uzbekistan_+998.png"
    },
    {
        "name": "Vanuatu",
        "emoji": "🇻🇺",
        "code": "+678",
        "image": "/image/countries/Vanuatu_+678.png"
    },
    {
        "name": "Venezuela",
        "emoji": "🇻🇪",
        "code": "+58",
        "image": "/image/countries/Venezuela_+58.png"
    },
    {
        "name": "Vietnam",
        "emoji": "🇻🇳",
        "code": "+84",
        "image": "/image/countries/Vietnam_+84.png"
    },
    {
        "name": "Wallis & Futuna",
        "emoji": "🇼🇫",
        "code": "+681",
        "image": "/image/countries/Wallis_&_Futuna_+681.png"
    },
    {
        "name": "Yemen",
        "emoji": "🇾🇪",
        "code": "+967",
        "image": "/image/countries/Yemen_+967.png"
    },
    {
        "name": "Zambia",
        "emoji": "🇿🇲",
        "code": "+260",
        "image": "/image/countries/Zambia_+260.png"
    },
    {
        "name": "Zimbabwe",
        "emoji": "🇿🇼",
        "code": "+263",
        "image": "/image/countries/Zimbabwe_+263.png"
    }
]`)



export { countries }