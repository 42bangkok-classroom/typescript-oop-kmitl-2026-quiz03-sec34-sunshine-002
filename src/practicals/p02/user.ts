export class User {
    static BIRTH_YEAR: number = 2000
    private age: number = 0
    public Firstname: string = ""
    public Lastname: string = ""
    set setage(age: number) {
        if(age < 0) {
            this.age = 0
        } else {
            this.age = age
        }
    }
    get setage(): string{
        return `${this.age}`
    }
    setFirstname(Fname: string) {
        this.Firstname = Fname
    }
    setLastname(Lname: string) {
        this.Lastname = Lname
    }
    getAge() {
        return this.age
    }
    getFullName() {
        return `${this.Firstname} ${this.Lastname}`
    }
    setAge(age: number) {
        this.age = age
    }
}
