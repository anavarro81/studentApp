/*
name 
surname
email
phone
password
confirmpassword
gender
confirmation
*/

import {data} from './data.js'

let name = document.getElementById('name')
let surname = document.getElementById('surname')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let password = document.getElementById('password')
let confirmpassword = document.getElementById('Confirmpassword')
let gender = document.getElementsByName('gender')
let confirmation = document.getElementById('confirmation')


class Student {
    constructor(name, surname, email, password, phone, gender) {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.password = password;
      this.phone = phone;
      this.gender = gender;
    }
  }
  

const students = []

const loadStudens = () => {
  console.log('Estoy en loadStudens' )
}

const registerForm = document.getElementById('registerForm')
registerForm.addEventListener('submit', (e) => {
    
    event.preventDefault()
    
    const student = new Student(name.value, surname.value, email.value, password.value, phone.value, gender.value)

    students.push(student)

    console.log('>> students : ', students)


    confirmation.innerHTML = `
    <h3> Los datos del alumno son: </h3>
    <p> nombre: ${name.value}    </p>
    <p> surname: ${surname.value} </p>
    <p> phone: ${phone.value} </p>
    <p> password: ${password.value} </p>
    <p> Confirmpassword: ${confirmpassword.value}  </p>
    <p> gender: ${gender.value} </p>`       

})


const autoFillBtn$$ = document.getElementById('autoFill')

autoFillBtn$$.addEventListener('click', ()=> {
    
    console.log('He pulsado... ')

    console.log('>> data : ', data)

    name.value = "Antonio"
    surname.value = "Navarro"
    email.value = "antonio@test.es"
    phone.value = '623188899'
    password.value = '@ntonio.123'
    confirmpassword.value = '@ntonio.123'
    gender.value = "Male"



})

