export class OnlineCourse {
    public courseName: string = ""
    public maxStudents: number = 0
    private enrolledStudents: number = 0
    private isOpen: boolean = true
    constructor(courseName: string, maxStudents:number) {}
    enroll(): boolean {
        if(this.enrolledStudents < this.maxStudents) {
            this.isOpen = true
        } else {
            this.isOpen = false
        }
    }
}
