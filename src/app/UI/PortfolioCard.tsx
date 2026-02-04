import Link from "next/link";

type PortfolioCardProps = {
  image: string;
  title: {
    primary: string;
    secondary: string;
  };
  description: string;
  tags?: string[];
  github?: string;
  demo?: string;
};

const PortfolioCard = ({
  image,
  title,
  description,
  tags,
  github,
  demo,
}: PortfolioCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl">
      {/* IMAGE */}
      <div className="relative h-[200px] sm:h-[230px] lg:h-[260px] overflow-hidden">
        <img
          src={image}
          alt={title.primary}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* ACTIONS */}
        <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 sm:gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {github && (
            <Link
              href={github}
              target="_blank"
              className="rounded-full bg-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-gray-900 transition hover:bg-yellow-400"
            >
              GitHub
            </Link>
          )}

          {demo && (
            <Link
              href={demo}
              target="_blank"
              className="rounded-full bg-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-gray-900 transition hover:bg-yellow-400"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
          {title.primary}
          <span className="text-gray-500"> {title.secondary}</span>
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        {tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
