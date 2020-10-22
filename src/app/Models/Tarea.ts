import {Motivo} from './Motivo'
export class Tarea{
    id:number;
    name:String;
    description:String;
    id_motivo?: Motivo;
}