import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function QNA() {
  return (
    <section className="w-[581px] mt-16 ">
      <Accordion className="!bg-transparent !shadow-none py-3">
        <AccordionSummary
          className="!bg-transparent font-Manrope font-semibold text-xl"
          expandIcon={<AddIcon className="text-[#000000]" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Do you offer freelancers?
        </AccordionSummary>
        <AccordionDetails className="text-[#617275] text-[15px] font-Manrope">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion className="!bg-transparent !shadow-none py-3">
        <AccordionSummary
          className="!bg-transparent font-Manrope font-semibold text-xl"
          expandIcon={<AddIcon className="text-[#000]" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          What’s the guarantee that I will be satisfied with the hired talent?
        </AccordionSummary>
        <AccordionDetails className="text-[#617275] text-[15px] font-Manrope">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion className="!bg-transparent !shadow-none py-3" defaultExpanded>
        <AccordionSummary
          className="!bg-transparentfont-Manrope font-semibold text-xl"
          expandIcon={<RemoveIcon className="text-[#000]" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className="w-full h-full bg-[#E8EEE7]">
            Can I hire multiple talents at once?
          </p>
        </AccordionSummary>
        <AccordionDetails className=" text-[#617275] text-[15px] font-Manrope">
          If unhappy with a project, communicate with the freelancer, allow for
          revisions, and refer to the agreement. Escalate to platform support if
          needed, considering mediation. Review policies, seek collaborative
          solutions for resolution.
        </AccordionDetails>
      </Accordion>

      <Accordion className="!bg-transparent !shadow-none py-3">
        <AccordionSummary
          className="!bg-transparent font-Manrope font-semibold text-xl"
          expandIcon={<AddIcon className="text-[#000]" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Why should I not go to an agency directly?
        </AccordionSummary>
        <AccordionDetails className="text-[#617275] text-[15px] font-Manrope">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion className="!bg-transparent !shadow-none py-3">
        <AccordionSummary
          className="!bg-transparent font-Manrope font-semibold text-xl"
          expandIcon={<AddIcon className="text-[#000]" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Who can help me pick a right skillset and duration for me?
        </AccordionSummary>
        <AccordionDetails className="text-[#617275] text-[15px] font-Manrope">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
