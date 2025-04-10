'use client';

import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';

export default function ServicePage() {
  const params = useParams();
  const serviceId = params.serviceId;

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-8">
            Service: {serviceId}
          </h1>
          <p className="text-lg mb-6">
            This is a placeholder for the {serviceId} service page.
          </p>
        </div>
      </main>
    </>
  );
} 