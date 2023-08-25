import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export enum AstronautaTipo{
    Comandante = 'Comandante',
    Tripulante = 'Tripulante'
}

@Schema()
export class Astronauta{
    @Prop({required: true})
    nombre: string;

    @Prop({required: true})
    mision: string;

    @Prop({default: AstronautaTipo.Tripulante})
    tipo: AstronautaTipo
}

export const AstronautaSchema = SchemaFactory.createForClass(Astronauta)