import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'about',
  template: `
  <section class="flex flex-col max-w-screen-lg justify-between mx-auto gap-16 dark:text-gray-200 overflow-y-hidden">

    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">About Me</h1>

      <p class="justify-start">
        I'm Subham Mishra, a Java Backend Developer specializing in Spring Boot,
        Microservices, Oracle, PostgreSQL and Angular. I enjoy building scalable
        enterprise applications, designing REST APIs and solving complex business problems
        through clean and maintainable code. 🚀
      </p>

      <p *ngFor="let a of aboutDetails">
        <b class="dark:text-white text-black">{{a.title}}</b>
        <br />
        {{a.desc}}
      </p>
    </div>

    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">
        Professional Highlights
      </h1>

      <ul class="list-disc pl-5 space-y-2">
        <li>2+ Years of Professional Experience</li>
        <li>Spring Boot & Microservices Development</li>
        <li>Oracle & PostgreSQL Database Design</li>
        <li>Angular Frontend Development</li>
        <li>REST API Development & Integration</li>
        <li>Banking & Financial Domain Experience</li>
      </ul>
    </div>

    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">
        Contact Information
      </h1>

      @for(c of contactInfo; track $index){
      <p>
        <b class="dark:text-white text-black">{{c.title}}:</b>
        <br />
        <a [href]="c.link" class="hover:underline" target="_blank">
          {{c.desc}}
        </a>
      </p>
      }
    </div>

  </section>
`,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor],
  standalone: true
})
export class AboutPage {

  public aboutDetails = [
    {
      title: 'What I Do',
      desc: `I develop enterprise-grade backend applications using Java, Spring Boot and Microservices architecture. My experience includes designing REST APIs, database optimization, security implementation and building scalable solutions for banking and financial systems.`
    },
    {
      title: 'Current Expertise',
      desc: `My primary technology stack includes Java, Spring Boot, Microservices, Angular, Oracle, PostgreSQL and Docker. I focus on writing clean, maintainable and production-ready code following industry best practices.`
    },
    {
      title: 'Always Learning',
      desc: `Technology evolves rapidly and I continuously invest time learning modern backend architectures, cloud-native development, performance optimization and software design patterns to improve my engineering skills.`
    },
    {
      title: 'Beyond Work',
      desc: `Outside of development, I enjoy exploring new technologies, building personal projects, contributing to my portfolio, reading technical blogs and preparing for advanced software engineering opportunities.`
    },
    {
      title: 'Why I Code',
      desc: `I love transforming ideas into real-world applications that solve business problems. Software development gives me the opportunity to create scalable solutions, continuously learn and make a meaningful impact through technology.`
    }
  ];

  public contactInfo = [
    {
      title: 'Location',
      desc: 'Odisha, India',
      link: 'https://maps.google.com'
    },
    {
      title: 'Email',
      desc: 'subham19200212345@gmail.com',
      link: 'mailto:subham@gmail.com'
    },
    {
      title: 'GitHub',
      desc: 'github.com/subham192002',
      link: 'https://github.com/Subham192002'
    },
    {
      title: 'LinkedIn',
      desc: 'linkedin.com/in/subham-kumar-mishra',
      link: 'https://www.linkedin.com/in/subham-kumar-mishra-a194a2311/'
    }
  ];
}