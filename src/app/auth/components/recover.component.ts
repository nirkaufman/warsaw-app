import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover',
  template: `
    <div class="row">
      <div class="col-6">
        <h2>Recover</h2>
        <form>
          <div class="form-group">
            <label>Email</label>
            <input type="text"
                   class="form-control">
          </div>
          <button type="submit" class="btn btn-primary">Recover</button>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class RecoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
