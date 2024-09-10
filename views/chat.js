export async function chat(pCompo,components,idUser) {
    header.innerHTML = await pCompo["header_chat"](idUser);
    header.classList.add("flex", "flex_centerx", "flex_spbw", "p-1");
    header.classList.add("bg-white","fixed");
    let users = null; // Usa null para indicar que no se ha encontrado aún
    try {
        const response = await fetch('./database/chats.json');
        users = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
    const filteredUser = await users.find(user => user.id == idUser);
    return /*html */`
        <section id="chat_cont" class="flex flex_column gap-1 p-1 bg-white">
            ${filteredUser.chat.map(u => {
                return components["chatComponent"](u);
            }).join('')}
            
            <input type="text" class="p-1 br-04 font-ui f-12">
        </section>`
}