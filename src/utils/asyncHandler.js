const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = (fn) => async(res,req,next) => {
//     try {
//         await fn(res, req, next)
//     } catch (error) {
//         res.status(err.code || 400).json({
//             message: err.message
//         })
//     }
// }
