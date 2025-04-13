const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// to access the file json, it is used axios. when it returns, the 'then' is executed
axios.get(url).then(response =>{
    const employees = response.data
    // console.log(employees)

    const chinesePeople = filterChinesePeople(employees);
    // console.log(chinesePeople)

    const womenChinese = filterWomenChinese(chinesePeople);

    const chineseLowestSalary = getChineseLowestSalary(womenChinese);
    console.log(chineseLowestSalary)
})

function filterChinesePeople(employees)
{
    return employees.filter(employee => (employee.pais == 'China'))
}

function filterWomenChinese(employees)
{
    return employees.filter(employee => (employee.genero == 'F'))
}

function getChineseLowestSalary(employees){
    return employees.reduce((minPerson, currentPerson) =>{
        return currentPerson.salario < minPerson.salario ? currentPerson : minPerson
    })
}