const AppError = require("../utils/AppError");

const { hash, compare } = require("bcryptjs");

// const sqliteConnection = require("../database/sqlite");
const knex = require("../database/knex");

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;

        if (!name) throw new AppError("Nome obrigatório.", 400);
        if (!email) throw new AppError("Email obrigatório.", 400);
        if (!password) throw new AppError("Senha obrigatória.", 400);

        const checkEmailExist = await knex("users").where({ email }).first();
        if (checkEmailExist) throw new AppError("Este email já está em uso.", 400);

        const hashedPassword = await hash(password, 8);

        await knex("users").insert({
            name,
            email,
            password: hashedPassword
        });

        return response.status(201).json({ message: "Cadastrado criado com sucesso." });
    };

    async update(request, response) {
        const { name, email, password, confirm_password } = request.body
        const { id } = request.params;

        if (!confirm_password) throw new AppError("É necessário informar a senha atual.", 400);

        const user = await knex("users").where({ id }).first();

        if (!user) throw new AppError("Usuário não encontrado.");

        const confirmPasswordIsCorrect = await compare(confirm_password, user.password);
        if (!confirmPasswordIsCorrect) throw new AppError("Senha atual inválida.", 400);

        if (name) {
            user.name = name;
        };

        if (email) {
            const userEmailUpdatedExists = await knex("users").where({ email }).first();
            if (userEmailUpdatedExists) throw new AppError("Este email já está em uso.", 400);
            user.email = email;
        };

        if (password) {
            const hashedNewPassword = await hash(password, 8);
            user.password = hashedNewPassword;
        };

        await knex("users")
            .update({
                name: user.name,
                email: user.email,
                password: user.password,
                updated_at: knex.fn.now()
            }).where({ id });

        return response.json({ message: "Dados atualizados com sucesso." })
    };
};

module.exports = UsersController;