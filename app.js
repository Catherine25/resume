const cvData = {
    contact: {
        fullName: "Catherine Solodukhina",
        title: "Software Engineer",
        phone: "+420 722 608 609",
        phoneRef: "tel:+420 722 608 609",
        email: "catherinesolodoukhina@gmail.com",
        emailRef: "mailto:catherinesolodoukhina@gmail.com",
        linkedin: "linkedin.com/in/catherine-solodukhina",
        linkedinRef: "https://www.linkedin.com/in/catherine-solodukhina",
        github: "github.com/Catherine25",
        githubRef: "https://github.com/Catherine25"
    },
    skills: [
        { category: "Backend", items: ["C#", ".NET", "ASP.NET", "Entity Framework", "MAUI", "UWP", "WPF", "Xamarin"] },
        { category: "Frontend", items: ["Angular 2+", "TypeScript", "HTML", "SCSS"] },
        { category: "Data", items: ["SQL (Oracle, MSSQL, KQL)", "Oracle SQL Developer"] },
        { category: "Tools", items: ["Visual Studio", "VS Code", "Rider", "Jira", "DevOps", "GitHub"] },
        { category: "AI Stack", items: ["ChatGPT", "GitHub Copilot", "Claude Code"] }
    ],
    education: [{
            university: "Kharkiv National University of Radio Electronics",
            location: "Kharkiv",
            startDate: Temporal.PlainDate.from("2016-09-01"),
            endDate: Temporal.PlainDate.from("2020-06-30"),
            degree: "Bachelor's degree",
            specialization: "Computer Engineering"
        },
        {
            university: "Kharkiv National University of Radio Electronics",
            location: "Kharkiv",
            startDate: Temporal.PlainDate.from("2020-09-01"),
            endDate: Temporal.PlainDate.from("2021-12-31"),
            degree: "Master's degree",
            specialization: "Specialized Computer Systems"
        }
    ],
    summary: "", // todo
    experience: [{
            location: "Kharkiv, Ukraine",
            company: "InTechSoft",
            position: "Full-Stack .Net Software Engineer",
            startDate: Temporal.PlainDate.from("2019-10-01"),
            endDate: Temporal.PlainDate.from("2022-04-30"),
            descriptionFileName: "intechsoft.html"
        },
        {
            location: "Prague, Czech Republic",
            company: "Microsoft",
            position: "Software Engineer",
            startDate: Temporal.PlainDate.from("2022-06-01"),
            endDate: Temporal.PlainDate.from("2023-10-31"),
            descriptionFileName: "microsoft.html"
        },
        {
            location: "Prague, Czech Republic",
            company: "NCR Corporation",
            position: "Senior Software Engineer",
            startDate: Temporal.PlainDate.from("2024-01-01"),
            endDate: Temporal.PlainDate.from("2024-04-30"),
            descriptionFileName: "ncr-corporation.html"
        },
        {
            location: "Prague, Czech Republic",
            company: "Veeam Software",
            position: "Developer I (promoted from Junior Developer)",
            startDate: Temporal.PlainDate.from("2024-07-01"),
            endDate: null,
            descriptionFileName: "veeam-software.html"
        }
    ],
    publications:
    [
        {
            name: "Analysis of the application of the SOLID concept",
            date: 2019,
        },
        {
            name: "\"Algorithms for logic circuits design\", International Forum of Young Scientists \"Radio Electronics and Youth in the XXI Century\"",
            date: 2021
        }
    ],
    certificates:
    [
        {
            name: "Japanese Language Proficiency Test N5",
            date: "January 2016",
        },
        {
            name: "Japanese Language Proficiency Test N4",
            date: "January 2018",
        },
        {
            name: "Microsoft Global Hackathon 2022 Participant",
            date: "September 2022",
        },
        {
            name: "Microsoft Global Hackathon 2022 Award Winner",
            date: "December 2022",
        }
    ],
    languages:
    [
        {
            name: "Russian",
            level: "Native",
        },
        {
            name: "Ukrainian",
            level: "Native",
        },
        {
            name: "English",
            level: "Fluent",
        },
        {
            name: "Czech",
            level: "B1-B2",
        },
    ],
};

document.addEventListener("DOMContentLoaded", () => {
    // Inject Header Content
    document.getElementById("full-name").textContent = cvData.contact.fullName;
    document.getElementById("job-title").textContent = cvData.contact.title;

    // Inject Contact Section
    const contactHtml = `
        ${toContactsSection("./icons/circle-phone.svg", "Phone", cvData.contact.phone, cvData.contact.phoneRef)}
        ${toContactsSection("./icons/envelope.svg", "Email", cvData.contact.email, cvData.contact.emailRef)}
        ${toContactsSection("./icons/linkedin.svg", "LinkedIn", cvData.contact.linkedin, cvData.contact.linkedinRef)}
        ${toContactsSection("./icons/github.svg", "GitHub", cvData.contact.github, cvData.contact.githubRef)}
    `;
    document.getElementById("contact-box").innerHTML = contactHtml;

    // Inject Summary Section
    document.getElementById("summary-box").textContent = cvData.summary;

    // Inject Skills List Dynamically
    const skillsContainer = document.getElementById("skills-box");
    skillsContainer.innerHTML = cvData.skills.map(skill => `
        <h4>${skill.category}:</h4> <div class="skill-chip-container">${skill.items.map(skill => toChip(skill)).join('')}</div>
    `).join('');

    // Inject Publication List Dynamically
    const publications = document.getElementById("publications");
    publications.innerHTML = cvData.publications.map(publication => `
        <div class="publication">
            <h4>${publication.name}</h4>
            <p>${publication.date}</p>
        </div>
    `).join('');

    // Inject Education List Dynamically
    const eduContainer = document.getElementById("education-box");
    eduContainer.innerHTML = cvData.education.map(edu => `
        <div class="edu-item">
            <h3>${edu.university}</h3>
            <div>
                <div>
                    <span class="date">${edu.startDate.year}</span>
                    -
                    <span class="date">${edu.endDate.year}</span>
                </div>
                <p>${edu.degree}</p>
                <p>${edu.specialization}</p>
            </div>
        </div>
    `).join('');

    // Inject Experience List Dynamically
    const expContainer = document.getElementById("experience-box");
    expContainer.innerHTML = cvData.experience.map(job => `
        <div class="job-item">
            <div class="header">
                <h4>${job.position}</h4>
                <div class="dates">
                    <span class="date">${printJobDate(job.startDate)}</span>
                    <span class="date">${printJobDate(job.endDate)}</span>
                </div>
                <div class="duration">
                    <span class="date">${printJobDuration(job)}</span>
                </div>
                <div class="location">
                    <span class="company">${job.company}</span>
                    <span class="company">${job.location}</span>
                </div>
            </div>
            <div class="description"></div>
        </div>
    `).join('');

    cvData.experience.forEach(async (job, index) => {
        const response = await fetch(`./job-entries/${job.descriptionFileName}`);
        console.log(`./job-entries/${job.descriptionFileName}`);

        const html = await response.text();
        console.log(html);

        console.log(document.getElementById(`experience-box`).children[index].children[1].innerHTML = html);

        // document.getElementById(`desc-${index}`).innerHTML = html;
    });

    const certContainer = document.getElementById("certificates-box");
    certContainer.innerHTML = cvData.certificates.map(certificate => `
        <div class="certificate">
            <h4>${certificate.name}</h4>
            <p>${certificate.date}</p>
        </div>
    `).join('');

    const langContainer = document.getElementById("languages-box");
    langContainer.innerHTML = cvData.languages.map(language => `
        <div class="language" style="flex-direction: row; justify-content: space-between;">
            <h4>${language.name}</h4>
            <p>${language.level}</p>
        </div>
    `).join('');
});

function getDuration(job) {
    var start = job.startDate;
    var end = job.endDate;

    if (end == null)
        end = Temporal.Now.plainDateISO();

    var duration = end.since(start, { largestUnit: "year" });
    return duration;
}

function printJobDate(date) {
    var normalizedDate = date;
    if (normalizedDate == null)
        normalizedDate = Temporal.Now.plainDateISO();

    const monthName = normalizedDate.toLocaleString("en-US", { month: "long" });

    return monthName + " " + normalizedDate.year;
}

function printJobDuration(job) {
    const duration = getDuration(job);
    
    const years = duration.years == 0
        ? ""
        : duration.years == 1
        ? duration.years + " year "
        : duration.years + " years ";
    
    const months = duration.months == 0
        ? ""
        : duration.months == 1
        ? duration.months + " month "
        : duration.months + " months";

    return years + months;
}

function toChip(skill) {
    return `<span class="skill-chip">${skill}</span>`;
}

function toContactsSection(iconPath, iconText, text, textRef) {
    return `<div style="gap: 0.5rem">
        <div class="icon-with-text">
            <img src="${iconPath}" class="icon"></img>
            <strong>${iconText}</strong>
        </div>
        <a href="${textRef}">${text}</a>
    </div>`;
}