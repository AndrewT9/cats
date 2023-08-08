import { State, Action, StateContext } from '@ngxs/store';

export class AddItem {
  static readonly type = 'AddItem';
  constructor(public payload: string) {}
}

@State<string[]>({
  name: 'items',
  defaults: []
})
export class AppState {
  @Action(AddItem)
  addItem(ctx: StateContext<string[]>, action: AddItem) {
    const state = ctx.getState();
    ctx.setState([...state, action.payload]);
  }
}
