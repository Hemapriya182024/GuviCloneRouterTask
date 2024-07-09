   
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs";
import All from "./Components/All";
import Fullstack from "./Components/Fullstack";
import Datascience from "./Components/Datascience";
import Cybersecurity from "./Components/Cybersecurity";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blogdetails from "./Components/Blogdetails";

function App() {
  const blogs = [
    {
      id: 1,
      title: "Best Full-Stack Development Project Ideas in 2024",
      tag: "Full Stack",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html-1200x801.jpg",
      author: "Isha Sharma",
      date: "03 jul, 2024",
      time: 3,
      siteURL: "https://www.guvi.in/blog/full-stack-development-project-ideas/",
      content:
        "When you give your resume to any potential recruiter, the first thing that they check apart from your education is the number of projects that you have done during your career. The aim of the project is not just to showcase your understanding of the subject but rather to showcase your interest in that subject that extends beyond academics Building a project is very important for individuals to gain practical knowledge of concepts. Since full-stack development is the most demanding job in the IT industry, hence, it’s very important for you to build some creative and amazing projects. The demand for full-stack developers is rising and will continue to rise in the coming years.",
    },
    {
      id: 2,
      title: "How Long Would It Take to Be a Full Stack Developer?",
      tag: "Full Stack",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
      author: "Isha Sharma",
      date: "29 jun, 2024",
      time: 5,
      siteURL:
        "https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/",
      content: `Step 1: Master the Fundamentals (Weeks 1-4)
      Dive into HTML, CSS, and JavaScript, learning to build web pages and add interactivity.
      Explore basic front-end development concepts to create user-friendly interfaces.
      Practice coding regularly and take advantage of coding challenges and exercises to reinforce your learning.
      Step 2: Explore Backend Technologies (Weeks 5-8)
      Learn server-side programming languages like Python, Ruby, or Node.js for backend development.
      Familiarize yourself with databases and understand how to manage data effectively.
      Work on simple backend projects to gain hands-on experience in server-side development.
      Step 3: Embrace Frameworks and Libraries (Weeks 9-11)
      Explore popular front-end and back-end frameworks like React, Angular, Django, or Express.js.
      Understand how these tools can streamline your development process and make coding more efficient.
      Build small projects using frameworks to apply your knowledge and boost your confidence.
      Step 4: Create Real-World Projects (Weeks 12-13)
      Collaborate with other developers or contribute to open-source projects to gain practical experience.
      Develop full stack applications that showcase your skills and creativity.
      As you complete projects, create a portfolio to demonstrate your abilities to potential employers.`,
    },
    {
      id: 3,
      title: "Can A Commerce Student Do Data Science?",
      tag: "Data Science",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-1536x804.png",
      author: "Meghana D",
      date: "26 jun, 2024",
      time: 7,
      siteURL:
        "https://www.guvi.in/blog/can-commerce-students-do-data-science/",
      content: `Data science has wormed up into any which business that exists on this planet! In short, this century appears to be led by DATA! Data science, data analytics, and other data-related jobs are in rising demand with industry-wide skills shortages. So, data professionals tend to get good salary packages and perks.

We can count on data professionals to furnish valuable insights into customer behavior that can lead to increased conversions. Detailed market analysis helps in competitive advantage in pricing strategies or product development. Further leading to improved operational efficiency and minimized risk exposure through accurate forecasting models.

No wonder, everyone aspires to get their best foot into data proficiency.`,
    },
    {
      id: 4,
      title:
        "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      tag: "Data Science",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp",
      author: "Lukesh S",
      date: "03 jul, 2024",
      time: 6,
      siteURL: "https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/",
      content: `Are you someone who’s not interested in coding, but wants to get placed in tech through data science, and earn a handsome salary? Worry Not! Tech companies have various opportunities open for you even if you’ve no experience in coding. Data science has evolved to become one of the most sought-after fields in the tech industry.

While coding remains an integral part of data science, it’s not the only path to a successful career in this dynamic field. In 2024, tech companies and startups are expanding their teams to include professionals who excel in non-coding jobs in data science.

In this blog, we’ll explore the top 10 non-coding jobs in data science that are in high demand this year. These no-code roles in data science offer huge salaries, remote working opportunities, and promising career growth.`,
    },
    {
      id: 5,
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      tag: "Cyber Security",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      author: "Tushar Vinocha",
      date: "16 Apr, 2024",
      time: 5,
      siteURL:
        "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/",
      content:
        `Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.

        Is there a difference between cybersecurity and ethical hacking, if yes what is the difference? Let’s find out!
        
        First off, we will understand what Cybersecurity is and how it is related to your online activities. We will consider numerous points and have an in-depth comparison, to find out the difference between Cybersecurity and Ethical Hacking. 
        
        Whether you are a business owner or an individual who uses the internet regularly you must understand these terms so that you can take the necessary precautions to protect yourself and your data. In this article, we’re going to shed light on these two security niches. `,
    },
    {
      id: 6,
      title: "8 Different Types of Cybersecurity and Threats Involved",
      tag: "Cyber Security",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
      author: "Isha Sharma",
      date: "03 jul, 2023",
      time: 3,
      siteURL: "https://www.guvi.in/blog/types-of-cybersecurity/",
      content:
        `Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc. With the advent of technology and the increasing interconnectedness of organizational systems and networks, effective cybersecurity management and strategy are necessary for organizations of all sizes and types accordingly. Investments are flowing into this field and the market is projected to be a staggering 403 billion US dollars by 2027. This in turn has led to a spurt in demand for experts in the field of cyber security. Cybersecurity is an umbrella term that encompasses different types of security. In this article, we’re trying to deconstruct various types of cybersecurity. So let’s dig in. `,
    },
   
  ];

  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        { path: "/", element: <Home blogs={blogs} /> },
        {
          path: "blogs",
          element: <Blogs blogs={blogs} />,
          children: [
            {
              path: "all",
              element: <All blogs={blogs} />,
            },
            {
              path: "fullstack",
              element: <Fullstack blogs={blogs} />,
            },
            {
              path: "datascience",
              element: <Datascience blogs={blogs} />,
            },
            {
              path: "cybersecurity",
              element: <Cybersecurity blogs={blogs} />,
            },
           
            {
              path: ":blogId",
              element: <Blogdetails blogs={blogs} />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
