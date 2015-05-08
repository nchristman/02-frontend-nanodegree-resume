var bio = {
  "name": "Nate Christman",
  "role": "Designer",
  "welcomeMessage": "Hi, I'm Nate",
  "contacts": {
    "email": "nate.christman@gmail.com",
    "location": "Seattle, WA",
    "github": "nchristman",
    "phone": "(859) 322-9655"
  },
  "skills": ["Interaction design", "visual design", "rapid prototyping"]
}

var work = {
  "jobs": [
    {
      "employer": "Expedia",
      "title": "Sr. Web Designer",
      "location": "Bellevue, WA",
      "dates": "06/14 - current",
      "description": "Product design, interaction design, visual design, rapid prototyping"
    },
    {
      "employer": "projekt202",
      "title": "UX Designer",
      "location":"Dallas, TX - Seattle, WA",
      "dates": "03/12 - 06/14",
      "description": "Consulted for Expedia and Amazon"
    },
    {
      "employer": "Freelance",
      "title": "Designer",
      "location": "Dallas, TX",
      "dates": "07/04 - current",
      "description": "Gun for hire"
    }
  ]
}

var education = {
  "schools": [
    {
      "name": "The Creative Circus",
      "location": "Atlanta, GA",
      "degree": "Art Direction",
      "majors": ["Art direction", "Design"],
      "dates": "09/05 - 10/07",
      "url": "www.creativecircus.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title": "Front-end Nanodegree",
      "school": "Udacity",
      "dates": "03/15 - current",
      "url": "www.udacity.com"
    },
    {
      "title": "Front-end Design",
      "school": "Treehouse",
      "dates": "04/13 - 09/13",
      "url": "www.teamtreehouse.com"
    },
    {
      "title": "Front-end Design",
      "school": "CodeAcademy",
      "dates": "12/12 - 04/13",
      "url": "www.codeacademy.com"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Expedia Framework",
      "dates": "06/14 - current",
      "description": "Design and maintain the framework components and patterns that power Expedia.com and it's other properties and partners",
      "images": ["http://placekitten.com/g/300/250", "http://placekitten.com/g/300/250", "http://placekitten.com/g/300/250"]
    },
    {
      "title": "Amazon Fire Phone",
      "dates": "05/14 - 06/14",
      "description": "Worked with the internal team to design the 'sizzle' site for the Amazon Fire phone",
      "images": ["http://placekitten.com/g/300/250", "http://placekitten.com/g/300/250", "http://placekitten.com/g/300/250"]
    },
    {
      "title": "Expedia Flights",
      "dates": "03/12 - 05/14",
      "description": "Worked on the flights product. Started with fixed width, top/left design, and slowly but surely got the path to a responsive state.",
      "images": ["http://placekitten.com/g/300/250", "http://placekitten.com/g/300/250", "http://placekitten.com/g/300/250"]
    }
  ]
}

$(document).ready(function() {
  // Check if our bio has skills, and it's not empty.
  if (bio.skills.length) {
    // If true, append the <ul>
    $("#header").append(HTMLskillsStart);
    // Iterate through the array and replace and append
    for (var i = 0; i < bio.skills.length; i++) {
      var newSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(newSkill);
    }
  }

  function displayWork() {
    for (job in work.jobs) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedTitleAndEmployer = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedTitleAndEmployer);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
  displayWork();

  // $("#main").append(internationalizeButton);

  function inName(name) {
    var intlNameArray = name.split(" ");
    var formattedFirstName = intlNameArray[0];
    var formattedLastName = intlNameArray[1].toUpperCase();

    return formattedFirstName + " " + formattedLastName;
  }
  inName("Nate Christman");

  projects.display = function() {
    var projectsObject = projects.projects;
    console.log(projectsObject);
    // for (project in projectsObject) {
    //   var formattedTitle = HTMLprojectTitle.replace("%data%", projectsObject[project].title);
    //   var formattedDates = HTMLprojectDates.replace("%data%", projectsObject[project].dates);
    //   var formattedDescription = HTMLprojectDescription.replace("%data%", projectsObject[project].description);

    //   $("#projects").append(HTMLprojectStart);
    //   $(".project-entry:last").append(formattedTitle);
    //   $(".project-entry:last").append(formattedDates);
    //   $(".project-entry:last").append(formattedDescription);
    // }
    for (var i = 0; i < projectsObject.length; i++) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", projectsObject[i].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projectsObject[i].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projectsObject[i].description);

      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);
      for (var j = 0; j < projectsObject[i].images.length; j++) {
        var formattedImage = HTMLprojectImage.replace("%data%", projectsObject[i].images[j]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
  projects.display();
})