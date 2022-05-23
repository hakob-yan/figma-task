import { makeAutoObservable } from "mobx";

import { ActiveTabs } from "../Constants/constants";
import { ActiveSorts } from "../Constants/constants";
import { ESortType } from "../types";
import { IElem } from "./data";
import { mainCourses } from "./data";

class Store {
  ACTIVE_TABS: typeof ActiveTabs = ActiveTabs;
  ACTIVE_SORT: typeof ActiveSorts = ActiveSorts;
  mainCourses = mainCourses;

  activeTab: string = this.ACTIVE_TABS.Courses;
  activeSort: string = this.ACTIVE_SORT.popular;
  courses: IElem[] = this.mainCourses.sort(
    (a, b) => a[ESortType.Popular] - b[ESortType.Popular]
  );

  changeActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  changePopularSort(sort: string): void {
    this.activeSort = sort;
    this.courses = this.mainCourses.sort((a, b) => a.popular - b.popular);
  }

  changeNewSort(sort: string): void {
    this.activeSort = sort;
    this.courses = this.mainCourses.sort((a, b) => b.new - a.new);
  }

  changeFavoriteSort(sort: string): void {
    this.activeSort = sort;
    this.courses = this.mainCourses.filter((elem) => elem.favorite);
  }

  constructor() {
    makeAutoObservable(this);
  }
}
export default new Store();
