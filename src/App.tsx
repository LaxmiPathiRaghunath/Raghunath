import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-[80vh] flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Raghunath Laxmi Pathi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Java Full Stack Developer
          </p>
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <a href="mailto:l.raghunathl123@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail size={20} />
              <span>l.raghunathl123@gmail.com</span>
            </a>
            <a href="tel:2243867993" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone size={20} />
              <span>(224) 386-7993</span>
            </a>
            <a href="https://www.linkedin.com/in/raghu-nath-l-3953a816a" className="flex items-center gap-2 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={20} />
              <span>Chicago, Illinois</span>
            </div>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Professional Summary</h2>
          <div className="space-y-4 text-gray-300">
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Java Developer with overall 4+ years of experience in SDLC phases for Java/J2EE enterprise applications, implementing multi-tier architectures for high-performance systems.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Designed and implemented scalable microservices architecture with Spring Boot, Spring Cloud, and Docker, improving fault tolerance and system resilience.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Created and consumed RESTful APIs and SOAP Web Services, ensuring seamless integration with third-party systems.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Optimized database queries and schema design using Hibernate and JDBC, achieving significant improvements in application response times.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Utilized JMS for asynchronous messaging in distributed systems, ensuring reliable communication between microservices.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Designed and implemented unit tests and integration tests using JUnit and Mockito, improving code quality and reliability.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Ensured secure data processing by implementing OAuth 2.0, JWT, and SSL/TLS protocols.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Built and deployed applications in AWS environments, leveraging services like EC2, S3, RDS, and CloudWatch to ensure scalability and monitoring.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Automated build and deployment processes using Maven, Jenkins, and GitLab CI/CD, reducing manual intervention and deployment time.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Integrated logging and monitoring frameworks like Log4j and ELK stack to identify and resolve system issues proactively.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Designed and enforced coding standards using SonarQube to maintain high code quality and reduce technical debt.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Contributed to code reviews, mentoring junior developers, and improving team collaboration and codebase quality.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Worked on Agile Scrum teams, participating in daily stand-ups, sprint planning, and retrospective meetings to deliver features iteratively.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p>Leveraged Java 8+ features, including Streams, Lambdas, and Optional, to write cleaner, more efficient code.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Programming Languages",
                skills: ["Java 8/11/17", "Python", "C#", ".NET Core", "SQL"]
              },
              {
                category: "Frameworks",
                skills: ["Spring Boot", "Spring MVC", "Hibernate", "ASP.NET Core"]
              },
              {
                category: "Cloud & DevOps",
                skills: ["AWS EC2", "Docker", "Kubernetes", "Jenkins"]
              },
              {
                category: "Databases",
                skills: ["SQL Server", "MySQL", "MongoDB", "AWS RDS"]
              },
              {
                category: "Front-End",
                skills: ["Angular", "React.js", "Redux", "HTML5"]
              },
              {
                category: "Tools & Others",
                skills: ["Git", "Maven", "Jira", "Terraform"]
              }
            ].map((skillGroup) => (
              <div key={skillGroup.category} className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span key={skill} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {/* Sierra Consulting Experience */}
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Sierra Consulting Inc.</h3>
                <p className="text-gray-400">Full Stack Java Developer | January 2024 - December 2024 | Illinois</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Understanding website requirements and participating in activities like gathering business requirements.</li>
                <li>• Used Spring Core annotations for Spring Dependency Injection, Spring MVC for REST APIs, and Spring Boot for microservices.</li>
                <li>• Secured AWS environments with IAM roles, policies, and multi-factor authentication (MFA) to enforce best practices.</li>
                <li>• Automated Kubernetes cluster provisioning and deployment using Terraform and Helm charts.</li>
                <li>• Monitored WebLogic server health and performance using Oracle Enterprise Manager (OEM), identifying and resolving bottlenecks.</li>
                <li>• Hands-on experiences with Core Java with Multithreading, Concurrency, Generics, Data Structures, and Collections.</li>
                <li>• Optimized Angular applications by using lazy loading, reducing the initial load time and improving performance.</li>
                <li>• Participated in code reviews, Sprint Demos, Sprint Retrospective, and Grooming with the sprint team.</li>
                <li>• Developed Front-end UI using JSP, Servlets, HTML5, and JavaScript.</li>
                <li>• Developed robust JavaScript and Node.js applications for delivering scalable and high-performance solutions.</li>
                <li>• Leveraged Python's boto3 library to interact with AWS services, automating tasks such as EC2 instance management.</li>
                <li>• Utilized Node.js for server-side scripting and API development.</li>
                <li>• Involved in Unit Testing, Integration Testing, and UAT Testing.</li>
                <li>• Deployed the application on the WebLogic Application Server and integrated applications using Apache Camel.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                <strong>Environment:</strong> Java 11, JPA, Spring MVC, Spring Boot, Kafka, Angular, Python, Node.js, AWS (EC2, S3, IAM), Kubernetes, Terraform, MongoDB, WebLogic, Apache Camel, JSP, HTML5, Servlets.
              </p>
            </div>

            {/* Cholamandalam Experience */}
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Cholamandalam MS General Insurance</h3>
                <p className="text-gray-400">Full Stack Java Developer | May 2020 - July 2022 | Chennai, Tamil Nadu</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Developed Web APIs using Java 8/J2EE, JSP, Servlets, JDBC, Spring, SOAP, REST, HTML, and XML.</li>
                <li>• Actively participated in the design and development phases within the Agile Software Development lifecycle.</li>
                <li>• Collaborated in daily and weekly Scrum meetings to discuss project progress.</li>
                <li>• Utilized Jira for efficient task tracking and project management.</li>
                <li>• Developed and maintained C# and .NET Core applications.</li>
                <li>• Designed and implemented RESTful APIs and integrated microservices in ASP.NET Core.</li>
                <li>• Utilized Entity Framework for database access, optimizing queries and managing data models.</li>
                <li>• Developed code modules using IntelliJ and managed project configurations with Spring and Maven.</li>
                <li>• Implemented JDBC transactions using Spring JDBC Template for database interactions.</li>
                <li>• Created POJOs and integrated Hibernate as the ORM tool.</li>
                <li>• Built and maintained dynamic front-end interfaces using React.js and Redux.</li>
                <li>• Utilized Node.js for server-side application logic.</li>
                <li>• Designed and implemented XML/WSDL interfaces.</li>
                <li>• Developed SPA pages using REST services.</li>
                <li>• Deployed applications on AWS EC2 instances and configured AWS S3.</li>
                <li>• Managed relational database storage with AWS RDS (MySQL).</li>
                <li>• Managed user access and permissions through AWS IAM.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                <strong>Environment:</strong> Java/J2EE (8,11,17), Spring Framework, .NET Core, ASP.NET Core, IntelliJ IDEA, Visual Studio, Visual Studio Code, React.js, Node.js, Redux, MySQL, SQL Server, AWS RDS, AWS EC2, AWS S3, AWS RDS, AWS CloudWatch, AWS IAM, Maven, Jenkins, Docker, JUnit, Mockito, Jira (Agile/Scrum).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold">Master of Science (M.S.) in Computer Science</h3>
              <p className="text-gray-400">Governors State University, University Park, IL, US</p>
              <p className="text-blue-400">Graduated: December 2023 | GPA: 3.5/4.0</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold">Bachelor's in Electronics and Communication Engineering</h3>
              <p className="text-gray-400">Sri Indu College of Engineering (JNTUH)</p>
              <p className="text-blue-400">Graduated: July 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Raghunath Laxmi Pathi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;