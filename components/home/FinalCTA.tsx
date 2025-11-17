import Heading from "../shared/Heading";
import Text from "../shared/Text";
import Button from "../shared/Button";

const GeometricPattern = () => (
  <div className="absolute inset-0 w-full h-full opacity-5" style={{ zIndex: 0 }}>
    <svg width="100%" height="100%">
      <defs>
        <pattern id="pattern-squares" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <rect width="1" height="30" fill="white" />
          <rect width="30" height="1" fill="white" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-squares)" />
    </svg>
  </div>
);

const FinalCTA = () => {
  return (
    <section className="relative w-full bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)]">
      <div className="bg-[#7558FC] size-[200px] lg:size-[320px] blur-[150px] md:blur-[250px] absolute top-0 left-0 opacity-50 z-0"></div>
      <div className="bg-[#9CE015] size-[200px] lg:size-[320px] blur-[150px] md:blur-[250px] absolute bottom-0 right-0 opacity-50 z-0"></div>
      <GeometricPattern />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[400px] py-20 text-center">
        {/* Heading */}
        <Heading
          text="Ready to Transform Your Coding Experience?"
          variant="medium"
        />
        <Text className="mt-4 text-white">
          Join thousands of developers who&apos;ve already made the switch.
        </Text>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button> Code Clips Free </Button>
          <Button variant="outline" className="text-white"> Watch Demo </Button>
        </div>

        {/* Micro Copy */}
        <Text className="mt-6 text-base text-white">
          No credit card required • 14-day pro trial
        </Text>
      </div>
    </section>
  );
};

export default FinalCTA;
