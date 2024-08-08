export async function fyp(components) {
    const actualUserId = localStorage.getItem("user_id");
    let data = null; // Usa null para indicar que no se ha encontrado aún
    try {
        const response = await fetch('../database/fyp.json');
        data = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
return /*html*/ `
<section id="storys_cont" class="p-1">
    <div class="default_cont max_content flex flex_column">
        <div class="storys__header flex flex_centerx flex_spbw p-1 ptop-2">
            <p class="f-15 bold-5">Stories</p>
            <span class="material-symbols-outlined">
                more_horiz
            </span>
        </div>
        <div id="storys" class="flex p-1 of-scrollx gap-1">
            <article id="new-story" class="bg-black grid-center br-04">
                <div class="flex flex_column txt_center txt_white">
                    <span class="material-symbols-outlined f-18 p-1 ">
                        add
                    </span>
                    <p class="p-1">Add new</p>
                </div>
            </article>
            ${data.storys.map(st => {
                return components["story"](st);
            }).join("")}
        </div>
    </div>
</section>
<section id="posts" class="p-1 flex flex_column gap-3">
${data.posts.map(post => {
    return components["post"](post);
}).join("")}  
</section>
`;
}