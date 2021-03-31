import StatusService from '../services/status';

const StatusController = {
  getStatus(req, res) {
    const resposta = StatusService.getStatus();
    return res.status(200).json(resposta);
  },
};

export default StatusController;
