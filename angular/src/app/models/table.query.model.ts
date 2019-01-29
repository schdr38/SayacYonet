interface IQueryObject {
  page: Number;
  pageSize: Number;
  sortBy: string;
  isSortAscending: boolean;
  filter: string;

}
export class  TableQuery implements IQueryObject {
  page: Number;
  pageSize: Number;
  sortBy: string;
  isSortAscending: boolean;
  filter: string;

  /**
   *
   */
  constructor(page: Number, pageSize: Number, sortBy: string, IsSortAscending: boolean, filter: string) {
    this.page = page;
    this.pageSize = pageSize;
    // tslint:disable-next-line:curly
    if ( sortBy.length >= 0)
    this.sortBy = sortBy;
    this.isSortAscending = IsSortAscending;
    this.filter = filter;
  }
}
export class ModemQuery extends TableQuery{
  siteId: string ;
}

export class KazanQuery extends TableQuery {
  siteId: string
}

export class BlokQuery extends TableQuery{
  siteId: string
}


