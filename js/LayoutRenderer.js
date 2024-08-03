
export class LayoutRenderer {
    #actualPage = ""
    #pages
    #components
    #extraComponents
    constructor(pages, components, extraComponents) {
        this.#components = components
        this.#extraComponents = extraComponents
        this.sortFunctionByKey();
        
        this.#pages = pages
        this.#actualPage = "register"
    }

    sortFunctionByKey(){
        let buff = {}
        this.#components.forEach(it => {
            buff[it.name] = it;
        })
        this.#components = buff;
        buff = {}

        this.#extraComponents.forEach(it => {
            buff[it.name] = it;
        })
        this.#extraComponents = buff;
    }
    
    async renderMain(pageName) {
        console.log(pageName);
        this.#actualPage = pageName
        const pageFunction = this.#pages[pageName];
        
        if (pageFunction) {
            this.renderHeader(pageName);
            this.renderNavbar(pageName);
            if (pageFunction.length >= 1) {
                document.getElementById('content').innerHTML =await pageFunction(this.#extraComponents);
            }else{
                document.getElementById('content').innerHTML = pageFunction();
            }
            
            document.querySelectorAll("#links").forEach(it => {
                it.addEventListener("click", () => {
                    this.renderMain("home");
                });
            })
            let actualPage = document.getElementById(this.#actualPage);
            if (actualPage) {
                actualPage.classList.add("selected")
            }
        } else {
            document.getElementById('content').innerHTML = '<h1>404 Not Found</h1>';
        }
    }
    async renderHeader() {
        let headerE = document.querySelector('header')
        headerE.classList.add("flex", "flex_centerx", "flex_spbw","p-1");
        switch (this.#actualPage) {
            case "home":
                document.getElementById("header").innerHTML = await this.#components["header"]();
                break;
            default:
                document.getElementById("header").innerHTML = ""
                break;
        }
    }
    renderNavbar() {
        let footer = document.querySelector('#nav')
        switch (this.#actualPage) {
            case "register":
                footer.classList.add("dp-none");
            break;
        
            default:
                footer.innerHTML = this.#components["navbar"]();
                footer.classList.add("fixed","bg-white");
                footer.classList.remove("dp-none");
            
                document.querySelectorAll('#nav-div span').forEach(it =>{
                    it.addEventListener("click", () => {
                        this.renderMain(it.id);
                        let actualPage = document.getElementById(this.#actualPage);
                        if (actualPage) {
                            actualPage.classList.add("selected")
                        }
                    })
                });
            break;
        }
    }
    getActualPage(){
        return this.#actualPage
    }
}