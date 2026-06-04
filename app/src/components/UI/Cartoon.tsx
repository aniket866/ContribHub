import Image from "next/image";

export default function CartoonShowcase() {
  const cards = [
    {
      img: "/think.png",
      title: "Discover",
      desc: "Explore hundreds of open source programs.",
    },
    {
      img: "/find.png",
      title: "Contribute",
      desc: "Find beginner-friendly opportunities.",
    },
    {
      img: "/contribute.png",
      title: "Grow",
      desc: "Build experience and connect with mentors.",
    },
    {
      img: "/recognised.png",
      title: "Grow",
      desc: "Build experience and connect with mentors.",
    },
  ];

  return (
<section className="mx-auto max-w-7xl px-6 py-0">
  <div className="grid grid-cols-2 md:grid-cols-4">
    {cards.map((card) => (
      <div
        key={card.title}
        className="group flex flex-col items-center"
      >
        <div className="relative h-50 w-50 md:h-58 md:w-58">
          <Image
            src={card.img}
            alt={card.title}
            fill
            className="object-contain transition duration-300 group-hover:-translate-y-1"
          />
        </div>

        <span className="mt-2 text-sm text-zinc-500">
          {card.title}
        </span>
      </div>
    ))}
  </div>
</section>
  );
}