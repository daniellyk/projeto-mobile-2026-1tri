const { users } = require("../database/users");
exports.login = (req, res) => {
    const { email, senha } = req.body;
    const user = users.find(u => u.email === email && u.senha === senha);
    if (user) res.json({ token: "token-valido-123" });
    else res.status(401).json({ erro: "Login inválido" });
};