import { FiUsers } from "react-icons/fi";
import AnimatedEditorMockup from "./AnimatedEditorMockup";
import Badge from "../shared/Badge";
import Heading from "../shared/Heading";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { BiExpandHorizontal } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="relative w-full h-auto flex items-center bg-white pt-[70px] md:pt-[98px]">
      <div className="max-w-7xl mx-auto px-5 py-[50px] w-full z-10">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-16 items-center">

          {/* Left Side: Content */}
          <div className="text-center lg:text-left col-span-3">
            <Badge className="mx-auto lg:mx-0 lg:mr-auto">
              <FiUsers />
              Trusted by 50K+ developers
            </Badge>
            <Heading className="text-black">
              CODE FASTER. DEBUG SMARTER. BUILD BETTER.
            </Heading>
            <Text>
              The intelligent code editor that thinks like you do. Lightning-fast performance meets AI-powered development.
            </Text>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button>
                <BiExpandHorizontal className="mr-2 w-4 h-4" />
                Free sinnepts
              </Button>
              <Button variant="outline">
                <AiOutlinePlayCircle className="mr-2 w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            <Text className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500">
              <span>✓ 2-second startup</span>
              <span>✓ AI autocomplete</span>
              <span>✓ Cross-platform</span>
            </Text>
          </div>

          {/* Right Side: Animated Mockup with Floating Elements */}
          
          <div className="relative hidden lg:flex items-center justify-center col-span-2">
            <AnimatedEditorMockup />
          </div>

        </div>
      </div>
      <div className="bg-[#7558FC] size-[200px] lg:size-[320px] blur-[200px] md:blur-[300px] z-[1] absolute top-0 md:top-[100px] left-[0]"></div>
      <div className="bg-[#9CE015] size-[200px] lg:size-[320px] blur-[200px] md:blur-[300px] z-[1] absolute top-[330px] md:top-auto md:bottom-[100px] right-0"></div>
    </section>
  );
};

export default Hero;
