var bio = {
    "name": "Rahul Maliakkal",
    "role": "Web Developer",
    "contacts": {
        "mobile": "3522150664",
        "email": "rahul14m93@gmail.com",
        "github": "rahul14m93",
        "location": "Gainesville, FL"
    },
    "welcomeMessage": "Welcome !",
    "skills": ["JavaScript", "Java", "Python"],
    "bioPic": "images/Rahul.jpg"
};

var work = {
    "jobs": [{
            "employer": "McKinsey & Company",
            "title": "Summer Digital Analyst",
            "location": "New York",
            "dates": "June 2016 - August 2016",
            "description": "Worked as full stack developer on a pharmaceutical data and visualization application. Accelerated development of a project which had fallen behind schedule, and helped achieve the initial schedule. Developed features like “User Story Walkthrough” and d3 visualizations for drug share in different states in U.S"
        },
        {
            "employer": "Brain TecLabs",
            "title": "Software Engineer, Intern",
            "location": "Ahmedabad",
            "dates": "March 2015 - May 2015",
            "description": "Implemented an analytics module as a part of the Talent Pursuit project which provides a keen insight into different statistics that employers wish to see in a talent pool. Conceptualized and designed a dashboard consisting of several filters and created dynamic charts for the filtered results. Developed an extensive test suite to check the accuracy of the results"
        },
        {
            "employer": "Webelight Solutions",
            "title": "Software Engineer",
            "location": "Ahmedabad",
            "dates": "June 2014 - January 2015",
            "description": "Worked on a project London Commodity Brokers which is a management system for cargos and ships. Developed an algorithm to calculate the expected time of arrival of freight, ships  and integrated that with a calendar"
        },
        {
            "employer": "Wikimedia Foundation (Google Summer of Code 2013)",
            "title": "Software Engineer, Intern",
            "location": "Ahmedabad",
            "dates": "May 2013 - September 2013",
            "description": "Implemented a Pronunciation Recording Tool using WebRTC which records and uploads pronunciations to the wiki using an Information Template that saves the details of the stored pronunciations. Added .wav support to the Timed Media Handler Extension that is used play audio files in wiki pages. Travelled to Cambodia to present this idea at FOSSASIA 2014 as a part of the Wikimedia Foundation delegation"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Talk Fitness to Me ",
            "dates": "September 2016 - December 2016",
            "description": "A voice-controlled natural language virtual assistant to help to narrow down and find group fitness classes at the University of Florida. Android development with API.AI",
            "images": ["images/TFTM_1.png", "images/TFTM_2.png"]
        },
        {
            "title": "NIST Data Science Pre Pilot Evaluation ",
            "dates": "September 2015 - December 2015",
            "description": "Researched extensively on the huge training data provided by the Pre Pilot using various data analysis techniques. Built a prediction pipeline which predicted traffic events in a geographical bounding box in Virginia and Massachusetts",
            "images": []
        },
        {
            "title": "HTTP Log Analyzer and Report Generation Tool",
            "dates": "March 2014 - May 2014",
            "description": "Worked with a team that developed a tool to collect logs from HTTP servers and then provides an effective real-time summarization via charts. Created a pipeline in Python to extract useful information from raw logs between specific dates and provided visualizations using various charting libraries",
            "images": []
        }
    ],
};

var education = {
    "schools": [{
            "name": "University of Florida",
            "location": "Gainesville",
            "degree": "Masters",
            "majors": "Computer & Information Sciences",
            "dates": "August 2015 - April 2017",
            "url": "http://www.ufl.edu/"
        },
        {
            "name": "Ganpat University",
            "location": "Mehsana",
            "degree": "Bachelors",
            "majors": "Computer Engineering",
            "dates": "August 2010 - May 2014",
            "url": "#"
        }
    ],
    "onlineCourses": [{
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "dates": "March 2017",
        "url": "#"
    }],
};


bio.display = function(){
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.bioPic);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedWelcomeMessage);
	$("#header").append(formattedPicture);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(skill){
			var formattedSkill = HTMLskills.replace("%data%",skill);
			$("#skills").append(formattedSkill);
		});
	}
}


work.display = function(){
	if(work.jobs.length > 0 ){
		work.jobs.forEach(function(job){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%",job.title);
			var formattedWorkDates = HTMLworkDates.replace("%data%",job.dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%",job.location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%",job.description);

			$(".work-entry:last").append(formattedEmployer+formattedWorkTitle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDescription);
		});
	}
}

projects.display = function(){
	if(projects.projects.length > 0){
		projects.projects.forEach(function(project){
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",project.title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%",project.dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%",project.description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			if(project.images.length>0){
				project.images.forEach(function(image){
					var formattedProjectUrl = HTMLprojectImage.replace("%data%",image);
					$(".project-entry:last").append(formattedProjectUrl);
				});
			}
		});
	}
}

education.display = function(){
	if(education.schools.length>0){
		education.schools.forEach(function(school){
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%",school.name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%",school.dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",school.location);
			var formattedSchoolMajors = HTMLschoolMajor.replace("%data%",school.majors);

			$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajors);
		});
	}

	if(education.onlineCourses.length>0){
		$("#education").append(HTMLonlineClasses);
		education.onlineCourses.forEach(function(course){
			$("#education").append(HTMLschoolStart);
			var formattedCourseTitle = HTMLonlineTitle.replace("%data%",course.title);
			var formattedCourseSchool = HTMLonlineSchool.replace("%data%",course.school);
			$(".education-entry:last").append(formattedCourseTitle+formattedCourseSchool);
			var formattedCourseDates = HTMLonlineDates.replace("%data%",course.dates);
			$(".education-entry:last").append(formattedCourseDates);

		});
	}
}

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
