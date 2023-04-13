let students = [
    {
        name: "André Luis Francisco",
        first_note: 5,
        second_note: 8,
    },
    {
        name: "Adriano de Oliveira Francisco",
        first_note: 9,
        second_note: 9,
    },
    {
        name: "Ana Paula de Oliveira Francisco",
        first_note: 8,
        second_note: 8,
    },
    {
        name: "Nanci Luisa de Souza Francisco",
        first_note: 3,
        second_note: 10,
    },
    {
        name: "Vitor Luis de Souza Francisco",
        first_note: 5,
        second_note: 10,
    },
    {
        name: "Lais de Souza Francisco",
        first_note: 8,
        second_note: 10,
    },
    {
        name: "Vinicius Brandão",
        first_note: 6,
        second_note: 10,
    },
]


function average(student) {//calculando a media do estudante e dando a resposta*/
    let calc = (`${((student.first_note + student.second_note) / 2)}`)
    alert(`The sum of the student's test ${student.name} is ${calc}.`)
    
    if (calc >= 7) {
        alert(`The student ${student.name} passed the contest!😊🚀`)
    }
    else {
        alert(`The student ${student.name} not passed the contest.`)
        
    }
    return
}

average(students[0])//invocando a função
average(students[1])//invocando a função
average(students[2])//invocando a funç
average(students[3])//invocando a funç
average(students[4])//invocando a funç 
average(students[5])//invocando a funç
average(students[6])//invocando a funç  
average(students[7])//invocando a funç  

