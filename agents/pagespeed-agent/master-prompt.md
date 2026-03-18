Use the Google PageSpeed Insights API for reliable JSON output.



/\* RUN\_PAGESPEED\_ANALYSIS \*/



Run:



curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=SITE\_URL\&strategy=mobile\&category=performance" | jq '{score: .lighthouseResult.categories.performance.score, audits: \[.lighthouseResult.audits | to\_entries\[] | select(.value.score != null and .value.score < 0.9 and .value.details != null) | {id: .key, title: .value.title, score: .value.score, description: .value.description}] | sort\_by(.score) | .\[0:5]}'



Replace SITE\_URL with the dev deployment URL.



This returns:



performance score



failing audits



severity ranking



Performance Priority



Focus on the issues with the largest real impact.



/\* PERFORMANCE\_PRIORITY \*/



Highest priority areas:



Largest Contentful Paint



Cumulative Layout Shift



Total Blocking Time



JavaScript execution cost



Image loading performance



Avoid spending time on low impact diagnostics.



Common Fix Types



The agent may implement improvements such as:



Image optimization

Compress large images

Convert images to WebP or AVIF

Define width and height



Font optimization

Reduce font files

Preload critical fonts

Remove unused weights



JavaScript reduction

Remove unused scripts

Lazy load components

Split bundles



Render blocking reduction

Defer non critical scripts

Inline critical CSS



Layout stability improvements

Reserve image space

Prevent layout shifts



Implementation Process

/\* IMPLEMENT\_PAGESPEED\_FIX \*/



Follow this process:



Determine the dev URL



Run the PageSpeed analysis



Record the current performance score



Identify the highest impact failing audit



Implement a fix in the codebase



Commit and push



Fix one issue per run.



Deployment Wait



After pushing:



/\* WAIT\_FOR\_DEPLOY \*/



Wait 90 seconds for deployment to complete.



Verification

/\* VERIFY\_PAGESPEED \*/



Run the PageSpeed analysis again.



Compare the new score with the previous score.



Score Evaluation

/\* EVALUATE\_RESULT \*/



If the score improved

Keep the change.



If the score decreased

Revert the change and try a different fix.



Logging



Write results to:



output/agent-log.md



Record:



previous score



new score



audit fixed



change implemented



Example log entry:



PageSpeed Optimization



Before: 76

After: 89



Fix applied

Converted hero image to WebP and reduced size.



Audit resolved

Largest Contentful Paint



Design Protection Rule

/\* DESIGN\_PROTECTION \*/



Never remove visual elements that belong to the defined design system.



Do not remove:



hero sections



layout components



key illustrations



branded visuals



Optimize them instead.



For example, compress an image rather than removing it.



Self-Healing Performance Agent



The PageSpeed agent also functions as a self-healing performance system.



/\* SELF\_HEALING\_MODE \*/



When the site score drops compared to previous logs, the agent must automatically investigate and repair the regression.



Triggers for self-healing:



PageSpeed score drops by more than 5 points



Largest Contentful Paint increases significantly



Layout shift appears on previously stable pages



new JavaScript bundles increase blocking time



When triggered:



Compare the latest deployment with the previous stable version



Identify the change responsible for the regression



Apply corrective optimization



verify performance recovery with PageSpeed



If the issue cannot be optimized safely, revert the responsible change.



The goal of self-healing mode is to ensure performance never degrades over time.



Completion

/\* STOP\_PAGESPEED\_CYCLE \*/



After logging the results, stop the cycle.



If additional loops remain, the agent will start another optimization cycle.



Agent Objective



This system continuously improves performance while protecting design quality.



Each optimization cycle should move the site toward:



faster loading



stable layout



responsive interaction



PageSpeed score above 90



while maintaining the visual experience defined in SITE\_FACTS.md.

