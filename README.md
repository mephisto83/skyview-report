# skyview-report

[SkyView Mind map report](https://mephisto83.github.io/skyview-report/)


# skyview-propsal

## Current Status

There is no current implementation of the desired features. The current state of the mind map is at about 15% completion.

## Target Status

The target goal is to reach an Minimum Viable Product("MVP") product. The MVP would be able to connect wealth managers, banks, end users and a 3rd party banking platform. The banking services would be available to interested parties. Also, wealth managers will be able to customize the theme of the application for their "customers". This goal would be reached at the completion of Phase 3.

## Overview
The purpose of this document is to describe a high level view of the requirements for the project management and execution of a new sky view app. At the time of this writing, there are 4 phases. These phases encapsulate the boundaries of the project. At each phase, the boundaries illustrate "safe" places where exiting is optional. So when moving from one phase to the next, a decision to continue the process can be made with an understanding that work can pause or discontinue. 


 ![Timeline](timeline.png)

- Phase 0(Preliminaray work to specify features to be built in Phase 2)
    - 4 weeks
- Phase 1
    - 4 weeks
- Phase 2
    - 52 weeks
- Phase 3
    - 52 weeks

Phase 2 and 3 can be run simultaneously. The estimates are rough at best for Phase 2 and 3, but the estimates are calculated by the number of people hours. So, if there are 2 developers for 52 weeks of work, the work would be completed in 26 weeks. As the number of people working on a phase increases there is a diminishing return on each person contributing to the work. It is not possible at this point to say the perfect optimal number for a team, but 6 is generally a good place to start.

## Phases

-   Phase 0 ($40,000.00 USD)
    - Mind map 
        - Benefits:
            - You get a document specifying your applications features.
                - What does the mind map tell me?
                    -   The mind map provides a specification of
                            - Permissions
                                - Specifies the requirements imposed on the agent for executing the action.
                            - Validations
                                - The checks done to the require items to perform the action.
                            - Executions
                                - The steps to perform the feature's action.
        - Creating a specification of the requirements of the site/service backend.
            - [skyview-report](https://mephisto83.github.io/skyview-report/)
                - This is the output of Phase 0.
            - This will describe the basic functionality of the system management processes and features.
                -   Wealth Managers
                    - Specifying what models inside the system can be read/manipulated by users with this type of agent.
                -   Banking Client
                    - Specifying what models inside the system can be read/manipulated by users with this type of agent.
                -   End User Customers
                    - Specifying what models inside the system can be read/manipulated by users with this type of agent.
                -   Sky View Users
                    - Specifying what models inside the system can be read/manipulated by users with this type of agent.
        - This phase doesn't include specifying the exact 3rd party services that will be attached to the system.
            - Services aren't specified exactly, because the banking platform is unknown and/or the banking platform's features are not known.
        - Changes to the specification are possible through Phase 0 and Phase 1. Once Phase 2 is reached a new specification will need to be made for unspecified features, e.g. features relying on 3rd party integrations.
-   Phase 1 (estimated: $500,000.00 USD)
    -  Definitionss
        - User Interface("UI")
        - User Interactions("UX")
    - Basic UI/UX
        - UI/UX will be functional, but it will not be tuned with end-user ergonomics. UI/UX optimizations come in Phase 2. 
        - UI Interfaces that will exist upon Phase 1 completion.
            - Web Application
                - All evergreen browsers.
                    - Chrome
                    - Firefox
                    - Edge
            - Deskop Application
                - Mac
                - Windows 10+
            - Native Mobile Application
                - Android
                - IOS
    - Documentation of Application Programming Interface("API")
        - [Swagger](https://swagger.io/)
            - TLDR; There will be a webpage that shows the application's web interface in a developer friendly format.
-   Phase 2 (unknown)
    - Required roles
        - Chief Technical Officer
        - Architect
        - Senior Software Engineer
        - Software Engineer (2x)
        - Product Manager/Owner
        - UX designer
        - UI designer
    -   UX design
        - UX design would describe how users in the system will be able to navigate and operate the system.
            - Designs will guide end users in to "pits of success".
                - This requires user testing/interviewing
    -   UI Design
        - This is the implementation and design of visual components that users will interact with in the different UIs.
            - UI
                - Native Mobile Application
                - Desktop Application
                - Web Application
    -   Banking Platform integration
        - A banking platform would be integrated into the system. The platform's available services would dictate the types of transactions/services that would be available for implementation for each Banking Client.
            - Before this phase can begin there needs to be a list of desired features that can exercised in the 3rd party banking platform.
-   Phase 3 (unknown)
    - This phase is geared towards getting the MVP to the public.
    - Required Roles
        - Chief Technical Officer
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
            - Building a system to deliver timely updates/bug fixes to a live environment isn't possible without CI/CD.
    - Performance Testing
        - Measuring the performance of the system. In order to measure any regressions in the performance of the system, so that regressions can be addressed by the development team.
    - Integration Testing
        - Creating and running tests for testing the system as it relates to 3rd party resources and services. 
    - Environmental Logging
        - Logging data related to the enviroments in which the systems are running. Keeping track of errors, transient or otherwise, and triaging issues to be handled by the development team.

## Next Steps

If this is generally agreeable, a terms sheet will be drawn up for your consideration. Then a proper contract for the prescribed services.
