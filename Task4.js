function giveJobToStudent(student, jobName) {
    const updatedStudent = { ...student, job: jobName }

    alert(`Поздравляем! У студента ${updatedStudent.fullName} появилась новая работа! Теперь он ${updatedStudent.job}`)

    return updatedStudent
}
const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик')
console.log(updatedStudent)