export enum Attribute {
    "name" = "name",
    "company" = "company",
    "city" = "city",
    "email" = "email"
}

class MyProfile extends HTMLElement {
    name?: string;
    company?: string;
    city?: string;
    email?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            city: null,
            company: null,
            name: null,
            email: null
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/profile/profile.css">
                <section>
                <h1>${this.name}</h1>
                <p>ID ${this.company}</p>
                <p>ID ${this.email}</p>
                <span><strong>${this.city}</strong><span>
                </section>
                `;
            }
        }
    }
    
customElements.define("my-profile", MyProfile);
export default MyProfile;