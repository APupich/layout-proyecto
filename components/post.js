export function post() {
    return /*html */ `<article class="default_cont p-1">
    <header class="flex flex_spbw pbot-1">
        <div class="flex gap-1">
            <img src="https://randomuser.me/api/portraits/women/9.jpg" alt="" class="avatar" />
            <div class="">
                <h5>Lorraine Mum</h5>
                <h5 class="txt_subtitle f-07">1hour ago</h5>
            </div>
        </div>
        <div class="grid_center">
            <span class="material-symbols-outlined"> more_horiz </span>
        </div>
    </header>
    <main>
        <div class="">
            <img class="br-04 max_content"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5f/41/f1/cajon-del-maipo-com-fundo.jpg?w=1400&h=1400&s=1"
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