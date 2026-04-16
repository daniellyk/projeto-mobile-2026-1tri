exports.authMiddleware = (req, res, next) => {
  if (req.headers.authorization === "token-valido-123") return next();
  res.status(401).json({ erro: "Token obrigatório" });}