export function post(data) {

    return /*html */ `<article class="default_cont p-1 post">
    <header class="flex flex_spbw ">
        <div class="flex gap-1">
            <img src="${data.user.avatar}" alt="" class="avatar" />
            <div class="flex flex_column flex_centery">
                <h5 class="font-ui">${data.user.first_name} ${data.user.last_name}</h5>
                <h5 class="txt_subtitle f-07 font-ui">${data.uploaded_ago}</h5>
            </div>
        </div>
        <div class="grid_center">
            <span class="material-symbols-outlined"> more_horiz </span>
        </div>
    </header>
    <main>
        <div class="bio">
            <p id="${data.id}" class="m-05 f-09 font-ui txt_truncate plegado of-hidden">${data.desc}</p>
            <img class="br-04 max_content"
                src="${data.post}"
                alt="" />
        </div>
    </main>
    <footer class="flex flex_spar ptop-1">
        <span class="material-symbols-outlined"> favorite </span>
        <span class="material-symbols-outlined"> chat_bubble </span>
        <span class="material-symbols-outlined"> share </span>
    </footer>
</article>`
}
export function post_mini(data) {

    return /*html */ `<article class="br-04 of-hidden relative" id="${data.id_post}">
                <div class="absolute flex flex_centery flex_centerx">
                    <span class="material-symbols-outlined txt_red">
                        favorite
                    </span>
                    <p class="bold-5 f-08 txt_white">${data.favourites}</p>
                </div>
                <img src="${data.post}" alt="">
            </article>`
}