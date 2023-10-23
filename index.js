const prompt = require('prompt-sync')()

const elements = [
	"H", "He",
	"Li", "Be", "B", "C", "N", "O", "F", "Ne",
	"Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
	"K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
	"Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe",
	"Cs", "Ba", "La", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn",
	"Fr", "Ra", "Ac", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og",

	"Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu",
	"Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"
]

let text = prompt('what to write?: ').replace(' ', '')

let working = []

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

					}

				} else {

					array = [...last]
					array.push(elements[j])
					step(elements, text, i + 1, array)

				}

			}

		}

	} else {

		working.push(last)
	}

}

step(elements, text, 0, [])
console.log(working.join(';\n'))
