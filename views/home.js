

export function home(components) {

    return /*html */`<section id="notifications" class="flex p-1 of-scrollx gap-1">
            <article class="default_cont p-1">
                <div>
                    <span class="bg-yellow br-50 p-1 material-symbols-outlined">
                        notifications
                    </span>
                </div>
                <div>
                    <h5 class="txt_subtitle bold-5">Notifications</h5>
                    <h2>10 News</h2>
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
                    <h2>5 invites</h2>
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
                    <h2>10 New</h2>
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
                    <h2>7 New</h2>
                </div>
            </article>
        </section>

        <section id="posts" class="p-1 flex gap-2 flex_column">
        ${components["post"]()}    
        </section>`
 }