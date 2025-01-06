
enum WeatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}

const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);

// Ejemplo de uso de enums en una función

enum Days {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const getDay = (day: Days): string => {
  return `Today is ${day}`;
};

console.log(getDay(Days.Friday));

// Estados de una aplicación:

enum AppState {
  Loading,
  Success,
  Error,
}

let currentState: AppState = AppState.Loading;

const updateState = (state: AppState) => {
  currentState = state;
  console.log(`Current state is: ${AppState[currentState]}`);
}

updateState(AppState.Success); // "Current state is: Success"  


// Roles de usuario 

enum UserRole {
  Admin = "Admin",
  User = 'User',
  Guest = 'Guest'
}

const checkAccess = (role: UserRole) => {
  if (role === UserRole.Admin) {
    console.log('Access granted to admin')
  } else {
    console.log('Access denied ')
  }
}

checkAccess(UserRole.Admin) //"Access granted to admin"
checkAccess(UserRole.Guest) // "Access denied " 

// Direcciones de navegación:

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function move(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      console.log("Moving up");
      break;
    case Direction.Down:
      console.log("Moving down");
      break;
    case Direction.Left:
      console.log("Moving left");
      break;
    case Direction.Right:
      console.log("Moving right");
      break;
  }
}

move(Direction.Up);
move(Direction.Left);