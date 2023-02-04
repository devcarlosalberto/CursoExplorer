const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class NotesController {
    async index(request, response) {
        const { user_id, title, tags } = request.query;

        let notes;

        if (tags) {
            const filterTags = tags.split(",").map(tag => tag.trim());
            notes = await knex("tags")
                        .select([
                            "notes.id",
                            "notes.title",
                            "notes.description",
                            "notes.user_id",
                            "notes.created_at",
                            "notes.updated_at"
                        ])
                        .where("notes.user_id", user_id)
                        .whereIn("tags.name", filterTags)
                        .whereLike("notes.title", `%${title}%`)
                        .orderBy("notes.title")
                        .innerJoin("notes", "notes.id", "tags.note_id");

        } else {
            notes = await knex("notes")
                .where({ user_id })
                .whereLike("title", `%${title}%`)
                .orderBy("title");
        };

        const notesExists = notes.length >= 1;
        if (!notesExists) throw new AppError("Nenhuma nota foi encontrada.", 404);

        const userTags = await knex("tags").where({ user_id });
        const notesWithTags = notes.map(note => {
            const tags = userTags.filter(({ note_id }) => note_id === note.id)
            const tagsName = tags.map(({ name }) => name);
            
            return {
                ...note,
                tagsName
            };
        });
        
        return response.json(notesWithTags);
    };

    async show(request, response) {
        const { id } = request.params;

        const note = await knex("notes").where({ id: id }).first();
        const tags = await knex("tags").where({ note_id: id }).orderBy("name");
        const links = await knex("links").where({ note_id: id}).orderBy("created_at");

        if (!note) throw new AppError("Nota não encontrada", 404);

        const tagsName = tags.map(({ name }) => name);
        const linksContent = links.map(({ url }) => url);

        return response.json({
            ...note,
            tags: tagsName,
            links: linksContent
        });
    };

    async create(request, response) {
        const { title, description, tags, links } = request.body;
        const { user_id } = request.params;

        if (!title) throw new AppError("Necessário o título.");
        if (!description) throw new AppError("Necessário a descrição.");
        if (!tags) throw new AppError("Necessário as tags.");
        if (!links) throw new AppError("Necessário ao menos um link.");

        const note_id = await knex("notes").insert({
            title,
            description,
            user_id
        });

        const linksInsert = links.map(link => {
            return {
                note_id,
                url: link
            };
        });

        await knex("links").insert(linksInsert);

        const tagsInsert = tags.map(name => {
            return {
                name,
                note_id,
                user_id
            };
        });

        await knex("tags").insert(tagsInsert);

        response.status(201).json({ message: "Nota criada com sucesso." });
    };

    async delete(request, response) {
        const { id } = request.params;

        const note = await knex("notes").where({ id }).delete();

        if (!note) throw new AppError("Nota não encontrada", 404)

        return response.json({ message: "Nota deletada com sucesso."});
    };
};

module.exports = NotesController