# Exit Ticket

1. **Which part of this work is Continuous Integration?**  
   The GitHub Actions workflow is CI because every push and pull request automatically checks out the commit, installs dependencies, and runs the automated tests before the change is accepted.

2. **Does this work include Continuous Delivery or Continuous Deployment? Why?**  
   No. The workflow validates the code but does not package or deploy it to a staging or production environment, either with approval or automatically.

3. **What does a green pipeline prove, and what does it not prove?**  
   It proves that the commands and tests defined in the workflow passed for that commit. It does not prove that the application is free of every bug, secure, performant, or usable in production.

4. **Why intentionally create a red pipeline?**  
   The red run demonstrates that the test is meaningful and that the pipeline can stop an incorrect change. Keeping the failed run also provides evidence for diagnosing the expected and actual results.

5. **If tests pass but the real application does not work, what should be added?**  
   Add an integration or end-to-end smoke test that starts the HTTP server and makes a real request. A deployment health-check stage could then verify the application in a staging environment.
