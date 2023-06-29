import { Request, Response } from 'express';
import * as teaService from '../services/tea_service';

export const getTea = async (req: Request<object, object, object, { teaName: string | undefined; teaTemperature: string | undefined }>, res: Response) => {
	const teaName = req.query.teaName;
	const teaTemperature = req.query.teaTemperature;
	const tea = teaService.getTea(teaName, teaTemperature);
	res.json(tea).status(200);
};
