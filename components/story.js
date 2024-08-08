export function story(data) {

    return /*html */ `
            <article id="new-story" class="bg-black grid-center br-04">
                <div class="flex flex_column txt_center txt_white cover">
                    <img src="${data.image}" class="">
                    <div>
                        ${data.user.first_name} ${data.user.first_name}
                    </div>
                </div>
            </article>`
}