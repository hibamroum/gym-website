import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./benefit";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

//An array with benefitType of Object
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of Art Facilities",
    description:
      "Neque adipiscing amet amet enim feugiat dolor enim fermentum in a in lectus pellentesque ullamcorper et",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Hundreds of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est Eget ac turpis id",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Neque adipiscing amet amet enim feugiat dolor enim fermentum in a in lectus pellentesque ullamcorper et",
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full  w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/*HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>
        {/*BENEFITS */}
        {/*PARENT COMPONENT OF BENEFITS */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
