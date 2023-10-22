export class Pays {
    idPays: number=0;
    nomPays: string="";
    imagePays: string="";
    descriptionPays: string="";
    superficiePays: string="";


    constructor(nomPays: string, imagePays: string, descriptionPays: string, superficiePays: string) {
        this.nomPays = nomPays;
        this.imagePays = imagePays;
        this.descriptionPays = descriptionPays;
        this.superficiePays = superficiePays;
    }

}

