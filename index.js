/* Your Code Here */

let createEmployeeRecord = function(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(arrays) {
    return arrays.map(function(employee){
        return createEmployeeRecord(employee)
    })   
}

let createTimeInEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })
    return this
}

let createTimeOutEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })
    return this
}

let hoursWorkedOnDate = function(date) {
    let inTime = this.timeInEvents.find(function(e) {
        return e.date === date
    })

    let outTime = this.timeOutEvents.find(function(e) {
        return e.date === date
    })
    
    return (outTime.hour - inTime.hour) / 100
}

let wagesEarnedOnDate = function(date) {
    let hourlyRate = this.payPerHour * (hoursWorkedOnDate.call(this, date))

    return hourlyRate
}

let findEmployeeByFirstName = function(array, firstName) {
    let employee = array.find(function(employee){
        return employee.firstName === firstName
    })

    return employee
}

let calculatePayroll = function(array) {
    return array.reduce(function(total, employee){
        return total + allWagesFor.call(employee)
    }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}