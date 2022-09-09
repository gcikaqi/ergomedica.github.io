// import { Component, OnInit } from '@angular/core';
// import { SwitchThemeService } from '@shared/services';
//
// // const switchToggle = document.querySelector('#switch-toggle');
// const darkIcon = `
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
// </svg>`;
// const lightIcon = `
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
// </svg>`;
// const moonIcon = `
// <svg viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg"
// >mai
//   <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
//     <g fill="#000000" id="Dribbble-Light-Preview" transform="translate(-220.000000, -7719.000000)">
//       <g id="icons" transform="translate(56.000000, 160.000000)">
//         <path
//           d="M173.99029,7576.998 C171.388688,7576.998 169.058358,7575.74775 167.591892,7573.8028 C174.222522,7575.15916 180.17047,7569.27528 178.803103,7562.59159 C180.748048,7564.05806 181.998298,7566.38839 181.998298,7568.98999 C181.998298,7573.40541 178.405705,7576.998 173.99029,7576.998 M174.610911,7559 C176.076376,7560.36937 176.993293,7562.32032 176.993293,7564.48549 C176.993293,7571.32432 168.608909,7574.54254 164.0003,7569.60961 C164.32062,7574.84985 168.66997,7579 173.99029,7579 C179.518819,7579 184.0003,7574.51852 184.0003,7568.98999 C184.0003,7563.66967 179.85015,7559.32032 174.610911,7559"
//           id="moon-[#114]"></path>
//       </g>
//     </g>
//   </g>
// </svg>
//
// `;
//
// const sunIcon = `
// <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//   <g fill="none" fill-rule="evenodd" id="80.-Sun" stroke="none" stroke-linecap="round" stroke-linejoin="round"
//      stroke-width="1">
//     <g stroke="#FF9F43" stroke-width="4" transform="translate(2.000000, 2.000000)">
//       <path
//         d="M48,9.74185501 L48,0 M65.923869,14.1931198 L70.4940307,5.59157234 M79.8011758,26.6001045 L87.7753698,21.012406 M86.3378676,44.0187629 L96,42.8315294 M84.1160527,62.508983 L93.2041719,66.0001516 M73.5796584,77.9029448 L80.0934397,85.1425539 M57.2293622,86.5475197 L59.5843977,96 M38.7706378,86.5475197 L36.4156023,96 M22.4203416,77.9029448 L15.9065603,85.1425539 M11.8839473,62.508983 L2.79582815,66.0001516 M9.66213241,44.0187629 L2.13162821e-14,42.8315294 M16.1988242,26.6001045 L8.2246302,21.012406 M30.076131,14.1931198 L25.5059693,5.59157234"
//         id="Layer-1"></path>
//       <circle cx="48" cy="48" id="Layer-2" r="20"></circle>
//     </g>
//   </g>
// </svg><!--<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" >-->
// <!--<circle cx="24" cy="24" r="16" fill="#f2ca00"/>-->
// <!--<path fill="#324561" d="M24,6c-0.553,0-1-0.447-1-1V1c0-0.553,0.447-1,1-1s1,0.447,1,1v4C25,5.553,24.553,6,24,6z"/>-->
// <!--<path fill="#324561" d="M5,25H1c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S5.553,25,5,25z"/>-->
// <!--<path fill="#324561" d="M7.736,41.264c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2.829-2.829\\tc0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-2.829,2.829C8.248,41.166,7.992,41.264,7.736,41.264z"/>-->
// <!--<path fill="#324561" d="M10.565,11.565c-0.256,0-0.512-0.098-0.707-0.293L7.029,8.443c-0.391-0.391-0.391-1.023,0-1.414\\ts1.023-0.391,1.414,0l2.829,2.829c0.391,0.391,0.391,1.023,0,1.414C11.077,11.468,10.821,11.565,10.565,11.565z"/>-->
// <!--<path fill="#324561" d="M37.435,11.565c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2.829-2.829\\tc0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-2.829,2.829C37.946,11.468,37.69,11.565,37.435,11.565z"/>-->
// <!--<path fill="#324561" d="M47,25h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S47.553,25,47,25z"/>-->
// <!--<path fill="#324561" d="M40.264,41.264c-0.256,0-0.512-0.098-0.707-0.293l-2.829-2.829c-0.391-0.391-0.391-1.023,0-1.414\\ts1.023-0.391,1.414,0l2.829,2.829c0.391,0.391,0.391,1.023,0,1.414C40.775,41.166,40.52,41.264,40.264,41.264z"/>-->
// <!--<path fill="#324561" d="M24,48c-0.553,0-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1v4C25,47.553,24.553,48,24,48z"/>-->
// <!--</svg>-->
// `;
//
// @Component({
//   selector: 'app-switch-theme',
//   styleUrls: ['./switch-theme.component.scss'],
//   templateUrl: './switch-theme.component.html',
// })
// export class SwitchThemeComponent implements OnInit {
//   switchToggle: HTMLDivElement | null = null;
//
//   constructor(public switchThemeService: SwitchThemeService) {}
//
//   ngOnInit(): void {
//     this.switchToggle = document.querySelector('#switch-toggle');
//     setTimeout(() => {
//       this.switchThemeService.checkActivateTheme();
//       if (this.switchThemeService.isDarkMode && this.switchToggle) {
//         this.switchToggle.classList.add('bg-gray-700', 'translate-x-full');
//         this.setDarkIcon();
//       } else if (this.switchToggle) {
//         this.switchToggle.classList.add('bg-gray-500', '-translate-x-2');
//         this.setLightIcon();
//       }
//     }, 10);
//   }
//
//   setDarkIcon(): void {
//     setTimeout(() => {
//       if (this.switchToggle) {
//         this.switchToggle.innerHTML = moonIcon;
//       }
//     }, 250);
//   }
//
//   setLightIcon(): void {
//     setTimeout(() => {
//       if (this.switchToggle) {
//         this.switchToggle.innerHTML = sunIcon;
//       }
//     }, 250);
//   }
//
//   public switchTheme(event: Event): void {
//     event.stopPropagation(); // stop bubble propagation event from html components
//     this.switchThemeService.changeActivateTheme();
//     if (this.switchThemeService.isDarkMode && this.switchToggle) {
//       this.switchToggle.classList.remove('bg-slate-200', '-translate-x-2');
//       this.switchToggle.classList.add('bg-gray-700', 'translate-x-full');
//       this.setDarkIcon();
//     } else if (this.switchToggle) {
//       this.switchToggle.classList.add('bg-slate-200', '-translate-x-2');
//       this.switchToggle.classList.remove('bg-gray-700', 'translate-x-full');
//       this.setLightIcon();
//     }
//   }
// }

import { Component, Input, OnInit } from '@angular/core';
import { SwitchThemeService } from '@shared/services';

const darkIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;
const lightIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;

@Component({
  selector: 'app-switch-theme',
  styleUrls: ['./switch-theme.component.scss'],
  templateUrl: './switch-theme.component.html',
})
export class SwitchThemeComponent implements OnInit {
  switchToggle: HTMLDivElement | null = null;

  @Input() isHomePage = false;

  constructor(public themeService: SwitchThemeService) {}

  ngOnInit(): void {
    this.switchToggle = document.querySelector('#switch-toggle');
    this.themeService.checkActivateTheme();
    if (this.themeService.isDarkMode && this.switchToggle) {
      this.switchToggle.classList.add('bg-gray-700', 'translate-x-full');
      this.setDarkIcon();
    } else if (this.switchToggle) {
      this.switchToggle.classList.add('bg-yellow-500', '-translate-x-2');
      this.setLightIcon();
    }
  }

  setDarkIcon(): void {
    setTimeout(() => {
      if (this.switchToggle) {
        this.switchToggle.innerHTML = darkIcon;
      }
    }, 250);
  }

  setLightIcon(): void {
    setTimeout(() => {
      if (this.switchToggle) {
        this.switchToggle.innerHTML = lightIcon;
      }
    }, 250);
  }

  public switchTheme(event: Event): void {
    event.stopPropagation(); // stop bubble propagation event from html components
    this.themeService.changeActivateTheme();
    if (this.themeService.isDarkMode && this.switchToggle) {
      this.switchToggle.classList.remove('bg-yellow-500', '-translate-x-2');
      this.switchToggle.classList.add('bg-gray-700', 'translate-x-full');
      this.setDarkIcon();
    } else if (this.switchToggle) {
      this.switchToggle.classList.add('bg-yellow-500', '-translate-x-2');
      this.switchToggle.classList.remove('bg-gray-700', 'translate-x-full');
      this.setLightIcon();
    }
  }
}
