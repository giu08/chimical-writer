const prompt = require('prompt-sync')()

const elements = [

	"H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K",
	"Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb",
	"Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs",
	"Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta",
	"W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa",
	"U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt",
	"Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og",

]

const eData = [
  { name: 'hydrogen', n: '1', e: 'H', d: '1', c: '1.008' },
  { name: 'helium', n: '2', e: 'He', d: '4', c: '4.003' },
  { name: 'lithium', n: '3', e: 'Li', d: '7', c: '6.941' },
  { name: 'beryllium', n: '4', e: 'Be', d: '9', c: '9.012' },
  { name: 'boron', n: '5', e: 'B', d: '11', c: '10.81' },
  { name: 'carbon', n: '6', e: 'C', d: '12', c: '12.011' },
  { name: 'nitrogen', n: '7', e: 'N', d: '14', c: '14.007' },
  { name: 'oxygen', n: '8', e: 'O', d: '16', c: '15.999' },
  { name: 'fluorine', n: '9', e: 'F', d: '19', c: '18.998' },
  { name: 'neon', n: '10', e: 'Ne', d: '20', c: '20.18' },
  { name: 'sodium', n: '11', e: 'Na', d: '23', c: '22.990' },
  { name: 'magnesium', n: '12', e: 'Mg', d: '24', c: '24.305' },
  { name: 'aluminium', n: '13', e: 'Al', d: '27', c: '26.982' },
  { name: 'silicon', n: '14', e: 'Si', d: '28', c: '28.085' },
  { name: 'phosphorus', n: '15', e: 'P', d: '31', c: '30.974' },
  { name: 'sulfur', n: '16', e: 'S', d: '32', c: '32.06' },
  { name: 'chlorine', n: '17', e: 'Cl', d: '35', c: '35.453' },
  { name: 'argon', n: '18', e: 'Ar', d: '40', c: '39.948' },
  { name: 'potassium', n: '19', e: 'K', d: '39', c: '39.098' },
  { name: 'calcium', n: '20', e: 'Ca', d: '40', c: '40.078' },
  { name: 'scandium', n: '21', e: 'Sc', d: '45', c: '44.956' },
  { name: 'titanium', n: '22', e: 'Ti', d: '48', c: '47.867' },
  { name: 'vanadium', n: '23', e: 'V', d: '51', c: '50.942' },
  { name: 'chromium', n: '24', e: 'Cr', d: '52', c: '51.996' },
  { name: 'manganese', n: '25', e: 'Mn', d: '55', c: '54.938' },
  { name: 'iron', n: '26', e: 'Fe', d: '56', c: '55.845' },
  { name: 'cobalt', n: '27', e: 'Co', d: '59', c: '58.933' },
  { name: 'nickel', n: '28', e: 'Ni', d: '58', c: '58.693' },
  { name: 'copper', n: '29', e: 'Cu', d: '63', c: '63.546' },
  { name: 'zinc', n: '30', e: 'Zn', d: '65', c: '65.38' },
  { name: 'gallium', n: '31', e: 'Ga', d: '69', c: '69.723' },
  { name: 'germanium', n: '32', e: 'Ge', d: '72', c: '72.64' },
  { name: 'arsenic', n: '33', e: 'As', d: '75', c: '74.9216' },
  { name: 'selenium', n: '34', e: 'Se', d: '78', c: '78.96' },
  { name: 'bromine', n: '35', e: 'Br', d: '79', c: '79.904' },
  { name: 'krypton', n: '36', e: 'Kr', d: '83', c: '83.80' },
  { name: 'rubidium', n: '37', e: 'Rb', d: '85', c: '85.4678' },
  { name: 'strontium', n: '38', e: 'Sr', d: '88', c: '87.62' },
  { name: 'yttrium', n: '39', e: 'Y', d: '89', c: '88.9059' },
  { name: 'zirconium', n: '40', e: 'Zr', d: '91', c: '91.224' },
  { name: 'niobium', n: '41', e: 'Nb', d: '93', c: '92.9061' },
  { name: 'molybdenum', n: '42', e: 'Mo', d: '96', c: '95.95' },
  { name: 'technetium', n: '43', e: 'Tc', d: '98', c: '98.0841' },
  { name: 'ruthenium', n: '44', e: 'Ru', d: '101', c: '102.9055' },
  { name: 'rhodium', n: '45', e: 'Rh', d: '102', c: '102.9055' },
  { name: 'palladium', n: '46', e: 'Pd', d: '106', c: '106.42' },
  { name: 'silver', n: '47', e: 'Ag', d: '107', c: '107.8682' },
  { name: 'cadmium', n: '48', e: 'Cd', d: '112', c: '112.411' },
  { name: 'indium', n: '49', e: 'In', d: '113', c: '114.82' },
  { name: 'tin', n: '50', e: 'Sn', d: '118', c: '118.710' },
  { name: 'antimony', n: '51', e: 'Sb', d: '121', c: '121.76' },
  { name: 'tellurium', n: '52', e: 'Te', d: '127', c: '127.6' },
  { name: 'iodine', n: '53', e: 'I', d: '126', c: '126.904' },
  { name: 'xenon', n: '54', e: 'Xe', d: '131', c: '131.293' },
  { name: 'cesium', n: '55', e: 'Cs', d: '132', c: '132.905' },
  { name: 'barium', n: '56', e: 'Ba', d: '137', c: '137.327' },
  { name: 'lanthanum', n: '57', e: 'La', d: '138', c: '138.905' },
  { name: 'cerium', n: '58', e: 'Ce', d: '140', c: '140.908' },
  { name: 'praseodymium', n: '59', e: 'Pr', d: '141', c: '140.91' },
  { name: 'neodymium', n: '60', e: 'Nd', d: '144', c: '144.242' },
  { name: 'promethium', n: '61', e: 'Pm', d: '145', c: '145' },
  { name: 'samarium', n: '62', e: 'Sm', d: '150', c: '150.362' },
  { name: 'europium', n: '63', e: 'Eu', d: '151', c: '151.96' },
  { name: 'gadolinium', n: '64', e: 'Gd', d: '157', c: '157.253' },
  { name: 'terbium', n: '65', e: 'Tb', d: '158', c: '158.925' },
  { name: 'dysprosium', n: '66', e: 'Dy', d: '162', c: '162.500' },
  { name: 'holmium', n: '67', e: 'Ho', d: '164', c: '164.930' },
  { name: 'erbium', n: '68', e: 'Er', d: '167', c: '167.259' },
  { name: 'thulium', n: '69', e: 'Tm', d: '168', c: '168.9342' },
  { name: 'ytterbium', n: '70', e: 'Yb', d: '173', c: '173.054' },
  { name: 'lutetium', n: '71', e: 'Lu', d: '174', c: '174.967' },
  { name: 'hafnium', n: '72', e: 'Hf', d: '178', c: '178.490' },
  { name: 'tantalum', n: '73', e: 'Ta', d: '180', c: '180.948' },
  { name: 'tungsten', n: '74', e: 'W', d: '184', c: '184.930' },
  { name: 'rhenium', n: '75', e: 'Re', d: '186', c: '186.207' },
  { name: 'osmium', n: '76', e: 'Os', d: '190', c: '190.232' },
  { name: 'iridium', n: '77', e: 'Ir', d: '192', c: '192.217' },
  { name: 'platinum', n: '78', e: 'Pt', d: '195', c: '195.085' },
  { name: 'gold', n: '79', e: 'Au', d: '196', c: '196.967' },
  { name: 'mercury', n: '80', e: 'Hg', d: '200', c: '200.590' },
  { name: 'thallium', n: '81', e: 'Tl', d: '204', c: '204.383' },
  { name: 'lead', n: '82', e: 'Pb', d: '207', c: '207.2' },
  { name: 'bismuth', n: '83', e: 'Bi', d: '208', c: '208.980' },
  { name: 'polonium', n: '84', e: 'Po', d: '209', c: '209.0' },
  { name: 'astatine', n: '85', e: 'At', d: '210', c: '210' },
  { name: 'radon', n: '86', e: 'Rn', d: '222', c: '222' },
  { name: 'francium', n: '87', e: 'Fr', d: '223', c: '223' },
  { name: 'radium', n: '88', e: 'Ra', d: '226', c: '226' },
  { name: 'actinium', n: '89', e: 'Ac', d: '227', c: '227' },
  { name: 'thorium', n: '90', e: 'Th', d: '232', c: '232.0381' },
  { name: 'protactinium', n: '91', e: 'Pa', d: '231', c: '231' },
  { name: 'uranium', n: '92', e: 'U', d: '238', c: '238.028' },
  { name: 'neptunium', n: '93', e: 'Np', d: '237', c: '237' },
  { name: 'plutonium', n: '94', e: 'Pu', d: '244', c: '244' },
  { name: 'americium', n: '95', e: 'Am', d: '243', c: '243' },
  { name: 'curium', n: '96', e: 'Cm', d: '247', c: '247' },
  { name: 'berkelium', n: '97', e: 'Bk', d: '247', c: '247' },
  { name: 'californium', n: '98', e: 'Cf', d: '251', c: '251' },
  { name: 'einsteinium', n: '99', e: 'Es', d: '252', c: '252' },
  { name: 'fermium', n: '100', e: 'Fm', d: '257', c: '257' },
  { name: 'mendelevium', n: '101', e: 'Md', d: '258', c: '258' },
  { name: 'nobelium', n: '102', e: 'No', d: '259', c: '259' },
  { name: 'lawrencium', n: '103', e: 'Lr', d: '262', c: '262' },
  { name: 'rutherfordium', n: '104', e: 'Rf', d: '261', c: '261' },
  { name: 'dubnium', n: '105', e: 'Db', d: '262', c: '262' },
  { name: 'seaborgium', n: '106', e: 'Sg', d: '266', c: '266' },
  { name: 'bohrium', n: '107', e: 'Bh', d: '264', c: '264' },
  { name: 'hassium', n: '108', e: 'Hs', d: '265', c: '265' },
  { name: 'meitnerium', n: '109', e: 'Mt', d: '268', c: '268' },
  { name: 'darmstadtium', n: '110', e: 'Ds', d: '269', c: '269' },
  { name: 'roentgenium', n: '111', e: 'Rg', d: '272', c: '272' },
  { name: 'copernicium', n: '112', e: 'Cn', d: '285', c: '285' },
  { name: 'nihonium', n: '113', e: 'Nh', d: '286', c: '286' },
  { name: 'flerovium', n: '114', e: 'Fl', d: '289', c: '289' },
  { name: 'moscovium', n: '115', e: 'Mc', d: '290', c: '290' },
  { name: 'livermorium', n: '116', e: 'Lv', d: '293', c: '293' },
  { name: 'tennessine', n: '117', e: 'Ts', d: '294', c: '294' },
  { name: 'oganesson', n: '118', e: 'Og', d: '294', c: '294' }
]

let text = prompt('what to write?: ').split(' ').join('')

let working = []

let failed = []

let step = (elements, text, i, last) => {

	let array = last

	if (i < text.length) {

		for (let j = 0; j < elements.length; j++) {

			if (elements[j].toLowerCase().charAt(0) == text.toLowerCase().charAt(i)) {

				if (elements[j].length > 1) {

					if (elements[j].toLowerCase().charAt(1) == text.toLowerCase().charAt(i + 1)) {

						array = [...last]

						array.push(elements[j])

						step(elements, text, i + 2, array)

					} else {

						failed.push(last)

					}

				} else {

					array = [...last]

					array.push(elements[j])

					step(elements, text, i + 1, array)

				}

			} else {

				failed.push(last)

			}

		}

	} else {

		working.push(last)

	}

}

step(elements, text, 0, [])

working.sort((a, b) => a.length - b.length)

if (working.length > 0) {

	working.forEach((element) => {
		
		console.log(element.join(', '))
		
		element.forEach((element) => {
			
			console.log(eData[elements.indexOf(element)])
			
		})
	
	})

} else {

	console.log('not possible.')

}
