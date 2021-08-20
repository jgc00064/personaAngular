
export class Persona {

    

    constructor (

        public usuario: string,
        public email_company: string,
        public email_personal: string,
        public ciudad: string,
        public fecha_inicio: Date,
    ){}

       get fullName (){

            return `${ this.usuario} ${this.email_company} ${this.email_personal} ${this.fecha_inicio} ${this.ciudad}`;
       } 

}

