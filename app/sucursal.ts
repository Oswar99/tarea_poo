import mongoose = require("mongoose")
import { connectMongoDB } from "./helpers"

export interface ISucursal extends mongoose.Document {
    nombre: string;
    pais: string;
    region: string;
    ciudad: string;
    direccion: string;
}

const SucursalSchema = new mongoose.Schema({

    nombre: { type: String, required: true},
    pais: { type: String, required: true},
    region: { type: String, required: true},
    ciudad: { type: String, required: true},
    direccion: { type: String, required: true}

});

export const Sucursal = mongoose.model<ISucursal>("Sucursal", SucursalSchema);

export const createSucursal = async function(
    nombre: string,
    pais: string,
    region: string,
    ciudad: string,
    direccion: string
){
    await connectMongoDB;

    const newOne = new Sucursal();
    newOne.nombre = nombre;
    newOne.pais = pais;
    newOne.region = region;
    newOne.ciudad = ciudad;
    newOne.direccion = direccion;

    newOne.save( (err: any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(newOne);
        }
    });

}
export function getSucursal(_name: string): Promise<any>{
    return new Promise<any>( resolve => {
        Sucursal.findOne({ nombre: _name}, (err:any, data:any)=>{
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        });
    });
}