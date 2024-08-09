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

    async renderMain(pageName) {
        
        console.log(pageName);
        this.#actualPage = pageName;
        const pageFunction = this.#pages[pageName];

        if (pageFunction) {
            if (pageFunction.length >= 1) {
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
            this.renderHeader(pageName);
            this.renderNavbar(pageName);
            
            let actualPage = document.getElementById(this.#actualPage);
            if (actualPage) {
                actualPage.classList.add("selected");
            }
        } else {
            document.getElementById("content").innerHTML = "<h1>404 Not Found</h1>";
        }
    }
    async renderHeader() {
        let headerE = document.querySelector("header");
        headerE.classList.add("flex", "flex_centerx", "flex_spbw", "p-1");
        switch (this.#actualPage) {
            case "home":
                document.getElementById("header").innerHTML = await this.components["header"]();
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
    async chargeFunctions() {
        
        document.querySelectorAll("#nav-div a").forEach((it) => {
            it.addEventListener("click",  () => {
                this.renderMain(it.id);
                let actualPage = document.getElementById(this.#actualPage);
                if (actualPage) {
                    actualPage.classList.add("selected");
                }
            });
        });
        let auxx = document.querySelectorAll(".bio p");
        auxx.forEach((it) => {
            it.addEventListener("click", this.expand);
        });
        
        if (this.getActualPage) {
            let aux = document.querySelector(".search-bar")
            if (aux) {
                aux.addEventListener("input", this.search_bar);
            }
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
                ${data.map((i) => this.components["userComponent"](i)).join("")}`;
            }
        }
    }
}
