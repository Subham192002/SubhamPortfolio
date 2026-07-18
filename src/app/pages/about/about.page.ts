import { Component, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'about',
  standalone: true,
  imports: [NgFor],
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="max-w-screen-lg mx-auto">

      <div class="mb-12">
        <h1
          class="text-primary mb-3 mt-2  text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
          Work Experience
        </h1>

        <p class="text-gray-400 max-w-3xl leading-8  ">
          A journey from Associate Software Developer to Software Engineer,
          delivering enterprise banking, HRMS and API Management solutions
          using Java, Spring Boot, Microservices and Angular.
        </p>
      </div>

      <div class="flex flex-col gap-12">

        @for(exp of experiences; track $index; let isLast = $last){

        <div class="relative pl-8">

          <div
            class="absolute left-0 top-1 w-4 h-4 rounded-full border-4 border-primary-500 bg-slate-950">
          </div>

          @if(!isLast){
          <div
            class="absolute left-[7px] top-5 w-[2px] h-[calc(100%+3rem)] bg-primary-500">
          </div>
          }

          <div class="flex flex-col gap-3">

            <p class="text-primary-600 dark:text-primary-400 text-base font-bold">
              {{exp.duration}}
            </p>

            <p class="text-gray-500 text-sm">
              {{exp.period}}
            </p>

            <h2 class="text-2xl font-bold dark:text-white">
              {{exp.role}}
            </h2>

            <p class="text-primary-600 dark:text-primary-400 text-lg">
              {{exp.company}}
            </p>

            <div class="flex flex-col gap-3 mt-2">

              @for(item of exp.responsibilities; track $index){
              <p class="dark:text-gray-300 text-gray-700">
                → {{item}}
              </p>
              }

            </div>

            <div class="mt-3">
              <span
                class="inline-flex items-center px-3 py-2 rounded-md border border-amber-500/40 bg-amber-500/10 text-amber-400 text-sm font-medium">
                {{exp.badge}}
              </span>
            </div>

            <div class="flex flex-wrap gap-2 mt-3">

              @for(tech of exp.technologies; track $index){
        <span
          class="px-3 py-1 rounded-lg
          border border-gray-300 dark:border-gray-700
          bg-white dark:bg-gray-900/30
          text-primary-700 dark:text-primary-300
          text-sm font-medium
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:scale-105
          hover:border-brand-primary
          hover:text-brand-primary
          hover:bg-brand-primary/10">
            {{tech}}
        </span>
              }

            </div>

          </div>

        </div>

        }

      </div>

      <!-- Education -->

<div class="mt-20 mb-12">
  <h2 class="text-primary mb-3 text-3xl font-semibold tracking-tight dark:text-white">
    Education
  </h2>

  <p class="text-gray-400 max-w-3xl leading-8">
    My academic journey that built the foundation for my software engineering career.
  </p>
</div>

<div class="flex flex-col gap-12">

  @for(edu of education; track $index; let isLast = $last){

  <div class="relative pl-8">

    <div
      class="absolute left-0 top-1 w-4 h-4 rounded-full border-4 border-primary-500 bg-slate-950">
    </div>

    @if(!isLast){
    <div
      class="absolute left-[7px] top-5 w-[2px] h-[calc(100%+3rem)] bg-primary-500">
    </div>
    }

    <div class="flex flex-col gap-3">

      <p class="text-primary-600 dark:text-primary-400 text-base font-bold">
        {{edu.duration}}
      </p>

      <h2 class="text-2xl font-bold dark:text-white">
        {{edu.degree}}
      </h2>

      <p class="text-primary-600 dark:text-primary-400 text-lg">
        {{edu.college}}
      </p>

      
      <div class="mt-3">
              <span
                class="inline-flex items-center px-3 py-2 rounded-md border border-amber-500/40 bg-amber-500/10 text-amber-400 text-sm font-medium">
                {{edu.specialization}}
              </span>
  
</div>

      <p class="text-gray-500">
        {{edu.description}}
      </p>

      <div class="mt-3">
  <div
    class="inline-flex items-center justify-between gap-10 min-w-[520px]
           px-4 py-3 rounded-lg
           border border-emerald-500/40
           bg-emerald-500/10
           text-emerald-400">

    <span class="font-semibold">{{edu.cgpa}}</span>

  </div>
</div>

    </div>

  </div>

  }

</div>

    </section>
  `
})
export class AboutPage {

  experiences = [
    {
      duration: 'Jan 2025 → Present',
      period: 'Current',
      role: 'Software Engineer I',
      company: 'Interland Technology Services Pvt. Ltd.',
      badge: '🚀 Working on Escrow & Payzo HR Management Systems',
      responsibilities: [
        'Developing and maintaining Spring Boot Microservices and REST APIs.',
        'Leading development of Escrow Management System for banking clients.',
        'Building HRMS and Payroll modules for Payzo HR.',
        'Designing API Management solutions for secure service integration.',
        'Implementing Kafka-based event-driven workflows and asynchronous processing.',
        'Working with Oracle and PostgreSQL databases.',
        'Developing Angular applications and reusable UI components.',
        'Performing code quality analysis using SonarQube.',
        'Writing JUnit and Mockito test cases for backend services.',
        'Participating in production deployments and issue resolution.'
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Microservices',
        'Kafka',
        'Angular',
        'Oracle',
        'PostgreSQL',
        'Docker',
        'JUnit',
        'SonarQube'
      ]
    },
    {
      duration: 'Jul 2024 → Dec 2024',
      period: '6 Months',
      role: 'Associate Software Developer',
      company: 'Interland Technology Services Pvt. Ltd.',
      badge: '🏆 Top Performer — Post Training Evaluation',
      responsibilities: [
        'Contributed to development of enterprise banking and escrow modules.',
        'Developed REST APIs using Spring Boot, Hibernate and JPA.',
        'Implemented Angular screens and reusable frontend components.',
        'Worked extensively with Oracle Database, JPQL and Specifications.',
        'Integrated backend services with frontend applications.',
        'Participated in requirement analysis, development and testing.',
        'Resolved production defects and optimized application performance.',
        'Collaborated closely with senior developers and business teams.'
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Angular',
        'Oracle',
        'Hibernate',
        'JPA',
        'Swagger',
        'Git'
      ]
    }
  ];

  education = [
  {
    duration: '2020 → 2024',
    degree: 'Bachelor of Technology (B.Tech)',
    college: 'Biju Patnaik University of Technology (BPUT)',
    description:
      'Graduated in Computer Science & Engineering with a strong foundation in Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks and Software Engineering.',
      specialization: '🎓 Computer Science & Engineering',
      cgpa: 'CGPA: 9.0 / 10.0'
  }
];

}