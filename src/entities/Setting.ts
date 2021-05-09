import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"; // Cada versão criar de uma forma diferente;

// Para não haver linhas vermelhas, vá até o arquivo tsconfig.json e descomentar "experimentalDecorators": true,e "emitDecoratorMetadata": true,  

@Entity("settings")
class Setting {     
    
    @PrimaryColumn()
    id: string;

    @Column()
    userName: string;
    @Column()
    chat: boolean;

    @UpdateDateColumn()
    update_at: Date;
    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { Setting };