export class Serie{
    name: string;
    channel: string;
    seasons: number;
    imagen: string; 
    description: string;   
    constructor(name: string, channel: string, seasons: number, imagen: string , description: string){
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.imagen = imagen;
        this.description = description;
    }
}