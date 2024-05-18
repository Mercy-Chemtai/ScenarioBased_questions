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

//You are developing a scheduling application where
//users can create and manage their daily tasks. How
//would you implement a priority queue for tasks
//based on their urgency?

class SchedulingTask {
  constructor() {
      this.taskAndTime = {};
  }

  addTask(task, time) {
      if (!this.taskAndTime.hasOwnProperty(task)) {
          this.taskAndTime[task] = time;
          console.log(`Added task: ${task} (Time: ${time})`);
      } else {
          console.log(`Task "${task}" already exists.`);
      }
  }

  prioritizeTask() {
      // Get an array of task times
      const taskTimes = Object.values(this.taskAndTime);

      // Sort tasks by time (assuming time format is "HH:MM AM/PM")
      const sortedTimes = taskTimes.sort((a, b) => {
          const timeA = new Date(`2000-01-01 ${a}`);
          const timeB = new Date(`2000-01-01 ${b}`);
          return timeA - timeB;
      });

      // Print the sorted tasks
      for (const time of sortedTimes) {
          console.log(`Task at ${time} is urgent.`);
      }
  }
}

// Example usage:
const scheduler = new SchedulingTask();
scheduler.addTask("Javascript", "10:00 AM");
scheduler.addTask("Kotlin", "2:30 PM");
scheduler.addTask("Python", "1:00 PM");
scheduler.addTask("java", "9:00 Am");

scheduler.prioritizeTask();





//develop a weather forcast system where we are adding factors like humidity, temperature and windspeed to the city
class WeatherData {
  constructor(temperature, humidity, windSpeed) {
  this.temperature = temperature;
  this.humidity = humidity;
  this.windSpeed = windSpeed;
  }
 }
 // Define an array to store city weather data
 const cityWeatherData = [];
 // Function to add a city with weather data
 function addCity(cityName, temperature, humidity, windSpeed) {
  // Create weather data object for the city
  const weatherData = new WeatherData(temperature, humidity, windSpeed);
  // Add city and weather data to the array
  const cityObject = { city: cityName, weather: weatherData };
  cityWeatherData.push(cityObject);
  // Output the added city and its weather data
  console.log(cityObject);
 }
 // Example usage:
 addCity('Kigali', 20, 60, 10); // Add New York with weather data
 addCity('Nairobi', 18, 70, 15); // Add Paris with weather data


 //Develop a scheduling system for school exams that ensures no student faces a timetable conflict between exams,
 // provides adequate revision time between tests, and utilizes available school facilities efficiently. 
 //This system must consider the specific needs of different subjects, the availability of exam invigilators, and special 
 //accommodation requirements for certain students.


 class schoolSystem{
  constructor(room){
    room = []
  }
}
function needs(examDate,course,invigilator){
const roomDetail = {
      examDate:examDate
      course:course

}
}

//sortig of numbers in an array by using the sorting algorithm 
function numberSort(array) {
  if (array.length === 1) {
    return array
  }
  const middle = Math.floor(array.length / 2)
  const leftArray = array.slice(0, middle)
  const rightArray = array.slice(middle)
  return mergeArray(
    numberSort(leftArray),
    numberSort(rightArray)
  )
};
// Compare the arrays item by item and return the concatenated result
function mergeArray (leftArray, rightArray) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
    while (indexLeft < leftArray.length && indexRight < rightArray.length) {
      if (leftArray[indexLeft] < rightArray[indexRight]) {
        result.push(leftArray[indexLeft])
        indexLeft++
      } else {
        result.push(rightArray[indexRight])
        indexRight++
      }
    }
    return result.concat(leftArray.slice(indexLeft)).concat(rightArray.slice(indexRight))
  }
  const arrayOfNumbers = [2, 5, 1, 3, 7, 4, 9, 8, 6]
  console.log(numberSort(arrayOfNumbers))


 // Design a simple authentication system for a command-line application. The system should allow users to register with a username 
 // and password, and then log in using their credentials. Store the user credentials in a dictionary and ensure that passwords are 
 // checked securely without storing them in plain text in your code

 class UserAuthentication {
  constructor() {
      this.user-authenticationDetails = [];
  }
  register(username, password) {
      let alphaNumeric = /[a-z0-9]/;
      const credentials = { userName: userName, password: password };
      if (credentials.password.match(alphaNumeric)) {
          this. user-authenticationDetails.push(credentials);
          console.log("Credentials added successfully.");
      } else if(!credentials.password.match(alphaNumeric)) {
          console.log("The password should include both numbers and letters.");
      }
  }
}
const userAuthenticationDetails = new UserAuthentication();

const userName = "John";
const password = "JohnOn123";
// const password = "john123"
userAuthenticationDetails.register(userName, password);






//"you are a fashion designer known for your unique and vibrant Ankara designs. Recently, you have discovered that some of your
// fabric patterns change their designs based on the temperature and mood of the wearer. You want to create software that can predict 
//the changes in the fabric design given the mood and temperature data. think about the classes you will need to model the changing 
//Ankara and how to predict the changes"
class Fabric {
  constructor(baseDesign) {
    this.baseDesign = baseDesign;
    this.design = baseDesign;
  }
  changeDesign(mood, temperature) {
    let moodEffect = '';
    if (mood === 'happy') {
      moodEffect = 'bright';
    } else if (mood === 'sad') {
      moodEffect = 'dark';
    } else {
      moodEffect = 'neutral';
    }
    let temperatureEffect = '';
    if (temperature > 30) {
      temperatureEffect = 'summer';
    } else if (temperature < 10) {
      temperatureEffect = 'winter';
    } else {
      temperatureEffect = 'spring';
    }
    this.design = `${this.baseDesign}_${moodEffect}_${temperatureEffect}`;
  }
}
class Mood {
  constructor() {
    this.currentMood = 'neutral';
  }
  updateMood(newMood) {
    this.currentMood = newMood;
  }
}
class Temperature {
  constructor() {
    this.currentTemperature = 25;
  }
  updateTemperature(newTemperature) {
    this.currentTemperature = newTemperature;
  }
}
class Predictor {
  constructor(fabric, mood, temperature) {
    this.fabric = fabric;
    this.mood = mood;
    this.temperature = temperature;
  }
  predictDesignChange() {
    const currentMood = this.mood.currentMood;
    const currentTemperature = this.temperature.currentTemperature;
    this.fabric.changeDesign(currentMood, currentTemperature);
  }
}
const fabric = new Fabric('floral');
fabric.changeDesign('happy',26)
const mood = new Mood();
const temperature = new Temperature();
const predictor = new Predictor(fabric, mood, temperature);
mood.updateMood('happy');
temperature.updateTemperature(28);
predictor.predictDesignChange();
console.log(fabric.design);
//[9:44 AM] Nancy Nabacwa



 