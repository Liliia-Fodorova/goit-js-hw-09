const formData = {
    email: "",
    message: ""
}
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
const saveData = localStorage.getItem(STORAGE_KEY);

if (saveData) {
    const parsedData = JSON.parse(saveData);

    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";

    formData.elements.email.value = parsedData.email;
    formData.elements.message.value = parsedData.message;
}


form.addEventListener('input', event => {
    const { name, value } = event.target;

    if (!name) return;

    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
       
});





form.addEventListener('submit', event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);

    formData.email = "";
    formData.message = "";
     
    form.reset();
    
});