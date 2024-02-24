import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "./custom-validators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  // projectStatuses = ["Stable", "Critical", "Finished"];

  ngOnInit() {
    this.projectForm = new FormGroup({
      project_name: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      project_status: new FormControl("critical"),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
