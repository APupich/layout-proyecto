export async function chats(components) {
    let users = null; // Usa null para indicar que no se ha encontrado aún
    try {
        const response = await fetch('../database/chats.json');
        users = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
    return /*html */`
        <section id="chats_cont" class="flex flex_column gap-1 p-1 ">
            ${users.map(u => {
                return components["userChatComponent"](u);
            }).join('')}   
        </section>`
}