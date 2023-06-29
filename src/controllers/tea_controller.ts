import { Request, Response } from 'express';
import * as teaService from '../services/tea_service';

export const getTea = async (req: Request<object, object, object, { teaName: string | undefined; temperature: string | undefined }>, res: Response) => {
	const teaName = req.query.teaName;
	const temperature = req.query.temperature;
	const tea = teaService.getTea(teaName, temperature);
	res.json(tea).status(200);
};
