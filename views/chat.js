export async function chat(components,idUser) {
    let users = null; // Usa null para indicar que no se ha encontrado aún
    try {
        const response = await fetch('../database/chats.json');
        users = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
    const filteredUser = users.find(user => user.id == idUser);
    if (filteredUser) {
        console.log("g")
    }
    return /*html */`
        <section id="chat_cont" class="flex flex_column gap-1 p-1 bg-white">
            ${filteredUser.chat.map(u => {
                return components["chatComponent"](u);
            }).join('')}
        </section>`
}