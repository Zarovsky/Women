export interface Woman {
	id?: string,
	nombre: string,
	fechas: string,
	premios : Premios,
	categorias: Categorias,
	historia: string,
	alt_img?: string
	}

	export enum Premios {
		NobelLiteratura = "Nobel de Literatura",
		NobelQuimica = "Nobel de Química",
		NobelFisica = "Nobel de Física",
	}

	export enum Categorias {
		Mat = "Matemáticas",
		Fis = "Física",
		Qui = "Química",
		Art = "Arte",
		Ase = "Asesina"

	}
