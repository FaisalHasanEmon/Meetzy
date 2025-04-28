import React from "react";

const AboutUs = () => {
 
  const teamMembers = [
    { name: "Emon", role: "Lead Developer", img: "/team/member1.jpg" },
    { name: "Azim", role: "UI/UX Designer", img: "/team/member2.jpg" },
    { name: "Hridoy", role: "Project Manager", img: "/team/member3.jpg" },
    {
      name: "Saikat",
      role: "Backend Developer",
      img: "/team/member4.jpg",
    },
    {
      name: "Rayhan",
      role: "Frontend Developer",
      img: "/team/member5.jpg",
    },
    {
      name: "Harishankar",
      role: "Marketing Head",
      img: "../../assets/chayon_1-removebg-preview (1).png",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-900 py-20 px-6 md:px-12 text-center">
      <p className="text-sm uppercase tracking-wide text-gray-600">
        Our Mission
      </p>

      <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Revolutionizing Real-Time Connections
      </h2>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        We are committed to making real-time communication seamless,
        high-quality, and accessible for everyone. Whether for business
        meetings, online events, or personal connections, our platform ensures a
        smooth and engaging experience.
      </p>

      
      <div className="mt-10 flex justify-center">
        <iframe
          className="w-full max-w-3xl h-64 md:h-80 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/QkvlYq9TazU?si=weYWQd91xIFywKqD"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      
     
      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
