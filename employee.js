


data = [
  {
    ID: 128,
    fname: "zarnain",
    lname: "naz",
    salary: 100
  },
  {
    ID: 100,
    fname: "SYEDA",
    lname: "KHINSA",
    salary: 100
  },
  {
    ID: 112,
    fname: "zara",
    lname: "khan",
    salary: 100
  }
]
k = "";
class Employee {
  constructor(ID, fname, lname, salary) {
    this.ID = ID;
    this.fname = fname;
    this.lname = lname;
    this.salary = salary;
  }
  getID() {
    k = data.filter
    (element=>{if(element.fname == this.fname) {
        return element;
      }
    });
    if(k.length > 0) {
      console.log(k[0].ID)
    }
    else{
      console.log("not found");

    }
  }
  getfname() {
    k = data.filter(element => {
      if(element.ID == this.ID) {
        return element;
      }
    });
    if(k.length > 0) {
      console.log(k[0].fname)
    }
    else {
      console.log("not found");
    }
  }

  getlname() {
    k = data.filter(element => {
      if(element.salary == this.salary) {
        return element;
      }
    });
    if(k.length > 0) {
      console.log(k[0].lname)
    }
    else {
      console.log("not found");
    }
  }
  getsalary() {
  k = data.filter(element => {
      if(element.ID == this.ID) {
        return element;
      }
    });
    if(k.length > 0) {
      console.log(k[0].salary)
    }
    else {
      console.log("not found");

    }
  }
  setsalary() {
    k = data.filter((element, i) => {
      if(element.ID == this.ID) {
        console.log("before set");
        console.log(data[i]);
        data[i].salary = data[i].salary + this.salary
        console.log("after set");
        console.log(data[i]);

      }
    });
  }
  getannualsalary() {
    k = data.filter((element, i) => {
      if (element.ID == this.ID) {
        console.log(data[i].salary * 12);
      }
    });
  }
}
z = new Employee(128, "zarnain", "naz", 100)
z.getID()
z.getfname()
z.getlname()
z.getsalary()
z.setsalary()
z.getannualsalary()

