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



2026-06-23



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

## Session Memory — Last Update: 2026-06-23

### Events Added to data/events.ts
- 11th LGBTQIA+ Celebration — Province of Batangas (Nov 5) — featured
- White Party Manila (Jun 27) — enhanced with performers Ben&Ben, Gloc-9, Maki, Marina Summers, 15 ambassadors, Mentorque Productions
- Free HIV Testing at Espasyo (Ongoing) — Wagayway Equality, Batangas City
- Project L.I.G.T.A.S. (Jul 15) — Community HIV & SOGIESC Outreach, Batangas
- EmpowerQueer Financial Literacy Training (Aug 22) — Batangas City
- VSO Voyage 2026 (Sep 12-13) — Volunteers' Academy, Batangas City
- Kopisodes Podcast (Jul 10) — Wagayway Equality bi-monthly podcast on YouTube

### PRIDEcast Moved from Events to Kopisodes
- 2 PRIDEcast episodes (Jun 12 & Jun 19) removed from data/events.ts (past dates get auto-pruned)
- Added to prisma/seed.ts KOPISODES array as entries order:7 and order:8
- Seed logic changed from createMany-only-on-empty to individual upsert-by-slug
- To deploy: run `npx prisma db seed` on production DB

### Homepage Changes (app/page.tsx)
- PRIDEcast Ep. 1 is the featured video (replaced old Facebook reel)
- PRIDEcast Ep. 1 & 2 shown as top 2 "Latest Episodes" in sidebar
- Both added to footer "Recent Posts" with direct slug links
- Stats updated from "10+" to "12+ Episodes"
- Badge changed from "Featured" to "PRIDEcast"

### Key Architecture Facts
- Events: hardcoded in data/events.ts, auto-pruned weekly by scripts/fetch-content.ts
- Kopisodes: stored in Prisma DB (Kopisode model), fetched at runtime
- Homepage Kopisodes section: hardcoded data (not from DB)
- Kopisodes page (app/kopisodes/page.tsx): fetches from Prisma
- Facebook videos blocked by automated requests — no direct scraping
- Wagayway Equality founder: Aivan Alvarez, operates at Espasyo, Batangas City

### Bulk Data Update — 2026-07-09
- **events.ts**: Added 4 new post-Pride events (Cebu LGBTQ+ Mass Wedding Aug 21, Samesex Dancesport Aug 23, QCinema Pride Film Festival Oct 7-16, Batangas Pride Month Closing Jun 30)
- **trainings.ts**: Added 4 new trainings (Masbate City Livelihood Training, Rainbow Rights Paralegal Training, Queer Safe Spaces SOGIESC Training, LRTA Inclusivity Training, PQSC Workshop Track)
- **resources.ts**: Added 3 new resources (SCOT Ruling on Same-Sex Property Co-Ownership, Tawag Paglaum Helpline, HOPELINE Crisis Hotline)
- **opportunities.ts**: Added 5 new opportunities (Sherri Eisenpress Scholarship, PCAFPD Scholarship, Point Foundation Flagship, Jonathan Lax Scholarship, UNDP PH Program Officer)
- **directory.ts**: Added 6 new listings (Youth Voices Count, Bisdak Pride Inc., LGBTQ 4th District Batangas, TransMan Pilipinas, Tawag Paglaum, HOPELINE)

### Bulk Data Update — 2026-07-13
- **events.ts**: Added 4 new events (Intensity Manila Circuit Oct 2-3, ICLAPM-26 Conference Oct 9-10, ICEPGI-26 Conference Nov 30-Dec 1, Dancesport venue updated to IBG-KAL Theater UP Diliman)
- **trainings.ts**: Added 4 new trainings (CAMP Pag-ayo HCT Certification, CAMP Pag-ayo SOGIESC Seminar-Lecture, CAMP Pag-ayo IPECS Training, Balangaw SOGIESC-Sensitive Healthcare Module)
- **directory.ts**: Added 3 new listings (CAMP Pag-ayo Inc., Bahaghari Soccsksargen, LGBTQIA-Silbi Batangas City Inc.)
- **opportunities.ts**: Added 5 new opportunities (Babaylanes Programs Officer, LoveYourself Compliance Specialist, LoveYourself Registered Nurse, ILGA World Giving Specialist, UPCWGS Research Grant)

