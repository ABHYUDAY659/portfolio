import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-10">
      
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-6xl font-bold text-mint">Abhyuday Sharma</h1>
        <p className="text-4xl mt-2 text-gray-300">Software Engineer</p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://github.com/ABHYUDAY659"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mint underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhyuday-sharma-713509314"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mint underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About Me */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-mint mb-2">About Me</h2>
        <p className="text-gray-300">
          I'm a full-stack developer from Delhi who loves building scalable products, real-time systems, and DevOps pipelines. Passionate about tech, startups, and trading logic.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          📍Delhi | 📧 sharmaabhyuday56@gmail.com | 📞 9289094471
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-mint mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-300">
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>React</div>
          <div>Next.js</div>
          <div>Tailwind CSS</div>
          <div>Node.js</div>
          <div>Express.js</div>
          <div>WebSockets</div>
          <div>MongoDB</div>
          <div>PostgreSQL</div>
          <div>SQL</div>
          <div>Docker</div>
          <div>CI/CD</div>
          <div>VMs</div>
          <div>Scaling & Autoscaling</div>
          <div>AWS ECS & ECR</div>
          <div>Monorepo Deployment</div>
          <div>Reverse Proxies</div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-mint mb-4">Projects</h2>

        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-lg font-bold text-mint">Brainly</h3>
            <p className="text-gray-300 text-sm">
              Productivity dashboard with tweets, YouTube, and notes. Built with React, TypeScript, JWT, and MongoDB.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-lg font-bold text-mint">Paytm Clone</h3>
            <p className="text-gray-300 text-sm">
              Wallet app with login, balance, and transactions using Node.js, JWT, and MongoDB.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-lg font-bold text-mint">Course Selling</h3>
            <p className="text-gray-300 text-sm">
              Backend app for role-based course sales with protected routes using Express and JWT.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-lg font-bold text-mint">ChatApp</h3>
            <p className="text-gray-300 text-sm">
              Real-time messaging app using WebSockets, MongoDB, and JWT-secured sockets.
            </p>
          </div>
        </div>
      </section>

      {/* DevOps Journey */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-mint mb-4">DevOps Journey</h2>
        <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
          <li>Intro to DevOps & VMs</li>
          <li>Reverse Proxies & Process Management</li>
          <li>CI/CD pipelines and Certificate Management</li>
          <li>Docker, Docker Compose, and Monorepo Deployments</li>
          <li>Vertical/Horizontal Scaling & Autoscaling Groups (ASG)</li>
          <li>AWS ECS, ECR, and Container Orchestration</li>
          <li>Deploying Frontends on AWS</li>
          <li>Solana Alpha Session (Birthday Special)</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 Abhyuday Sharma
      </footer>
    </div>
  );
}

export default App;
