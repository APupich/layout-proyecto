export function post(data) {
    return /*html */ `<article class="default_cont p-1">
    <header class="flex flex_spbw ">
        <div class="flex gap-1">
            <img src="${data.user.avatar}" alt="" class="avatar" />
            <div class="">
                <h5>${data.user.first_name} ${data.user.last_name}</h5>
                <h5 class="txt_subtitle f-07">${data.uploaded_ago}</h5>
            </div>
        </div>
        <div class="grid_center">
            <span class="material-symbols-outlined"> more_horiz </span>
        </div>
    </header>
    <main>
        <div class="">
            <p class="p-05 f-09">${data.desc}</p>
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