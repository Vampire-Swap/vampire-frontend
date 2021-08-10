import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeChangerService {
  public currentTheme: Subject<string> = new Subject()

  constructor() { 
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.currentTheme.next("dark");
    }
    else {
      this.currentTheme.next("light");
    }
  }

  public updateTheme(theme: string): void {
    this.currentTheme.next(theme);
  }
}
