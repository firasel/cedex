import {
    BsGithub, BsPinterest, BsReddit, BsSlack, BsSnapchat, BsTwitter
} from "react-icons/bs";

const journeyData = {
  section: {
    title: "My Journey",
    details:
      "I am a person who is very excited to learn and is disciplined on the given task and always gives the best for the company.",
  },
  jobs: [
    {
      icon: <BsSlack color="#6154f2" />,
      position: "Lead UI Designer",
      companyName: "Slack",
      time: "2021 - Present",
    },
    {
      icon: <BsGithub color="#455A64" />,
      position: "UI Designer",
      companyName: "Github",
      time: "2021 - 2021",
    },
    {
      icon: <BsTwitter color="#03A9F4" />,
      position: "Senior UI Designer",
      companyName: "Twitter",
      time: "2020 - 2021",
    },
    {
      icon: <BsSnapchat color="#e854f2" />,
      position: "UI/UX Designer",
      companyName: "Snapchat",
      time: "2019 - 2020",
    },
    {
      icon: <BsReddit color="#F26322" />,
      position: "UX Designer",
      companyName: "Reddit",
      time: "2018 - 2019",
    },
    {
      icon: <BsPinterest color="#E60023" />,
      position: "Web Designer",
      companyName: "Pinterest",
      time: "2018 - 2018",
    },
  ],
};

export default journeyData;
