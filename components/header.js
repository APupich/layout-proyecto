
export async function header_home() {
    const actualUserId = localStorage.getItem("user_id");
    let user = null; // Usa null para indicar que no se ha encontrado aún
    try {
        const response = await fetch('./database/user.json');
        const data = await response.json();
        user = data.find(i => i.id == actualUserId) ; // Usa null si no se encuentra el usuario
    } catch (error) {
        console.error('Error:', error);
    }
    return /*html */ `<h2 class="font-ui">Hello ${user.first_name}!</h2>
    <img src="${user.avatar}" class="avatar" />`
}


export async function header_chats() {
    const actualUserId = localStorage.getItem("user_id");
    let user = null; // Usa null para indicar que no se ha encontrado aún
    try {
        const response = await fetch('./database/user.json');
        const data = await response.json();
        user = data.find(i => i.id == actualUserId) ; // Usa null si no se encuentra el usuario
    } catch (error) {
        console.error('Error:', error);
    }
    return /*html */ `<h2 class="font-ui">Your Chats!</h2>
    `
}

export async function header_chat(idUser) {
    let users = null; // Usa null para indicar que no se ha encontrado aún
    try {
        const response = await fetch('./database/chats.json');
        users = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
    const filteredUser = users.find(user => user.id == idUser);
    return /*html */ `
    <div class="flex flex-centerx flex-centery">
        <h2 class="font-ui">${filteredUser.first_name} ${filteredUser.last_name}</h2></div>
    <img src="${filteredUser.avatar}" class="avatar" />`
}
