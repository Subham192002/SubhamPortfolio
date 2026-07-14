import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'logo',
  imports: [RouterLink],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
  <a routerLink="/" aria-label="Brand">
     <svg
    class="w-8 h-8"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">

    <circle cx="12" cy="12" r="11"
            class="fill-slate-900 dark:fill-white"/>

    <text x="12"
          y="15"
          text-anchor="middle"
          font-size="7"
          font-weight="800"
          font-family="Arial, sans-serif"
          class="fill-sky-400 dark:fill-slate-900">
      SM
    </text>

  </svg>

  </a>
`
})
export class Logo {}
