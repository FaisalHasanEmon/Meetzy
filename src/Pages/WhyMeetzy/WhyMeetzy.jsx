import React from 'react';

const MeetzyPrivacyPage = () => {
  return (
    <div className="bg-white p-6 font-sans">
      <div className="max-w-5xl mx-auto mt-20 space-y-20">
        {/* Privacy Promise Section */}
        <section>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="w-full sm:w-1/2 flex justify-center">
              <img 
                src="https://sylaps.com/assets/img/thumbs/safety/secure_enviroment.svg" 
                alt="Privacy protection illustration"
                className="w-80 h-auto"
              />
            </div>
            
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-5">
                Your Privacy, Our Promise
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Your data is not transmitted to our servers and is not shared with any third parties.
                We are not in the business of data, we are in the business of privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Unlimited Calls Section */}
        <section>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="w-full sm:w-1/2 order-2 sm:order-1">
              <h2 className="text-3xl font-semibold text-gray-800 mb-5">
                Unlimited Group Calls
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Meetzy supports unlimited video calls with no time restrictions, so your conversations can flow naturally. 
                Enjoy stable, high-quality connections even during day-long sessions without interruptions.
              </p>
            </div>
            
            <div className="w-full sm:w-1/2 order-1 sm:order-2">
              <div className="w-full h-72 sm:h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://www.gstatic.com/meet/premium_carousel_02_174e55774263506d1280ce6552233189.gif" 
                  alt="Video call illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Screen Sharing Section */}
        <section>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="w-full sm:w-1/2">
              <div className="w-full h-72 sm:h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://www.gstatic.com/meet/premium_carousel_03_4f42ed34b9d0637ce38be87ecd8d1ca0.gif" 
                  alt="Screen sharing illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-5">
                Crystal-Clear Screen Sharing
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Share your screen with perfect clarity. Present documents, slides, or applications 
                with smooth scrolling and real-time annotations.
              </p>
            </div>
          </div>
        </section>

        {/* Multi-Participant Section */}
        <section>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="w-full sm:w-1/2 order-2 sm:order-1">
              <h2 className="text-3xl font-semibold text-gray-800 mb-5">
                Seamless Multi-Participant Calls
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Host large group meetings with crystal-clear audio and video quality. 
                Our optimized platform ensures smooth performance even with multiple participants.
              </p>
            </div>
            
            <div className="w-full sm:w-1/2 order-1 sm:order-2">
              <div className="w-full h-72 sm:h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://www.viber.com/app/uploads/multi.gif" 
                  alt="Group call illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Recording Section */}
        <section>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="w-full sm:w-1/2">
              <div className="w-full h-72 sm:h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://www.gstatic.com/meet/premium_carousel_04_9659d3a952a74b27223836d673fe391f.gif" 
                  alt="Meeting recording illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-5">
                Secure Meeting Recordings
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Record important meetings with one click. All recordings are encrypted 
                and stored securely with access controls.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MeetzyPrivacyPage;