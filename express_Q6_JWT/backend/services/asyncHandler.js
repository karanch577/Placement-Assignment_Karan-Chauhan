const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        console.log(`error: ${error}`)
        res.status(error.code).json({
            success: false,
            message: error.message
        })
    }
}

export default asyncHandler