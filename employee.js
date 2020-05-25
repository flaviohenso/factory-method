const registerEmployee = {}

registerEmployee['fulltime'] =
    class Fulltime {
        constructor() {
            this.hourly = "$12"
        }
    }

registerEmployee['parttime'] = class Parttime {
    constructor() {
        this.hourly = "$11"
    }
}

registerEmployee['temporary'] = class Temporary {
    constructor() {
        this.hourly = "$10"
    }
}

registerEmployee['contractor'] = class Contractor {
        constructor() {
            this.hourly = "$15"
        }
    }

function Factory() {
    this.createEmployee = (type) => {
        let employee;
        employee = new registerEmployee[type]()
        employee.type = type
        return employee
    }
}

function run() {
    let employeers = []
    const factory = new Factory()

    employeers.push(factory.createEmployee('temporary'))
    employeers.push(factory.createEmployee('fulltime'))
    employeers.push(factory.createEmployee('parttime'))
    employeers.push(factory.createEmployee('contractor'))

    console.log(employeers)
}

run()