var formattedName = HTMLheaderName.replace("%data%", "Nate Christman");
var formattedRole = HTMLheaderRole.replace("%data%", "Designer");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);