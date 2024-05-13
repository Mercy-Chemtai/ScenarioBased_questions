//You are developing a social media application where users can follow other users.Show how you will use your knowledge in data
// structures to store followers for each user.

    class Following {
        constructor(user) {
            this.user = user;
            this.follower = [];
        }
    
        addUser(follower) {
            if (this.follower.includes(follower)) {
                console.log(`${follower} already exists.`);
            } else {
                this.follower.push(follower);
                console.log(`${follower} was added as a follower.`);
            }
        }
    }


    const Mercy = new Following("Mercy")
    Mercy.addUser("Mercy")
    Mercy.addUser("Valary")
    Mercy.addUser("Mercy")
    console.log(Mercy)







    //You are tasked with creating a simple inventory management system for an online store. The system should allow 
    //users to add new products, update existing product information, and remove products from the inventory.
   

//an takes in array then it sorts based on any sorting algorithm and write a comment on space and time complexity of why 
//you have used the sorting algorith




//Develop a system for scheduling appointments at a healthcare facility. Consider factors like doctor availability, patient 
//preferences, and appointment reminders.

class Scheduling {
    constructor() {
      this.appointments = [];
    }
  
    addAppointment(doctorAvailability, patientPreference) {
      const availableTime = doctorAvailability.find(time => patientPreference.includes(time));
      if (availableTime) {
        const appointment = {
          doctor: 'Doctor',
          patient: 'Patient',
          time: availableTime
        };
        this.appointments.push(appointment);
        this.sendReminder(appointment);
        console.log(`Hello your appointment is scheduled at ${availableTime}`);
      } else {
        console.log('The doctor is not avilable at that time');
      }
    }
  
    sendReminder(appointment) {
      console.log(`Reminder sent for appointment at ${appointment.time}.`);
    }
  }
  
  const schedule = new Scheduling();
  const doctorAvailability = ['10am', '11am', '2pm'];
  const patientPreference = ['11am', '3pm'];
  schedule.addAppointment(doctorAvailability, patientPreference);