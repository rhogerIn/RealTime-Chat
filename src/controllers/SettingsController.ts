import { Request, Response } from "express"; // Definindo as tipagens do express
import { SettingsService } from "../services/SettingsService";

class SettingsController{
    async create(request: Request, response: Response){
        const { chat, userName } = request.body;

        const settingsService = new SettingsService();
        try{
            const settings = await settingsService.create({chat, userName});
            return response.json(settings);
        }catch(err){
            return response.status(400).json({
                message: err.message,
            })
        }
    }

    async findByUserName(request: Request, response: Response){
        const { userName } = request.params;
        const settingsService = new SettingsService();

        const settings = await settingsService.findByUserName(userName);

        return response.json(settings);

    }
    async update(request: Request, response: Response){
        const { userName } = request.params;
        const { chat } = request.body;
        const settingsService = new SettingsService();
        const settings = await settingsService.update(userName, chat);

        return response.json(settings);

    }
}

export { SettingsController };