const Testimonials = () => {
  return (
      <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">TESTIMONIALS</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">What our volunteers have to say about us</p>
              </div>
              <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                              <path d="M512.418 0C229.896 0 0 229.896 0 512.418s229.896 512.418 512.418 512.418 512.418-229.896 512.418-512.418S794.94 0 512.418 0zm0 975.036c-268.05 0-486.618-218.568-486.618-486.618S244.368 1.8 512.418 1.8 999.036 220.368 999.036 488.418 780.468 975.036 512.418 975.036z" />
                              <path d="M512.418 237.6c-114.84 0-208.2 93.36-208.2 208.2s93.36 208.2 208.2 208.2 208.2-93.36 208.2-208.2-93.36-208.2-208.2-208.2zm0 382.8c-91.08 0-173.4-46.8-220.2-117.6 0-91.08 173.4-273.6 220.2-273.6s220.2 182.52 220.2 273.6c-46.8 70.8-129.12 117.6-220.2 117.6z" />
                          </svg>
                          <p className="leading-relaxed mb-6">SSR Connect is a great platform for students to connect with the community and give back to the society. I have been volunteering with SSR Connect for the past 2 years and it has been a great experience. I have been able to connect with a lot of people and help them with their problems. SSR Connect has helped me grow as a person and I am very grateful for that.</p>
                          <a className="inline-flex items-center">
                              <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                              <span className="flex-grow flex flex-col pl-4">
                                  <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                                  <span className="text-gray-500 text-sm">DESIGNER</span>
                              </span>
                          </a>
                      </div>
                  </div>
                  <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                              <path d="M512.418 0C229.896 0 0 229.896 0 512.418s229.896 512.418 512.418 512.418 512.418-229.896 512.418-512.418S794.94 0 512.418 0zm0 975.036c-268.05 0-486.618-218.568-486.618-486.618S244.368 1.8 512.418 1.8 999.036 220.368 999.036 488.418 780.468 975.036 512.418 975.036z" />
                              <path d="M512.418 237.6c-114.84 0-208.2 93.36-208.2 208.2s93.36 208.2 208.2 208.2 208.2-93.36 208.2-208.2-93.36-208.2-208.2-208.2zm0 382.8c-91.08 0-173.4-46.8-220.2-117.6 0-91.08 173.4-273.6 220.2-273.6s220.2 182.52 220.2 273.6c-46.8 70.8-129.12 117.6-220.2 117.6z" />
                          </svg>
                          <p className="leading-relaxed mb-6">SSR Connect is a great platform for students to connect with the community and give back to the society. I have been volunteering with SSR Connect for the past 2 years and it has been a great experience. I have been able to connect with a lot of people and help them with their problems. SSR Connect has helped me grow as a person and I am very grateful for that.</p>
                          <a className="inline-flex items-center">
                              <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />  
                              <span className="flex-grow flex flex-col pl-4">
                                  <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                  <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                              </span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Testimonials;