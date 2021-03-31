class ConflictError extends Error {
  constructor(message) {
    super(message);

    this.name = 'ConflictError';
    this.status = 409;
  }
}

export default ConflictError;
