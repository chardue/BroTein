const workouts = [
  { title: "Full Body Burn", details: `Jumping Jacks – 30s\nBodyweight Squats – 15 reps\nPush-ups (Knee) – 10 reps\nMountain Climbers – 30s\nPlank – 30s` },
  { title: "Core Focus", details: `Crunches – 20 reps\nPlank – 45s\nBicycle Crunches – 20 reps\nLeg Raises – 12 reps\nFlutter Kicks – 30s` },
  { title: "Cardio Blast", details: `High Knees – 30s\nBurpees – 10 reps\nJump Squats – 15 reps\nSkaters – 20 reps\nPlank Jacks – 30s` },
  { title: "Lower Body", details: `Glute Bridges – 20 reps\nWall Sit – 45s\nReverse Lunges – 10/leg\nCalf Raises – 25 reps\nSquat Pulses – 20 reps` },
  { title: "Full Body HIIT", details: `Jumping Jacks – 1 min\nPush-ups – 15 reps\nJump Lunges – 10/leg\nMountain Climbers – 1 min\nPlank Shoulder Taps – 30 reps` },
  { title: "Light Cardio", details: `30-min brisk walk or jog\n10-min full body stretch` },
  { title: "Rest / Recovery Stretch", details: `Yoga (Sun salutation, Downward dog, Cat-cow, Child’s pose) – 20 min` },
  { title: "Pyramid HIIT", details: `Jump Squats – 5/10/15/10/5\nPush-ups – same\nBurpees – same` },
  { title: "Upper Body", details: `Push-ups – 15 reps\nArm Circles – 1 min\nTricep Dips – 15 reps\nSuperman – 15 reps\nPlank to Push-up – 10 reps` },
  { title: "Tabata Cardio", details: `Jumping Jacks\nJump Lunges\nMountain Climbers\nBurpees\nRepeat 4x (20s/10s)` },
  { title: "Core Shred", details: `Plank – 1 min\nV-Ups – 15 reps\nSide Plank – 30s\nRussian Twists – 30 reps\nFlutter Kicks – 30s` },
  { title: "Full Body Circuit", details: `Jumping Jacks – 1 min\nPush-ups – 15 reps\nSquats – 20 reps\nPlank Jacks – 30s\nBurpees – 10 reps` },
  { title: "Dance Cardio", details: `Follow 20–30 min YouTube routine (MadFit, Chloe Ting)` },
  { title: "Stretch / Recovery Yoga", details: `Yoga flow – 20–30 min` },
  { title: "HIIT Blast", details: `Jump Squats – 20 reps\nBurpees – 10 reps\nSide Lunges – 12/leg\nCommandos – 10 reps\nHigh Knees – 1 min` },
  { title: "Core & Balance", details: `Bird-Dog – 12/side\nSide Plank Crunch – 10/side\nPlank Reach – 30s\nDead Bug – 20 reps` },
  { title: "5-Round AMRAP", details: `10 Burpees\n15 Jumping Lunges\n20 Mountain Climbers\n25 Squats` },
  { title: "Lower Body Burn", details: `Sumo Squats – 20 reps\nGlute Bridge March – 15/leg\nWall Sit – 1 min\nCalf Raises – 30 reps` },
  { title: "Tabata Full Body", details: `Jumping Jacks\nPush-ups\nJump Squats\nPlank Jacks\n40s on / 20s rest x3–4` },
  { title: "Walk + Stretch", details: `20–30 min walk\n10 min yoga stretch` },
  { title: "Full Rest / Foam Roll", details: `Foam rolling or complete rest` },
  { title: "Advanced HIIT", details: `Burpees – 15\nJump Lunges – 20\nPlank Jacks – 1 min\nPush-ups – 20` },
  { title: "Core & Stability", details: `V-Ups – 20\nSide Plank Drops – 10/side\nFlutter Kicks – 30s\nSuperman Hold – 30s` },
  { title: "Mixed Cardio", details: `High Knees – 30s\nJumping Jacks – 30s\nSkaters – 30s\nRepeat 4x` },
  { title: "Lower Sculpt", details: `Lateral Lunges – 12/leg\nWall Sit – 1 min\nSquat Pulse – 20 reps\nGlute Bridges – 20 reps` },
  { title: "Burnout Circuit", details: `Jumping Jacks – 1 min\nPush-ups – 15\nSquats – 20\nBurpees – 10\nPlank – 1 min` },
  { title: "Dance or Skipping", details: `20–30 min free movement\n10 min stretch` },
  { title: "Mobility Flow", details: `Yoga poses, foam rolling, gentle movement` },
  { title: "Repeat Toughest Day", details: `Pick from Day 17 (AMRAP) or Day 26 (Burnout)` },
  { title: "Victory Workout 🎉", details: `Burpees – 10\nPush-ups – 15\nJump Squats – 15\nMountain Climbers – 30s\nPlank – 1 min\nStretch & celebrate!` }
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
