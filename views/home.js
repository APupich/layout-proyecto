export async function home(pCompo,eCompo) {
    header.innerHTML = await pCompo["header_home"]();
    header.classList.add("flex", "flex_centerx", "flex_spbw", "p-1");
    
    const actualUserId = localStorage.getItem("user_id");
    let user = null; // Usa null para indicar que no se ha encontrado aún
    try {
        const response = await fetch('../database/user.json');
        const data = await response.json();
        user = data.find(i => i.id == actualUserId) ; // Usa null si no se encuentra el usuario
    } catch (error) {
        console.error('Error:', error);
    }
    return /*html */ `
        <section id="notifications" class="flex p-1 of-scrollx gap-1">
            <article class="default_cont p-1">
                <div>
                    <span class="bg-yellow br-50 p-1 material-symbols-outlined">
                        notifications
                    </span>
                </div>
                <div>
                    <h5 class="txt_subtitle bold-5">Notifications</h5>
                    <h2 class="font-ui">${user.notifications} News</h2>
                </div>
            </article>
            <article class="default_cont p-1">
                <div>
                    <span class="bg-green br-50 p-1 material-symbols-outlined">
                        event
                    </span>
                </div>
                <div>
                    <h5 class="txt_subtitle bold-5">Events</h5>
                    <h2 class="font-ui">${user.new_events} invites</h2>
                </div>
            </article>
            <article class="default_cont p-1">
                <div>
                    <span class="bg-blue br-50 p-1 material-symbols-outlined">
                        chat
                    </span>
                </div>
                <div>
                    <h5 class="txt_subtitle bold-5">Messages</h5>
                    <h2 class="font-ui">${user.new_messages} New</h2>
                </div>
            </article>
            <article class="default_cont p-1">
                <div>
                    <span class="bg-red br-50 p-1 material-symbols-outlined">
                        person_add
                    </span>
                </div>
                <div>
                    <h5 class="txt_subtitle bold-5">Followers</h5>
                    <h2 class="font-ui">${user.new_followers} New</h2>
                </div>
            </article>
        </section>

        <section id="posts" class="p-1 flex flex_column gap-3">
        ${user.followers_posts.map(post => {
            return eCompo["post"](post);
        }).join('')}   
        </section>`;
}
