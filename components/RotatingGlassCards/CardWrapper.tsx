"use client";
import GlassCard from "@/components/RotatingGlassCards/GlassCard";

const CardWrapper = () => {
  return (
    <div className="cards-grid py-8 px-4 md:px-8">
        <div className="card-wrapper">
          <GlassCard
            image="/images/avatar_1.png"
            title="Navneet K"
            position="Senior UX Designer"
            contact="navneet@company.com"
            expertise={["Figma", "Adobe XD", "User Research", "Wireframing"]}
            socials={{
              linkedin: "#",
              github: "#",
              email: "#",
            }}
          />
        </div>
        <div className="card-wrapper">
          <GlassCard
            image="/images/avatar_2.png"
            title="Juma P"
            position="Lead Developer"
            contact="juma@company.com"
            expertise={["Node.js", "GraphQL", "MongoDB", "Docker"]}
            socials={{
              linkedin: "#",
              github: "#",
              email: "#",
            }}
          />
        </div>
        <div className="card-wrapper">
        <GlassCard
          image="/images/avatar_3.png"
          title="Alice C"
          position="Senior Frontend Developer"
          contact="alice@techcorp.com"
          expertise={["React", "TypeScript", "WebGL", "UX Optimization"]}
          socials={{
            linkedin: "#",
            github: "#",
            website: "#",
          }}
        />
        </div>
      </div>
  )
}

export default CardWrapper