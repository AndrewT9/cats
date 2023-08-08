import { Component, OnInit } from '@angular/core';
import { Breed, Cat, Params } from './interfaces/interface';
import { HttpService } from './services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddItem } from './app.state';
import { ControlSubscribtionComponent } from './control-subscription/control-subscription.component';
import { takeUntil } from 'rxjs';
import { itemPerPage } from '../app/model/model'
import { BreedOptions } from './enums/enums';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends ControlSubscribtionComponent implements OnInit {

  public cats: Cat[] = [];
  public pages: number = 10;
  public breeds: Breed[] = [];
  public selectedBreed = null;
  public form!: FormGroup;
  public readonly itemPerPage = itemPerPage;

  get selectedValue(): string {
    return this.form.get(BreedOptions.Bread)?.value;
  }

  get selectedLimit(): number | string {
    return this.form.get(BreedOptions.Limit)?.value;
  }

  constructor(private httpService: HttpService, private store: Store, private fb: FormBuilder){
    super();
  }

  private params: Params = {
    breed_ids: '',
    limit: this.pages,
    api_key: environment.apiKey
  }

  ngOnInit() {
    this.form = this.fb.group({
      breed: '',
      limit: this.pages
    });
    this.httpService.getData(environment.BREED_URL)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(breeds => {
        this.breeds = breeds;
        this.store.dispatch(new AddItem(breeds));
      });

    this.httpService.getData(environment.URL, this.params)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: Cat[] | string) => {
        this.store.dispatch(new AddItem(data as string));
        this.cats = data as Cat[];
      });
  }

  public onChanged() {
    this.params.breed_ids = this.selectedValue === BreedOptions.None ? '' : this.selectedValue;
    this.params.limit = this.selectedLimit === '' ? 10 : this.selectedLimit;
    this.httpService.getData(environment.URL, this.params)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: Cat[] | string) => {
        this.store.dispatch(new AddItem(data as string));
        this.cats = data as Cat[];
      });
  }

  public openDescription(cat: Cat){
    cat.open = !cat.open;
  }

}
