import React from "react";

const Card = ({ username, description }) => {
  return (
    <div>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://occ-0-114-851.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTCD-4_lQD8RL0MkHvb-aNZQKHLaYGuX3WZGZ5Zte1v3_17DxRt5EAy1-cU5KZ5xJwEXqPjSS2kKRkjVCIeSGL4olm7WuKLFrJvr1DjyJ6rc.png?r=2e0"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>{username}</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
