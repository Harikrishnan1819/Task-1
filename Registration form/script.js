class FormValidation{
    formValues = {
        firstname : "",
        lastname : "",
        phonenumber : "",
        country : "",
        address : ""
       
    }
    errorValues = {
        firstnameErr : "",
        lastnameErr : "",
        phonenumberErr : "",
        countryErr : "",
        addressErr : ""
        
    }
    showErrorMsg(index,msg){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent = msg  

    }
    showSuccessMsg(index){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getInputs(){
        this.formValues.firstname = document.getElementById('firstname').value.trim()
        this.formValues.lastname = document.getElementById('lastname').value.trim()
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim()
        this.formValues.address = document.getElementById('address').value.trim()
        this.formValues.country = document.getElementById('country').value.trim()
        
    }
    validateFirstname(){
        if(this.formValues.firstname === ""){
            this.errorValues.firstnameErr = "* Please Enter Your First Name"
            this.showErrorMsg(0,this.errorValues.firstnameErr)
        } else if(this.formValues.firstname.length <= 3 ){
            this.errorValues.firstnameErr = "* Firstname must be atleast 4 Characters"
            this.showErrorMsg(0,this.errorValues.firstnameErr)
        } else if(this.formValues.firstname.length > 30){
            this.errorValues.firstnameErr = "* firstname should not exceeds 30 Characters"
            this.showErrorMsg(0,this.errorValues.firstnameErr)
        } else {
            this.errorValues.firstnameErr = ""
            this.showSuccessMsg(0)
        }
    }
    validateLastname(){
        if(this.formValues.lastname === ""){
            this.errorValues.lastnameErr = "* Please Enter Your Last Name"
            this.showErrorMsg(1,this.errorValues.lastnameErr)
        } else if(this.formValues.lastname.length < 1 ){
            this.errorValues.lastnameErr = "* lastname must be atleast  Characters"
            this.showErrorMsg(1,this.errorValues.lastnameErr)
        } else if(this.formValues.lastname.length > 31){
            this.errorValues.lastnameErr = "* lastname should not exceeds 14 Characters"
            this.showErrorMsg(1,this.errorValues.lastnameErr)
        } else {
            this.errorValues.lastnameErr = ""
            this.showSuccessMsg(1)
        }
    }



    validatePhonenumber(){
       const phoneno = /^\d{10}$/
       if(this.formValues.phonenumber === ""){
           this.errorValues.phonenumberErr = "* Please Enter your Phone Number"
           this.showErrorMsg(2,this.errorValues.phonenumberErr)
       } else if(phoneno.test(this.formValues.phonenumber)){
           this.errorValues.phonenumberErr = ""
           this.showSuccessMsg(2)
       } else {
           this.errorValues.phonenumberErr = "* Invalid Phone Number"
           this.showErrorMsg(2,this.errorValues.phonenumberErr)
       }
    }

    validateCountry(){
        if(this.formValues.country === ""){
            this.errorValues.countryErr = "* Please select country"
            this.showErrorMsg(3,this.errorValues.countryErr)
        }  else {
            this.errorValues.countryErr = ""
            this.showSuccessMsg(3)
        }
    }
    
    validateAddress(){
        if(this.formValues.address === ""){
            this.errorValues.addressErr = "* Please Enter Address"
            this.showErrorMsg(4,this.errorValues.addressErr)
        } else if(this.formValues.address.length < 4 ){
            this.errorValues.addressErr = "* Address must be atleast 4 Characters"
            this.showErrorMsg(4,this.errorValues.addressErr)
        } else if(this.formValues.address.length > 30){
            this.errorValues.addressErr = "* Address should not exceeds 30 Characters"
            this.showErrorMsg(4,this.errorValues.addressErr)
        } else {
            this.errorValues.addressErr = ""
            this.showSuccessMsg(4)
        }
    }



    alertMessage(){
        const {firstnameErr , lastnameErr, phonenumberErr,countryErr, addressErr }= this.errorValues
        if(firstnameErr === "" && lastnameErr === "" &&  phonenumberErr === "" && countryErr == "" && addressErr === ""){
            swal("Registration Successful","ThankYou , "+this.formValues.firstname,"success").then(() => {
                console.log(this.formValues)
                this.removeInputs()
            })
        } else {
            swal("Give Valid Inputs","Click ok to Continue" ,"error")
        }

    }

    removeInputs(){
        const form_groups = document.getElementsByClassName('form-group')
        Array.from(form_groups).forEach(element => {
            element.getElementsByTagName('input')[0].value = ""
            element.getElementsByTagName('span')[0].textContent = ""
            element.classList.remove('success')
        })
    }
} 

const ValidateUserInputs = new FormValidation()

document.getElementsByClassName('form')[0].addEventListener('submit' , event => {
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateFirstname()
    ValidateUserInputs.validateLastname()
    ValidateUserInputs.validatePhonenumber()
    ValidateUserInputs.validateCountry()
    ValidateUserInputs.validateAddress()
    ValidateUserInputs.alertMessage()
})
