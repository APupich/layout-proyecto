export function userComponent(data) {
    return /*html */ `
    <article class="default_cont p-1 flex flex_spbw" id="${data.id}">
        <div class="flex gap-1">
            <div class="grid-center">
                <img src="${data.avatar}" class="avatar" alt="">
            </div>
            <div class="data_user">
                <h5 class="font-ui bold-5">${data.first_name} ${data.last_name}</h5>
                <p class="txt_subtitle f-07 font-ui bold-5 plegado plegado-1">${data.biography}</p>
            </div>
        </div>
        <div class="grid-center">
            <span class="material-symbols-outlined txt_grey">
                person_add
            </span>
        </div>
    </article>`
}
export function userChatComponent(data) {
    return /*html */ `
    <article class="default_cont p-1 flex flex_spbw" id="${data.id}">
        <div class="flex gap-1">
            <div class="grid-center">
                <img src="${data.avatar}" class="avatar" alt="">
            </div>
            <div class="data_user">
                <h5 class="font-ui bold-5">${data.first_name} ${data.last_name}</h5>
                <p class="txt_subtitle f-07 font-ui bold-5 plegado plegado-1">${data.last_chat} - ${data.last_chat_time}</p>
            </div>
        </div>
        <div class="grid-center">
        <span class="material-symbols-outlined">
            ${data.silenced?"notifications_off":""}
        </span>
        </div>
    </article>`
}