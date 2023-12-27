const DATA = [
  {
    number: '01.',
    title: 'Find a problem',
    description: 'Students try to find a problem in the society',
  },
  {
    number: '02.',
    title: 'Get the solution',
    description: 'Students get the innovative solution for the problem',
  },
  {
    number: '03.',
    title: 'Implement the solution',
    description: 'Students implement the solution in the society',
  },
];

const HowWeWork = () => {
  return (
      <section className="text-gray-600 body-font w-full">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex flex-col md:grid grid-cols-3 flex-wrap -m-4 w-full">
                  <div className="flex h-full flex-col justify-end relative">
                      <div className="absolute top-0 w-56 h-36 -ml-24">
                          <div
                              style={{
                                backgroundImage: 'radial-gradient(rgba(0, 62, 135, 0.22) 5px, transparent 0)',
                                backgroundSize: '20px 20px',
                                backgroundPosition: '0 0, 20px 20px',
                                height: '100%',
                              }}
                          />
                      </div>
                      <div className="text-sm font-semibold text-primary">How we work</div>
                      <h1 className="title-font text-4xl font-bold text-gray-900 mb-4">
                          We strive for change
                      </h1>
                      <p className="leading-relaxed max-w-[400px]">
                          Giving back to the society whatever little we can, this is the small thought that led to
                          this massive community service program that we call SSR.
                      </p>
                  </div>
                  <div className="col-span-2 flex justify-end mr-10">
                      <div className="flex flex-col gap-12">
                          {DATA.map((item) => (
                              <div key={item.number} className="flex">
                                  <div className="text-3xl font-bold text-primary mr-2">{item.number}</div>
                                  <div>
                                      <div className="text-3xl font-bold text-gray-800">
                                          {item.title}
                                      </div>
                                      <p className="opacity-70 mt-1 max-w-[400px] text-lg">
                                          {item.description}
                                      </p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default HowWeWork;