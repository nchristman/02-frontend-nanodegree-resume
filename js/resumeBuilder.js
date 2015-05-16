var bio = {
  "name": "Nate Christman",
  "role": "Designer",
  "welcomeMessage": "Hi, I'm Nate",
  "contacts": {
    "email": "nate.christman@gmail.com",
    "location": "West Seattle, Seattle, WA",
    "github": "nchristman",
    "phone": "(859) 322-9655"
  },
  "bioPic": "http://placekitten.com/g/250/250",
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
      "location": "Seattle, WA",
      "dates": "03/12 - 06/14",
      "description": "Consulted for Expedia and Amazon. Started in Addison, TX and moved to Seattle, WA"
    },
    {
      "employer": "Freelance",
      "title": "Designer",
      "location": "Munger Place, Dallas, TX",
      "dates": "07/04 - current",
      "description": "Gun for hire"
    },
    {
      "employer": "Hawkeye",
      "title": "Art Director",
      "location": "Uptown, Dallas, TX",
      "dates": "04/10 - 7/11",
      "description": "Direct marketing agency, interactive division"
    },
    {
      "employer": "TM Advertising",
      "title": "Art Director",
      "location": "Downtown, Dallas, TX",
      "dates": "09/08 - 12/09",
      "description": "Worked with American Airlines, Nationwide Insurance, and many new business pitches"
    },
    {
      "employer": "Fallon",
      "title": "Art Director",
      "location": "Minneapolis, MN",
      "dates": "11/07 - 07/08",
      "description": "First real world gig"
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
      "dates": "09/05 - 10/07"
    },
    {
      "name": "Cincinnati Academy of Design",
      "location": "Eden Park, Cincinnati, OH",
      "degree": "Art Direction",
      "majors": ["Art direction", "Design"],
      "dates": "04/02 - 04/04"
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

  bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);


    // Check if our bio has skills, and it's not empty.
    if (bio.skills.length) {
      // If true, append the <ul>
      $("#header").append(HTMLskillsStart);
      // Iterate through the array and replace and append
      for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
  }
  bio.display();

  work.display = function() {
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
  work.display();


  // function inName(name) {
  //   var intlNameArray = name.split(" ");
  //   var formattedFirstName = intlNameArray[0];
  //   var formattedLastName = intlNameArray[1].toUpperCase();

  //   return formattedFirstName + " " + formattedLastName;
  // }
  // inName("Nate Christman");

  education.display = function() {
    var schoolsObject = education.schools;
    var onlineCoursesObject = education.onlineCourses;

    for (var i = 0; i < schoolsObject.length; i++) {
      var formattedName = HTMLschoolName.replace("%data%", schoolsObject[i].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", schoolsObject[i].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", schoolsObject[i].dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", schoolsObject[i].location);

      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      
      for (var j = 0; j < schoolsObject[i].majors.length; j++) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", schoolsObject[i].majors[j]);
        $(".education-entry:last").append(formattedMajor);
      }
    }

    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < onlineCoursesObject.length; i++) {
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCoursesObject[i].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCoursesObject[i].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCoursesObject[i].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCoursesObject[i].url);

      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    }
  }
  education.display();

  projects.display = function() {
    var projectsObject = projects.projects;

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

});