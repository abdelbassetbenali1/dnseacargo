import Image from "next/image";

export default function BigBanner() {
  return (
    <section className="bg-white py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden">
        <Image src="/hero.jpg" alt="Port Cranes" fill className="object-cover" />
      </div>
      </div>
    </section>
  );
}