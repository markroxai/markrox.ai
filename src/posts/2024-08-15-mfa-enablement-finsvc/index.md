---
layout: post
title: Heterogeneous MFA Enablement in a Financial Services Client
subtitle: "Security is not a product, but a process. - Bruce Schneier"
comments:
date: 2024-08-15 21:00:00
author: Mark Roxberry
excerpt: Recently, I had the opportunity to deliver MFA solutions for a client across three distinct platforms. Each project presented unique challenges, but the ultimate goal was the same - to enhance the security of the client's data and applications.
tags: []
categories:
  - 05134426bcd175050b08193c02f14ccdafcca088
postimage:
  src: "post.png"
  alt: 
featured: true

---

## Introduction

In today's digital landscape, Multi-Factor Authentication (MFA) has become a critical requirement for ensuring the security of applications and safeguarding sensitive data. With increasing cyber threats, relying solely on passwords is no longer sufficient. MFA adds an additional layer of security by requiring users to verify their identity through multiple methods, such as receiving a code via email or SMS, before gaining access to an application.

Recently, I had the opportunity to deliver MFA solutions for a client across three distinct platforms: a borrower web platform, internal servicing applications and a Sql Server 2016 Reporting Services implementation. Each project presented unique challenges, but the ultimate goal was the same: to enhance the security of the client's data and applications.

## The Approach

### 1. Upgrading the Borrower Web Platform

&nbsp;
&nbsp;

```mermaid
%%{init: {"theme": "dark", "flowchart" : { "curve" : "basis" } } }%%
graph LR
    A[Borrower Web Platform Angular 17, .NET 8] -->|User Login| B(MFA Interstitial Page)
    B -->|Send Verification Code| C[User Email]
    C -->|Enter Code| D[Verify Code on Platform]
    D -->|Access Granted| E[Borrower Platform]
```
&nbsp;
&nbsp;

The first solution in the MFA enablement project was to add MFA to the borrower web platform, a combination of a web portal served to desktops and mobile devices and an API for integration. However, during the initial stages of implementation, I discovered that the platform was running on outdated Angular and C# WebAPI code, which posed significant security risks and performance limitations. This discovery prompted a full platform modernization, where I upgraded the application from Angular 7 to Angular 17 and migrated the C# WebAPI from .NET 4.5 to .NET 8.

This upgrade not only improved security and runtime performance but also enhanced developer efficiency and ensured continued support, as the older code had numerous deprecations. Following this modernization effort, I successfully integrated an MFA interstitial verification process, which sends a verification code to the borrower via email. The borrower must then enter this code on the platform, adding an essential layer of security to ensure that only authorized users can access sensitive information.

**Disclaimer**: Upgrading from Angular 7 to Angular 17 and from .NET Framework 4.5 to .NET 8 involves significant changes that go beyond simple version upgrades. Angular 17 introduces new features, breaking changes, and performance improvements that may require substantial refactoring of existing code. Similarly, migrating from .NET Framework 4.5 to .NET 8 involves transitioning from the .NET Framework to the .NET Core/Unified .NET platform, which may require reworking dependencies, APIs, and libraries. It’s crucial to thoroughly assess the impact of these upgrades on your application and consider a phased approach to minimize disruptions. Please consult the official documentation and consider seeking expert advice before undertaking such migrations.

### 2. Enhancing Internal Servicing Applications

&nbsp;
&nbsp;

```mermaid
%%{init: {"theme": "dark", "flowchart" : { "curve" : "basis" } } }%%
graph LR
    A[Internal Application VB.NET] -->|User Login| B(MFA Verification Page)
    B -->|Send Verification Code| C[User Email]
    C -->|Enter Code| D[Verify Code in Application]
    D -->|Access Granted| E[Internal Application Access]
```
&nbsp;
&nbsp;

The second project focused on adding MFA verification to an internal application used for servicing and contracts. This application was built on an older version of VB.NET, making the integration of modern MFA capabilities a challenge. However, by implementing a tailored MFA solution, I was able to enhance the security of the internal processes without disrupting the legacy system.

### 3. Custom Authentication and Authorization for Sql Server Reporting Services 2016

&nbsp;
&nbsp;

```mermaid
%%{init: {"theme": "dark", "flowchart" : { "curve" : "basis" } } }%%
graph LR
    A[SSRS 2016 Custom Forms Authentication using IAuthenticationExtension2] -->|User Login| B(MFA Interstitial Page)
    B -->|Send Verification Code| C[Servicer Email]
    C -->|Enter Code| D[Verify Code in SSRS]
    D -->|Access Granted| E[SSRS Reports Access]
```

&nbsp;
&nbsp;

The third project was particularly challenging, requiring the creation of a custom Authentication and Authorization extension for SQL Server Reporting Services (SSRS) 2016. The client needed to transition from NTLM authentication to Forms authentication, but due to the age of SSRS 2016 and its low support, this wasn’t a straightforward task.

I added project time to conduct extensive research, navigating through limited documentation and resources. Given the age of the platform, finding support was difficult. I reached out to Microsoft engineers, but most were specialized in Azure or Power BI and were not familiar with implementing custom authentication solutions for SSRS 2016.

Eventually, I came across a Microsoft GitHub project that provided skeleton code for implementing a custom authentication extension using IAuthenticationExtension2 and IAuthorizationExtension. Although the documentation was sparse and required a fair amount of interpretation, it served as a critical starting point. I worked through the code, making the necessary modifications and adjustments to fit the client’s specific needs. After several iterations and testing, I was able to develop an excellent solution that met the client’s requirements.

The solution involved creating an MFA interstitial page that emails a verification code to lenders. These lenders then enter the code on the interstitial page to access the reporting services, ensuring that only verified users can view sensitive reports. This added layer of security was a significant enhancement to the client’s existing setup.

For those interested in the technical details, the GitHub project that served as the foundation for this solution can be found [here](https://github.com/microsoft/Reporting-Services/tree/master/CustomSecuritySample2016). By leveraging this project and building upon it, I was able to deliver a robust and secure authentication mechanism for SSRS 2016, despite the challenges posed by the platform’s age and limited support.

**Disclaimer**: Implementing custom authentication and authorization for SQL Server Reporting Services (SSRS) 2016, particularly when transitioning from NTLM to Forms authentication, is a complex process. SSRS 2016 is an older platform with limited support, and customizing it to meet modern security standards requires careful planning and execution. The use of extensions like IAuthenticationExtension2 and IAuthorizationExtension involves deep technical knowledge and may require substantial modifications to the default setup. Additionally, working with legacy systems often involves navigating sparse documentation and potential compatibility issues.

## Platform Integration

### Added Integration for SSRS 2016 Authentication

In addition to the custom authentication and MFA solution for SSRS 2016, I also needed to integrate this system with other applications within the client's ecosystem. Specifically, the Borrower Web Platform and the Internal Servicer Application required the ability to generate reports from SSRS within their own environments. To facilitate this, I created a webhook that handled authentication requests from these applications.

The webhook was designed to create a `CookieCollection` and generate an authentication cookie for each application. This cookie would then be used to authenticate the application's requests to SSRS, allowing them to generate reports seamlessly.

To implement this solution, I set up a service account that bypassed MFA verification. This service account was used by a proxy service created for the Internal Servicer Application, which was unable to call the webhook directly due to its legacy architecture. The Borrower Web Platform, being more modern and built on Angular, could call the webhook directly without requiring a proxy.

This integration allowed both applications to securely access SSRS for report generation while maintaining a consistent authentication flow across the client's platforms.

**Disclaimer**: The use of service accounts to bypass Multi-Factor Authentication (MFA) for integration purposes should be carefully considered and implemented with strict security controls. Service accounts that are exempt from MFA can introduce potential security risks if not properly managed. It is essential to restrict access to these accounts, implement IP whitelisting, enforce strong password policies, and regularly audit usage to detect any unauthorized activity. Additionally, ensure that service accounts are used only when absolutely necessary and that their permissions are limited to the minimum required for the integration. Proper monitoring and logging should be in place to track and respond to any anomalies promptly.

### Sequence Diagram

&nbsp;
&nbsp;

```mermaid
%%{init: {"theme": "dark", "sequenceDiagram": { "actorMargin": 10, "actorFontSize": 14, "actorFontFamily": "Arial", "noteFontSize": 12, "noteFontFamily": "Arial", "messageFontSize": 14, "messageFontFamily": "Arial", "messageAlign": "center" } } }%%
sequenceDiagram
    participant A as Borrower Web Platform
    participant B as Webhook - SSRS 2016
    participant C as SSRS 2016
    participant D as Internal Servicer Application
    participant E as Proxy Service
    participant F as Borrower Web Platform
    participant G as Internal Servicer Application

    A->>B: Call Webhook
    B->>C: Generate Auth Cookie
    C->>F: Return Report
    D->>E: Call Proxy Service
    E->>B: Call Webhook
    B->>C: Generate Auth Cookie
    C->>G: Return Report
```

&nbsp;
&nbsp;

This diagram shows the flow from each application calling the SSRS webhook to generate the authentication cookie, allowing them to retrieve reports within their own platforms. The inclusion of the proxy service for the internal application highlights the solution's adaptability to different technologies within the client's environment.

## Future State

While these three projects have significantly improved security across different platforms, the next step is to consolidate MFA verification into a single platform. This platform will serve as a unified MFA service that can be utilized by every application across the enterprise. By centralizing the MFA process, we can streamline the user experience and simplify future integrations.

## Conclusion

By implementing MFA across these three platforms, I have added a significant measure of security to my client's data, applications, and platforms. As cyber threats continue to evolve, it's essential to stay ahead of potential vulnerabilities. MFA is a crucial component of a comprehensive security strategy, and its successful implementation demonstrates a commitment to protecting sensitive information.

## References

- [Microsoft Sql Server Reporting Services - Custom Security for 2016](https://github.com/microsoft/Reporting-Services/tree/master/CustomSecuritySample2016)

## Credits

### Quote

- "Security is not a product, but a process." — Bruce Schneier ([source](https://www.schneier.com/))
