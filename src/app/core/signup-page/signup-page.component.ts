import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { MainService } from 'src/app/main.service';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-signup-page',
	templateUrl: './signup-page.component.html',
	styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {



	constructor(private fb: FormBuilder,
		private authService: AuthService) {
	}

	ngOnInit(): void {

	}


	onSignupFormSubmit() {
		if (this.signupForm.invalid) {
			return;
		}
		// let user: User = this.signupForm.value as User;
		console.log(this.signupForm.value)
		this.authService.registerUser(this.signupForm.value).subscribe(
			data => {
				alert(JSON.stringify(data));
			}
		);
	}


	signupForm = this.fb.group({
		firstname: ['Amar', [Validators.required]],
		middlename: ['Mehdi'],
		lastname: ['Husain', [Validators.required]],
		email: ['amar@gmail.com'],
		mobile: ['879934'],
		country: ['India'],
		password: ['sjskgj'],
	});

	get firstname() {
		return this.signupForm.get('firstname');
	}
	get lastname() {
		return this.signupForm.get('lastname');
	}



}
