import ContributionCard from "./ContributionCard"

const ContributionSection = () => {
  return (
    <section className="py-20 px-4 md:px-20 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            Ways you can get involved and shape the open source community
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Whether you code, design, write, or mentor, there’s a place for you in the open source community.
            Explore opportunities to contribute, grow your skills, and make meaningful impact.
        </p>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        <ContributionCard
          type="developer"
          title="Developer or Tester"
          description="Write and review code, fix bugs, add new features, and ensure projects run smoothly. Your contributions keep open-source projects alive and evolving."
        />

        <ContributionCard
          type="designer"
          title="UI/UX Designer"
          description="Create beautiful and user-friendly interfaces, design graphics, and improve the user experience for all community projects and gain a lot of experience."
        />

        <ContributionCard
          type="documentation"
          title="Documentation"
          description="Write clear guides, tutorials, and documentation or translate project materials so that everyone can understand and contribute easily and more efficiently."
        />

      </div>
    
    </section>
  )
}

export default ContributionSection