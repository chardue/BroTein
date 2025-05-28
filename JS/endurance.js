const workouts = [
  { title: "Endurance Kickoff", details: "Jog in place – 3 min\nHigh knees – 1 min\nButt kicks – 1 min\nJumping jacks – 2 min" },
  { title: "Agility Focus", details: "Lateral bounds – 1 min\nSkater jumps – 30s\nFast feet drill – 1 min\nJump squats – 1 min" },
  { title: "Stamina Boost", details: "Burpees – 15\nMountain climbers – 1 min\nHigh knees – 1 min\nPlank – 1 min" },
  { title: "Active Recovery", details: "Walk or light jog – 20 min\nStretch routine – 10 min" },
  { title: "HIIT Circuit", details: "Jump squats – 20\nPush-ups – 15\nLunges – 10/leg\nPlank jacks – 1 min" },
  { title: "Speed Training", details: "Sprint in place – 30s x3\nFast feet – 1 min\nRest 30s between sets" },
  { title: "Full Body Burn", details: "Burpees – 20\nSquat jumps – 15\nPush-ups – 20\nMountain climbers – 1 min" },
  { title: "Cardio Core", details: "High knees – 1 min\nV-ups – 15\nRussian twists – 30\nJumping jacks – 2 min" },
  { title: "Leg Endurance", details: "Wall sit – 2 min\nStep-ups – 15/leg\nLunges – 20/leg\nCalf raises – 30" },
  { title: "Plyo & Power", details: "Box jumps – 10\nJump squats – 15\nSkater hops – 1 min\nPlank – 1 min" },
  { title: "Endurance Test", details: "Run or jog – 30 min\nStretch + hydrate after" },
  { title: "Rest & Mobility", details: "Yoga flow 20 min\nFoam rolling 10 min" },
  { title: "Core & Cardio Mix", details: "Bicycle crunches – 30\nFlutter kicks – 30s\nJump rope (imaginary or real) – 2 min" },
  { title: "Explosive Intervals", details: "Sprint in place – 30s\nBurpees – 15\nPlank jacks – 1 min\nRest – 30s – repeat x2" },
  { title: "Stair Training", details: "Run stairs – 5 min\nLunges – 15/leg\nStep-ups – 20/leg" },
  { title: "Upper Endurance", details: "Push-ups – 25\nArm circles – 1 min\nPlank shoulder taps – 30\nSuperman – 15" },
  { title: "Total Body Sweat", details: "Burpees – 20\nJumping jacks – 2 min\nPush-ups – 20\nMountain climbers – 1 min" },
  { title: "Cardio Ladder", details: "Jump rope – 1 min\nJumping jacks – 1 min\nHigh knees – 1 min\nButt kicks – 1 min\nPlank – 1 min" },
  { title: "Stretch Day", details: "Full-body mobility flow 20–30 min" },
  { title: "Intensity Challenge", details: "Sprint in place – 30s\nJump squats – 15\nBurpees – 10\nRepeat x3 with 1 min rest" },
  { title: "Endurance Combo", details: "Lunges – 20/leg\nPush-ups – 20\nJumping jacks – 2 min\nMountain climbers – 1 min" },
  { title: "Agility & Core", details: "Fast feet – 1 min\nBicycle crunches – 30\nSkater hops – 1 min\nFlutter kicks – 30s" },
  { title: "Power Sprint", details: "Sprint – 20s on / 40s off – 6 rounds\nWalk recovery" },
  { title: "Endurance Game", details: "Create a personal HIIT game using 4 exercises and repeat in rounds" },
  { title: "Balance & Burn", details: "Single-leg hops – 10/leg\nPlank with reach – 30s\nLunges – 15/leg\nPush-ups – 15" },
  { title: "Active Stretch", details: "Light walk 15 min\nDynamic full-body stretch 10 min" },
  { title: "Endurance Reps", details: "Push-ups – 30\nSquats – 30\nSit-ups – 30\nBurpees – 20" },
  { title: "Victory Run", details: "Run/jog – 20 min\nCelebrate effort" },
  { title: "Mobility Mastery", details: "Yoga + foam rolling – 30 min" },
  { title: "Endurance Finale 🎉", details: "Jump rope – 2 min\nPush-ups – 25\nBurpees – 15\nCelebrate your consistency!" }
];

const calendarContainer = document.getElementById("calendar");

workouts.forEach((workout, i) => {
  const dayCard = document.createElement("div");
  dayCard.className = "day-card";

  const title = document.createElement("div");
  title.className = "day-title";
  title.textContent = `Day ${i + 1}: ${workout.title}`;

  const details = document.createElement("div");
  details.className = "day-details";
  details.textContent = workout.details;

  dayCard.appendChild(title);
  dayCard.appendChild(details);
  calendarContainer.appendChild(dayCard);
});
