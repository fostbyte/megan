import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Template from "./template/Prospectus";
import content from "./content.json";
import template from "./template.json";
import type { StandardContent, TemplateDefinition } from "./template/types";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Template content={content as StandardContent} template={template as TemplateDefinition} />
  </StrictMode>,
);
