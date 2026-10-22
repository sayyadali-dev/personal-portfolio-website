import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Code2,
  Layers3,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";
import styles from "./PortfolioSections.module.scss";

// Facts and status labels come from the supplied profile; add repo/demo links only when provided.
const projects = [
  {
    number: "01",
    name: "Employee Management System",
    kind: "React · Practice project",
    status: "Learning project",
    description:
      "A React learning project exploring employee and admin dashboard patterns, task management, and application state.",
    tags: ["React.js", "Dashboard patterns", "Task management"],
    art: "dashboard",
    artLabel: "A structured dashboard study",
  },
  {
    number: "02",
    name: "usePopcorn Movie App",
    kind: "React · Practice project",
    status: "Learning project",
    description:
      "A movie discovery practice app for exploring titles, rating films, and keeping a watched list.",
    tags: ["React.js", "Movie ratings", "Watched list"],
    art: "cinema",
    artLabel: "A study in movie discovery",
  },
  {
    number: "03",
    name: "Notes App",
    kind: "JavaScript · Browser app",
    status: "Learning project",
    description:
      "A browser-based notes app with note creation, deletion, and Local Storage persistence.",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    art: "notes",
    artLabel: "A lightweight note-taking workspace",
  },
  {
    number: "04",
    name: "SkinLuxe",
    kind: "WordPress · E-commerce practice",
    status: "In progress",
    description:
      "A skincare e-commerce practice project in progress, exploring WordPress page building with Elementor and WooCommerce.",
    tags: ["WordPress", "Elementor", "WooCommerce · learning"],
    art: "skincare",
    artLabel: "A skincare product direction study",
  },
];

const skillGroups = [
  {
    title: "Frontend foundations",
    icon: Code2,
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive design"],
    note: "Building and practicing",
  },
  {
    title: "WordPress",
    icon: PanelsTopLeft,
    items: ["WordPress admin", "Gutenberg", "Elementor", "Theme & plugin setup", "Basic on-page SEO"],
    note: "Site-building practice",
  },
  {
    title: "Tools & ongoing practice",
    icon: Workflow,
    items: ["Git & GitHub", "Browser DevTools", "API fetching", "Asynchronous JavaScript", "WooCommerce"],
    note: "Learning areas included",
  },
];

export function PortfolioSections() {
  return (
    <>
      <section className={`${styles.about} section`} id="about" aria-labelledby="about-title">
        <div className={`${styles.aboutGrid} sectionContainer`}>
          <div className={styles.aboutImageWrap} data-reveal>
            <div className={styles.aboutImage}>
              <Image
                src="/images/sayyad-portrait.jpg"
                alt="Professional portrait of Sayyad Ali"
                fill
                sizes="(max-width: 700px) 84vw, 38vw"
                quality={80}
              />
            </div>
            <div className={styles.imageNote}>
              <span>PERSON / 01</span>
              <span>Curiosity is a practice</span>
            </div>
          </div>

          <div className={styles.aboutCopy} data-reveal>
            <p className="eyebrow eyebrow--dark"><span className="sectionIndex">02 /</span> The person behind the screen</p>
            <h2 id="about-title">A developer in progress. <span>Always building.</span></h2>
            <p>
              I’m Sayyad Ali, a university student and early-career developer in Pakistan. I’m
              focused on frontend development, React, and WordPress, learning by making things,
              noticing what works, and improving the next version.
            </p>
            <p>
              I care about clear interfaces, thoughtful details, and turning a rough idea into
              something people can use. My work today is grounded in practice; my direction is
              toward stronger products and the skills to build them well.
            </p>
            <div className={styles.aboutSignature}>
              <span className={styles.signatureRule} aria-hidden="true" />
              <span>Curious, practical, moving forward.</span>
            </div>
            <a className="textLink" href="#journey">
              Follow the journey <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.journey} section`} id="journey" aria-labelledby="journey-title">
        <div className="sectionContainer">
          <div className="sectionHeader sectionHeader--dark" data-reveal>
            <div>
              <p className="eyebrow"><span className="sectionIndex">03 /</span> The evolution</p>
              <h2 id="journey-title">Small steps. <span className={styles.mutedHeading}>Real momentum.</span></h2>
            </div>
            <p>
              A learning path made of study, practice projects, and early experience with
              professional teams. Each chapter adds new questions and better ways to answer them.
            </p>
          </div>

          <div className={styles.timeline}>
            <article className={styles.timelineItem} data-reveal>
              <div className={styles.timelineDate}>2025 TO NOW</div>
              <div className={styles.timelineMarker} aria-hidden="true"><span /></div>
              <div className={styles.timelineBody}>
                <p className={styles.timelineType}>Education / in progress</p>
                <h3>Learning the foundations</h3>
                <p>
                  Studying at Abdul Wali Khan University Mardan while developing practical skills
                  in frontend development and web technologies.
                </p>
              </div>
            </article>

            <article className={styles.timelineItem} data-reveal>
              <div className={styles.timelineDate}>MAY 2026 / 6 MONTHS</div>
              <div className={styles.timelineMarker} aria-hidden="true"><span /></div>
              <div className={styles.timelineBody}>
                <p className={styles.timelineType}>DevelopersHub Corporation / completed</p>
                <h3>Front-End Development Intern</h3>
                <p>
                  Completed a remote internship with the Islamabad-based team, contributing to
                  frontend projects and applying responsive web design and CSS Flexbox.
                </p>
              </div>
            </article>

            <article className={styles.timelineItem} data-reveal>
              <div className={styles.timelineDate}>20 JUN TO 20 AUG 2026</div>
              <div className={styles.timelineMarker} aria-hidden="true"><span /></div>
              <div className={styles.timelineBody}>
                <p className={styles.timelineType}>DevSphere / completed</p>
                <h3>Remote internship</h3>
                <p>
                  Completed a two-month remote Front-End Development Internship, gaining more
                  practical experience with team-based frontend work.
                </p>
              </div>
            </article>

            <article className={styles.timelineItem} data-reveal>
              <div className={styles.timelineDate}>ONGOING</div>
              <div className={styles.timelineMarker} aria-hidden="true"><span /></div>
              <div className={styles.timelineBody}>
                <p className={styles.timelineType}>Practice / next chapter</p>
                <h3>Build, reflect, repeat</h3>
                <p>
                  Working through React and JavaScript projects, strengthening responsive UI and
                  debugging habits, and exploring WordPress e-commerce with SkinLuxe.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.skills} section`} id="skills" aria-labelledby="skills-title">
        <div className="sectionContainer">
          <div className="sectionHeader" data-reveal>
            <div>
              <p className="eyebrow eyebrow--dark"><span className="sectionIndex">04 /</span> The workshop</p>
              <h2 id="skills-title">Tools in the <span className={styles.mutedHeading}>making.</span></h2>
            </div>
            <p>
              The skills I’m using and developing now. Instead of percentage bars, this gives a
              clear view of where I practice and what I’m learning next.
            </p>
          </div>

          <div className={styles.skillGrid}>
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <article className={styles.skillCard} key={group.title} data-reveal>
                  <div className={styles.skillCardTop}>
                    <span className={styles.skillNumber}>0{index + 1}</span>
                    <Icon size={20} strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <h3>{group.title}</h3>
                  <p className={styles.skillNote}>{group.note}</p>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
          <p className={styles.skillFootnote}>
            <Braces size={15} aria-hidden="true" /> API fetching, asynchronous JavaScript, and WooCommerce are active learning areas.
          </p>
        </div>
      </section>

      <section className={`${styles.projects} section`} id="projects" aria-labelledby="projects-title">
        <div className="sectionContainer">
          <div className="sectionHeader sectionHeader--dark" data-reveal>
            <div>
              <p className="eyebrow"><span className="sectionIndex">05 /</span> The things I’ve built</p>
              <h2 id="projects-title">Practice made <span className={styles.mutedHeading}>visible.</span></h2>
            </div>
            <p>
              A growing collection of learning projects. Each one is a chance to explore a concept,
              practice implementation, and see what I want to improve next.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.number} data-reveal>
                <div className={`${styles.projectArt} ${styles[`art_${project.art}`]}`} aria-hidden="true">
                  {project.art === "dashboard" && <DashboardArt />}
                  {project.art === "cinema" && <CinemaArt />}
                  {project.art === "notes" && <NotesArt />}
                  {project.art === "skincare" && <SkincareArt />}
                </div>
                <div className={styles.projectMeta}>
                  <span>{project.number} / {project.kind}</span>
                  <span className={styles.projectStatus}>{project.status}</span>
                </div>
                <h3>{project.name}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <ul className={styles.projectTags} aria-label={`${project.name} technologies`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <p className={styles.projectArtLabel}>{project.artLabel}</p>
              </article>
            ))}
          </div>

          <div className={styles.projectFooter}>
            <p>Original screenshots, repositories, and demos can be added as they become available.</p>
            <a className="textLink" href="https://github.com/sayyadali-dev" target="_blank" rel="noreferrer">
              Visit GitHub <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.future} section`} id="beyond" aria-labelledby="future-title">
        <div className={styles.futureGlow} aria-hidden="true" />
        <div className={`${styles.futureGrid} sectionContainer`}>
          <div data-reveal>
            <p className="eyebrow eyebrow--dark"><span className="sectionIndex">06 /</span> Beyond today</p>
            <h2 id="future-title">Keep becoming <span>useful.</span></h2>
          </div>
          <div className={styles.futureCopy} data-reveal>
            <p>
              My next step is to grow into a capable full-stack web application developer,
              strengthening my skills in React, JavaScript, backend development, debugging, and
              delivering reliable applications.
            </p>
            <p>
              Over time, I want to take ideas from real user needs to practical products, explore
              AI-powered software, and learn what it takes to build something of my own.
            </p>
            <span className={styles.futureNote}><Layers3 size={16} aria-hidden="true" /> Ambition in progress</span>
          </div>
        </div>
      </section>

      <section className={`${styles.contact} section`} id="contact" aria-labelledby="contact-title">
        <div className={`${styles.contactContainer} sectionContainer`}>
          <div className={styles.contactLead} data-reveal>
            <p className="eyebrow"><span className="sectionIndex">07 /</span> The connection</p>
            <h2 id="contact-title">Let’s build the next <span>chapter.</span></h2>
            <p>
              Open to relevant junior frontend, React, and WordPress opportunities, and to meeting
              people who care about useful digital work.
            </p>
            <a className={styles.contactButton} href="mailto:sayyadali.dev@gmail.com">
              Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className={styles.contactDetails} data-reveal>
            <div className={styles.contactDetail}>
              <span className={styles.detailLabel}>Email</span>
              <a href="mailto:sayyadali.dev@gmail.com">sayyadali.dev@gmail.com <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
            <div className={styles.contactDetail}>
              <span className={styles.detailLabel}>LinkedIn</span>
              <a href="https://www.linkedin.com/in/sayyad-ali-react/" target="_blank" rel="noreferrer">
                Connect on LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <div className={styles.contactDetail}>
              <span className={styles.detailLabel}>GitHub</span>
              <a href="https://github.com/sayyadali-dev" target="_blank" rel="noreferrer">
                View repositories <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <div className={styles.locationNote}>
              <span className={styles.locationDot} aria-hidden="true" /> Pakistan · Open to relevant opportunities
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DashboardArt() {
  return (
    <div className={styles.dashboardMock}>
      <div className={styles.mockTopbar}><i /><i /><i /><span>TEAM / OVERVIEW</span></div>
      <div className={styles.dashboardBody}>
        <div className={styles.mockSidebar}><b /><i /><i /><i /><i /></div>
        <div className={styles.mockContent}>
          <span className={styles.mockHeading} />
          <div className={styles.metricRow}><i /><i /><i /></div>
          <div className={styles.chart}><span /><span /><span /><span /><span /><span /><span /></div>
          <div className={styles.taskRows}><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
}

function CinemaArt() {
  return (
    <div className={styles.cinemaMock}>
      <span className={styles.cinemaWord}>NOW<br />SHOWING</span>
      <div className={styles.posterRow}>
        <i /><i /><i /><i />
      </div>
      <span className={styles.cinemaMeta}>DISCOVER / RATE / REMEMBER</span>
    </div>
  );
}

function NotesArt() {
  return (
    <div className={styles.notesMock}>
      <div><span>01 / TODAY</span><i /><i /><i /></div>
      <div><span>02 / THOUGHTS</span><i /><i /></div>
      <div><span>03 / LATER</span><i /><i /><i /></div>
    </div>
  );
}

function SkincareArt() {
  return (
    <div className={styles.skincareMock}>
      <span className={styles.skinLabel}>SKIN / STUDY 04</span>
      <div className={styles.productBottle}><span /></div>
      <span className={styles.skinRing} />
      <span className={styles.skinFoot}>A QUIET PRODUCT DIRECTION</span>
    </div>
  );
}
