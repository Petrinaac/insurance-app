
class Storage {

    constructor() {
        const insuredPersonsStorage = localStorage.getItem("insuredPersons");
        this.insuredPersons = insuredPersonsStorage ? JSON.parse(insuredPersonsStorage) : [];

        this.firstName = document.getElementById("firstName");
        this.lastName = document.getElementById("lastName");
        this.age = document.getElementById("age");
        this.phone = document.getElementById("phone");

        this.button = document.getElementById("button")

        this._saveToLocalStorage()
    }

    _saveToLocalStorage() {
        this.button.addEventListener('click',(e) => {
            e.preventDefault()
            if (typeof this.firstName.value === 'string' && typeof this.lastName.value === 'string' && !isNaN(this.age.value) && !isNaN(this.phone.value)) {
                const insured = new Insured(this.firstName.value, this.lastName.value, this.age.value, this.phone.value)
                this.insuredPersons.push(insured);
                this.saveInsuredPerson(); 
            }
        })
    }   

    saveInsuredPerson() {
        localStorage.setItem("insuredPersons", JSON.stringify(this.insuredPersons))
    }

}