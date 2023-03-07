export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["company"] = "company";
    Attribute["city"] = "city";
    Attribute["email"] = "email";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
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
    attributeChangedCallback(propName, _, newValue) {
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
