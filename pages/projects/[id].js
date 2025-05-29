import { useRouter } from 'next/router';

const projectData = {
  portfolio: {
    title: 'My Portfolio',
    description: 'A cool personal website built with Next.js and Tailwind CSS.',
  },
  demo: {
    title: 'Interaction Demo',
    description: 'A fun UI animation using Framer Motion.',
  },
};

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;
  const project = projectData[id];

  if (!project) return <p className="p-8">Project not found.</p>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4">{project.description}</p>
    </main>
  );
}

