export async function user(pCompo, eCompo) {
    const actualUserId = localStorage.getItem("user_id");
    let user = null; // Usa null para indicar que no se ha encontrado aún
    try {
        const response = await fetch('../database/user.json');
        const data = await response.json();
        user = data.find(i => i.id == actualUserId) ; // Usa null si no se encuentra el usuario
    } catch (error) {
        console.error('Error:', error);
    }
    return /*html */`
    <section class="flex flex_column mtop-1">
        <div class="bg-white flex flex_spbw p-1">
            <div>
                <p class="font-ui f-15">${user.first_name} ${user.last_name}</p>
                <p class="txt_subtitle f-09">${user.biography}</p>
            </div>
            <img src="${user.avatar}" class="mleft-1 big_avatar"/>
        </div>
    </section>
    <section class="bg-white flex flex_spar mtop-1 align_txt p-1">
        <div>
            <p class="f-12 bold-5">${user.total_followers}</p>
            <p class="txt_subtitle">Seguidores</p>
        </div>
        <div>
            <p class="f-12 bold-5">${user.total_followed}</p>
            <p class="txt_subtitle">Seguidos</p>
        </div>
    </section>
    <section id="my_posts" class="bg-white flex flex_column mtop-1 p-1">
        <div class="sticky flex flex_spbw flex_centerx bold-5 bg-white">
            <p class="f-12">Your posts</p>
            <div class="flex">
                <p class="f-12">${user.my_posts.length}</p>
                <span class="material-symbols-outlined f-18">
                    image
                </span>
            </div>
        </div>
        <div class="wrap flex gap-1 flex_centery">
            <article class="br-04 of-hidden relative">
                <div class="absolute flex flex_centery">
                    <span class="material-symbols-outlined txt_red">
                        favorite
                    </span>
                    <p class="bold-5">120</p>
                </div>
                <img src="https://i.pinimg.com/736x/22/be/35/22be350c0c942c1f537a57cd5cc34b23.jpg" alt="">
            </article>
            ${user.my_posts.map(post => {
                return eCompo["post_mini"](post);
            }).join('')}
        </div>
    </section>`
 }