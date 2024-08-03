
export async function header() {
    const actualUserId = localStorage.getItem("user_id");
    let user = null; // Usa null para indicar que no se ha encontrado aún
    try {
        const response = await fetch('../database/user.json');
        const data = await response.json();
        user = data.find(i => i.id == actualUserId) ; // Usa null si no se encuentra el usuario
    } catch (error) {
        console.error('Error:', error);
    }
    return /*html */ `<h2>Hello ${user.first_name}</h2>
    <img src="${user.avatar}" class="avatar" />`
}