# skyview-report
SkyView Mind map report


[docs](index.html)


# skyview-propsal

## Overview
The purpose of this document is to describe a high level view of the requirements for the project management and execution of a new sky view app. At the time of this writing, there are 4 phases. These phases encapsulate the boundaries of the project. At each phase, the boundaries illustrates "safe" places where exiting is optional. So when moving from one phase to the next, a decision to continue the process can be made with an understanding that work can pause or discontinue. 


 ![Timeline](timeline.png)

- Phase 0
    - 4 weeks
- Phase 1
    - 4 weeks
- Phase 2
    - 52 weeks
- Phase 3
    - 52 weeks

## Phases

-   Phase 0 (20,000)
    - Mind map [skyview-report](https://mephisto83.github.io/skyview-report/)
        - Creating a specification of the requirements of the site/service backend.
            - This will describe the basic functionality of the system management processes and features.
                -   Wealth Managers/Retail Investors
                    - Specifying what models inside the system can be read/manipulated by users with this type of agent.
                -   Banking Client
                    - Specifying what models inside the system can be read/manipulated by users with this type of agent.
                -   End User Customers
                    - Specifying what models inside the system can be read/manipulated by users with this type of agent.
                -   Sky View Users
                    - Specifying what models inside the system can be read/manipulated by users with this type of agent.
        - The mind map provides a specification of
            - Permissions
                - Specifies the requirements imposed on the agent for executing the action.
            - Validations
                - The checks done to the require items to perform the action.
            - Executions
                - The steps to perform the feature's action.
        - This phase doesn't include specifying the exact services that will be attached to the system.
            - Services aren't specified exactly, because the banking platform is unknown and/or the banking platform's features are not known.
        - Changes to the specification are possible through Phase 0 and Phase 1. Once Phase 2 is reached a new specification will need to be made for unspecified features, e.g. features relying on 3rd integrations.
-   Phase 1 (estimated: 500,000)
    - Basic UI/UX
        - 
        - UI/UX will be functional, but it will not be tuned with end-user ergonomics. UI/UX optimizations come in Phase 2. 
        - UI Interfaces that will exist upon Phase 1 completion.
            - Web App
            - Deskop App
            - Native Mobile App
    - Documentation of APIs
        - [Swagger](https://swagger.io/)
-   Phase 2 (unknown)
    - Required roles
        - Architect
        - Senior Software Engineer
        - Software Engineer (2x)
        - Product Manager/Owner
        - UX designer
        - UI designer
    -   UX design
        - This is not the UI design.
        - UX design would describe how users in the system will be able to navigate and operate the system.
            - Designs will guide end users in to "pits of success".
                - This requires user testing/interviewing
    - UI Design
        - This is the implementation and design of visual components that users will interact with in the different UIs.
            - UI
                - Native Mobile App
                - Desktop App
                - Web App
    -   Banking Platform integration
        - A banking platform would be integrated into the system. The platform's available services would dictate the types of transactions/services that would be available for implementation for each Banking Client.
            - Before this phase can begin there needs to be a list of desired features that can exercised in the 3rd party banking platform.
-   Phase 3 (unknown)
    - This phase is geared towards getting the MVP to the public.
    - Required Roles
        - Dev Ops
            - Architect
            - Devops Engineer (2x)
        - Development Team(same team as in Phase 2)
            - Architect
            - Senior Software Engineer
            - Software Engineer (2x)
            - Product Manager/Owner
    - CI/CD
        - Continuous Integration/ Continuous Deployment [Wiki](https://en.wikipedia.org/wiki/CI/CD)
            - Building a system to deliver timely updates/bug fixes to a live environment isn't possible without CI/CD
    - Performance Testing
        - Measuring the performance of the system. In order to measure any regressions in the performance of the system, so that regressions can be addressed by the development team 
    - Integration Testing
        - Creating and running tests for testing the system as it relates to 3rd party resources and services. 
    - Environmental Logging
        - Logging data related to the enviroments in which the systems are running. Keeping track of errors, transient or otherwise, and triaging issues to be handled by the development team.