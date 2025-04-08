import { Usuario } from "./usuario.interface";

export interface Result {
    success?: string;
    token?: string;
    user?: Usuario;
    error?: string;
}
