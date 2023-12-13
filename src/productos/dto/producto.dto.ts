import { IsNotEmpty, IsString, IsNumber } from "class-validator"; //clase para validar datos

export class Products {
    @IsNotEmpty()
    @IsNumber()
    id: number; // id producto

    @IsNotEmpty()
    @IsString()
    nombre: string; // nombre producto

    @IsNotEmpty()
    @IsNumber()
    precio: number; // precio del producto
}
