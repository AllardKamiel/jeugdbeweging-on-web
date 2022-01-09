<x-guest-layout>
    <x-jet-authentication-card>
        <x-slot name="logo">
            <x-jet-authentication-card-logo />
        </x-slot>

        <x-jet-validation-errors class="mb-4" />

        @if (session('status'))
            <div class="mb-4 font-medium text-sm text-green-600">
                {{ session('status') }}
            </div>
        @endif

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <div>
                <x-jet-label for="email" value="{{ __('Email') }}" />
                <x-jet-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus />
            </div>

            <div class="mt-4">
                <x-jet-label for="password" value="{{ __('Password') }}" />
                <x-jet-input id="password" class="block mt-1 w-full" type="password" name="password" required autocomplete="current-password" />
            </div>

            <div class="block mt-4">
                <label for="remember_me" class="flex items-center">
                    <x-jet-checkbox id="remember_me" name="remember" />
                    <span class="ml-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                @if (Route::has('password.request'))
                    <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('password.request') }}">
                        {{ __('Forgot your password?') }}
                    </a>
                @endif

                <x-jet-button class="ml-4">
                    {{ __('Log in') }}
                </x-jet-button>
                <x-jet-button class="ml-4" style="width:400px">
                    <a href="/auth/redirect" class="btn btn-primary">
                        Login with GitHub
                        <span style="margin-left: 20px; float: right;">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-614.000000, -553.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                        <g id="github" transform="translate(614.000000, 553.000000)">
                                            <path d="M12,0.297 C5.37,0.297 0,5.67 0,12.297 C0,17.6 3.438,22.097 8.205,23.682 C8.805,23.795 9.025,23.424 9.025,23.105 C9.025,22.82 9.015,22.065 9.01,21.065 C5.672,21.789 4.968,19.455 4.968,19.455 C4.422,18.07 3.633,17.7 3.633,17.7 C2.546,16.956 3.717,16.971 3.717,16.971 C4.922,17.055 5.555,18.207 5.555,18.207 C6.625,20.042 8.364,19.512 9.05,19.205 C9.158,18.429 9.467,17.9 9.81,17.6 C7.145,17.3 4.344,16.268 4.344,11.67 C4.344,10.36 4.809,9.29 5.579,8.45 C5.444,8.147 5.039,6.927 5.684,5.274 C5.684,5.274 6.689,4.952 8.984,6.504 C9.944,6.237 10.964,6.105 11.984,6.099 C13.004,6.105 14.024,6.237 14.984,6.504 C17.264,4.952 18.269,5.274 18.269,5.274 C18.914,6.927 18.509,8.147 18.389,8.45 C19.154,9.29 19.619,10.36 19.619,11.67 C19.619,16.28 16.814,17.295 14.144,17.59 C14.564,17.95 14.954,18.686 14.954,19.81 C14.954,21.416 14.939,22.706 14.939,23.096 C14.939,23.411 15.149,23.786 15.764,23.666 C20.565,22.092 24,17.592 24,12.297 C24,5.67 18.627,0.297 12,0.297" id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </a>
                </x-jet-button>
            </div>
        </form>
    </x-jet-authentication-card>
</x-guest-layout>
