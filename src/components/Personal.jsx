// Import React and styled-components
import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import aboutImage from '../../images/rahul.jpg';
import propelImage from '../../images/propel.png';
import aciesImage from '../../images/acies.png';
import kcgImage from '../../images/kcg.png';
import kcsImage from '../../images/kcs.png';


// Define some global styles and colors
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #333;
    background-color: #e4e8eb;
  }
`;

const colors = {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
};

// Define some reusable components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 40px 0;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  text-align: center;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: ${colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondary};
    transition: all .3s ease-in-out;
  }
`;

const Link = styled.a`
  color: #fff;
  
   &:hover {
    color: ${colors.secondary};
    transition: all .3s ease-in-out;
   }
`;

// Define the nav bar component
const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: sticky;
  top: 0;
  background-color: ${colors.primary};
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
   list-style-type:none; 
   margin-left :20px; 
`;

// Define the about section component
const AboutSection = styled(Section)`
  
`;

const AboutContainer = styled(Container)`
 display:flex; 
 align-items:center; 
 justify-content :space-between; 
 flex-wrap :wrap; 
`;

const AboutImage = styled.img`
 width :300px; 
 height :300px; 
 object-fit :cover; 
 border-radius :50%; 
 margin-bottom :20px; 
`;

const AboutContent = styled.div`
 width :60%; 

 @media (max-width :768px) { 
   width :100%; 
 } 
`;

// Define the academy section component
const AcademySection = styled(Section)`
  
`;

const AcademyContainer = styled(Container)`
  
`;

const AcademyList = styled.ul`
 display:flex; 
 align-items:center; 
 justify-content :space-between; 
 flex-wrap :wrap; 
 margin-top :20px; 
`;

const AcademyItem = styled.li`
 width :30%; 
 list-style-type:none; 
 margin-bottom :20px; 

 @media (max-width :768px) { 
   width :100%; 
 } 
`;

const AcademyCard = styled.div`
 display:flex; 
 align-items:center; 
 justify-content :space-between; 
 padding :10px; 
 border-radius :4px; 
 box-shadow :0px,0px,10px,rgba(0,0,0,.1); 

 @media (max-width :768px) { 
   flex-direction :column; 
 } 
`;

const AcademyLogo = styled.img`
 width :100px; 
 height :100px; 

 @media (max-width :768px) { 
   margin-bottom :10px; 
 } 
`;

const AcademyInfo = styled.div`
  
`;

// Define the career section component
const CareerSection = styled(Section)`
  
`;

const CareerContainer = styled(Container)`
  
`;

const CareerList = styled.ul`
 display:flex; 
 align-items:center; 
 justify-content :space-between; 
 flex-wrap :wrap; 
 margin-top :20px; 

 @media (max-width :768px) { 
  
 } 
 
`;

const CareerItem = styled.li`
 width :30%; 
 list-style-type:none; 
 margin-bottom :20px; 

 @media (max-width :768px) { 
   width :100%; 
 } 
`;

const CareerCard = styled.div`
 display:flex; 
 align-items:center; 
 justify-content :space-between; 
 padding :10px; 
 border-radius :4px; 
 box-shadow :0px,0px,10px,rgba(0,0,0,.1); 

 @media (max-width :768px) { 
   flex-direction :column; 
 } 
`;

const CareerLogo = styled.img`
 width :100px; 
 height :100px; 

 @media (max-width :768px) { 
   margin-bottom :10px; 
 } 
`;

const CareerInfo = styled.div`
  
`;

// Define the skills section component
const SkillsSection = styled(Section)`
  
`;

const SkillsContainer = styled(Container)`
  
`;

const SkillsList = styled.ul`
 margin-top: 10px;
 display:flex; 
 justify-content :space-between; 
 flex-wrap :wrap; 

 @media (max-width :768px) { 
  
 } 
 
`;

const SkillsItem = styled.li`
 list-style-type:none; 

 @media (max-width :768px) { 
   width :100%; 
 } 
`;

const SkillsCard = styled.div`
 display:flex; 
 align-items:center; 
 justify-content :space-between; 
 padding :10px; 
 border-radius :4px; 
 box-shadow :0px,0px,10px,rgba(0,0,0,.1); 

 @media (max-width :768px) { 
  
 } 
 
`;

const SkillsLogo = styled.img`
 width :120px; 
 height :40px; 

 @media (max-width :768px) { 
  
 } 
 
`;

const SkillsInfo = styled.div`
  
`;

// Define the contact section component
const ContactSection = styled(Section)`
  
`;

const ContactContainer = styled(Container)`
  
`;

const ContactForm = styled.form`
 display:flex; 
 align-items:center; 
 justify-content :center; 
 flex-direction:column;
 margin-top:20px;
`;

const ContactInput = styled.input`
 width:80%;
 padding:10px;
 border:none;
 border-radius:4px;
 margin-bottom:10px;
 outline:none;
`;

const ContactTextarea = styled.textarea`
 width:80%;
 padding:10px;
 border:none;
 border-radius:4px;
 margin-bottom:10px;
 outline:none;
 resize:none;
 height:200px;
`;

// Define the footer component
const Footer = styled.footer`
 display:flex; 
 align-items:center; 
 justify-content:center; 
 padding:20px 0;
 background-color:${colors.dark};
 color:${colors.light};
`;


function Portfolio() {
    const aboutData = {
        name: 'Raghul Jagadeesan',
        image: aboutImage,
        bio: 'Backend developer with 4 years of experience in Software development industry as a backend developer specialized in C#, .NET core, Flask, Python. Also having an experience on Docker and Kubernetes to deploy applications in containerized environments, ensuring seamless scalability and deployment.',
        resume: '#',
    };

    const academyData = [
        {
            name: 'Kcg College of Technology',
            logo: kcgImage,
            degree: 'Bachelor of Technology in Information Technology',
            year: '2016-2020',
        },
        {
            name: 'Kcs Higher Secondary School',
            logo: kcsImage,
            degree: 'Higher Studies',
            year: '2016',
        },
        {
            name: 'Kcs Higher Secondary School',
            logo: kcsImage,
            degree: 'Secondary Studies',
            year: '2014',
        },
    ];

    const careerData = [
        {
            name: 'Propel Techlabs India',
            logo: propelImage,
            role: 'Senior Software Developer',
            year: '2021-Present',
        },
        {
            name: 'Acies Global',
            logo: aciesImage,
            role: 'Digital Analyst',
            year: '2020-2021',
        },
        {
            name: 'Acies Global',
            logo: aciesImage,
            role: 'Trainee Digital Analyst',
            year: '2019-2020',
        },
    ];

    const skillsData = [
        {
            name: 'C#',
            logo: 'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white',
        },
        {
            name: 'Python',
            logo: 'https://camo.githubusercontent.com/a1b2dac5667822ee0d98ae6d799da61987fd1658dfeb4d2ca6e3c99b1535ebd8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3336373041303f7374796c653d666f722d7468652d6261646765266c6f676f3d707974686f6e266c6f676f436f6c6f723d666664643534',
        },
        {
            name: '.Net Core',
            logo: 'https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white',
        },
        {
            name: 'Flask',
            logo: 'https://camo.githubusercontent.com/43c40e9f61f01e780f4cfed5dafda9e3494310ba1b6ea11e20c4949e556a47c3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f666c61736b2d2532333030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d666c61736b266c6f676f436f6c6f723d7768697465',
        },
        {
            name: 'Docker',
            logo: 'https://camo.githubusercontent.com/6b7f701cf0bea42833751b754688f1a27b6090fdf90bf2b226addff01be817f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646f636b65722d2532333064623765642e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465',
        },
        {
            name: 'Kubernetes',
            logo: 'https://camo.githubusercontent.com/922a5d8888929fc17acaaf995fe42f50788f30a5b58f45b03c6bafc9e4b5791f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6b756265726e657465732d2532333332366365352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6b756265726e65746573266c6f676f436f6c6f723d7768697465',
        },
        {
            name: 'Azure',
            logo: 'https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white',
        },
        {
            name: 'Postgres',
            logo: 'https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465',
        },
        {
            name: 'Swagger',
            logo: 'https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white',
        },
        {
            name: 'RabbitMq',
            logo: 'https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white'
        },
        {
            name: 'Prometheus',
            logo: 'https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white'
        },
        {
            name: 'Vs Code',
            logo: 'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white'
        },
        {
            name: 'Netlify',
            logo: 'https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7'
        },
        {
            name: 'PowerBI',
            logo: 'https://img.shields.io/badge/power_bi-F2C811?style=for-the-badge&logo=powerbi&logoColor=black'
        },
        {
            name: 'Sonar Qube',
            logo: 'https://img.shields.io/badge/SonarQube-black?style=for-the-badge&logo=sonarqube&logoColor=4E9BCD'
        },
        {
            name: 'Git',
            logo: 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white'
        },
    ];

    // Define a function to handle the contact form submission
    const handleSubmit = (e) => {
        // Prevent the default behavior of the form
        e.preventDefault();
        // Get the values of the input fields
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        // Validate the input fields
        if (!name || !email || !message) {
            alert('Please fill in all the fields');
            return;
        }
        // Send the data to a backend server or an API endpoint
        // For simplicity, we will just log the data to the console
        console.log({ name, email, message });
        // Clear the input fields
        e.target.reset();
        // Show a success message
        alert('Thank you for contacting me. I will get back to you soon.');
    };

    // Return the JSX elements for the app
    return (
        <>
            <GlobalStyle />
            <NavBar>
                <Logo>{aboutData.name}</Logo>
                <Menu>
                    <MenuItem>
                        <Link href="#about">About</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="#academy">Academy</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="#career">Career</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="#skills">Skills</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="#contact">Contact</Link>
                    </MenuItem>
                </Menu>
            </NavBar>
            <AboutSection id="about">
                <AboutContainer>
                    <AboutImage src={aboutData.image} alt={aboutData.name} />
                    <AboutContent>
                        <Title>About Me</Title>
                        <Text>{aboutData.bio}</Text>
                        <Button as="a" href={aboutData.resume}>
                            Download Resume
                        </Button>
                    </AboutContent>
                </AboutContainer>
            </AboutSection>
            <AcademySection id="academy">
                <AcademyContainer>
                    <Title>Academy</Title>
                    <AcademyList>
                        {academyData.map((item, index) => (
                            <AcademyItem key={index}>
                                <AcademyCard>
                                    <AcademyLogo src={item.logo} alt={item.name} />
                                    <br></br>
                                    <AcademyInfo>
                                        <Subtitle>{item.name}</Subtitle>
                                        {item.degree && (
                                            <>
                                                <Text>Degree: {item.degree}</Text>
                                                <Text>Year: {item.year}</Text>
                                            </>
                                        )}
                                        {item.course && (
                                            <>
                                                <Text>Course: {item.course}</Text>
                                                <Text>Year: {item.year}</Text>
                                            </>
                                        )}
                                    </AcademyInfo>
                                </AcademyCard>
                            </AcademyItem>
                        ))}
                    </AcademyList>
                </AcademyContainer>
            </AcademySection>

            {/* Add more sections here */}

            {/* Career section */}
            <CareerSection id="career">
                <CareerContainer>
                    <Title>Career Path</Title>
                    <CareerList>

                        {careerData.map((item, index) => (
                            <CareerItem key={index}>
                                <CareerCard>
                                    <CareerLogo src={item.logo} alt={item.name} />
                                    <CareerInfo>
                                        <Subtitle>{item.name}</Subtitle>
                                        <Text>Role: {item.role}</Text>
                                        <Text>Year: {item.year}</Text>
                                    </CareerInfo>
                                </CareerCard>
                            </CareerItem>
                        ))}
                    </CareerList>
                </CareerContainer>
            </CareerSection>

            {/* Skills section */}
            <SkillsSection id="skills">
                <SkillsContainer>
                    <Title>Skills</Title>
                    <SkillsList>
                        {skillsData.map((item, index) => (
                            <SkillsItem key={index}>
                                <SkillsCard>
                                    <SkillsLogo src={item.logo} alt={item.name} />
                                </SkillsCard>
                            </SkillsItem>
                        ))}
                    </SkillsList>
                </SkillsContainer>
            </SkillsSection>

            {/* Contact section */}
            <ContactSection id="contact">
                <ContactContainer>
                    <Title>Contact Me</Title>
                    <ContactForm onSubmit={handleSubmit}>
                        <ContactInput type="text" name="name" placeholder="Name" />
                        <ContactInput type="email" name="email" placeholder="Email" />
                        <ContactTextarea name="message" placeholder="Message" />
                        <Button type="submit">Send</Button>
                    </ContactForm>
                </ContactContainer>
            </ContactSection>

            <Footer> This Portfolio was built using ChatGPT4. I have used following command: "Complete code of responsive modern portfolio for a backend developer with 4 years experience using react js and styled components, including nav bar, about section, Academy, career, skills, contact and footer. Don't make any `` issues in the code."</Footer>
        </>
    );
}

export default Portfolio;
