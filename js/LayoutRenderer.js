export class LayoutRenderer {
    #actualPage = "";
    #pages;
    components;
    extraComponents;
    constructor(pages, components, extraComponents) {
        this.components = components;
        this.extraComponents = extraComponents;
        this.sortFunctionByKey();
        this.#pages = pages;
        this.#actualPage = "register";

        this.expand = this.expand.bind(this);
        this.search_bar = this.search_bar.bind(this);
    }

    sortFunctionByKey() {
        let buff = {};
        this.components.forEach((it) => {
            buff[it.name] = it;
        });
        this.components = buff;
        buff = {};

        this.extraComponents.forEach((it) => {
            buff[it.name] = it;
        });
        this.extraComponents = buff;
    }

    async renderMain(pageName, idChat = 0) {
        
        console.log(pageName);
        this.#actualPage = pageName;
        const pageFunction = this.#pages[pageName];
        if (pageFunction) {
            if (pageFunction.length == 2) {
                document.getElementById("content").innerHTML = await pageFunction(
                    this.extraComponents,
                    idChat
                );
            }else if (pageFunction.length == 1) {
                document.getElementById("content").innerHTML = await pageFunction(
                    this.extraComponents
                );
            } else {
                document.getElementById("content").innerHTML = await pageFunction();
            }

            document.querySelectorAll("#links").forEach((it) => {
                it.addEventListener("click", () => {
                    this.renderMain("home");
                });
            });
            await this.search_bar({target: {value: ""}});
            this.renderNavbar(pageName);
            this.renderHeader(idChat);
            let actualPage = document.getElementById(this.#actualPage);
            if (actualPage) {
                actualPage.classList.add("selected");
            }
        } else {
            document.getElementById("content").innerHTML = "<h1>404 Not Found</h1>";
        }
    }
    async renderHeader(idChat) {
        let headerE = document.querySelector("header");
        headerE.classList.add("flex", "flex_centerx", "flex_spbw", "p-1");
        headerE.classList.remove("bg-white","fixed");
        switch (this.#actualPage) {
            case "home":
                document.getElementById("header").innerHTML = await this.components["header_home"]();
                break;
            case "chats":
                document.getElementById("header").innerHTML = await this.components["header_chats"]();
                break;
            case "chat":
                headerE.classList.add("bg-white","fixed");
                document.getElementById("header").innerHTML = await this.components["header_chat"](idChat);
                break;
            default:
                document.getElementById("header").innerHTML = "";
                break;
        }
    }
    renderNavbar() {
        let footer = document.querySelector("#nav");
        switch (this.#actualPage) {
            case "register":
                footer.classList.add("dp-none");
                break;

            default:
                footer.innerHTML = this.components["navbar"]();
                footer.classList.add("fixed", "bg-white");
                footer.classList.remove("dp-none");
                this.chargeFunctions();
                break;
        }
    }
    chargeFunctions() {
        //carga la navbar, los links
        document.querySelectorAll("#nav-div a").forEach((it) => {
            it.addEventListener("click",  () => {
                this.renderMain(it.id);
                let actualPage = document.getElementById(this.#actualPage);
                if (actualPage) {
                    actualPage.classList.add("selected");
                }
            });
        });
        
        //expandir para publicaciones con mas texto q el permitido
        let auxx = document.querySelectorAll(".bio p");
        auxx.forEach((it) => {
            it.addEventListener("click", this.expand);
        });
        // barra de busqueda, se actualiza con cada nuevo caracter ingresado
        if (this.getActualPage) {
            let aux = document.querySelector(".search-bar")
            if (aux) {
                aux.addEventListener("input", this.search_bar);
            }
        }
        //ingresa al chat seleccionado
        if (this.getActualPage) {
            let aux2 = document.querySelectorAll("#chats_cont article")
            aux2.forEach(async (c)=>{
                c.addEventListener("click",({target})=>{
                    this.renderMain("chat",target.id)
                })
            })
        }
    }
    getActualPage() {
        return this.#actualPage;
    }

    expand({ target }) {
        target.classList.toggle("plegado");
    }

    async search_bar({ target: { value } }) {
        
        let data = null; // Usa null para indicar que no se ha encontrado aún
        try {
            const response = await fetch("../database/users.json");
            data = await response.json();
        } catch (error) {
            console.error("Error:", error);
        }
        if (value != "") {
            data = data.filter(item =>
                item.first_name.toLowerCase().startsWith(value.toLowerCase()) ||
                item.last_name.toLowerCase().startsWith(value.toLowerCase())
            );
        }
        if (data) {
            let aux = document.getElementById("users")
            if (aux) {
                aux.innerHTML = /*html */ `
                ${data.map((i) => this.extraComponents["userComponent"](i)).join("")}`;
            }
        }
    }
}
