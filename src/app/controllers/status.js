import * as service from '../services/status';

export const getStatus = (req, res) => {
    const resposta = service.getStatus();

    return res.json(resposta);
};
