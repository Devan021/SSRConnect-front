import ProjectCard from '@/components/ProjectCard';

const PROJECTS = [
  {
    name: 'Vidya',
    location: 'Madgon, Goa',
    cover: 'https://images.unsplash.com/photo-1577495508048-b635879837f1',
    description: 'Our mission was to bring about a small but effective and useful change in the lives of some young individuals of this world. We tried to impart whatever small bits of knowledge that we could',
    teamID: '17SSR155',
  },
  {
    name: 'We Believe they can fly ', 
    location: 'Chirpur, Madhya Predesh',
    cover: 'https://images.unsplash.com/photo-1577495508048-b635879837f1',
    description: 'SSR 17-156 The project we’ve undertaken has given us lots of memories to cherish and lots of info on the harsh realities on the society. A lot of work needs to be done by man',
    teamID: '17SSR156',
  },
  {
    name: 'Amritamgamaya',
    location: 'Mankayam, Kerala',
    cover: 'https://images.unsplash.com/photo-1577495508048-b635879837f1',
    description: 'MISSION: seeking to their needs and general wellbeing foster good relationship between the orphans and society restore hope to the hopeless among children provide opportunity to expose their skills',
    teamID: '17SSR153',
  },
  {
    name: 'Amritamgamaya',
    location: 'Mankayam, Kerala',
    cover: 'https://images.unsplash.com/photo-1577495508048-b635879837f1',
    description: 'MISSION: seeking to their needs and general wellbeing foster good relationship between the orphans and society restore hope to the hopeless among children provide opportunity to expose their skills',
    teamID: '17SSR153',
  },
  {
    name: 'Amritamgamaya',
    location: 'Mankayam, Kerala',
    cover: 'https://images.unsplash.com/photo-1577495508048-b635879837f1',
    description: 'MISSION: seeking to their needs and general wellbeing foster good relationship between the orphans and society restore hope to the hopeless among children provide opportunity to expose their skills',
    teamID: '17SSR153',
  },
  {
    name: 'Amritamgamaya',
    location: 'Mankayam, Kerala',
    cover: 'https://images.unsplash.com/photo-1577495508048-b635879837f1',
    description: 'MISSION: seeking to their needs and general wellbeing foster good relationship between the orphans and society restore hope to the hopeless among children provide opportunity to expose their skills',
    teamID: '17SSR153',
  },
];

const ProjectsPage = () => {
    
  // const handleSearch = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(e.target);
  // };
    
  return (
      <div className="flex flex-col h-screen">
          <div className="h-64 bg-primary/20 w-full p-8">
              <div className="mx-auto container flex items-center h-full justify-between">
                  <div className="text-6xl font-bold text-primary/30">Projects</div>
                  <form className="min-w-[300px]">
                      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                      <div className="relative">
                          <input type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-primary" placeholder="Search" required />
                          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                          </button>
                      </div>
                  </form>
              </div>
          </div>
          <div className="mx-auto container py-8 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {PROJECTS.map(p => (
                  <ProjectCard key={p.teamID} project={p} />
              ))}
          </div>
      </div>
  );
};

export default ProjectsPage;