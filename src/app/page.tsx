import dynamic from 'next/dynamic';

const Services = dynamic(() => import('../components/services/Services'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Services />
    </div>
  );
} 