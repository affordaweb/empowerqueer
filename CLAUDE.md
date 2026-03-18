Site Facts Requirement



Before performing any content, SEO, or design changes:



/\* READ\_SITE\_FACTS \*/



Agents must read SITE\_FACTS.md.



SITE\_FACTS.md contains the authoritative information for:



• business context

• services

• content voice

• design philosophy

• brand messaging



Agents must not invent or override information defined there.



Repository Management



All repositories must be created under the AffordaWeb GitHub organization.



Personal accounts must never be used.



/\* GITHUB\_RULES \*/



Allowed

AffordaWeb organization repositories



Not allowed

Personal repositories



This ensures all projects remain within the managed infrastructure.



Date Reference

/\* CURRENT\_DATE \*/



Today's date is:



\[YYYY-MM-DD]



Agents should use the current date for logs, documentation updates, and project records.



Project README Requirements



Project-specific README files must follow a consistent structure.



/\* README\_RULES \*/



Every README must start with:



The technology stack



Any mandatory operational information



Examples



• framework

• language

• hosting provider

• Vercel dev URL

• production domain



README files should remain concise and practical.



Avoid unnecessary explanations.



Documentation Style



The project owner prefers documentation that is:



• accurate

• current

• succinct



README files must remain up to date with the current project configuration.



Avoid command snippets unless absolutely required.



Do not wrap instructions in backticks.



Autonomous Agent Requirements



Projects using autonomous agents must include an agents directory.



/\* AGENT\_DIRECTORY\_RULE \*/



Required structure



/agents/



Inside the agents directory there must be a root README.md.



This file should contain copy-and-paste commands to run the agents.



Example execution command



WORK=\~/affordaweb/CLIENT-NAME/agents/design-agent MODEL="sonnet" MAX\_LOOPS=5 bash \~/affordaweb/ENGINE/run.sh



Rules



• Keep instructions short

• Do not describe how the agents work

• Do not list all parameters or model options

• Only provide runnable commands



Browser Automation Rules



When using Playwright or other browser automation tools:



/\* BROWSER\_AUTOMATION\_RULES \*/



Always run browsers in headless mode.



This prevents automation tools from interrupting the user’s workspace.



Agents must avoid launching visible browser windows unless debugging is required.



Universal Agent Guardrails



All agents operating within the project must follow these safety constraints.



/\* UNIVERSAL\_AGENT\_GUARDRAILS \*/

Respect Project Facts



Agents must treat SITE\_FACTS.md as the authoritative source.



Never invent business details.



Preserve Site Structure



Agents must not:



• restructure navigation

• remove core sections

• modify architecture



Structural changes require human approval.



Maintain Performance



Agents must avoid changes that significantly reduce:



• page speed

• Core Web Vitals

• layout stability



Protect SEO Foundations



Agents must not remove or damage:



• page titles

• canonical URLs

• schema markup

• sitemap entries



unless replacing them with improved versions.



Follow Design Constraints



Visual changes must respect the design philosophy defined in SITE\_FACTS.md.



Agents must reject changes that conflict with the defined aesthetic.



Single Improvement Rule



Each agent should perform one improvement per run.



This prevents large, risky automated changes.



Purpose of This Document



These rules exist to ensure that:



• autonomous agents behave predictably

• repositories remain organized

• documentation stays consistent

• automation does not disrupt the user



The rules help maintain stable, high-quality AffordaWeb projects.



/\* END\_PROJECT\_RULES \*/

