export class Region {
    idRegion: number=0;
    imageRegion: string="";
    codeRegion: string="";
    nomRegion: string="";
    descriptionRegion: string="";
    domaineActiviteRegion: string="";
    superficie: string="";
    langueMajoritaire: string="";

    constructor(codeRegion: string, imageRegion: string, nomRegion: string, descriptionRegion: string, domaineActiviteRegion: string, superficie: string, langueMajoritaire: string) {
        this.codeRegion = codeRegion;
        this.imageRegion = imageRegion;
        this.nomRegion = nomRegion;
        this.descriptionRegion = descriptionRegion;
        this.domaineActiviteRegion = domaineActiviteRegion;
        this.superficie = superficie;
        this.langueMajoritaire = langueMajoritaire;
    }

}

