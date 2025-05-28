const workouts = [
  { title: "Upper Body Strength", details: "Push-ups – 20\nPull-ups (assisted if needed) – 10\nShoulder Taps – 20\nTricep Dips – 15" },
  { title: "Core Stability", details: "Plank – 1 min\nLeg Raises – 15\nBicycle Crunches – 20\nRussian Twists – 30 reps" },
  { title: "Lower Body Build", details: "Squats – 20\nLunges – 10/leg\nCalf Raises – 30\nGlute Bridges – 20" },
  { title: "Rest & Recovery", details: "Foam rolling\nFull-body stretch 15–20 min" },
  { title: "Chest & Arms", details: "Push-ups – 25\nBicep Curls (dumbbells or bands) – 15\nTricep Extensions – 15\nDiamond Push-ups – 10" },
  { title: "Core Power", details: "Plank to Push-up – 10\nMountain Climbers – 30s\nV-Ups – 15\nFlutter Kicks – 30s" },
  { title: "Active Rest", details: "Light jog or walk 20 min\nStretch routine" },
  { title: "Leg Strength", details: "Jump Squats – 15\nWall Sit – 1 min\nBulgarian Split Squat – 10/leg\nGlute Bridge March – 15/leg" },
  { title: "Upper Back & Shoulders", details: "Superman – 15\nArm Circles – 1 min\nResistance Rows – 15\nShoulder Press – 15" },
  { title: "Core Burn", details: "Crunches – 30\nSide Plank (L/R) – 30s\nDead Bug – 20\nToe Touches – 30" },
  { title: "Leg Pump", details: "Reverse Lunges – 10/leg\nCalf Raise Pulses – 30\nWall Sit – 1 min\nSumo Squats – 20" },
  { title: "Stretch & Recovery", details: "Yoga flow 20–30 min\nHydration + foam roll" },
  { title: "Explosive Power", details: "Burpees – 10\nPush Press – 10\nJump Lunges – 10/leg\nMountain Climbers – 45s" },
  { title: "Full Body", details: "Push-ups – 20\nSquats – 25\nPlank – 1 min\nSuperman – 15" },
  { title: "Core Challenge", details: "Plank Shoulder Taps – 20\nLeg Raises – 15\nBicycle Crunches – 30\nRussian Twists – 40" },
  { title: "Back & Chest", details: "Incline Push-ups – 15\nResistance Band Rows – 20\nSuperman Hold – 30s\nPlank – 1 min" },
  { title: "Lower Body Burn", details: "Lunges – 12/leg\nJump Squats – 15\nWall Sit – 1 min\nHip Thrusts – 15" },
  { title: "Stretching Focus", details: "Stretching + foam rolling 20–30 min\nOptional light walk" },
  { title: "Core + HIIT", details: "Mountain Climbers – 1 min\nFlutter Kicks – 30s\nPlank – 1 min\nHigh Knees – 1 min" },
  { title: "Push Day", details: "Push-ups – 25\nShoulder Press – 20\nDips – 20\nArm Raises – 15" },
  { title: "Active Rest", details: "Walk 20 min\nYoga flow or recovery video" },
  { title: "Leg Day Reload", details: "Squats – 30\nLunges – 12/leg\nWall Sit – 1.5 min\nCalf Raises – 30" },
  { title: "Upper Pump", details: "Push-ups – 30\nRows – 20\nArm Circles – 1.5 min\nTricep Dips – 20" },
  { title: "Core Shred", details: "Crunches – 40\nSide Plank Crunch – 15/side\nToe Touches – 30\nV-Ups – 20" },
  { title: "Jump & Build", details: "Jump Squats – 20\nBurpees – 15\nPush Press – 20\nMountain Climbers – 1 min" },
  { title: "Flexibility Flow", details: "Stretching/Yoga 25–30 min\nBreathing exercises" },
  { title: "Final Upper Day", details: "Push-ups – 35\nShoulder Press – 25\nSuperman – 20\nPlank to Push-up – 15" },
  { title: "Final Lower Day", details: "Squats – 35\nJump Lunges – 12/leg\nWall Sit – 2 min\nGlute Bridges – 30" },
  { title: "Best Workout Repeat", details: "Repeat your favorite or toughest previous day" },
  { title: "Victory Burnout 🎉", details: "Burpees – 15\nPush-ups – 20\nMountain Climbers – 1 min\nPlank – 1 min\nCelebrate your gains!" }
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
