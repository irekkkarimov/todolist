class ApiError extends Error {
    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }

    static badRequest(messgage) {
        return new ApiError(404, message)
    }

    static internal(messgage) {
        return new ApiError(500, message)
    }

    static forbidden(messgage) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError