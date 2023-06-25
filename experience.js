const experiences = [
  {
    name: 'Insider',
    title: 'Front-end Developer',
    date: 'Nov 2022 - Present',
    description: [
      'Successfully designed and developed comprehensive web pages, meticulously crafting every aspect to ensure a seamless user experience and visually appealing interface. Employed industry best practices and adhered to established coding standards to deliver high-quality and efficient solutions.',
      'Utilized a robust and collaborative kanban board system to effectively collaborate with partners and swiftly accommodate their design change requests. This agile approach facilitated seamless communication, prioritization, and execution, resulting in streamlined processes and optimized project timelines.',
      'Employed cutting-edge technologies and industry-proven methodologies to develop responsive frontend elements that enhance user engagement and improve overall website performance. This included implementing intelligent recommenders, interactive popups, attention-grabbing banners, and visually appealing badges, all of which seamlessly adapt to different devices and screen sizes.',
      'Demonstrated a strong problem-solving aptitude by promptly identifying and resolving customer website issues. Leveraged a combination of technical expertise and analytical skills to deliver quick and efficient solutions, minimizing downtime and ensuring maximum satisfaction for clients. Acted as a reliable point of contact for troubleshooting, providing comprehensive support and guidance throughout the resolution process.',
    ],
  },

  {
    name: 'Browder + LeGuizamon',
    title: 'VBA Developer',
    date: 'Dec. 2021 - Nov. 2022',
    description: [
      'Developed and implemented a robust and automated calculation package report using VBA, specifically designed for precise evaluation and analysis of 1-storey building projects. By leveraging my expertise in VBA programming, I created a sophisticated system that streamlined the entire reporting process, generating comprehensive and accurate reports with minimal effort. This solution significantly enhanced efficiency, accuracy, and consistency in building assessments, providing valuable insights for informed decision-making.',
      'Employing advanced scripting techniques with Javascript and leveraging the power of Google Sheets API, I crafted a dynamic and efficient time-sheet system. This system seamlessly extracted and processed daily data, allowing for the creation of detailed and comprehensive weekly, monthly, and yearly summaries. By implementing this solution, I enabled effective time tracking and streamlined the reporting process, empowering organizations to gain actionable insights, improve resource allocation, and optimize productivity.',
      'Utilizing VBA programming in Microsoft Excel, I meticulously designed and developed a comprehensive spreadsheet tailored specifically for column design in high-rise building projects. This Excel solution incorporated advanced calculations, structural analysis, and industry best practices to ensure the highest level of structural integrity and safety. By leveraging my expertise in VBA programming, I created a user-friendly interface that enabled efficient data input, automated complex calculations, and generated detailed design outputs, significantly enhancing the accuracy and efficiency of column design processes.',
    ],
  },
];

const response = await fetch(
  'https://portfolio-83517-default-rtdb.firebaseio.com/experiences.json',
  {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(experiences),
  }
);
