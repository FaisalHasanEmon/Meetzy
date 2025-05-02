import React from "react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Emon",
      role: "Lead Developer",
      img: "https://i.ibb.co/ynb3TSzW/Screenshot-2025-04-29-235111.png",
    },
    {
      name: "Azim",
      role: "UI/UX Designer",
      img: "https://i.ibb.co.com/cKKVDfQb/Untitled-design-2.png",
    },
    {
      name: "Saikat",
      role: "Frontend Developer",
      img: "https://i.ibb.co/VbVHqvx/saikat.png",
    },
    {
      name: "Rayhan",
      role: "Backend Developer && Lead Developer",
      img: "https://i.ibb.co/gxzxFJk/profile12.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-900 py-20 px-6 md:px-12 text-center">
      <p className="text-sm uppercase tracking-wide text-gray-600">Our Mission</p>

      <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Revolutionizing Real-Time Connections
      </h2>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        We are committed to making real-time communication seamless, high-quality, and accessible for everyone.
        Whether for business meetings, online events, or personal connections, our platform ensures a smooth and
        engaging experience.
      </p>

      <div className="mt-10 flex justify-center">
        <iframe
          className="w-full max-w-3xl h-64 md:h-80 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/QkvlYq9TazU?si=weYWQd91xIFywKqD"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center">
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
