const countries = JSON.parse(`[
    {
        "name": "Afghanistan",
        "code": "+93",
        "image": "/image/countries/Afghanistan_+93.png"
    },
    {
        "name": "Albania",
        "code": "+355",
        "image": "/image/countries/Albania_+355.png"
    },
    {
        "name": "Algeria",
        "code": "+213",
        "image": "/image/countries/Algeria_+213.png"
    },
    {
        "name": "American Samoa",
        "code": "+1684",
        "image": "/image/countries/American_Samoa_+1684.png"
    },
    {
        "name": "Andorra",
        "code": "+376",
        "image": "/image/countries/Andorra_+376.png"
    },
    {
        "name": "Angola",
        "code": "+244",
        "image": "/image/countries/Angola_+244.png"
    },
    {
        "name": "Anguilla",
        "code": "+1264",
        "image": "/image/countries/Anguilla_+1264.png"
    },
    {
        "name": "Anonymous Numbers",
        "code": "+888",
        "image": "/image/countries/Anonymous_Numbers_+888.png"
    },
    {
        "name": "Antigua & Barbuda",
        "code": "+1268",
        "image": "/image/countries/Antigua_&_Barbuda_+1268.png"
    },
    {
        "name": "Argentina",
        "code": "+54",
        "image": "/image/countries/Argentina_+54.png"
    },
    {
        "name": "Armenia",
        "code": "+374",
        "image": "/image/countries/Armenia_+374.png"
    },
    {
        "name": "Aruba",
        "code": "+297",
        "image": "/image/countries/Aruba_+297.png"
    },
    {
        "name": "Australia",
        "code": "+61",
        "image": "/image/countries/Australia_+61.png"
    },
    {
        "name": "Austria",
        "code": "+43",
        "image": "/image/countries/Austria_+43.png"
    },
    {
        "name": "Azerbaijan",
        "code": "+994",
        "image": "/image/countries/Azerbaijan_+994.png"
    },
    {
        "name": "Bahamas",
        "code": "+1242",
        "image": "/image/countries/Bahamas_+1242.png"
    },
    {
        "name": "Bahrain",
        "code": "+973",
        "image": "/image/countries/Bahrain_+973.png"
    },
    {
        "name": "Bangladesh",
        "code": "+880",
        "image": "/image/countries/Bangladesh_+880.png"
    },
    {
        "name": "Barbados",
        "code": "+1246",
        "image": "/image/countries/Barbados_+1246.png"
    },
    {
        "name": "Belarus",
        "code": "+375",
        "image": "/image/countries/Belarus_+375.png"
    },
    {
        "name": "Belgium",
        "code": "+32",
        "image": "/image/countries/Belgium_+32.png"
    },
    {
        "name": "Belize",
        "code": "+501",
        "image": "/image/countries/Belize_+501.png"
    },
    {
        "name": "Benin",
        "code": "+229",
        "image": "/image/countries/Benin_+229.png"
    },
    {
        "name": "Bermuda",
        "code": "+1441",
        "image": "/image/countries/Bermuda_+1441.png"
    },
    {
        "name": "Bhutan",
        "code": "+975",
        "image": "/image/countries/Bhutan_+975.png"
    },
    {
        "name": "Bolivia",
        "code": "+591",
        "image": "/image/countries/Bolivia_+591.png"
    },
    {
        "name": "Bonaire, Sint Eustatius & Saba",
        "code": "+599",
        "image": "/image/countries/Bonaire,_Sint_Eustatius_&_Saba_+599.png"
    },
    {
        "name": "Bosnia & Herzegovina",
        "code": "+387",
        "image": "/image/countries/Bosnia_&_Herzegovina_+387.png"
    },
    {
        "name": "Botswana",
        "code": "+267",
        "image": "/image/countries/Botswana_+267.png"
    },
    {
        "name": "Brazil",
        "code": "+55",
        "image": "/image/countries/Brazil_+55.png"
    },
    {
        "name": "British Virgin Islands",
        "code": "+1284",
        "image": "/image/countries/British_Virgin_Islands_+1284.png"
    },
    {
        "name": "Brunei Darussalam",
        "code": "+673",
        "image": "/image/countries/Brunei_Darussalam_+673.png"
    },
    {
        "name": "Bulgaria",
        "code": "+359",
        "image": "/image/countries/Bulgaria_+359.png"
    },
    {
        "name": "Burkina Faso",
        "code": "+226",
        "image": "/image/countries/Burkina_Faso_+226.png"
    },
    {
        "name": "Burundi",
        "code": "+257",
        "image": "/image/countries/Burundi_+257.png"
    },
    {
        "name": "Cambodia",
        "code": "+855",
        "image": "/image/countries/Cambodia_+855.png"
    },
    {
        "name": "Cameroon",
        "code": "+237",
        "image": "/image/countries/Cameroon_+237.png"
    },
    {
        "name": "Canada",
        "code": "+1",
        "image": "/image/countries/Canada_+1.png"
    },
    {
        "name": "Cape Verde",
        "code": "+238",
        "image": "/image/countries/Cape_Verde_+238.png"
    },
    {
        "name": "Cayman Islands",
        "code": "+1345",
        "image": "/image/countries/Cayman_Islands_+1345.png"
    },
    {
        "name": "Central African Rep.",
        "code": "+236",
        "image": "/image/countries/Central_African_Rep._+236.png"
    },
    {
        "name": "Chad",
        "code": "+235",
        "image": "/image/countries/Chad_+235.png"
    },
    {
        "name": "Chile",
        "code": "+56",
        "image": "/image/countries/Chile_+56.png"
    },
    {
        "name": "China",
        "code": "+86",
        "image": "/image/countries/China_+86.png"
    },
    {
        "name": "Colombia",
        "code": "+57",
        "image": "/image/countries/Colombia_+57.png"
    },
    {
        "name": "Comoros",
        "code": "+269",
        "image": "/image/countries/Comoros_+269.png"
    },
    {
        "name": "Congo (Dem. Rep.)",
        "code": "+243",
        "image": "/image/countries/Congo_(Dem._Rep.)_+243.png"
    },
    {
        "name": "Congo (Rep.)",
        "code": "+242",
        "image": "/image/countries/Congo_(Rep.)_+242.png"
    },
    {
        "name": "Cook Islands",
        "code": "+682",
        "image": "/image/countries/Cook_Islands_+682.png"
    },
    {
        "name": "Costa Rica",
        "code": "+506",
        "image": "/image/countries/Costa_Rica_+506.png"
    },
    {
        "name": "C\u00c3\u00b4te d'Ivoire",
        "code": "+225",
        "image": "/image/countries/C\u00c3\u00b4te_d'Ivoire_+225.png"
    },
    {
        "name": "Croatia",
        "code": "+385",
        "image": "/image/countries/Croatia_+385.png"
    },
    {
        "name": "Cuba",
        "code": "+53",
        "image": "/image/countries/Cuba_+53.png"
    },
    {
        "name": "Cura\u00c3\u00a7ao",
        "code": "+599",
        "image": "/image/countries/Cura\u00c3\u00a7ao_+599.png"
    },
    {
        "name": "Cyprus",
        "code": "+357",
        "image": "/image/countries/Cyprus_+357.png"
    },
    {
        "name": "Czech Republic",
        "code": "+420",
        "image": "/image/countries/Czech_Republic_+420.png"
    },
    {
        "name": "Denmark",
        "code": "+45",
        "image": "/image/countries/Denmark_+45.png"
    },
    {
        "name": "Diego Garcia",
        "code": "+246",
        "image": "/image/countries/Diego_Garcia_+246.png"
    },
    {
        "name": "Djibouti",
        "code": "+253",
        "image": "/image/countries/Djibouti_+253.png"
    },
    {
        "name": "Dominica",
        "code": "+1767",
        "image": "/image/countries/Dominica_+1767.png"
    },
    {
        "name": "Dominican Rep.",
        "code": "+1809",
        "image": "/image/countries/Dominican_Rep._+1809.png"
    },
    {
        "name": "Dominican Rep.",
        "code": "+1829",
        "image": "/image/countries/Dominican_Rep._+1829.png"
    },
    {
        "name": "Dominican Rep.",
        "code": "+1849",
        "image": "/image/countries/Dominican_Rep._+1849.png"
    },
    {
        "name": "Ecuador",
        "code": "+593",
        "image": "/image/countries/Ecuador_+593.png"
    },
    {
        "name": "Egypt",
        "code": "+20",
        "image": "/image/countries/Egypt_+20.png"
    },
    {
        "name": "El Salvador",
        "code": "+503",
        "image": "/image/countries/El_Salvador_+503.png"
    },
    {
        "name": "Equatorial Guinea",
        "code": "+240",
        "image": "/image/countries/Equatorial_Guinea_+240.png"
    },
    {
        "name": "Eritrea",
        "code": "+291",
        "image": "/image/countries/Eritrea_+291.png"
    },
    {
        "name": "Estonia",
        "code": "+372",
        "image": "/image/countries/Estonia_+372.png"
    },
    {
        "name": "Eswatini",
        "code": "+268",
        "image": "/image/countries/Eswatini_+268.png"
    },
    {
        "name": "Ethiopia",
        "code": "+251",
        "image": "/image/countries/Ethiopia_+251.png"
    },
    {
        "name": "Falkland Islands",
        "code": "+500",
        "image": "/image/countries/Falkland_Islands_+500.png"
    },
    {
        "name": "Faroe Islands",
        "code": "+298",
        "image": "/image/countries/Faroe_Islands_+298.png"
    },
    {
        "name": "Fiji",
        "code": "+679",
        "image": "/image/countries/Fiji_+679.png"
    },
    {
        "name": "Finland",
        "code": "+358",
        "image": "/image/countries/Finland_+358.png"
    },
    {
        "name": "France",
        "code": "+33",
        "image": "/image/countries/France_+33.png"
    },
    {
        "name": "French Guiana",
        "code": "+594",
        "image": "/image/countries/French_Guiana_+594.png"
    },
    {
        "name": "French Polynesia",
        "code": "+689",
        "image": "/image/countries/French_Polynesia_+689.png"
    },
    {
        "name": "Gabon",
        "code": "+241",
        "image": "/image/countries/Gabon_+241.png"
    },
    {
        "name": "Gambia",
        "code": "+220",
        "image": "/image/countries/Gambia_+220.png"
    },
    {
        "name": "Georgia",
        "code": "+995",
        "image": "/image/countries/Georgia_+995.png"
    },
    {
        "name": "Germany",
        "code": "+49",
        "image": "/image/countries/Germany_+49.png"
    },
    {
        "name": "Ghana",
        "code": "+233",
        "image": "/image/countries/Ghana_+233.png"
    },
    {
        "name": "Gibraltar",
        "code": "+350",
        "image": "/image/countries/Gibraltar_+350.png"
    },
    {
        "name": "Greece",
        "code": "+30",
        "image": "/image/countries/Greece_+30.png"
    },
    {
        "name": "Greenland",
        "code": "+299",
        "image": "/image/countries/Greenland_+299.png"
    },
    {
        "name": "Grenada",
        "code": "+1473",
        "image": "/image/countries/Grenada_+1473.png"
    },
    {
        "name": "Guadeloupe",
        "code": "+590",
        "image": "/image/countries/Guadeloupe_+590.png"
    },
    {
        "name": "Guam",
        "code": "+1671",
        "image": "/image/countries/Guam_+1671.png"
    },
    {
        "name": "Guatemala",
        "code": "+502",
        "image": "/image/countries/Guatemala_+502.png"
    },
    {
        "name": "Guinea",
        "code": "+224",
        "image": "/image/countries/Guinea_+224.png"
    },
    {
        "name": "Guinea-Bissau",
        "code": "+245",
        "image": "/image/countries/Guinea-Bissau_+245.png"
    },
    {
        "name": "Guyana",
        "code": "+592",
        "image": "/image/countries/Guyana_+592.png"
    },
    {
        "name": "Haiti",
        "code": "+509",
        "image": "/image/countries/Haiti_+509.png"
    },
    {
        "name": "Honduras",
        "code": "+504",
        "image": "/image/countries/Honduras_+504.png"
    },
    {
        "name": "Hong Kong",
        "code": "+852",
        "image": "/image/countries/Hong_Kong_+852.png"
    },
    {
        "name": "Hungary",
        "code": "+36",
        "image": "/image/countries/Hungary_+36.png"
    },
    {
        "name": "Iceland",
        "code": "+354",
        "image": "/image/countries/Iceland_+354.png"
    },
    {
        "name": "India",
        "code": "+91",
        "image": "/image/countries/India_+91.png"
    },
    {
        "name": "Indonesia",
        "code": "+62",
        "image": "/image/countries/Indonesia_+62.png"
    },
    {
        "name": "Iran",
        "code": "+98",
        "image": "/image/countries/Iran_+98.png"
    },
    {
        "name": "Iraq",
        "code": "+964",
        "image": "/image/countries/Iraq_+964.png"
    },
    {
        "name": "Ireland",
        "code": "+353",
        "image": "/image/countries/Ireland_+353.png"
    },
    {
        "name": "Israel",
        "code": "+972",
        "image": "/image/countries/Israel_+972.png"
    },
    {
        "name": "Italy",
        "code": "+39",
        "image": "/image/countries/Italy_+39.png"
    },
    {
        "name": "Jamaica",
        "code": "+1876",
        "image": "/image/countries/Jamaica_+1876.png"
    },
    {
        "name": "Japan",
        "code": "+81",
        "image": "/image/countries/Japan_+81.png"
    },
    {
        "name": "Jordan",
        "code": "+962",
        "image": "/image/countries/Jordan_+962.png"
    },
    {
        "name": "Kazakhstan",
        "code": "+7",
        "image": "/image/countries/Kazakhstan_+7.png"
    },
    {
        "name": "Kenya",
        "code": "+254",
        "image": "/image/countries/Kenya_+254.png"
    },
    {
        "name": "Kiribati",
        "code": "+686",
        "image": "/image/countries/Kiribati_+686.png"
    },
    {
        "name": "Kosovo",
        "code": "+383",
        "image": "/image/countries/Kosovo_+383.png"
    },
    {
        "name": "Kuwait",
        "code": "+965",
        "image": "/image/countries/Kuwait_+965.png"
    },
    {
        "name": "Kyrgyzstan",
        "code": "+996",
        "image": "/image/countries/Kyrgyzstan_+996.png"
    },
    {
        "name": "Laos",
        "code": "+856",
        "image": "/image/countries/Laos_+856.png"
    },
    {
        "name": "Latvia",
        "code": "+371",
        "image": "/image/countries/Latvia_+371.png"
    },
    {
        "name": "Lebanon",
        "code": "+961",
        "image": "/image/countries/Lebanon_+961.png"
    },
    {
        "name": "Lesotho",
        "code": "+266",
        "image": "/image/countries/Lesotho_+266.png"
    },
    {
        "name": "Liberia",
        "code": "+231",
        "image": "/image/countries/Liberia_+231.png"
    },
    {
        "name": "Libya",
        "code": "+218",
        "image": "/image/countries/Libya_+218.png"
    },
    {
        "name": "Liechtenstein",
        "code": "+423",
        "image": "/image/countries/Liechtenstein_+423.png"
    },
    {
        "name": "Lithuania",
        "code": "+370",
        "image": "/image/countries/Lithuania_+370.png"
    },
    {
        "name": "Luxembourg",
        "code": "+352",
        "image": "/image/countries/Luxembourg_+352.png"
    },
    {
        "name": "Macau",
        "code": "+853",
        "image": "/image/countries/Macau_+853.png"
    },
    {
        "name": "Madagascar",
        "code": "+261",
        "image": "/image/countries/Madagascar_+261.png"
    },
    {
        "name": "Malawi",
        "code": "+265",
        "image": "/image/countries/Malawi_+265.png"
    },
    {
        "name": "Malaysia",
        "code": "+60",
        "image": "/image/countries/Malaysia_+60.png"
    },
    {
        "name": "Maldives",
        "code": "+960",
        "image": "/image/countries/Maldives_+960.png"
    },
    {
        "name": "Mali",
        "code": "+223",
        "image": "/image/countries/Mali_+223.png"
    },
    {
        "name": "Malta",
        "code": "+356",
        "image": "/image/countries/Malta_+356.png"
    },
    {
        "name": "Marshall Islands",
        "code": "+692",
        "image": "/image/countries/Marshall_Islands_+692.png"
    },
    {
        "name": "Martinique",
        "code": "+596",
        "image": "/image/countries/Martinique_+596.png"
    },
    {
        "name": "Mauritania",
        "code": "+222",
        "image": "/image/countries/Mauritania_+222.png"
    },
    {
        "name": "Mauritius",
        "code": "+230",
        "image": "/image/countries/Mauritius_+230.png"
    },
    {
        "name": "Mexico",
        "code": "+52",
        "image": "/image/countries/Mexico_+52.png"
    },
    {
        "name": "Micronesia",
        "code": "+691",
        "image": "/image/countries/Micronesia_+691.png"
    },
    {
        "name": "Moldova",
        "code": "+373",
        "image": "/image/countries/Moldova_+373.png"
    },
    {
        "name": "Monaco",
        "code": "+377",
        "image": "/image/countries/Monaco_+377.png"
    },
    {
        "name": "Mongolia",
        "code": "+976",
        "image": "/image/countries/Mongolia_+976.png"
    },
    {
        "name": "Montenegro",
        "code": "+382",
        "image": "/image/countries/Montenegro_+382.png"
    },
    {
        "name": "Montserrat",
        "code": "+1664",
        "image": "/image/countries/Montserrat_+1664.png"
    },
    {
        "name": "Morocco",
        "code": "+212",
        "image": "/image/countries/Morocco_+212.png"
    },
    {
        "name": "Mozambique",
        "code": "+258",
        "image": "/image/countries/Mozambique_+258.png"
    },
    {
        "name": "Myanmar",
        "code": "+95",
        "image": "/image/countries/Myanmar_+95.png"
    },
    {
        "name": "Namibia",
        "code": "+264",
        "image": "/image/countries/Namibia_+264.png"
    },
    {
        "name": "Nauru",
        "code": "+674",
        "image": "/image/countries/Nauru_+674.png"
    },
    {
        "name": "Nepal",
        "code": "+977",
        "image": "/image/countries/Nepal_+977.png"
    },
    {
        "name": "Netherlands",
        "code": "+31",
        "image": "/image/countries/Netherlands_+31.png"
    },
    {
        "name": "New Caledonia",
        "code": "+687",
        "image": "/image/countries/New_Caledonia_+687.png"
    },
    {
        "name": "New Zealand",
        "code": "+64",
        "image": "/image/countries/New_Zealand_+64.png"
    },
    {
        "name": "Nicaragua",
        "code": "+505",
        "image": "/image/countries/Nicaragua_+505.png"
    },
    {
        "name": "Niger",
        "code": "+227",
        "image": "/image/countries/Niger_+227.png"
    },
    {
        "name": "Nigeria",
        "code": "+234",
        "image": "/image/countries/Nigeria_+234.png"
    },
    {
        "name": "Niue",
        "code": "+683",
        "image": "/image/countries/Niue_+683.png"
    },
    {
        "name": "Norfolk Island",
        "code": "+672",
        "image": "/image/countries/Norfolk_Island_+672.png"
    },
    {
        "name": "North Korea",
        "code": "+850",
        "image": "/image/countries/North_Korea_+850.png"
    },
    {
        "name": "North Macedonia",
        "code": "+389",
        "image": "/image/countries/North_Macedonia_+389.png"
    },
    {
        "name": "Northern Mariana Islands",
        "code": "+1670",
        "image": "/image/countries/Northern_Mariana_Islands_+1670.png"
    },
    {
        "name": "Norway",
        "code": "+47",
        "image": "/image/countries/Norway_+47.png"
    },
    {
        "name": "Oman",
        "code": "+968",
        "image": "/image/countries/Oman_+968.png"
    },
    {
        "name": "Pakistan",
        "code": "+92",
        "image": "/image/countries/Pakistan_+92.png"
    },
    {
        "name": "Palau",
        "code": "+680",
        "image": "/image/countries/Palau_+680.png"
    },
    {
        "name": "Palestine",
        "code": "+970",
        "image": "/image/countries/Palestine_+970.png"
    },
    {
        "name": "Panama",
        "code": "+507",
        "image": "/image/countries/Panama_+507.png"
    },
    {
        "name": "Papua New Guinea",
        "code": "+675",
        "image": "/image/countries/Papua_New_Guinea_+675.png"
    },
    {
        "name": "Paraguay",
        "code": "+595",
        "image": "/image/countries/Paraguay_+595.png"
    },
    {
        "name": "Peru",
        "code": "+51",
        "image": "/image/countries/Peru_+51.png"
    },
    {
        "name": "Philippines",
        "code": "+63",
        "image": "/image/countries/Philippines_+63.png"
    },
    {
        "name": "Poland",
        "code": "+48",
        "image": "/image/countries/Poland_+48.png"
    },
    {
        "name": "Portugal",
        "code": "+351",
        "image": "/image/countries/Portugal_+351.png"
    },
    {
        "name": "Puerto Rico",
        "code": "+1787",
        "image": "/image/countries/Puerto_Rico_+1787.png"
    },
    {
        "name": "Puerto Rico",
        "code": "+1939",
        "image": "/image/countries/Puerto_Rico_+1939.png"
    },
    {
        "name": "Qatar",
        "code": "+974",
        "image": "/image/countries/Qatar_+974.png"
    },
    {
        "name": "R\u00c3\u00a9union",
        "code": "+262",
        "image": "/image/countries/R\u00c3\u00a9union_+262.png"
    },
    {
        "name": "Romania",
        "code": "+40",
        "image": "/image/countries/Romania_+40.png"
    },
    {
        "name": "Russian Federation",
        "code": "+7",
        "image": "/image/countries/Russian_Federation_+7.png"
    },
    {
        "name": "Rwanda",
        "code": "+250",
        "image": "/image/countries/Rwanda_+250.png"
    },
    {
        "name": "Saint Helena",
        "code": "+247",
        "image": "/image/countries/Saint_Helena_+247.png"
    },
    {
        "name": "Saint Helena",
        "code": "+290",
        "image": "/image/countries/Saint_Helena_+290.png"
    },
    {
        "name": "Saint Kitts & Nevis",
        "code": "+1869",
        "image": "/image/countries/Saint_Kitts_&_Nevis_+1869.png"
    },
    {
        "name": "Saint Lucia",
        "code": "+1758",
        "image": "/image/countries/Saint_Lucia_+1758.png"
    },
    {
        "name": "Saint Pierre & Miquelon",
        "code": "+508",
        "image": "/image/countries/Saint_Pierre_&_Miquelon_+508.png"
    },
    {
        "name": "Saint Vincent & the Grenadines",
        "code": "+1784",
        "image": "/image/countries/Saint_Vincent_&_the_Grenadines_+1784.png"
    },
    {
        "name": "Samoa",
        "code": "+685",
        "image": "/image/countries/Samoa_+685.png"
    },
    {
        "name": "San Marino",
        "code": "+378",
        "image": "/image/countries/San_Marino_+378.png"
    },
    {
        "name": "S\u00c3\u00a3o Tom\u00c3\u00a9 & Pr\u00c3\u00adncipe",
        "code": "+239",
        "image": "/image/countries/S\u00c3\u00a3o_Tom\u00c3\u00a9_&_Pr\u00c3\u00adncipe_+239.png"
    },
    {
        "name": "Saudi Arabia",
        "code": "+966",
        "image": "/image/countries/Saudi_Arabia_+966.png"
    },
    {
        "name": "Senegal",
        "code": "+221",
        "image": "/image/countries/Senegal_+221.png"
    },
    {
        "name": "Serbia",
        "code": "+381",
        "image": "/image/countries/Serbia_+381.png"
    },
    {
        "name": "Seychelles",
        "code": "+248",
        "image": "/image/countries/Seychelles_+248.png"
    },
    {
        "name": "Sierra Leone",
        "code": "+232",
        "image": "/image/countries/Sierra_Leone_+232.png"
    },
    {
        "name": "Singapore",
        "code": "+65",
        "image": "/image/countries/Singapore_+65.png"
    },
    {
        "name": "Sint Maarten",
        "code": "+1721",
        "image": "/image/countries/Sint_Maarten_+1721.png"
    },
    {
        "name": "Slovakia",
        "code": "+421",
        "image": "/image/countries/Slovakia_+421.png"
    },
    {
        "name": "Slovenia",
        "code": "+386",
        "image": "/image/countries/Slovenia_+386.png"
    },
    {
        "name": "Solomon Islands",
        "code": "+677",
        "image": "/image/countries/Solomon_Islands_+677.png"
    },
    {
        "name": "Somalia",
        "code": "+252",
        "image": "/image/countries/Somalia_+252.png"
    },
    {
        "name": "South Africa",
        "code": "+27",
        "image": "/image/countries/South_Africa_+27.png"
    },
    {
        "name": "South Korea",
        "code": "+82",
        "image": "/image/countries/South_Korea_+82.png"
    },
    {
        "name": "South Sudan",
        "code": "+211",
        "image": "/image/countries/South_Sudan_+211.png"
    },
    {
        "name": "Spain",
        "code": "+34",
        "image": "/image/countries/Spain_+34.png"
    },
    {
        "name": "Sri Lanka",
        "code": "+94",
        "image": "/image/countries/Sri_Lanka_+94.png"
    },
    {
        "name": "Sudan",
        "code": "+249",
        "image": "/image/countries/Sudan_+249.png"
    },
    {
        "name": "Suriname",
        "code": "+597",
        "image": "/image/countries/Suriname_+597.png"
    },
    {
        "name": "Sweden",
        "code": "+46",
        "image": "/image/countries/Sweden_+46.png"
    },
    {
        "name": "Switzerland",
        "code": "+41",
        "image": "/image/countries/Switzerland_+41.png"
    },
    {
        "name": "Syria",
        "code": "+963",
        "image": "/image/countries/Syria_+963.png"
    },
    {
        "name": "Taiwan",
        "code": "+886",
        "image": "/image/countries/Taiwan_+886.png"
    },
    {
        "name": "Tajikistan",
        "code": "+992",
        "image": "/image/countries/Tajikistan_+992.png"
    },
    {
        "name": "Tanzania",
        "code": "+255",
        "image": "/image/countries/Tanzania_+255.png"
    },
    {
        "name": "Thailand",
        "code": "+66",
        "image": "/image/countries/Thailand_+66.png"
    },
    {
        "name": "Timor-Leste",
        "code": "+670",
        "image": "/image/countries/Timor-Leste_+670.png"
    },
    {
        "name": "Togo",
        "code": "+228",
        "image": "/image/countries/Togo_+228.png"
    },
    {
        "name": "Tokelau",
        "code": "+690",
        "image": "/image/countries/Tokelau_+690.png"
    },
    {
        "name": "Tonga",
        "code": "+676",
        "image": "/image/countries/Tonga_+676.png"
    },
    {
        "name": "Trinidad & Tobago",
        "code": "+1868",
        "image": "/image/countries/Trinidad_&_Tobago_+1868.png"
    },
    {
        "name": "Tunisia",
        "code": "+216",
        "image": "/image/countries/Tunisia_+216.png"
    },
    {
        "name": "Turkey",
        "code": "+90",
        "image": "/image/countries/Turkey_+90.png"
    },
    {
        "name": "Turkmenistan",
        "code": "+993",
        "image": "/image/countries/Turkmenistan_+993.png"
    },
    {
        "name": "Turks & Caicos Islands",
        "code": "+1649",
        "image": "/image/countries/Turks_&_Caicos_Islands_+1649.png"
    },
    {
        "name": "Tuvalu",
        "code": "+688",
        "image": "/image/countries/Tuvalu_+688.png"
    },
    {
        "name": "Uganda",
        "code": "+256",
        "image": "/image/countries/Uganda_+256.png"
    },
    {
        "name": "Ukraine",
        "code": "+380",
        "image": "/image/countries/Ukraine_+380.png"
    },
    {
        "name": "United Arab Emirates",
        "code": "+971",
        "image": "/image/countries/United_Arab_Emirates_+971.png"
    },
    {
        "name": "United Kingdom",
        "code": "+44",
        "image": "/image/countries/United_Kingdom_+44.png"
    },
    {
        "name": "Uruguay",
        "code": "+598",
        "image": "/image/countries/Uruguay_+598.png"
    },
    {
        "name": "US Virgin Islands",
        "code": "+1340",
        "image": "/image/countries/US_Virgin_Islands_+1340.png"
    },
    {
        "name": "USA",
        "code": "+1",
        "image": "/image/countries/USA_+1.png"
    },
    {
        "name": "Uzbekistan",
        "code": "+998",
        "image": "/image/countries/Uzbekistan_+998.png"
    },
    {
        "name": "Vanuatu",
        "code": "+678",
        "image": "/image/countries/Vanuatu_+678.png"
    },
    {
        "name": "Venezuela",
        "code": "+58",
        "image": "/image/countries/Venezuela_+58.png"
    },
    {
        "name": "Vietnam",
        "code": "+84",
        "image": "/image/countries/Vietnam_+84.png"
    },
    {
        "name": "Wallis & Futuna",
        "code": "+681",
        "image": "/image/countries/Wallis_&_Futuna_+681.png"
    },
    {
        "name": "Yemen",
        "code": "+967",
        "image": "/image/countries/Yemen_+967.png"
    },
    {
        "name": "Zambia",
        "code": "+260",
        "image": "/image/countries/Zambia_+260.png"
    },
    {
        "name": "Zimbabwe",
        "code": "+263",
        "image": "/image/countries/Zimbabwe_+263.png"
    }
]`)

export { countries }