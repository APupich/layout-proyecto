export function chatComponent(data) {
  return /*html */ `
    <article class="br-04 p-1 ${data.from == "me" ? "msg-right" : "msg-left"}">
            <div class="data_user">
                <h5 class="font-ui bold-5">${data.message}</h5>
                <p class="txt_subtitle f-07 font-ui bold-5 plegado plegado-1"></p>
            </div>
    </article>`;
}
