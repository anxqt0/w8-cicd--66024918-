# Week 8 CI/CD Lab

This repository contains a small Node.js HTTP application used to demonstrate a Continuous Integration pipeline with GitHub Actions.

## Run locally

```bash
npm install
npm test
npm start
```

Open <http://localhost:3000> after starting the application.

## CI/CD Evidence

- [First green workflow run](https://github.com/anxqt0/w8-cicd-anxqt0/actions/runs/35253357220)
- [Intentional failed workflow run](https://github.com/anxqt0/w8-cicd-anxqt0/actions/runs/35253450874)
- [Recovery green workflow run](https://github.com/anxqt0/w8-cicd-anxqt0/actions/runs/35253584024)
- [Pull request with passing status check](https://github.com/anxqt0/w8-cicd-anxqt0/pull/1)
- [Successful workflow after merge](https://github.com/anxqt0/w8-cicd-anxqt0/actions/runs/35253873011)

## Self-study Extension

I selected the test-coverage extension and added two cases. The Thai-name test checks that the application preserves Unicode input correctly, reducing the risk of broken greetings for international users. The explicit empty-name test records the current boundary behavior so that a future change cannot alter it accidentally without a visible test failure.

## Lab Reflection

Before this lab, I understood CI/CD mainly as a way to deploy software automatically. After building the workflow and observing it change from green to red and back to green, I learned that Continuous Integration is primarily a repeatable quality gate. Every push or pull request starts a clean runner, checks out the exact commit, installs dependencies from the lock file, and runs the same tests. A green result confirms that the defined automated checks passed, but it does not guarantee that the application works in production or that every possible defect has been found.

The most time-consuming step was observing the workflow runs and examining the failed job. The intentional failure was caused by changing the expected greeting while leaving the application output unchanged. I located the cause by opening the first red step, `Run automated tests`, and comparing the expected and actual values in the assertion error. After restoring the correct expected value, a new commit produced a successful recovery run. The pull request also showed why CI is useful before merging: the status check gave visible evidence that the updated application and tests agreed. Next, I would add an integration smoke test that starts the HTTP server and verifies the real response, followed by a security dependency check.

Exit Ticket answers are available in [`EXIT_TICKET.md`](EXIT_TICKET.md).
