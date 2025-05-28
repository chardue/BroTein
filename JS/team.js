document.addEventListener("DOMContentLoaded", function () {
  const teamMembers = document.querySelectorAll(".team-member");

  teamMembers.forEach(member => {
    member.addEventListener("click", function () {
      // Remove 'active' class from all members
      teamMembers.forEach(m => {
        if (m !== member) m.classList.remove("active");
      });

      // Toggle the clicked one
      member.classList.toggle("active");
    });
  });
});