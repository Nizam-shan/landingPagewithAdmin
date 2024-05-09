class SuccessResponse {
  constructor(message, data, statusCode = 200) {
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }
}

module.exports = SuccessResponse;
